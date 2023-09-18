import React from 'react';
import Link from 'next/link';
function PasswordSecurityPage(): JSX.Element {
  return (
    <div className="bg-teal-200 flex justify-center items-center h-screen">
      <div className="text-center text-purple-600 font-mono">
        <h3>Your account has been successfully created</h3>
        <p>Please go to  <Link href='/login' className="text-center text-blue-700 font-mono font-extrabold" >login</Link> page and  use the credentials you just created</p>
      </div>
    </div>
  );
}

export default PasswordSecurityPage;
 