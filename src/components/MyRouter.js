import {Route, Routes} from 'react-router-dom'
import CantikItuLuka from '../page/CantikItuLuka'
import ForgotPassword from '../page/ForgotPassword'
import Home from '../page/Home'
import KelebihanPage from '../page/KelebihanPage'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import Tentang from '../page/Tentangkami'
import HalamanBaca from '../page/HalamanBaca'

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/kelebihanpage" element={<KelebihanPage />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      <Route path="/cantikituluka" element={<CantikItuLuka />}></Route>
      <Route path="/bacacantikituluka" element={<HalamanBaca />}></Route>
      <Route path="/aboutus" element={<Tentang />}></Route>
      
    </Routes>
  )
}
export default Router