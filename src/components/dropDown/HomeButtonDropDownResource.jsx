import { Button, Box, Stack } from "@mui/material";

export function HomeButtonDropDownResource() {
  const style = {
    display: "flex",
    justifyContent: "left",
    marginX: "20px",
    width: "100%",
    textTransform: "capitalize",
    fontSize: "20px",
    fontFamily: "Fauna One, Serif",
    color: "black",
  };

  return (
    <>
      <Stack>
        <Box
          sx={{
            width: "300px",
          }}
        >
          <Button sx={style}>Libraries</Button>
          <Button sx={style}>Our Data</Button>
          <Button sx={style}>Case Studies</Button>
          <Button sx={style}>FAQ</Button>
        </Box>
      </Stack>
    </>
  );
}
