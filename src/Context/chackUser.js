const chackUser = (user, setUser) => {
  if (!user) {
    const getLocalstoragtoken = localStorage.getItem("userLoginToken");
    const token = JSON.parse(getLocalstoragtoken);
    setUser(token);
  }
};
export default chackUser;
