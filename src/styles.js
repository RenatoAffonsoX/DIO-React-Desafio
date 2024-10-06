import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34; /* Cor de fundo da calculadora */
`;

export const Content = styled.div`
    background-color: #e8e5dc; /* Cor de fundo do conteúdo */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
    display: flex;
    margin: 10px 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    font-size: 24px;
    text-align: right;
    padding: 10px;
    border: 1px solid #ccc; /* Cor da borda do visor */
    border-radius: 4px;
    margin-bottom: 10px;
    color: #333; /* Cor do texto no visor */
    background-color: #0d1c1c; /* Cor de fundo do visor */
`;

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #0d1c1c; /* Cor do botão */
    color: #FFFFFF; /* Cor do texto no botão */
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 4px; /* Bordas arredondadas */
    transition: background-color 0.3s, opacity 0.3s; /* Transições suaves */

    &:hover {
        opacity: 0.8; /* Efeito hover leve */
        background-color: #008CCF; /* Cor do botão ao passar o mouse */
    }

    &:active {
        background-color: #007BAF; /* Cor do botão ao clicar */
    }
`;
