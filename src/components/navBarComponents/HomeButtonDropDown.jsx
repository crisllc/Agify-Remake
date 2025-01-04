import { Button, Box, Stack } from "@mui/material";

export function HomeButtonDropDown() {
  const style = {
    display: "flex",
    justifyContent: "left",
    marginX: "20px",
    width: "100%",
    textTransform: "lowercase",
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
          <Button sx={style}>genderize.io</Button>
          <Button sx={style}>agify.io</Button>
          <Button sx={style}>nationalize.io</Button>
        </Box>
      </Stack>
    </>
  );
}
