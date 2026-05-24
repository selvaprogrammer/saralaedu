import AppTable from "@/components/templates/AppTable";
import { db } from "@/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import Cell from "rsuite/esm/Table/TableCell";
import Column from "rsuite/esm/Table/TableColumn";
import HeaderCell from "rsuite/esm/Table/TableHeaderCell";

export const fulltextHeader = [
    {
        key: 'name',
        label: 'Name',
        flexGrow: 0.5
    },
    {
        key: 'title',
        label: 'Video Name',
        flexGrow: 1
    },
    {
        key: 'feedback',
        label: 'Feedback',
        flexGrow: 1.5
    },
];
export default function Discussion() {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const loadUsers = async () => {
        const snapshot = await getDocs(collection(db, "forum"));
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('users',users);
        if (users?.length) setUsers(users);
        setLoading(false)
    };
    useEffect(() => {
        setLoading(true);
        loadUsers();
    }, []);
    return (
        <div className="container">
            <div className="flex-column-center">
                <h4>Discussion Form List</h4>
            </div>
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
                        console.log('222');
                        return (
                            <Column {...rest} key={key}>
                                <HeaderCell>{label}</HeaderCell>
                                <Cell className="font-size-12">
                                    {(rowData: any) => {
                                        return rowData[key]
                                    }}
                                </Cell>
                            </Column>
                        );
                    })}
                </AppTable>
            </div>
        </div>
    )
}
