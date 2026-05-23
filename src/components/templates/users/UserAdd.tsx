import AppButton from "@/components/organisams/AppButton";
import AppSelectbox from "@/components/organisams/AppSelectbox";
import AppTextbox from "@/components/organisams/AppTextbox";
import { db } from "@/Firebase";
import { Role } from "@/helpers/utils";
import { collection, query, where, getDocs, addDoc, Timestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
interface Props {
    User: any;
    onClose: () => void;
}

export default function UserAdd(props: Props) {
    const { User } = props;
    console.log('User', User);
    const [form, setForm] = useState({
        username: User?.username ?? '',
        password: User?.password ?? '',
        name: User?.name ?? '',
        email: User?.email ?? '',
        phone: User?.phone ?? '',
        role: User?.role ?? ''
    });
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(false)
    const handleChange = (title: string, value: any) => { setForm(prev => ({ ...prev, [title]: value })); handleError(title, value ? '' : `${title} is required`) }
    const handleError = (title: string, value: any) => setError((prev: any) => ({ ...prev, [title]: value }));
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
        const userRef = collection(db, 'users');
        const getUser = query(userRef, where("username", "==", form.username))
        const isUser = await getDocs(getUser);
        if (!isUser.empty && !User?.id) {
            const user = isUser.docs[0];
            console.log('user', user.data());
            setLoading(false)
            toast.error("This username already exsists")
            return
        }
        //update user

        //add new user
        try {
            if (User?.id) {
                const userRef = doc(db, "users", User?.id);
                await updateDoc(userRef, { ...form, updatedAt: Timestamp.now() });
                toast.success("User Modified Successfully")
                props.onClose()
            }
            else {
                await addDoc(collection(db, "users"), { ...form, createdAt: Timestamp.now() });
                toast.success("User Added Successfully")
                props.onClose()
            }
        }
        catch (error) {
            toast.error("Please try again")
        }
        setLoading(false)
    }
    return (
        <div className='bg-white border shadow-sm p-2 rounded-3 w-50'>
            <div className='p-2 d-flex align-items-center justify-content-between border-bottom'>
                <span onClick={props.onClose} role="button" className="font-size-14 text-center text-info"> <FaArrowLeftLong className="me-2" /> Back to list</span>
                <span className='font-size-14'>User Form ...</span>
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
                    disabled={User?.id}
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
                <AppSelectbox
                    data={Role}
                    onChange={(e: string) => { handleChange('role', e) }}
                    value={form.role}
                    block
                    errorText={error?.role}
                    loading={loading}
                    placeholder='Role *'
                    label='Role'
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
    )
}
