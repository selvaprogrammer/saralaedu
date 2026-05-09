import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () =>{
  const isLoggedin = localStorage.getItem('token');
  return isLoggedin ? <Outlet /> : <Navigate to={'/login'} replace/>
}
export default ProtectedRoute;