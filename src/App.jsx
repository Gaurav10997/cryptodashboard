
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import './App.css'
import MainComponent from "./components/landingPage/MainComponent"
import HomePage from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import DashBoardPage from "./pages/DashBoard"
import ProductPage from "./components/ProductPage"
function App() {
  return (
    <>
    <div className="main">
      <Routes>
        <Route path={"/"}  element={<HomePage/>}/>
        <Route path="/dashboard"  element={<DashBoardPage/>}/>
        <Route path="/dashboard/:id"  element={<ProductPage/>}/>
      </Routes>
    </div>
      
    </>
  )
}
export default App
