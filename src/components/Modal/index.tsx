import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Modal as MUIModal } from '@mui/material';
import { UserData } from '../Table';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px',
    boxShadow: 24,
    outline: 0,    

    div: {
        p: '0 1rem 1rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        img: {
            marginTop: '-64px ',
            borderRadius: '50%',
        },

        h1: {
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '1rem',
        },

        h4: {
            lineHeight: '1.5rem',
            fontSize: '0.95rem',
        },

        h2: {
            marginTop: '1rem',
        },        
    },
};

type ModalProps = {
    handleClose: () => void,
    open: boolean,
    user?: UserData,
}

export default function Modal({ open, handleClose, user }: ModalProps) {
    console.log('modal', user)


    return (
        <MUIModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h1" component="div">
                    <img src={user?.picture.large} alt="Foto de perfil do usuario" />
                    <h1>{`${user?.name.first} ${user?.name.last}`}</h1>
                </Typography>
                <Typography id="modal-modal-description" component="div" >
                    <h4>nasc. 03/03/95</h4>
                    <h4>Genero: {user?.gender}</h4>
                    <h4>Nacio. {user?.nat}</h4>
                    <h2>Contatos</h2>
                    <p>
                        <h4>Email: {user?.email}</h4>
                        <h4>Telefone: {user?.cell}</h4>
                        <h4>Endereço: Rua gelson carlos porto 222 vila bandeirante Caçapava-SP</h4>
                    </p>
                </Typography>
            </Box>
        </MUIModal>

    );
}
