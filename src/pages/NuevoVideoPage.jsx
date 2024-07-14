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
        <Form onSubmit={handleSubmit}>
            <h2>Crear Nuevo Video</h2>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
            <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required></textarea>
            <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Link de Imagen" required />
            <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder="Link de Video" required />
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                <option value="">Seleccionar Categoría</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Innovacion y Gestion">Innovación y Gestión</option>
            </select>
            <button type="submit">Crear</button>
            <button type="button" onClick={() => {
                setTitulo('');
                setDescripcion('');
                setImagen('');
                setVideo('');
                setCategoria('');
            }}>Limpiar</button>
        </Form>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default NuevoVideoPage;
