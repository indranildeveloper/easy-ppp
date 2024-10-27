import { FC } from "react";
import type { Metadata } from "next";
import { RootLayoutProps } from "@/interfaces/layout/RootLayoutProps";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Easy PPP",
  description: "Manage PPP easily!",
};

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-background font-sans">{children}</body>
    </html>
  );
};

export default RootLayout;
