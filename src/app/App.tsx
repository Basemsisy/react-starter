import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {appRoutes.map(route => {
          return <Route key={route.path} path={route.path} component={route.component} />
        })}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
