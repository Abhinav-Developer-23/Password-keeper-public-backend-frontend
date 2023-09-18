import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
export const setJwt = (jwtToken: string) => {
  const jwtObject = {
    token: jwtToken,
    expireAt: new Date().getTime() + 10*24*60*60*1000,
  };
  Cookies.set('password-keeper-storage', JSON.stringify(jwtObject))
};

export const getJwt=()=>{
  let cookie = Cookies.get("password-keeper-storage");

  console.log("cookie is ",cookie)
  if (!cookie) {

  }
  if (cookie) {
    const jwt = (JSON.parse(cookie));

    if (jwt.expireAt < new Date().getTime()) {
      Cookies.remove('password-keeper-storage');
    }
  }

}





