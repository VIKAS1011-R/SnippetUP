import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import GlobalContextProvider from "@/ContextApi";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Snippet Up",
  description: "A General place to store all your code Snippets online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <GlobalContextProvider>
          <body className={poppins.className}>{children}</body>
        </GlobalContextProvider>
      </ClerkProvider>
    </html>
  );
}
