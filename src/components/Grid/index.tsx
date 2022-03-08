import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserData } from "../Table";

type GridProps = {
    data: UserData[];
}
type RowProps = {
    id: string,
    name: string
    gender: string,
    birth: number,
}

export const Grid = ({ data }: GridProps) => {
    const columns: GridColDef[] = [
        { field: 'name', width: 150 },
        { field: 'gender', width: 150 },
        { field: 'birth', width: 150 },
        { field: 'actions', width: 150 }
    ]
    const rows: RowProps[] = []

    const createRow = () => {
        data.map(user => {
            rows.push({
                id: user.id.value || user.id.name || user.name.first,
                name: user.name.first,
                gender: user.gender,
                birth: user.dob.age,
            })
        })
    }

    createRow()
    console.log('Data grid', data, rows)
    return (
        <div style={{ height: 750, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} />
        </div>
    );
}