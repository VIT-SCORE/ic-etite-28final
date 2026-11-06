import { MetadataRoute } from "next";

const SITE_URL = "https://icetite28.vit.ac.in";

export default function sitemap(): MetadataRoute.Sitemap {
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
    "/hackathon",
    "/sponsorship",
    "/team",
    "/visa",
    "/technext",
    "/ic-ETITE24",
    "/ic-ETITE20",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
