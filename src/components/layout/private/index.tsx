import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function PrivateLayout() {
    return (
        <div className="app-layout">
            <Header />
            <div className="layout-body">
                <Sidebar />
                <main className="layout-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
