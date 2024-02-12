import { Link } from "react-router-dom"


const CreateUser = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
        <div className="container mx-auto px-10">
            <div className="pt-12 h-auto">
                <div className="px-8 py-8 bg-white rounded">
                    <p className="text-xl font-semibold">Add New User</p>
                    <hr className="mb-8" />
                    <Link to={'/Users'}>
                        <span className="bg-blue-500 duration-500 hover:bg-blue-600 text-white px-8 py-2 rounded">Back</span>
                    </Link>

                    <form>
                        <div className="my-4 mx-6">
                            <label htmlFor="">Name : </label>
                            <input type="text" name="" id="" className="w-full h-12 border border-gray-300 rounded"/>
                        </div>
                        <div className="my-4 mx-6">
                            <label htmlFor="">Email : </label>
                            <input type="email" name="" id="" className="w-full h-12 border border-gray-300 rounded"/>
                        </div>
                        <div className="my-4 mx-6">
                            <label htmlFor="">Ages : </label>
                            <input type="number" name="" id="" className="w-full h-12 border border-gray-300 rounded"/>
                        </div>

                        <button className="rounded bg-green-600 duration-500 hover:bg-green-800 text-white px-4 py-2">Add New User</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser