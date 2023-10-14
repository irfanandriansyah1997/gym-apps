import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { getColorPallete } from "@/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Schedule for this week's gym workouts",
  title: "🏋🏻 Gym Schedule",
};

import { COLOR_PALLETE } from "@/constant";

import "@/assets/styles/reset.scss";
import "@/assets/styles/global.scss";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ ...getColorPallete(), background: COLOR_PALLETE.background }}
      >
        {children}
      </body>
    </html>
  );
}
