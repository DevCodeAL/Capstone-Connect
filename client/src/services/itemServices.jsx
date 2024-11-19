import axios from "axios"

// Api for Signup
const API_Url_SignUp = 'http://localhost:5000/api/register';
export const createUser = (new_user)=> axios.post(API_Url_SignUp, new_user);

//Api for Login user
const API_Url_Login = 'http://localhost:5000/api/login';
export const getUserId = (data) => axios.post(API_Url_Login, data); 

//API for Authenticated user
const API_Auth_User = 'http://localhost:5000/api/profile';
export const getAuth_user = ()=> axios.get(API_Auth_User);

// Api for dataset
const API_Url_Items = 'http://localhost:5000/api/items';  // Ensure this is correct
export const getItems = ()=> axios.get(API_Url_Items);
export const createItem = (item)=> axios.post(API_Url_Items, item);
export const updateItem = (item, id)=> axios.put(`${API_Url_Items}/${id}`, item);
export const deleteItem = (id)=> axios.delete(`${API_Url_Items}/${id}`, id);