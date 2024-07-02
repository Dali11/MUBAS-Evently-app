import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";


import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font--poppins'
});

export const metadata: Metadata = {
  title: "MUBAS Evently",
  description: "Evently is for event purpose",
  icons: {
    icon: '/assets/images/MUBAS Logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
