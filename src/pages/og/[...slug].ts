import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

const posts = await getCollection("posts");

const pages = Object.fromEntries(
  posts.map((post) => [
    post.id,
    {
      title: post.data.title,
      description: post.data.description,
    },
  ])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "slug",
  pages,
  getSlug: (path) => `${path}.png`,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [13, 13, 13],
      [22, 22, 22],
    ],
    border: {
      color: [212, 168, 83],
      width: 12,
      side: "inline-start",
    },
    font: {
      title: {
        families: ["Newsreader", "Georgia", "serif"],
        weight: "SemiBold",
        color: [245, 245, 245],
        size: 64,
        lineHeight: 1.2,
      },
      description: {
        families: ["Newsreader", "Georgia", "serif"],
        color: [200, 200, 200],
        size: 28,
        lineHeight: 1.4,
      },
    },
    fonts: [
      "https://fonts.gstatic.com/s/newsreader/v26/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438wpojADA.ttf",
    ],
    padding: 120,
  }),
});
