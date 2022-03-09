import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { UsersContext } from "../../App";
import Modal from "../Modal";
import { UserData } from "../Table";


type RowProps = {
    id: string,
    name: string
    gender: string,
    birth: number,
}

export const Grid = () => {
    const rows: RowProps[] = []
    const [userModal, setUserModal] = useState<UserData>();
    const [open, setOpen] = useState(false);

    const context = useContext(UsersContext)

    const handleClose = () => setOpen(false);

    const handleOpen = (idRow: string) => {
        context.map(user => {
            if (user.id.name === idRow || user.id.value === idRow) {
                setUserModal(user)
                setOpen(true)
                return
            }
        })
    }

    const columns: GridColDef[] = [
        { field: 'name', width: 150 },
        { field: 'gender', width: 150 },
        { field: 'birth', width: 150 },
        {
            field: 'actions',
            width: 150,
            // renderCell: () => (
            //     <Button
            //         variant="contained"
            //         color="primary"
            //         size="small"
            //         style={{ marginLeft: 16 }}
            //         onClick={(e) => handleOpen()}
            //     >
            //         Open
            //     </Button>
            // ),
        }
    ]

    const createRow = () => {
        context.map(user => {
            rows.push({
                id: user.id.value || user.id.name,
                name: user.name.first,
                gender: user.gender,
                birth: user.dob.age,
            })
        })
    }
    createRow()
    return (
        <>
            <Modal open={open} handleClose={handleClose} user={userModal} />
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    columns={columns}
                    rows={rows}
                    onRowClick={({ row }) => handleOpen(row.id)}
                />
            </div>
        </>
    );
} 