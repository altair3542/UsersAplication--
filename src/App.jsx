import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container mx-auto p-4'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/users/:id" element={<UserDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
