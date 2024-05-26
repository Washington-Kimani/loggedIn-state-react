// App.jsx
import React from "react";
import { UserProvider } from "./contexts/UserProvider";
import MainApp from "./mainapp/MainApp";

const App = () => {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
};

export default App;