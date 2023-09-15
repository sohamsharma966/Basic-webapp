import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header" // imported Header buttons.
import Dashboard from "./pages/Dashboard" // imported homepage/dashboard page.
import Login from "./pages/Login" // imported login page.
import Register from "./pages/Register" // imported register page.

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header /> {/* use imported Header like this <Header /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* attach imported dashboard page with path "/" */} {/* use imported Dashboard like this <Dashboard /> */}
            <Route path="/login" element={<Login />} /> {/* attach imported login page with path "/login" */}
            <Route path="/register" element={<Register />} /> {/* attach imported register page with path "/" */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
