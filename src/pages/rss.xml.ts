import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const articles = await getCollection("articles");
  const sorted = articles.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Glenn McComb",
    description: "Articles by Glenn McComb on design, development, gaming, and NBA.",
    site: context.site!,
    items: sorted.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      categories: article.data.categories,
      link: `/articles/${article.id}/`,
    })),
  });
}
