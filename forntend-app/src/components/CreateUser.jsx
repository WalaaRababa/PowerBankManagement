import { useState, useContext } from "react";
import axios from 'axios'
import AuthContext from '../AuthContext'
// eslint-disable-next-line react/prop-types
const CreateUser = ({token}) => {
    const [user , setUser ] = useState({name: '',
      email: '',
      password: '',
      role: ''
})

    const createUser= async(e)=>
        {
            e.preventDefault();
            const data={...user,role:'user',password:document.getElementById('passwordInput').value, }
            console.log(data);
            try {
              const result = await axios.post("http://localhost:3000/users",{
                name: 'John Doe',
                email: 'john2.doe@example.com',
                password: 'secretpassword',
                role: 'user'
              }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              });
              console.log(result);
            
            } catch (error) {
              console.log(error);
           
        }
    }
  return (
<form className="flex items-center space-x-4 w-full" onSubmit={createUser}>
  <div className="flex-grow">
    <input onChange={(e)=>{setUser((pre)=>({...pre,email:(e.target.value)}))}}
      type="email"
      id="UserEmail"
      placeholder="john@rhcp.com"
      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
    />
  </div>
  <div className="flex-grow">
 
    <input onChange={(e)=>{setUser((pre)=>({...pre,name:(e.target.value)}))}}
      type="text"
      id="UserName"
      placeholder="User Name"
      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
    />
  </div>
  <div className="flex-grow">
  
    <input onChange={(e)=>{setUser((pre)=>({...pre,
password
:(e.target.value)}))}}
      type="password"
      id="passwordInput"
      placeholder="Password"
      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm px-4 py-2"
    />
  </div>
  <div className="flex-shrink-0">
    <button
      type="submit" 
      className="h-10 px-5 text-white bg-indigo-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Create User
    </button>
  </div>
</form>

  )
}

export default CreateUser