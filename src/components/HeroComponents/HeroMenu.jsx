import { useState } from "react";
import { Menu, MenuItem, Button, Typography, Box } from "@mui/material";

const HeroMenu = ({ countries, onCountrySelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("US");

  const handleOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleSelectCountry = (countryCode) => {
    setSelectedCountry(countryCode);
    onCountrySelect(countryCode);
  };

  return (
    <>
      <Button
        onClick={() => handleOpen}
        variant="outlined"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          padding: "1px 1px",
          borderRadius: "45px",
        }}
      >
        {selectedCountry}
      </Button>

      <Menu anchorEl={menuOpen} open={Boolean(menuOpen)} onClose={handleClose}>
        {countries.map((country) => (
          <MenuItem
            key={country.code}
            onClick={() => handleSelectCountry(country.code)}
          >
            <Typography sx={{ fontWeight: "bold", marginRight: "8px" }}>
              {country.code}
            </Typography>
            {country.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HeroMenu;
