import { manufacturers } from "./../constants/index";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManuFacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
