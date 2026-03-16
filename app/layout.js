// app/layout.jsx
import "./globals.css";
import TopLoader from "./components/TopLoader";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={manrope.className}>
          <TopLoader />
          {children}
      </body>
    </html>
  )
}