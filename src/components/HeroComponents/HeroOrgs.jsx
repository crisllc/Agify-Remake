import { Container, Typography } from "@mui/material";

const orgs = [
  {
    name: "TheGuardian",
  },
  { name: "CU" },
  { name: "Uber" },
  { name: "Nature" },
  { name: "MIT" },
  { name: "Shopify" },
  { name: "TWP" },
  { name: "Yale" },
];

export default function HeroOrgs() {
  return (
    <>
      <Container className="heroOrgs">
        <div className="TLO">
          <Typography variant="p">Trusted by leading organization</Typography>
        </div>
        <Container className="sx">
          <div className="image-galery">
            {orgs.map((x) => (
              <img
                className="image"
                src={require("../../../public/images/" + x.name + ".png")}
              ></img>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}
