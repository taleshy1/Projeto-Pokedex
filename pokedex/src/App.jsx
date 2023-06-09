import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { RouterPage } from "./routes/routes";

function App() {
  const [estado, setEstado] = useState()
  return (
    <>
      <GlobalStyles />
      <RouterPage />
    </>
  );
}

export default App;
