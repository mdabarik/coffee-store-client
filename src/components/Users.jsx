import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        fetch(`http://localhost:5555/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('user deleted successfully');
                    const newUsers = users.filter(user => user._id != id);
                    setUsers(newUsers);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} title="delete" className="text-red-500">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;