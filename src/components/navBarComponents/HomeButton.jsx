import { Box, Popover } from "@mui/material";
import { useState } from "react";

import { HomeButtonDropDown } from "./HomeButtonDropDown";

export function HomeButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuMouseEnter = (event) => {
    console.log("menu mouse enter");
    // setAnchorEl(event.currentTarget);
  };

  const handleMenuMouseLeave = () => {
    console.log("menu mouse leave");
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onMouseEnter={(e) => handleClick(e)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContents: "center",
          backgroundColor: "red",
          color: "white",
          width: "140px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            fontSize: "20px",
            fontFamily: "Fauna One, Serif",
            fontWeight: "bold",
          }}
        >
          agify.io
        </Box>
      </Box>

      <Popover
        id="demo-positioned-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onMouseEnter={handleMenuMouseEnter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ marginTop: "20px", alignContent: "left" }}
        slotProps={{
          paper: { onMouseLeave: handleMenuMouseLeave },
        }}
      >
        <HomeButtonDropDown />
      </Popover>
    </>
  );
}
