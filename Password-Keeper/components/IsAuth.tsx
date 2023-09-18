// import React from "react";
// import { useRouter } from "next/router";

// function IsAuth<T>(Component: React.ComponentType<T>) {
//   const WrappedComponent = (props: T) => {
//     const router = useRouter();
//     const jwtObjectString = localStorage.getItem("password-keeper-storage");

//     if (!jwtObjectString) {
//       router.push("/login");
//       return null;
//     }

//     const jwtObject: { expireAt: number; token: string } =
//       JSON.parse(jwtObjectString);
//     const currentTime = new Date().getTime();

//     if (jwtObject.expireAt < currentTime) {
//       localStorage.removeItem("password-keeper-storage"); // Remove expired token
//       router.push('/login');
//       return null;
//     }

//     return (
//       <>
//         <Component {...props!} />
//       </>
//     );
//   };


//   WrappedComponent.displayName = `IsAuth(${
//     Component.displayName || Component.name
//   })`;

//   return WrappedComponent;
// }

// export default IsAuth;
