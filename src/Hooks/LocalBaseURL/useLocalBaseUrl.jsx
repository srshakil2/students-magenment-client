import axios from "axios";

const localURL = axios.create({
  baseURL: "http://localhost:5000/users", // provided base url
});

const useLocalBaseUrl = () => {
  return localURL;
};

export default useLocalBaseUrl;
