
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Additem from './Components/AddItemPage/Additem';
import LoginPage from './Components/AuthonticationPage/LoginPage';
import Register from './Components/AuthonticationPage/Register';
import RequireAuth from './Components/AuthonticationPage/RequireAuth';
import Blogs from './Components/BlogsPage/Blogs';
import Home from './Components/HomePage/Home';
import Inventorydetails from './Components/Inventory/Inventorydetails';
import ManagePage from './Components/ManagePage.js/ManagePage';
import Myitems from './Components/MyitemsPage/Myitems';
import Footer from './Components/SharedPageSection/Footer';
import NavBarSection from './Components/SharedPageSection/NavBarSection';
import NotfoundPage from './Components/SharedPageSection/NotfoundPage';
import VerifyWarning from './Components/SharedPageSection/VerifyWarning';

function App() {
  return (
    <div className="App">
      
      <NavBarSection></NavBarSection>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/add" element={
        <RequireAuth>
      <Additem/>
      </RequireAuth>
      }/>
      <Route path="/manage" element={<ManagePage/>}/>
      <Route path="/inventory/:id" element={
        <RequireAuth>
      <Inventorydetails/>
      </RequireAuth>}/>
      
      <Route path="/myitems" element={<Myitems/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/verify" element={<VerifyWarning/>}/>
      <Route path="*" element={<NotfoundPage/>}/>

       
       
      
    </Routes>
    <ToastContainer></ToastContainer>
   <Footer></Footer>
    </div>
  );
}

export default App;
