import cookie from 'js-cookie';

const getCookieExpirationTime = () => {
  return new Date().setTime(new Date().getTime() + 55 * 60 * 1000);
};

export const setTokenCookie = (token: string) => {
  cookie.set('token', token, {
    secure: true,
    sameSite: 'Strict',
    expires: getCookieExpirationTime(),
  });
};

export const getTokenCookie = () => {
  return cookie.get()['token'];
};
