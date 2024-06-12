import { env_dev } from "../env/Dev";
import axios from "axios";

const HTTP_REQUEST = axios.create({
  baseURL: env_dev,
});


// export const login = async (PAYLOAD) => HTTP_REQUEST.get("admin/admin/singup",PAYLOAD);
export const login = async (mobileNumber) => {
  try {
    console.log(env_dev + 'users/userRequestOTP')
    const response = await HTTP_REQUEST.post("users/userRequestOTP", { mobileNumber });
    return response.data;
  } catch (error) {
    console.log(error, 'login error')
    throw error;
  }
};

export const verifyotp = async (mobileNumber, otp) => {
  console.log(mobileNumber, otp, 'otpptt')
  try {

    const response = await HTTP_REQUEST.post("users/userVerifyOTP", { mobileNumber, otp });
    return response.data;
  } catch (error) {
    console.log(error, 'otp error')
    throw error;
  }
};

export const signup = async (username, dateOfBirth, language, place, gender, avatar, userid) => {
  console.log(username, dateOfBirth, language, place, gender, avatar, userid)
  try {

    const response = await HTTP_REQUEST.post(`users/createUser/${userid}`, { username, dateOfBirth, language, place, gender, avatar });
    // const response = await HTTP_REQUEST.post(`users/createUser/665af7b8f324154d973d6a48`, { username, dateOfBirth, language, place, gender, avatar, });
    return response.data;
  } catch (error) {
    console.log(error, 'signup error')
    throw error;
  }
};

export const getusers = async () => {
  try {

    const response = await HTTP_REQUEST.get("users/getUsers");
    return response.data;
  } catch (error) {
    console.log(error, 'user error')
    throw error;
  }
};

export const getavtar = async () => {
  try {

    const response = await HTTP_REQUEST.get("users/getAvatar");
    return response.data;
  } catch (error) {
    console.log(error, 'user error')
    throw error;
  }
};

export const getallcategories = async () => {
  try {

    const response = await HTTP_REQUEST.get("users/getAllCategories");
    return response.data;
  } catch (error) {
    console.log(error, 'user error')
    throw error;
  }
};

export const trial = async (PAYLOAD) =>
  HTTP_REQUEST.post("/user-home-screen/", PAYLOAD);
