import { Toaster } from "@/components/ui/toaster";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUBAS ZOOM MEETING",
  description: "Lets Connect as one community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StreamVideoProvider>
      <main className={`${inter.className} bg-main-cover bg-[length:1200px_900px] bg-no-repeat md:bg-cover bg-fixed`}>
        {children}
        <Toaster />
      </main>
    </StreamVideoProvider>
  );
}
