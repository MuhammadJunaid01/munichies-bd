import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavbarProps = {
  paths: { name: string; to: string }[];
  logo?: StaticImageData;
  icons?: Array<JSX.Element | StaticImageData>;
  isFooter: boolean | false;
  bgColor?: string;
  classNameContainer?: string;
  classNameContent?: string;
};

export type MainLayouteType = {
  children: ReactNode;
};
