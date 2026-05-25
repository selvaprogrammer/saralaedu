import AppButton from "@/components/organisams/AppButton";
import AppTextbox from "@/components/organisams/AppTextbox";
import { db } from "@/Firebase";
import { config } from "@/helpers/configuration";
import { doc, updateDoc, Timestamp, getDocs, query, where, collection, } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaArrowRightLong } from "react-icons/fa6";
import CryptoJS from "crypto-js";

const secretKey = config.secret;
export default function Profile() {

    const [form, setForm] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        role: ''
    });
    const [error, setError] = useState<any>();
    const [userid, setUserid] = useState<any>();
    const [loading, setLoading] = useState(false)
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); handleError(title, value ? '' : `${title} is required`) }
    const handleError = (title: string, value: any) => setError((prev: any) => ({ ...prev, [title]: value }));

    useEffect(() => {
        async function initUser() {
            const storedData = localStorage.getItem("user") ?? '';
            const bytes = CryptoJS.AES.decrypt(storedData, secretKey);
            const User = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            const userRef = collection(db, 'users');
            const getUser = query(userRef, where("username", "==", User.username))
            const isUser = (await getDocs(getUser)).docs[0];
            setUserid(isUser.id);
            setForm(prev => ({ ...prev, ...isUser.data() }));
        }
        initUser()
    }, [])

    const handleSubmit = async () => {
        let error: { [key: string]: string } = {};
        if (!form.name) error.name = 'Name is required'
        if (!form.username) error.username = 'User name is required'
        if (!form.password) error.password = 'Password is required'
        if (!form.role) error.role = 'Role is required'
        const cleanErrors = Object.fromEntries(Object.entries(error).filter(([_, v]) => v?.trim()));
        if (Object.keys(cleanErrors).length > 0) return setError((prev: any) => ({ ...prev, ...error }));


        //check user name already exsists
        setLoading(true);
        try {
            const userRef = doc(db, "users", userid);
            await updateDoc(userRef, { ...form, updatedAt: Timestamp.now() });
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(form), secretKey).toString();
            localStorage.setItem('user', encryptedData);
            toast.success("Profile Updated Successfully")
        }
        catch (error) {
            toast.error("Please try again")
        }
        setLoading(false)
    }
    return (
        <div className="vh-100 flex-center">
            <div className='bg-white border shadow-sm p-2 rounded-3 w-50'>
                <div className='p-2 flex-center border-bottom'>
                    <span className='font-size-14'>Update Profile</span>
                </div>
                <div className='p-2'>
                    <AppTextbox
                        label='Name'
                        value={form.name}
                        onChange={(e: string) => { handleChange('name', e) }}
                        errorText={error?.name}
                        placeholder='Name of the person'
                        rightIcon={<FaEnvelope />}
                        loading={loading} />
                    <AppTextbox
                        disabled
                        label='User Name'
                        value={form.username}
                        onChange={(e: string) => { handleChange('username', e) }}
                        errorText={error?.username}
                        placeholder='Login username'
                        rightIcon={<FaEnvelope />}
                        loading={loading} />
                    <AppTextbox
                        label='Password'
                        value={form.password}
                        onChange={(e: string) => { handleChange('password', e) }}
                        errorText={error?.password}
                        placeholder='Login Password'
                        rightIcon={<FaEnvelope />}
                        loading={loading}
                    />
                    <AppTextbox
                        label='Email'
                        value={form.email}
                        onChange={(e: string) => { handleChange('email', e) }}
                        errorText={error?.email}
                        placeholder='Email Id'
                        rightIcon={<FaEnvelope />}
                        loading={loading} />
                    <AppTextbox
                        label='Phone'
                        value={form.phone}
                        onChange={(e: string) => { handleChange('phone', e) }}
                        errorText={error?.phone}
                        placeholder='Phone number'
                        rightIcon={<FaEnvelope />}
                        loading={loading} />

                </div>
                <div className='flex-column-center p-2'>
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
    )
}
