import AppButton from "@/components/organisams/AppButton";
import AppPasswordbox from "@/components/organisams/AppPasswordbox";
import AppTextbox from "@/components/organisams/AppTextbox";
import { config } from "@/helpers/configuration";
import { Login, SmallLogo } from "@/helpers/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRightLong, FaEnvelope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SHA256 from "crypto-js/sha256";

export default function LoginForm() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ user: config.user, password: config.password, });
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(false)
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); handleError(title, value ? '' : `${title} is required`) }
    const handleError = (title: string, value: any) => setError((prev: any) => ({ ...prev, [title]: value }));
    const handleSubmit = async () => {
        let error: { [key: string]: string } = {};
        if (!form.user) error.user = 'User name is required'
        if (!form.password) error.password = 'Password is required'
        const cleanErrors = Object.fromEntries(Object.entries(error).filter(([_, v]) => v?.trim()));
        if (Object.keys(cleanErrors).length > 0) return setError((prev: any) => ({ ...prev, ...error }));
        if (form.user != config.user) return toast.error('User name not found..')
        if (form.password != config.password) return toast.error('Invalid Credencials..')
        const toastLoader = toast.loading("Logging in...");
        setLoading(true);
        setTimeout(() => { toast.dismiss(toastLoader); setLoading(false); localStorage.setItem('token', SHA256(config.env).toString()); navigate('/dashboard') }, 2500);
    }
    return (
        <div className='container'>
            <div className='row d-flex align-items-center vh-100'>
                 <div className='col-8'>
                    <img src={Login} className='w-100' />
                </div>
                <div className='col-4'>
                    <div className='bg-white border shadow-sm p-2 rounded-3 w-75'>
                        <div className='p-2 d-flex align-items-center justify-content-between border-bottom'>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='d-flex flex-column ms-2'>
                                    <span className='font-size-20'>Sarala Education ...</span>
                                    <span className='font-size-14'>Login here! 👋</span>
                                </div>
                            </div>
                            <img src={SmallLogo} className="w-10" />
                        </div>
                        <div className='p-4'>
                            <AppTextbox
                                label='User Name'
                                value={form.user}
                                onChange={(e: string) => { handleChange('user', e) }}
                                errorText={error?.user}
                                placeholder='Enter your user name'
                                rightIcon={<FaEnvelope />}
                                loading={loading} />
                            <AppPasswordbox
                                label='Password'
                                value={form.password}
                                onChange={(e: string) => { handleChange('password', e) }}
                                errorText={error?.password}
                            />
                        </div>
                        <div className='flex-center p-2'>
                            <AppButton
                                label='Submit'
                                endIcon={<FaArrowRightLong />}
                                className="bg-primary-gradient text-white"
                                onClick={handleSubmit}
                                loading={loading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
