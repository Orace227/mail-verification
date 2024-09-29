"use client";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";

export const GradientBackground = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  children,
  className,
  containerClassName,
  isTilted,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  isTilted: boolean;
}) => {
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
  }, [gradientBackgroundStart, gradientBackgroundEnd]);

  return (
    <div
      className={
        isTilted
          ? cn(
              " w-screen relative  top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-end),var(--gradient-background-start))] ",
              containerClassName
            )
          : cn(
              " w-screen relative  top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ",
              containerClassName
            )
      }
    >
      <div className={cn("", className)}>{children}</div>
    </div>
  );
};
