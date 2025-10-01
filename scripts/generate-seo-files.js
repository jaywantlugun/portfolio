import { routes } from "../src/routes/config.ts"; 
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.local",
});

const baseUrl = process.env.BASE_URL || "http://localhost:4173";

// --- Generate sitemap.xml ---
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `<url>
  <loc>${baseUrl}${r.path === "/" ? "" : r.path}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

// Write sitemap.xml to public folder
fs.writeFileSync(path.resolve("public", "sitemap.xml"), sitemap, "utf8");
console.log(`✅ Sitemap generated at public/sitemap.xml with baseUrl=${baseUrl}`);

// --- Generate robots.txt ---
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

// Write robots.txt to public folder
fs.writeFileSync(path.resolve("public", "robots.txt"), robots, "utf8");
console.log(`✅ Robots.txt generated at public/robots.txt with baseUrl=${baseUrl}`);
