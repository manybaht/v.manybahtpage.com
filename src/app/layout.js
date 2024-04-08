import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const ipst = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "ManyVProject",
  description: "มาสร้างรอยยิ้มให้ทุกคนในทุกวัน",
  other: {
    "keywords": "laibaht, manybaht, vtuber, vtuber project, vtuber group, vtubers, vtubers project, vtubers group",
    "og:title": "ManyVProject",
    "og:url": "https://v.manybahtpage.com",
    "og:description": "มาสร้างรอยยิ้มให้ทุกคนในทุกวัน",
    "og:type": "website",
    "og:image": "https://cdn.jsdelivr.net/gh/manybaht/manybaht.github.io@main/storages/images/new_laibaht.webp"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ipst.className}>{children}</body>
    </html>
  );
}