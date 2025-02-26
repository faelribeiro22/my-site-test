import { ReactNode } from "react";

export type LoaderProps = {
  loading: boolean;
  width?: string;
  height?: string;
  color?: string;
  children?: ReactNode;
};
