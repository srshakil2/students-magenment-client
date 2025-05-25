const chackOutUser = (user, setUser, setLoding) => {
  if (user) {
    localStorage.removeItem("userLoginToken");
    setUser(null);
  }
};
export default chackOutUser;
