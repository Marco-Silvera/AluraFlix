import React from 'react';
import styled from 'styled-components';

const Card = ({ video, onSelect, onDelete, onEdit }) => {
    return (
        <CardContainer>
            <img src={video.imagen} alt={video.titulo} onClick={() => onSelect(video)} />
            <h3>{video.titulo}</h3>
            <ButtonGroup>
                <button onClick={() => onEdit(video)}>Editar</button>
                <button onClick={() => onDelete(video.id)}>Eliminar</button>
            </ButtonGroup>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    padding: 5px 10px;
  }
`;

export default Card;
