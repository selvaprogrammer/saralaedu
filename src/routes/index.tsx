import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "@/components/layout/private";

const Login = lazy(() => import("@pages/public/Login"));
const Logout = lazy(() => import("@pages/public/Logout"));
const Loader = lazy(() => import("@pages/public/Loader"));
const Notfound = lazy(() => import("@pages/public/Notfound"));

const Dashboard = lazy(() => import("@pages/private/education/Dashboard"));
const Assesment = lazy(() => import("@pages/private/education/Assesment"));
const Assignment = lazy(() => import("@pages/private/education/Assignment"));
const Ebook = lazy(() => import("@pages/private/education/Ebook"));
const Evaluation = lazy(() => import("@pages/private/education/Evaluation"));
const Lesson = lazy(() => import("@pages/private/education/Lesson"));
const Questions = lazy(() => import("@pages/private/education/Questions"));
const References = lazy(() => import("@pages/private/education/References"));


function Approutes() {
    return (
        <HashRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route element={<PrivateLayout />}>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/assesment' element={<Assesment />} />
                            <Route path='/assignment' element={<Assignment />} />
                            <Route path='/ebook' element={<Ebook />} />
                            <Route path='/eval' element={<Evaluation />} />
                            <Route path='/lesson' element={<Lesson />} />
                            <Route path='/question' element={<Questions />} />
                            <Route path='/refrence' element={<References />} />
                        </Route>
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}
export default Approutes;