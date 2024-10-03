import { useEffect, useState } from 'react'
import { createItem, getItems, updateItem, deleteItem } from '../services/itemServices'
import UpdateModal from '../modal/UpdateModal';

 const Data = function ViewData() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({name: '', email: '', age: ''});
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

useEffect(()=>{
   fetchItem();
}, []);

//Fetch data in database
const fetchItem = async () => {
  try {
      const response = await getItems();
      if (Array.isArray(response.data)) {
          setItems(response.data);
      } else {
          console.error('Expected an array but got:', response.data);
          setItems([]); // Set an empty array or handle appropriately
      }
  } catch (error) {
      console.error('Error fetching items:', error);
  }
};

//Handle Submit
async function HandleSubmit(e){
  e.preventDefault();
    try{
      const response =  await createItem(newItem);
      console.log('Successfully created new user!', response.data);
      setItems([...items, response.data]);
      setNewItem({name: '', email: '', age: ''})
    }catch(err) {
        console.error('No user created', err.message);
    }
}


//Update function
async function UpdateItem(e) {
  e.preventDefault();
  try {
      console.log("Updating item with ID:", currentId); // For debugging
      const response = await updateItem(newItem, currentId); // Pass newItem first, then currentId
      setItems(items.map(item => item._id === currentId ? response.data : item));
      console.log('Successfully updated user', response.data);
      setIsEditing(false); // Close Modal
      setNewItem({ name: '', email: '', age: '' });
  } catch (err) {
      console.error('Failed to update user!', err);
  }
}

//Function to call the current Id and close after update the value
function handleClickEdit(item){
    setCurrentId(item._id);
    setNewItem({name: item.name, email: item.email, age: item.age});
    setIsEditing(true);
}

async function handleDelete(item) {
  try {
    console.log('Deleting item with ID:', item._id); // Debugging: check the ID
    const response = await deleteItem(item._id);
    setCurrentId(item._id === currentId ? null : currentId);
    setItems(items.filter(it => it._id !== item._id)); // Remove the deleted item from the list
    setNewItem({ name: '', email: '', age: '' });
    console.log('Successfully Deleted!', response.data);
  } catch (err) {
    console.error('Error deleting user data!', err);
  }
}

  return (
    <>
       <div>
        <form onSubmit={HandleSubmit} className='form'>
          <label>
            Fullname: {' '}
            <input value={newItem.name} onChange={(e)=> setNewItem({...newItem, name: e.target.value})} required/>
          </label>

          <label>
            Email: {' '}
            <input value={newItem.email} onChange={(e)=> setNewItem({...newItem, email: e.target.value})} required/>
          </label>

          <label>
            Age: {' '}
            <input value={newItem.age} onChange={(e)=> setNewItem({...newItem, age: e.target.value})} required/>
          </label>{' '}
          <button type='submit'>Save</button>
        </form>
       </div>
      
        <UpdateModal isOpen={isEditing}>
           <form onSubmit={UpdateItem}>
           <label>
            Name: {' '}
            <input value={newItem.name} onChange={(e)=> setNewItem({...newItem, name: e.target.value})} required/>
           </label>

           <label>
            Email: {' '}
            <input value={newItem.email} onChange={(e)=> setNewItem({...newItem, email: e.target.value})} required/>
           </label>

           <label>
            Age: {' '}
            <input value={newItem.age} onChange={(e)=> setNewItem({...newItem, age: e.target.value})} required/>
           </label>
          <hr />
          <button type='submit'>Update</button>
          <button type='button' onClick={()=> setIsEditing(false)}>Close</button>
           </form>
        </UpdateModal>
        
<table className='tables'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.age}</td>
        <td>
          <button onClick={() => handleClickEdit(item)}>Edit</button>{' '}
          <button onClick={() => handleDelete(item)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default Data;
