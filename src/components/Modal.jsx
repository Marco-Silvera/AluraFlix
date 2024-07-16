import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ video, onClose, onSave }) => {
    const [titulo, setTitulo] = useState(video.titulo);
    const [descripcion, setDescripcion] = useState(video.descripcion);
    const [imagen, setImagen] = useState(video.imagen);
    const [videoLink, setVideoLink] = useState(video.video);
    const [categoria, setCategoria] = useState(video.categoria);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedVideo = {
            ...video,
            titulo,
            descripcion,
            imagen,
            video: videoLink,
            categoria
        };
        onSave(updatedVideo);
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Editar Video</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Titulo
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
                    </label>
                    <label htmlFor="">Categoria
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                            <option value="">Seleccionar Categoría</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Innovacion y Gestion">Innovación y Gestión</option>
                        </select>
                    </label>
                    <label htmlFor="">Imagen
                        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Link de Imagen" required />
                    </label>
                    <label htmlFor="">Video
                        <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Link de Video" required />
                    </label>
                    <label htmlFor="">Descripción
                        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required></textarea>
                    </label>
                    <ContainerButton>
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={onClose}>Cerrar</button>
                    </ContainerButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    background: black;
    padding: 20px;
    border-radius: 15px;
    width: 974px;
    height: 75%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h2 {
        color: white;
        font-size: 60px;
        text-align: center;
        @media (max-width: 460px){
                    font-size: 30px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 575px;
        color: white;
        font-weight: 600;
        font-size: 20px;
        > label {
            display: flex;
            flex-direction: column;
            gap: 15px;
            text-align: start;
            > input {
                background-color: transparent;
                border: 3px solid #191919;
                border-radius: 10px;
                font-size: 20px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                color: #A5A5A5;
                padding: 16px 10px;
                outline: none;
                &:focus {
                    border-color: white;
                }

                @media (max-width: 460px){
                    font-size: 12px;
                    padding: 8px;
                }
            }
            > select {
                background-color: transparent;
                border: 3px solid #191919;
                border-radius: 10px;
                font-size: 20px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                color: #A5A5A5;
                padding: 16px 10px;
                outline: none;
                @media (max-width: 460px){
                    font-size: 12px;
                }
            }
            > textarea {
                background-color: transparent;
                border: 3px solid #191919;
                border-radius: 10px;
                font-family: 'Montserrat', sans-serif;
                padding: 16px 10px;
                font-size: 20px;
                font-weight: 600;
                color: #A5A5A5;
                height: 150px;
                resize: none;
                outline: none;
                &:focus {
                    border-color: white;
                }
                @media (max-width: 460px){
                    font-size: 12px;
                    height: 50px;
                    padding: 8px;
                }
            }
            @media (max-width: 460px){
                    font-size: 12px;
            }
        }

        @media (max-width: 1200px){
        width: 100%;
    }
    }

    @media (max-width: 1200px){
        width: 600px;
    }

    @media (max-width: 680px){
        width: 100%;
        margin: 0 20px;
    }

    @media (max-width: 460px){
        height: fit-content;
    }
`

const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    > button {
        width: 180px;
        height: 50px;
        color: white;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        background-color: transparent;
        border: 3px solid white;
        border-radius: 15px;
        cursor: pointer;
        &:hover {
            background-color: white;
            color: black;
        }

        @media (max-width: 460px){
        font-size: 12px;
        height: 40px;
        width: 100px;
    }
    }
    > button:nth-child(1){
        border-color: red;
        &:hover{
            background-color: red;
            color: white;
        }
    }

    @media (max-width: 600px){
        flex-direction: column;
        gap: 20px;
        align-self: center;
    }
`

export default Modal;