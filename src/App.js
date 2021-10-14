import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AppRouter from "./components/Router";

// function App() {
//   return <div>hello</div>;
// }

const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
};

export default App;
