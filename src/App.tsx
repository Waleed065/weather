import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Navigation from "./navigation";
import ScrollToTop from "./components/ScrollToTop";


// Note: This app is made without using any ui library (eg: bootstrap) and only css for styling to use minimum third party libraries,

// Personally I would prefer to use material ui for ease but here I'm using custom components here
// Similarly I would have prefer to use material ui (styled) component for styling instead of css

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />

        <Navigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
