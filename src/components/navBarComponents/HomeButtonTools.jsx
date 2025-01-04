import { Box, Button, Popover, Stack } from "@mui/material";
import { useState } from "react";

import { HomeButtonDropDownTools } from "../dropDown/HomeButtonDropDownTools";

export function HomeButtonTools() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuMouseEnter = (event) => {
    // console.log("menu mouse enter");
    // setAnchorEl(event.currentTarget);
  };

  const handleMenuMouseLeave = () => {
    // console.log("menu mouse leave");
    setAnchorEl(null);
  };

  return (
    <>
      <Stack>
        <Box
          onMouseEnter={(e) => handleClick(e)}
          sx={{
            width: "120px",
            color: "white",
            height: "100%",
          }}
        >
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textTransform: "capitalize",
              fontSize: ".875rem",
              fontFamily: "Fauna One, Serif",
              color: "black",
            }}
          >
            Tools
          </Button>
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
          slotProps={{ paper: { onMouseLeave: handleMenuMouseLeave } }}
        >
          <HomeButtonDropDownTools />
        </Popover>
      </Stack>
    </>
  );
}
