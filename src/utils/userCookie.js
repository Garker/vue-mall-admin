import Cookies from 'js-cookie';

export function setUserCookie(userInfo) {
  const arr = Object.entries(userInfo);
  arr.forEach((item) => {
    Cookies.set(item[0], item[1]);
  });
}

export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    email: Cookies.get('email'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
  };
}

export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('email');
  Cookies.remove('appkey');
  Cookies.remove('role');
  return true;
}
