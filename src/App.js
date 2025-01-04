import "./App.css";
import Hero from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <main>
        <Stack>
          <NavBar />
          <Hero />
        </Stack>
      </main>
    </>
  );
}

export default App;
