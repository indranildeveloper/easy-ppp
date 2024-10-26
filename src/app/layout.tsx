import { RootLayoutProps } from "@/interfaces/RootLayoutProps";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Easy PPP",
  description: "Manage PPP easily!",
};

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
