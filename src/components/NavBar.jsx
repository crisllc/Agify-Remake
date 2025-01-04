import { Box, Stack } from "@mui/material";
import { HomeButton } from "./navBarComponents/HomeButton";
import { HomeButtonAPI } from "./navBarComponents/HomeButtonAPI";
import { HomeButtonTools } from "./navBarComponents/HomeButtonTools";
import { HomeButtonResources } from "./navBarComponents/HomeButtonResources";
import { HomeButtonPricing } from "./navBarComponents/HomeButtonPricing";

export function NavBar() {
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid black",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            height: "4rem",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          <HomeButton />
          <Stack direction="row">
            <HomeButtonAPI />
            <HomeButtonTools />
            <HomeButtonResources />
            <HomeButtonPricing />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
