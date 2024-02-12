import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User" element={}></Route>
        <Route path="/User/create" element={}></Route>
        <Route path="/User/update" element={}></Route>
      </Routes>
    </BrowserRouter>
  )
}