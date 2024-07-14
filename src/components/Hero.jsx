import React from 'react';
import styled from 'styled-components';

const Hero = ({ video }) => {
    return (
        <HeroSection>
            {video ? (
                <>
                    <iframe src={video.video} title={video.titulo} frameBorder="0" allowFullScreen></iframe>
                    <h1>{video.titulo}</h1>
                    <p>{video.descripcion}</p>
                    <p><strong>Categoría:</strong> {video.categoria}</p>
                </>
            ) : (
                <p>Selecciona un video para verlo aquí</p>
            )}
        </HeroSection>
    );
};

const HeroSection = styled.section`
  text-align: center;
  iframe {
    width: 80%;
    height: 400px;
  }
`;

export default Hero;
