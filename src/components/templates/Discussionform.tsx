import { SmallLogo } from '@/helpers/image';
import  { useState } from 'react'
import toast from 'react-hot-toast';
import {  FaArrowRightLong } from 'react-icons/fa6';
import AppButton from '../organisams/AppButton';
import AppTextbox from '../organisams/AppTextbox';
export default function Discussionform() {
    const [form, setForm] = useState({ name: '', feedback: '', });
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(false)
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); handleError(title, value ? '' : `${title} is required`) }
    const handleError = (title: string, value: any) => setError((prev: any) => ({ ...prev, [title]: value }));
    const handleSubmit = async () => {
        let error: { [key: string]: string } = {};
        if (!form.name) error.name = 'User name is required'
        if (!form.feedback) error.feedback = 'Feedback is required'
        const cleanErrors = Object.fromEntries(Object.entries(error).filter(([_, v]) => v?.trim()));
        if (Object.keys(cleanErrors).length > 0) return setError((prev: any) => ({ ...prev, ...error }));
       const toastLoader = toast.loading("Logging in...");
        setLoading(true);
        setTimeout(() => {
            toast.dismiss(toastLoader);
            setLoading(false);
        }, 2500);
    }
    return (
        <div className='bg-white border shadow-sm p-2 rounded-2'>
            <div className='p-2 d-flex align-items-center justify-content-between border-bottom'>
                <div className='d-flex flex-row align-items-center'>
                    <div className='d-flex flex-column ms-2'>
                        <span className='font-size-14'>Discussion Form</span>
                    </div>
                </div>
                <img src={SmallLogo} className="w-10" />
            </div>
            <div className='p-4'>
                <AppTextbox
                    label='Your Name'
                    value={form.name}
                    onChange={(e: string) => { handleChange('name', e) }}
                    errorText={error?.name}
                    placeholder='Enter your name'
                    loading={loading} />
                <AppTextbox
                    label='Feedback *'
                    value={form.feedback}
                    onChange={(e: string) => { handleChange('feedback', e) }}
                    errorText={error?.feedback}
                    placeholder='Enter your Feedback'
                    loading={loading} />
            </div>
            <div className='flex-center p-2'>
                <AppButton
                    label='Send..'
                    endIcon={<FaArrowRightLong />}
                    className="bg-primary-gradient text-white"
                    onClick={handleSubmit}
                    loading={loading}
                />
            </div>
        </div>
    )
}
