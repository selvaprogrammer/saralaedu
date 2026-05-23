import { useEffect, useState } from 'react'
import AppTable from '../AppTable';
import Cell from 'rsuite/esm/Table/TableCell';
import Column from 'rsuite/esm/Table/TableColumn';
import HeaderCell from 'rsuite/esm/Table/TableHeaderCell';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '@/Firebase';
import { Divider } from 'rsuite';
import { FaPenClip, FaTrashCan } from 'react-icons/fa6';
import { DeleteAlert } from '@/helpers/alerts';
import { Role } from '@/helpers/utils';
import toast from 'react-hot-toast';
import { config } from '@/helpers/configuration';
import CryptoJS from "crypto-js";
export const fulltextHeader = [
    {
        key: 'name',
        label: 'Name',
        flexGrow: 1
    },
    {
        key: 'username',
        label: 'User Name',
        flexGrow: 1
    },
    {
        key: 'password',
        label: 'Password',
        flexGrow: 1
    },
    {
        key: 'role',
        label: 'Role',
        flexGrow: 0.5
    },
    {
        key: 'email',
        label: 'Email',
        flexGrow: 1
    },
    {
        key: 'phone',
        label: 'Phone Number',
        flexGrow: 1
    },
    {
        key: 'action',
        label: 'Actions',
        flexGrow: 0.5
    },
];
interface Props {
    onUpdate: (e: any) => void;
}
export default function UserTable(props: Props) {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const secretKey = config.secret;
    const storedData = localStorage.getItem("user") ?? '';
    const bytes = CryptoJS.AES.decrypt(storedData, secretKey);
    const decryptedData = JSON.parse(
        bytes.toString(CryptoJS.enc.Utf8)
    );
    const loadUsers = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (users?.length) setUsers(users);
        setLoading(false)
    };
    useEffect(() => {
        setLoading(true);
        loadUsers();
    }, []);
    const deleteUser = async (id: any) => {
        try {
            await deleteDoc(doc(db, "users", id));
            toast.success("User Removed Successfully")
            loadUsers();
        }
        catch (e) {
            toast.error("Please try again")
        }
    }
    return (
        <div className='w-100 shadow rounded-3'>
            <AppTable
                page={page}
                count={users?.length}
                loading={loading}
                data={users}
                setPage={setPage}
                headers={fulltextHeader}>
                {fulltextHeader.map(column => {
                    const { key, label, ...rest } = column;
                    return (
                        <Column {...rest} key={key}>
                            <HeaderCell>{label}</HeaderCell>
                            <Cell>
                                {(rowData: any) => {
                                    if (key == 'action')
                                        return (
                                            <div>
                                                <span role='button' className="font-size-13" onClick={() => props.onUpdate(rowData)}>
                                                    <FaPenClip size={20} className="fw-bold text-info" />
                                                </span>
                                                <Divider vertical />
                                                {decryptedData?.username != rowData.username &&
                                                    <span role='button' className="font-size-13" onClick={() => { DeleteAlert(() => deleteUser(rowData?.id)) }}>
                                                        <FaTrashCan size={20} className="fw-bold text-danger" />
                                                    </span>}
                                            </div>)
                                    if (key == 'role') {
                                        const uRole = Role.find((e) => e.value == rowData[key])
                                        return (
                                            <span className="font-size-13">
                                                {uRole?.label}
                                            </span>
                                        )
                                    }
                                    return rowData[key]
                                }}
                            </Cell>
                        </Column>
                    );
                })}
            </AppTable>
        </div>
    )
}
