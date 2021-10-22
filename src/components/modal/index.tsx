import React from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { useForm } from "react-hook-form";
import Loading from '../loading';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
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
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Container>
                <h2 >Hello</h2>
                <form onSubmit={handleSubmit(save)}>
                    <input {...register("name")} type='text' placeholder='Ex: Jõao' />
                    <input {...register("email")} className='email' type='email' placeholder='Ex: joao@gmail.com' />
                    <div></div>
                    <div className="btn-divs">
                        <button className='close' onClick={closeModal}>Fechar</button>
                        <button className='save' type='submit'>Reservar</button>
                    </div>
                </form>
            </Container >
            {isLoading && <Loading />}
        </Modal >
    );
}