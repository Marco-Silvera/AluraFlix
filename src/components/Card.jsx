import React from 'react';
import styled from 'styled-components';

const Card = ({ video, onSelect, onDelete, onEdit }) => {
  return (
    <CardContainer>
      <img src={video.imagen} alt={video.titulo} onClick={() => onSelect(video)} />
      {/* <h3>{video.titulo}</h3> */}
      <ButtonGroup>
        <button onClick={() => onEdit(video)}>Editar</button>
        <button onClick={() => onDelete(video.id)}>Eliminar</button>
      </ButtonGroup>
    </CardContainer>
  );
};

const CardContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 0 0 20px 20px;
    img {
        width: 400px;
        cursor: pointer;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        object-position: center;
        background-position: center;
        
    @media (max-width: 900px){
        width: 300px;
    }

    
    @media (max-width: 660px){
        width: 200px;
    }
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    button {
        padding: 5px 10px;
        background-color: transparent;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
    }
    button:nth-child(1):hover{
        color: yellowgreen;
    }
    button:nth-child(2):hover{
        color: red;
    }
`

export default Card;