import { Button, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export function HomeButtonPricing() {
  const [isHovered, setIsHovered] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (elementRef) {
      const hoveredOver = () => {
        setIsHovered(true);
      };

      const notHoveredOver = () => {
        setIsHovered(false);
      };

      elementRef.addEventListener("mouseenter", hoveredOver);
      elementRef.addEventListener("mouseleave", notHoveredOver);

      return () => {
        elementRef.removeEventListener("mouseenter", hoveredOver);
        elementRef.removeEventListener("mouseleave", notHoveredOver);
      };
    }
  }, [elementRef, anchorEl]);

  return (
    <>
      <Stack ref={setElementRef} onMouseEnter={handlePopoverOpen}>
        <Box
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
            Pricing
          </Button>
        </Box>
      </Stack>
    </>
  );
}
