import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const SFProDisplayThin = localFont({
  src: "../../../public/fonts/SF-Pro-Display-Thin.otf",
  style: "normal",
  display: "swap",
});

export const SFProDisplayLight = localFont({
  src: "../../../public/fonts/SF-Pro-Display-Light.otf",
  style: "normal",
  display: "swap",
});

export const SFProDisplayRegular = localFont({
  src: "../../../public/fonts/SF-Pro-Display-Regular.otf",
  style: "normal",
  display: "swap",
});

export const SFProDisplaySemiBold = localFont({
  src: "../../../public/fonts/SF-Pro-Display-Semibold.otf",
  style: "normal",
  display: "swap",
});

export const SFProDisplayBlack = localFont({
  src: "../../../public/fonts/SF-Pro-Display-Black.otf",
  style: "normal",
  display: "swap",
});

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});