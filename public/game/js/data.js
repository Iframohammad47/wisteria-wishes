/* ============================================================
   Whimsy Wisteria — story & flower data
   Everything writers need to edit lives in this file.
   ============================================================ */

/* --- The six flowers -------------------------------------------------- */
/* `x` / `y` are percentages of the garden screen, so flowers stay in place
   as the window scales. Swap `image` for any PNG in assets/flowers/.      */
const FLOWERS = [
  {
    id: "daisy",
    name: "Daisy",
    meaning: "new beginnings, innocence, simple happiness",
    image: "assets/flowers/daisy.png",
    x: 13,
    y: 62,
  },
  {
    id: "tulip",
    name: "Tulip",
    meaning: "affection, friendship, caring",
    image: "assets/flowers/tulip.png",
    x: 27,
    y: 74,
  },
  {
    id: "sunflower",
    name: "Sunflower",
    meaning: "warmth, hope, optimism",
    image: "assets/flowers/sunflower.png",
    x: 41,
    y: 55,
  },
  {
    id: "lavender",
    name: "Lavender",
    meaning: "calm, comfort, peace",
    image: "assets/flowers/lavender.png",
    x: 55,
    y: 70,
  },
  {
    id: "rose",
    name: "Rose",
    meaning: "appreciation, deep emotion, affection",
    image: "assets/flowers/rose.png",
    x: 70,
    y: 58,
  },
  {
    id: "waterlily",
    name: "Water Lily",
    meaning: "reflection, peace, acceptance",
    image: "assets/flowers/waterlily.png",
    x: 82,
    y: 84,
  },
];

/* --- Opening dialogue -------------------------------------------------- */
const INTRO_LINES = [
  "Oh — you found the gate. Not many people do.",
  "This is the wisteria garden. It grows quietly, and it keeps things for people who can't quite say them out loud.",
  "Every flower here carries a small meaning. Nothing strict. More like a feeling that someone once left behind in it.",
  "Sometimes letters arrive on the stone by the pond. People asking for a bouquet, because words felt too heavy that morning.",
  "I've been tending the beds all season, and my hands are tired. Would you read them with me?",
  "There's no right answer waiting. Only what you think someone needs.",
];

/* --- The five stages ---------------------------------------------------- */
/* Each stage: letter text, the occasion, the flowers on offer, and the
   character's reply afterwards. `responseFor` receives the chosen flower ids
   so the reply can lean toward what the player picked — no scoring.        */
const STAGES = [
  {
    number: 1,
    occasion: "A first morning in a new home",
    from: "— Neriah, from the house on the hill",
    letter: [
      "We moved in yesterday. The boxes are still stacked in the hallway and the kettle is somewhere at the bottom of one of them.",
      "My daughter woke up early and asked if this counts as home yet. I told her it does the moment we put something living on the table.",
      "Could you make her something for that table? Nothing grand. Just something that looks like a beginning.",
    ],
    flowers: ["daisy", "tulip", "sunflower", "lavender", "rose", "waterlily"],
    responseFor(picked) {
      if (picked.includes("daisy") || picked.includes("sunflower")) {
        return [
          "That's a bright little armful. It'll sit well on a bare table.",
          "Beginnings don't need to be loud. They just need something on the table that's still growing.",
        ];
      }
      return [
        "Gentler than I expected — and I think that suits them.",
        "A new house is mostly quiet in the first week. You gave them something to keep that quiet company.",
      ];
    },
  },

  {
    number: 2,
    occasion: "The evening before something frightening",
    from: "— Ilse, who will be fine, probably",
    letter: [
      "Tomorrow I stand up in front of a room of people and say things I have practiced two hundred times.",
      "I am not asking for luck. Luck feels like too much to expect.",
      "I only want something to look at tonight so my hands stop shaking. Something that isn't advice.",
    ],
    flowers: ["daisy", "tulip", "sunflower", "lavender", "rose", "waterlily"],
    responseFor(picked) {
      if (picked.includes("lavender") || picked.includes("waterlily")) {
        return [
          "You didn't try to fix her. You just made the room a little softer.",
          "Sometimes courage isn't handed to someone. It's just given room to settle.",
        ];
      }
      return [
        "Warm. Almost like someone standing beside her.",
        "She'll still be nervous. But nervous next to flowers is a different kind of nervous.",
      ];
    },
  },

  {
    number: 3,
    occasion: "A friend leaving for somewhere far",
    from: "— Odell, at the station",
    letter: [
      "She's taking the early train and we both agreed not to make a scene about it.",
      "We've known each other since we were small enough to hide in the hedge behind her mother's house.",
      "I don't want the bouquet to say goodbye. I want it to say: this doesn't end, it just gets longer.",
    ],
    flowers: ["daisy", "tulip", "sunflower", "lavender", "rose", "waterlily"],
    responseFor(picked) {
      if (picked.includes("tulip") || picked.includes("rose")) {
        return [
          "Ah. You chose affection, plainly. No hiding behind it.",
          "Distance is easier to carry when someone hands you proof that you mattered before it.",
        ];
      }
      return [
        "There's a steadiness in this one.",
        "Not a farewell, then. More like a promise left in his hands to hold.",
      ];
    },
  },

  {
    number: 4,
    occasion: "A house being closed up after a long life",
    from: "— Marguerite, sorting the kitchen",
    letter: [
      "My grandmother's house sold last week. I am here packing the last of it, and I keep finding her handwriting on things.",
      "I'm not only sad. That's the part I can't explain to anyone. I'm also grateful, in a way that aches.",
      "Something for the windowsill, please, while I finish. It's the last thing that will stand in that light.",
    ],
    flowers: ["daisy", "tulip", "sunflower", "lavender", "rose", "waterlily"],
    responseFor(picked) {
      if (picked.includes("waterlily") || picked.includes("lavender")) {
        return [
          "You let it be both things at once. Sorrow and thanks, in the same handful.",
          "That's harder than comfort. Comfort covers something up. This just sits with her.",
        ];
      }
      if (picked.includes("rose")) {
        return [
          "You chose gratitude over grief. She may not have expected that.",
          "Grief is easy to bring to an empty house. You brought the reason it hurts instead.",
        ];
      }
      return [
        "Simple, and honest about it.",
        "The light on that windowsill will do the rest. Some rooms only need something small to say goodbye properly.",
      ];
    },
  },

  {
    number: 5,
    occasion: "A letter with no name on it",
    from: "— (the handwriting looks a little like yours)",
    letter: [
      "This one was on the stone this morning, and I've read it four times.",
      "It says: I keep waiting for a perfect day. I think I've been picturing it wrong. Nothing has gone perfectly, and somehow I've still had days I'd keep.",
      "It asks for a bouquet of what a perfect day is made of. That's all. No occasion, no name.",
      "I don't know how to answer that one. I think it's meant for you.",
    ],
    flowers: ["daisy", "tulip", "sunflower", "lavender", "rose", "waterlily"],
    responseFor(picked) {
      if (picked.length >= 4) {
        return [
          "You gathered a lot. A whole day's worth, really.",
          "Mornings and afternoons and the slow part near the end. That sounds about right.",
        ];
      }
      if (picked.length <= 2) {
        return [
          "Only a few. You knew exactly what you meant.",
          "That's usually how it goes. One or two moments, and the rest of the day arranges itself around them.",
        ];
      }
      return [
        "That's a kind day you've described.",
        "Not a flawless one. A kind one. I think those last longer.",
      ];
    },
  },
];

/* --- Closing dialogue ---------------------------------------------------- */
const ENDING_LINES = [
  "Five letters. All of them answered, and none of them with the right answer, because there wasn't one.",
  "I used to think a perfect day was something you had to arrange. Weather, timing, everything behaving.",
  "But look at what people actually asked for. A table that felt like home. Steady hands. A friend remembered. A windowsill in the last of the light.",
  "None of that is flawless. It's just noticed.",
  "Maybe that's the whole of it — a day is perfect when someone was paying attention to it.",
  "You made six people's days a little softer today, and one of them was your own.",
  "You've done enough. Go and rest now.",
  "The garden will still be here tomorrow. It always is.",
];
