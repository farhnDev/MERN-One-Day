import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Label() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container py-20 px-52">
            <Link to='/add' className='flex gap-2 w-32 py-1.5 px-5 bg-sky-500 my-1 rounded-lg justify-center items-center text-center text-white font-semibold'><IoIosAddCircle size={18} />Add</Link>
            <table className="table-auto  w-full bg-sky-100 rounded-md justify-center items-center text-center">
                <thead className=" bg-sky-500">
                    <tr>
                        <th>NO</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((user, index) => (
                        <tr key={user._id} className="py-10 border-b-2 border-sky-200">
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td className='py-3'>
                                <Link to={`/edit/${user._id}`} className="py-1 px-8 bg-green-500 rounded-md hover:bg-green-700 text-white my-2">Edit</Link>
                                <button onClick={() => deleteUser(user._id)} className="py-1 px-8 bg-red-500 rounded-md hover:bg-red-700 ml-2 my-2 text-white">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}