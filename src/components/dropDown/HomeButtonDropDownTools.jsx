import { Button, Box, Stack } from "@mui/material";

export function HomeButtonDropDownTools() {
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
          <Button sx={style}>CSV Upload</Button>
          <Button sx={style}>No-Code</Button>
          <Button sx={style}>Apipheny</Button>
          <Button sx={style}>Mixed Analytics</Button>
        </Box>
      </Stack>
    </>
  );
}
