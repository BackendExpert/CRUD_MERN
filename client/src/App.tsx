import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./User/Users";
import CreateUser from "./User/CreateUser";
import UpdateUser from "./User/UpdateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User" element={<Users />}></Route>
        <Route path="/User/create" element={<CreateUser />}></Route>
        <Route path="/User/update" element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}