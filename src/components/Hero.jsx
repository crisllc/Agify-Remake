import { Box, Container, Typography } from "@mui/material";
import HeroTitle from "./HeroComponents/HeroTitle";
import HeroSearch from "./HeroComponents/HeroSearch";
import HeroOrgs from "./HeroComponents/HeroOrgs";
import { useState } from "react";

const countries = [{ name: "Global", code: "🌍" }];

export default function Hero() {
  const [name, setName] = useState("");
  const [data, setData] = useState({ name: "", age: null });
  const [dataIsValid, setDataIsValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [displayedData, setDisplayedData] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropDownOpen(false);
  };

  async function onClick() {
    if (name.trim().length > 0) {
      let apiString = `https://api.agify.io?name=${name}`;
      if (selectedCountry.name != "Global") {
        apiString += `&country_id=${selectedCountry.code}`;
      }
      await fetch(apiString)
        .then((res) => res.json())
        .then((json) => {
          if (json.age == null) {
            setData({ name: name.trim(), age: null });
            setDataIsValid(false);
          } else {
            setData(json);
          }
          setIsClicked(true);
          setDisplayedData({
            name: name.trim(),
            age: json.age,
            country: selectedCountry.name,
          });
        });
    } else {
      setData({ name: "", age: null });
      setDataIsValid(false);
      setIsClicked(false);
      setDisplayedData(null);
    }
  }
  //console.log("This is the data: ", data);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          //flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <HeroTitle />

        <HeroSearch
          onClick={onClick}
          setName={setName}
          name={name}
          dropDownOpen={dropDownOpen}
          setDropDownOpen={setDropDownOpen}
          selectedCountry={selectedCountry}
          setSelectedCountry={handleCountrySelect}
        />
        {dataIsValid ? (
          <>
            <Box
              sx={{
                margin: "28px",
                //display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Box>
          </>
        ) : (
          <>
            {isClicked ? (
              <>
                {" "}
                <Box
                  sx={{
                    margin: "28px",
                    //display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography>
                    {displayedData != null && displayedData.age != null ? (
                      displayedData.country != "Global" ? (
                        <>
                          <b>{displayedData.name}</b> in{" "}
                          <b>{displayedData.country}</b> is{" "}
                          <b>{displayedData.age}</b> years old
                        </>
                      ) : (
                        <>
                          <b>{displayedData.name}</b> is{" "}
                          <b>{displayedData.age}</b> years old
                        </>
                      )
                    ) : (
                      <>
                        {displayedData.name.length > 0 ? (
                          <>
                            Uh oh. <b>{data.name}</b> is unkown to us.
                          </>
                        ) : (
                          <> </>
                        )}
                      </>
                    )}
                  </Typography>
                </Box>
              </>
            ) : (
              <></>
            )}
          </>
        )}

        <HeroOrgs />
      </Container>
    </>
  );
}
