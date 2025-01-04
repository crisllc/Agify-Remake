import { Box, Typography } from "@mui/material";

export default function HeroTitle() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "150px",
        }}
      >
        <Typography variant="h2" component="h2">
          <b>Estimate the Age</b>
        </Typography>
        <Typography variant="h2" component="h2">
          <b>of a Name</b>
        </Typography>
      </Box>
    </>
  );
}
