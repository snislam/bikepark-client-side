import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Common/Footer/Footer';
import Header from './Common/Header/Header';
import Loading from './Common/Loading/Loading';
import RequireAuth from './Common/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import StockUpdate from './Pages/ManageInventory/StockUpdate/StockUpdate';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <StockUpdate />
          </RequireAuth>
        } />
        <Route path='/loading' element={<Loading />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
