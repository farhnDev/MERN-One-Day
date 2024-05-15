import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name,
        email,
        gender
      });
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container py-20 px-20">
      <Link to='/' className='flex gap-2 w-32 py-1.5 px-5 bg-sky-500 my-1 rounded-lg justify-center items-center text-center text-white font-semibold'><HiArrowNarrowLeft size={18}/>Back</Link>
      <form onSubmit={saveUser} className="justify-center items-center w-1/2">
        <div className="mt-10 flex flex-col">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input 
              type="text"
              name="name"
              id="name"
              placeholder="Tuliskan Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:italic placeholder:px-2" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label  className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input 
              type="text"
              name="email" 
              id="email" 
              placeholder="Tuliskan Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:italic placeholder:px-2" />
            </div>
          </div>

          <div className="sm:col-span-3 ">
            <label className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
            <div className="mt-2 flex gap-10 ">
              <select 
              id="gender" 
              name="gender"  
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ">
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
          <div>
            <button type='submit' className="px-36 py-2 bg-sky-500 rounded-lg text-white font-semibold">Submit</button>
          </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}