import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ic-etite28.vercel.app/";

  const routes = [
    "",
    "/about",
    "/call-for-papers",
    "/tracks",
    "/important-dates",
    "/registration",
    "/keynote-speakers",
    "/committees",
    "/advisory",
    "/venue",
    "/hotels",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
