import React, { useEffect } from "react";
import WebFont from "webfontloader";
import CatsListPage from "./components/CatsListPage/CatsListPage";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Kiwi Maru"],
      },
    });
  }, []);

  return <CatsListPage />;
};

export default App;
