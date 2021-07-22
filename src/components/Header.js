import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'


const ContenedorHeader = styled.header` //Esto nos va a crear una etiqueta header  y puedes reemplazar esa etiqueta con estilos en el return
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>
                {titulo}
            </TextoHeader>
        </ContenedorHeader>
      );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;