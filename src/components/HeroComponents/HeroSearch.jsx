import { Button, Stack, TextField, Menu, MenuItem } from "@mui/material";
import { useRef } from "react";

const countries = [
  { name: "Global", code: "🌍" },
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "Japan", code: "JP" },
];

export default function HeroSearch({
  onClick,
  setName,
  name,
  dropDownOpen,
  setDropDownOpen,
  selectedCountry,
  setSelectedCountry,
}) {
  const buttonRef = useRef(null);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          top: "350px",
        }}
      >
        <button
          ref={buttonRef}
          onClick={() => setDropDownOpen(!dropDownOpen)}
          sx={{
            marginLeft: "10px",
            border: "1px solid",
          }}
        >
          {selectedCountry.code}
        </button>
        <Menu
          anchorEl={buttonRef.current}
          open={dropDownOpen}
          onClose={() => setDropDownOpen(false)}
        >
          {countries.map((country) => (
            <MenuItem
              onClick={() => setSelectedCountry(country)}
              key={country.code}
            >
              {`${country.code}:${country.name}`}
            </MenuItem>
          ))}
        </Menu>
        <TextField
          label="First or full name"
          variant="outlined"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button
          onClick={onClick}
          sx={{
            marginLeft: "10px",
            border: "1px solid",
          }}
        >
          Search
        </Button>
      </Stack>
    </>
  );
}
