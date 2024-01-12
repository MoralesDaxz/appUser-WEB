import axios from "axios";
import { User, UsersProps } from "../types/type";

const url = "http://localhost:8081/api/user/";

//Obtener Users
const getUsers = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return console.error(error);
  }
};


//Obtener User por ID
const getUserById = async (userId: UsersProps) => {
  try {
    const response = await fetch('http://localhost:8080/api/user/' + userId);
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (user:User) => {
  try {
    const response = await axios.post(url, user )
  } catch (error) {
    console.error(error);
  }
}

const deleteUser = async (id:string) => {
  const response = await fetch('http://localhost:8081/api/user/' + id, {
    method: 'DELETE',
    cache: 'no-cache',
  })
}




export { getUsers, getUserById,deleteUser,createUser };
