import IonIcon from "@reacticons/ionicons"
import { useState } from "react"
import { Link } from "react-router-dom"


const Users = () => {
    const [users, SetUser] = useState([{
        Name: "Jehan", Email: "jehan123@123", Age: 23
    }])

  return (
    <div className="bg-blue-500 h-screen w-full">
        <div className="container mx-auto px-10">
            <div className="pt-10 h-auto">
                <div className="px-12 py-8 bg-white rounded">
                    <p className="text-2xl font-semibold">Users</p>
                    <Link to={'/User/create'}>
                        <div className="mb-2 rounded duration-500 bg-green-600 hover:bg-green-700 w-[18%] px-8 text-white font-semibold flex py-2 text-xl">
                            <p className=""><IonIcon name="add" size="large"></IonIcon></p>
                            <p className="pt-2">Add New User</p>
                        </div>
                    </Link>
                    <hr className="pb-8"/>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Age}</td>
                                            <td>
                                                <button className="bg-blue-500 duration-500 hover:bg-blue-700 text-white px-8 py-2 rounded">Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users