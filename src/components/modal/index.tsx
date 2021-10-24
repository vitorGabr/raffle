import React from 'react';

import { Container } from './styles';
import { useForm } from "react-hook-form";
import Loading from '../loading';
import { Box, Modal, TextField,Button } from '@material-ui/core';
import { SxProps, Theme } from '@material-ui/system';

const style:SxProps<Theme> | undefined = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ModalForm({
    modalIsOpen,
    closeModal,
    save,
    isLoading
}: any) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Modal
            open={modalIsOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <Box sx={style}>
                    <Container>
                        <h2 >Cadastre suas informações</h2>
                        <form onSubmit={handleSubmit(save)}>
                            <TextField id="outlined-basic" {...register("name")} label="Outlined" variant="outlined" />
                            <div style={{ marginTop: '1rem' }}></div>
                            <TextField id="outlined-basic" {...register("email")} label="Outlined" variant="outlined" />
                            <div className="btn-divs">
                                <Button variant="outlined" onClick={closeModal} color="error">
                                    Fechar
                                </Button>
                                <Button variant="contained" type='submit' color="success">
                                    Reservar
                                </Button>

                            </div>
                        </form>
                    </Container >
                    {isLoading && <Loading />}
                </Box>
        </Modal >
    );
}