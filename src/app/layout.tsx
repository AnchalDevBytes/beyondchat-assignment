import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat'
});

export const metadata: Metadata = {
    title: "Beyond Chats",
    description: "Created by Anchal Raj",
};

export default function RootLayout({
      children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.variable} ${montserrat.variable}`}>
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
  );
}
