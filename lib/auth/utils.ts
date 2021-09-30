import cookie from 'js-cookie';

const getCookieExpirationTime = () => {
  const minutes = 55;

  return new Date(new Date().getTime() + minutes * 60000);
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
