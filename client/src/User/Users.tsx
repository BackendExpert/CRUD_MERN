import { Link } from "react-router-dom"


const Users = () => {
  return (
    <div className="bg-blue-500 h-screen w-full">
        <div className="container mx-auto px-10">
            <div className="pt-10 h-auto">
                <div className="px-12 py-8 bg-white rounded">
                    <p className="text-2xl font-semibold">Users</p>
                    <Link to={'/User/create'}>
                        <div className="">
                            
                        </div>
                    </Link>
                    <hr className="pb-8"/>

                    <table className="table-auto">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Age</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users