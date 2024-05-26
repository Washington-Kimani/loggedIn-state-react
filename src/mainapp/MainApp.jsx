// MainApp.jsx

import React, { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import LoginPage from "../components/Login";
import UserProfile from "../components/UserProfile";

const MainApp = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render your app content based on the user state
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {user ? (
        <UserProfile/>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default MainApp;
