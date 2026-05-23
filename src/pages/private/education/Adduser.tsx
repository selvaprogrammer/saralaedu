import AppButton from '@/components/organisams/AppButton';
import UserAdd from '@/components/templates/users/UserAdd';
import UserTable from '@/components/templates/users/UserTable';
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';


export default function Adduser() {
    const [isAdd, setIsAdd] = useState(false);
    const [user, setUser] = useState<any>(null)
    return (
        <div className='container'>
            <div className='flex-center vh-100'>
                {isAdd ?
                    <UserAdd User={user} onClose={() => { setUser(null); setIsAdd(false) }} /> :
                    <div className='w-100'>
                        <div className='flex-end'>
                        <AppButton
                            label='Add New User'
                            endIcon={<FaPlus />}
                            className="bg-primary-gradient text-white"
                            onClick={() => { setIsAdd(true) }}
                        />
                        </div>
                        <UserTable onUpdate={(e) => { setUser(e); setIsAdd(true) }} />
                    </div>
                }
            </div>
        </div>
    )
}
