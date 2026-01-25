import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navber";
import { AuthProvider } from "./providers/Providers";
import { WebVitals } from "./web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevApiHub",
  description: "Free API Hub is a developer-friendly platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.className} antialiased leading-relaxed bg-[#0B0F14] min-h-screen w-full`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
