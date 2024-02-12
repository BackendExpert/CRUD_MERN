
const CreateUser = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
        <div className="container mx-auto px-10">
            <div className="pt-12 h-auto">
                <div className="px-8 py-8 bg-white rounded">
                    <p className="text-xl font-semibold">Add New User</p>
                    <hr className="mb-8" />

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
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser