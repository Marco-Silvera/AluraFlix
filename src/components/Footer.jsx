import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterEstilizado>
            <img src="./logo-alura.png" alt="" />
        </FooterEstilizado>
    )
}

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    padding: 40px;
    background: #000;
    border-top: 2px solid red;
    > img {
        width: 170px;
        filter: invert(31%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
`

export default Footer