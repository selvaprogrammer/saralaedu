import { Pagination, Table } from "rsuite";
import Cell from "rsuite/esm/Table/TableCell";
import Column from "rsuite/esm/Table/TableColumn";
import HeaderCell from "rsuite/esm/Table/TableHeaderCell";
import AppSkeleton from "../organisams/AppSkeleton";
interface Props {
    data: Array<any>;
    children: any;
    page: number;
    setPage: (e: number) => void;
    loading: boolean;
    count: number;
    headers?: any;
    rowHeight?:any;
}
const loaderData = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    loading: true
}));
export default function AppTable(props: Props) {
    return (
        <div className="table-responsive mt-3">
            <Table rowHeight={props?.rowHeight} autoHeight data={props?.loading ? loaderData : props.data} affixHeader affixHorizontalScrollbar>
                {props?.loading ?
                    props?.headers.map((column: any) => {
                        const { key, label, ...rest } = column;
                        return (
                            <Column {...rest} key={key}>
                                <HeaderCell>{label}</HeaderCell>
                                <Cell>
                                    {loaderData.map((_, i) => (
                                        <div key={i} className="flex-row-between mb-2">
                                            <AppSkeleton loading />
                                        </div>
                                    ))}
                                </Cell>
                            </Column>)
                    })
                    :
                    props.children}
            </Table>
            <div className="p-1 border rounded-bottom-3" style={{ background: '#FAFAFA' }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    maxButtons={5}
                    size="sm"
                    layout={['total', '-', '|', 'pager']}
                    total={props.count ?? 0}
                    limit={10}
                    activePage={props.page ?? 0}
                    onChangePage={props.setPage}
                />
            </div>
        </div>
    )
}
