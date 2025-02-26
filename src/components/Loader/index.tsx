import { FunctionComponent } from "react";
import { LoaderProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Loader: FunctionComponent<LoaderProps> = ({
  loading = false,
  children,
  width = "w-3",
  height = "h-3",
  color = "black",
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="flex space-x-2 animate-pulse">
        {[0, 0, 0].map((_, index) => (
          <div
            key={index}
            className={twMerge(height, width, `bg-${color} rounded-full`)}
          />
        ))}
      </div>
    </div>
  );
};
