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
const Respiration = lazy(() => import("@pages/private/education/Respiration"));
const Bodyfluids = lazy(() => import("@pages/private/education/Bodyfluids"));
const Book1 = lazy(() => import("@pages/private/education/Bookone"));
const Book2 = lazy(() => import("@pages/private/education/Booktwo"));
const Book3 = lazy(() => import("@pages/private/education/Bookthree"));
const Book4 = lazy(() => import("@pages/private/education/Bookfour"));
const Question1 = lazy(() => import("@pages/private/education/Questionone"));
const Question2 = lazy(() => import("@pages/private/education/Questiontwo"));
const Question3 = lazy(() => import("@pages/private/education/Questionthree"));
const Question4 = lazy(() => import("@pages/private/education/Questionfour"));
const Question5 = lazy(() => import("@pages/private/education/Questionfive"));
const Furthurlearning = lazy(() => import("@pages/private/education/Furthurlearning"));
const RefRespiration = lazy(() => import("@pages/private/education/Ref-Respiration"));
const RefCirculation = lazy(() => import("@pages/private/education/Ref-Circulation"));

function Approutes() {
    return (
        <HashRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route element={<PrivateLayout />}>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/respiration' element={<Respiration />} />
                            <Route path='/bodyfluids' element={<Bodyfluids />} />
                            <Route path='/furthur' element={<Furthurlearning />} />
                            <Route path='/ref1' element={<RefRespiration />} />
                            <Route path='/ref2' element={<RefCirculation />} />
                            <Route path='/book1' element={<Book1 />} />
                            <Route path='/book2' element={<Book2 />} />
                            <Route path='/book3' element={<Book3 />} />
                            <Route path='/book4' element={<Book4 />} />
                            <Route path='/que1' element={<Question1 />} />
                            <Route path='/que2' element={<Question2 />} />
                            <Route path='/que3' element={<Question3 />} />
                            <Route path='/que4' element={<Question4 />} />
                            <Route path='/que5' element={<Question5 />} />
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