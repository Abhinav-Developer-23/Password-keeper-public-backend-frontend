import React from "react";
import Navbar from "@/components/navbar";
function PasswordSecurityPage(): JSX.Element {
  return (
    <>
    
      <Navbar />
      <div className="bg-teal-200 flex justify-center items-center h-screen">
        <div className="text-center text-purple-600 font-mono">
          <h1>Password </h1>
          <p>Keep Your Passwords Secure</p>
        </div>
      </div>
    </>
  );
}

export default PasswordSecurityPage;
