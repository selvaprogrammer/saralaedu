import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () =>{
  const isLoggedin = localStorage.getItem('user');
  return isLoggedin ? <Outlet /> : <Navigate to={'/login'} replace/>
}
export default ProtectedRoute;