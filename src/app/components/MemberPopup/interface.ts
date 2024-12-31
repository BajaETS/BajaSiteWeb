import { ReactNode } from "react";

export type TMemberPopup = {
  onClose: () => void,
  children: ReactNode,
  image: string,
}