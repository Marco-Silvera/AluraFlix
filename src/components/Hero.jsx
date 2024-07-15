import React from 'react';
import styled from 'styled-components';
import fondo from '../../public/FondoHero.png'

const Hero = ({ video }) => {
    return (
        <HeroSection style={{ backgroundImage: `url(${fondo})` }}>
            {video ? (
                <SectionHero>
                    <iframe src={video.video} title={video.titulo} frameBorder="0" allowFullScreen></iframe>
                    <ContainerTexto>
                        <Categoria>{video.categoria}</Categoria>
                        <Titulo>{video.titulo}</Titulo>
                        <Descripcion>{video.descripcion}</Descripcion>
                    </ContainerTexto>
                </SectionHero>
            ) : (
                <p>Selecciona un video para verlo aquí</p>
            )}
        </HeroSection>
    );
};

const HeroSection = styled.section`
    text-align: center;
    margin-top: 127px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 850px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow-y: hidden;
    align-items: center;
    justify-content: center;
    iframe {
        width: 50%;
        aspect-ratio: 16/9;
    }
`

const SectionHero = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 1400px;
`

const ContainerTexto = styled.div`
    width: 600px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Categoria = styled.p`
    padding: 20px 40px;
    width: fit-content;
    border-radius: 20px;
    font-size: 48px;
    font-weight: bold;
    background-color: red;
`

const Titulo = styled.h1`
    font-size: 46px;
    text-align: start;
`

const Descripcion = styled.p`
    text-align: start;
    font-size: 18px;
    font-weight: normal;
`

export default Hero;