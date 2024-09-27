"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Logo = ({ isFooter }) => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: isFooter ? "100px" : customizer.TopbarHeight,
    width: isFooter ? "200px" : customizer.isCollapse ? "40px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  return (
    // <LinkStyled href="/">
    <div>
      {customizer.activeMode === "dark" ? (
        <Link href="/">
          <Image
            src="/images/logos/2.png"
            alt="logo"
            height={customizer.TopbarHeight}
            width={isFooter ? 300 : 174}
            priority
          />
        </Link>
      ) : (
        <Link href="/">
          <Image
            src={"/images/logos/2.png"}
            alt="logo"
            height={customizer.TopbarHeight}
            width={isFooter ? 300 : 174}
            priority
          />
        </Link>
      )}
    </div>
    // </LinkStyled>
  );
};

export default Logo;
