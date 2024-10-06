import axios from "axios"

// Api for Signup
const API_Url_SignUp = 'http://localhost:5000/api/register';
export const createUser = (new_user)=> axios.post(API_Url_SignUp, new_user);

// Api for dataset
const API_Url = 'http://localhost:5000/api/items';  // Ensure this is correct
export const getItems = ()=> axios.get(API_Url);
export const createItem = (item)=> axios.post(API_Url, item);
export const updateItem = (item, id)=> axios.put(`${API_Url}/${id}`, item);
export const deleteItem = (id)=> axios.delete(`${API_Url}/${id}`, id);