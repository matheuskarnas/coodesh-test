import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Modal as MUIModal } from '@mui/material';
import { UserData } from '../Table';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type ModalProps = {
    handleClose: () => void,
    open: boolean,
    user?: UserData,
}

export default function Modal({ open, handleClose, user }: ModalProps) {
    console.log('modal', user)


    return (
        <div>
            <MUIModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h1" component="h2">
                        {user?.name.first}
                    </Typography>
                    <h2>nome: {user?.name.first}</h2>
                    <h2>Email: {user?.email}</h2>
                    <h2>genero: {user?.gender}</h2>
                    <h2>nacimento: {user?.nat}</h2>
                    <h2>Telefone: {user?.cell}</h2>
                    <h2>Nacionalidade: {user?.nat}</h2>

                </Box>
            </MUIModal>
        </div>
    );
}
