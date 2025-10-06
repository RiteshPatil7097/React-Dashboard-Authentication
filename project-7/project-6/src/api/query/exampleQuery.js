import Axios from "../axios";

export const fetchExample= async () => {
  try {
    const { data } = await Axios.post("/");
    return data;  // return the response
  } 
  catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};