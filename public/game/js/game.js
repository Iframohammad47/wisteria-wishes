/* ============================================================
   Whimsy Wisteria — game logic
   Sections: scene manager · dialogue · flowers · bouquet ·
             stage progression · audio
   ============================================================ */

/* ---------------- state ---------------- */
const state = {
  stageIndex: 0, // 0..4
  bouquet: [], // array of flower ids, in the order picked
};

const $ = (id) => document.getElementById(id);
const flowerById = (id) => FLOWERS.find((f) => f.id === id);

/* ---------------- scene manager ---------------- */
function showScene(id) {
  document.querySelectorAll(".scene").forEach((s) => s.classList.remove("is-active"));
  const next = $(id);
  next.classList.add("is-active");
  next.scrollTop = 0;
}

/* ---------------- dialogue player ----------------
   Plays an array of lines through one dialogue box.  */
function playDialogue({ lines, textEl, progressEl, buttonEl, onFinish, lastLabel = "Continue" }) {
  let i = 0;

  const render = () => {
    textEl.classList.remove("is-shown");
    // restart the fade
    void textEl.offsetWidth;
    textEl.textContent = lines[i];
    textEl.classList.add("is-shown");
    progressEl.textContent = `${i + 1} / ${lines.length}`;
    buttonEl.textContent = i === lines.length - 1 ? lastLabel : "Continue";
  };

  buttonEl.onclick = () => {
    if (i < lines.length - 1) {
      i += 1;
      render();
    } else {
      onFinish();
    }
  };

  render();
}

/* ---------------- introduction ---------------- */
function startIntro() {
  showScene("scene-intro");
  playDialogue({
    lines: INTRO_LINES,
    textEl: $("intro-line"),
    progressEl: $("intro-progress"),
    buttonEl: $("intro-next"),
    lastLabel: "Enter the garden",
    onFinish: () => startStage(0),
  });
}

/* ---------------- stage / letter ---------------- */
function startStage(index) {
  state.stageIndex = index;
  state.bouquet = [];

  const stage = STAGES[index];

  $("letter-stage").textContent = `Letter ${stage.number} of ${STAGES.length}`;
  $("letter-occasion").textContent = stage.occasion;
  $("letter-body").innerHTML = stage.letter.map((p) => `<p>${p}</p>`).join("");
  $("letter-sign").textContent = stage.from;

  renderFlowers(stage.flowers);
  renderBouquet();
  $("flower-hint").textContent = "";

  showScene("scene-garden");
}

/* ---------------- flowers ---------------- */
function renderFlowers(availableIds) {
  const field = $("flower-field");
  field.innerHTML = "";

  availableIds.forEach((id) => {
    const flower = flowerById(id);
    if (!flower) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flower";
    btn.style.left = `${flower.x}%`;
    btn.style.top = `${flower.y}%`;
    btn.dataset.flowerId = flower.id;
    btn.setAttribute("aria-label", `${flower.name} — ${flower.meaning}. Add to bouquet.`);
    btn.innerHTML = `
      <img class="flower__img" src="${flower.image}" alt="" />
      <span class="flower__label">${flower.name}</span>
    `;
    btn.addEventListener("click", () => pickFlower(flower));
    field.appendChild(btn);
  });
}

function pickFlower(flower) {
  if (state.bouquet.length >= 8) {
    $("flower-hint").textContent = "That's a full armful already.";
    return;
  }
  state.bouquet.push(flower.id);
  $("flower-hint").textContent = `${flower.name} — ${flower.meaning}.`;
  markPickedFlowers();
  renderBouquet();
}

function markPickedFlowers() {
  document.querySelectorAll(".flower").forEach((btn) => {
    const count = state.bouquet.filter((id) => id === btn.dataset.flowerId).length;
    btn.classList.toggle("is-picked", count > 0);
    btn.setAttribute("aria-pressed", count > 0 ? "true" : "false");
    let badge = btn.querySelector(".flower__count");
    if (count > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "flower__count";
        btn.appendChild(badge);
      }
      badge.textContent = `✓ ${count}`;
    } else if (badge) {
      badge.remove();
    }
  });
}

/* ---------------- bouquet ---------------- */
function renderBouquet() {
  const holder = $("bouquet-items");
  holder.innerHTML = "";

  if (state.bouquet.length === 0) {
    holder.innerHTML = `<p class="bouquet__empty">Pick the flowers that feel right.</p>`;
  } else {
    state.bouquet.forEach((id, i) => {
      const flower = flowerById(id);
      const stem = document.createElement("button");
      stem.type = "button";
      stem.className = "stem";
      stem.style.setProperty("--tilt", `${(i - (state.bouquet.length - 1) / 2) * 9}deg`);
      stem.title = `Remove ${flower.name}`;
      stem.setAttribute("aria-label", `Remove ${flower.name} from the bouquet`);
      stem.innerHTML = `<img src="${flower.image}" alt="${flower.name}" />`;
      stem.addEventListener("click", () => removeFromBouquet(i));
      holder.appendChild(stem);
    });
  }

  $("bouquet-done").disabled = state.bouquet.length === 0;
}

function removeFromBouquet(index) {
  state.bouquet.splice(index, 1);
  markPickedFlowers();
  renderBouquet();
}

function clearBouquet() {
  state.bouquet = [];
  markPickedFlowers();
  renderBouquet();
  $("flower-hint").textContent = "";
}

/* ---------------- character response ---------------- */
function showResponse() {
  const stage = STAGES[state.stageIndex];
  const lines = stage.responseFor(state.bouquet);

  // show the finished bouquet in the character's hands
  const held = $("response-bouquet");
  held.innerHTML = state.bouquet
    .map((id, i) => {
      const f = flowerById(id);
      const tilt = (i - (state.bouquet.length - 1) / 2) * 10;
      return `<img src="${f.image}" alt="${f.name}" style="--tilt:${tilt}deg" />`;
    })
    .join("");

  const isLast = state.stageIndex === STAGES.length - 1;

  showScene("scene-response");
  playDialogue({
    lines,
    textEl: $("response-line"),
    progressEl: $("response-progress"),
    buttonEl: $("response-next"),
    lastLabel: isLast ? "Sit with her a while" : "The next letter",
    onFinish: () => (isLast ? showEnding() : startStage(state.stageIndex + 1)),
  });
}

/* ---------------- ending ---------------- */
function showEnding() {
  showScene("scene-ending");
  playDialogue({
    lines: ENDING_LINES,
    textEl: $("ending-line"),
    progressEl: $("ending-progress"),
    buttonEl: $("ending-next"),
    lastLabel: "Visit again",
    onFinish: () => {
      state.stageIndex = 0;
      state.bouquet = [];
      startIntro();
    },
  });
}

/* ---------------- audio ----------------
   Drop a track at assets/audio/theme.mp3. Playback only ever
   starts from a click, so autoplay rules are respected.        */
const BGM_VOLUME = 0.35;

function setupAudio() {
  const audio = $("bgm");
  const toggle = $("audio-toggle");
  const label = $("audio-label");
  audio.volume = BGM_VOLUME;

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(
        () => {
          label.textContent = "Music on";
          toggle.setAttribute("aria-pressed", "true");
        },
        () => {
          label.textContent = "No track yet";
        },
      );
    } else {
      audio.pause();
      label.textContent = "Music off";
      toggle.setAttribute("aria-pressed", "false");
    }
  });
}

/* ---------------- boot ---------------- */
$("bouquet-done").addEventListener("click", showResponse);
$("bouquet-clear").addEventListener("click", clearBouquet);
setupAudio();
startIntro();
