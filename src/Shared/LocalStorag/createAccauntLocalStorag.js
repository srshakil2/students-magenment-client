const singUpInfo = (token, setLoding) => {
  // console.log(token);
  if (!token) return;

  const userToken = JSON.stringify(token);

  if (userToken) {
    localStorage.setItem("userLoginToken", userToken);
    setLoding(false);
  }
};
export default singUpInfo;
