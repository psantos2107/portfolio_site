import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import BootstrapClient from "./_components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Paul Santos",
    default: "Paul Portfolio Site",
  },
  description: "Paul's portfolio site to showcase his skills and work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}, box-border m-0 p-0 min-h-screen flex flex-col bg-slate-50`}
      >
        <main className="w-full min-h-screen text-blue-950">
          <Header />
          {children}
          <BootstrapClient />
        </main>
      </body>
    </html>
  );
}
