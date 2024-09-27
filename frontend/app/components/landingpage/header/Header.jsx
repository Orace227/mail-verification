"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Logo from "../../logo/Logo";
import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";
import { IconMenu2 } from "@tabler/icons-react";

const LpHeader = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    // minHeight: "80px",
    backgroundColor: "white",
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.primary,
  }));

  //   sidebar
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg-white">
      <Container maxWidth="xl">
        <ToolbarStyled>
          <Logo />
          <Box flexGrow={1} />
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              className="text-black"
            >
              <IconMenu2 size="20" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <Stack
              spacing={4}
              className="text-[15px]"
              direction="row"
              alignItems="center"
            >
              <Navigations />
            </Stack>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: "0 !important",
            background: "white",
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </div>
  );
};

export default LpHeader;
