import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../context/VideoContext';

const NuevoVideoPage = () => {
    const { addVideo } = useContext(VideoContext);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            id: Date.now(),
            titulo,
            descripcion,
            imagen,
            video,
            categoria
        };
        addVideo(newVideo);
        // Limpiar formulario
        setTitulo('');
        setDescripcion('');
        setImagen('');
        setVideo('');
        setCategoria('');
    };

    return (
        <SectionFormulario>
            <ContainerTexto>
                <h2>Nuevo Video</h2>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
            </ContainerTexto>
            <Form onSubmit={handleSubmit}>
                <label htmlFor=""> Titulo
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
                    <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Link de Video" required />
                </label>
                <label htmlFor="">Descripción
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required></textarea>
                </label>
                <ButtonContainer>
                    <button type="submit">Crear</button>
                    <button type="button" onClick={() => {
                        setTitulo('');
                        setDescripcion('');
                        setImagen('');
                        setVideo('');
                        setCategoria('');
                    }}>Limpiar</button>
                </ButtonContainer>
            </Form>
        </SectionFormulario>
    );
};

const SectionFormulario = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 127px;
    flex: 1;
    padding: 100px 20px;
    background-color: #262626;    
`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    >h2 {
        font-size: 60px;
        text-transform: uppercase;

        @media (max-width: 460px){
        font-size: 30px;
        }
    }
    >p {
        text-transform: uppercase;
        font-weight: 200;
        font-size: 20px;

        @media (max-width: 460px){
        font-size: 12px;
        }
    }
`

const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 20px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    width: 1400px;
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
            height: 250px;
            resize: none;
            outline: none;
            &:focus {
            border-color: white;
            }
        }
    }

    
    @media (max-width: 1500px){
        width: 800px;
    }

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

const ButtonContainer = styled.div`
    grid-column: span 2;
    display: flex;
    gap: 30px;
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

    @media (max-width: 460px){
        flex-direction: column;
    }
`

export default NuevoVideoPage;