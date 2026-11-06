import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://icetite28.vit.ac.in/sitemap.xml",
    host: "https://icetite28.vit.ac.in",
  };
}
