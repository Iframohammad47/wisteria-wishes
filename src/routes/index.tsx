import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Whimsy Wisteria — A Quiet Garden Story";
const DESCRIPTION =
  "A gentle interactive story: read letters from strangers, gather flowers, and discover what really makes a day feel perfect.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/**
 * The game itself is a plain HTML/CSS/JS project living in `public/game/`.
 * This route only mounts it full-screen so the site root opens the experience.
 */
function Index() {
  return (
    <iframe
      src="/game/index.html"
      title="Whimsy Wisteria"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
    />
  );
}
