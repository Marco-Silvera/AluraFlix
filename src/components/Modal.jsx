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
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" required></textarea>
                    <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Link de Imagen" required />
                    <input type="text" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} placeholder="Link de Video" required />
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                        <option value="">Seleccionar Categoría</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Innovacion y Gestion">Innovación y Gestión</option>
                    </select>
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={onClose}>Cerrar</button>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default Modal;
