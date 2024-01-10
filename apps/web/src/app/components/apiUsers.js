import axios from "axios";

const url = "http://localhost:8081/api/user";
const getUsers = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    return console.error(error);
  }
};
/* const getUsers = async () => {
  const response = await fetch(url, { cache: "no-cache" });

  const {data} = await response.json();
  return data
}; */

/* const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:8081/api/user', { cache: "no-cache" });
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
} */

export { getUsers };
