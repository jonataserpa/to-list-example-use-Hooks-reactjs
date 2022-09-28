import styled from 'styled-components';

/**
 * Pertence sempre ao mesmo escopo apenas
 */
export const Title = styled("p")<any>`
    color: #F00;
    background: ${props => props.background};
    font-size: ${props => `${props.fontSize}px`};
    span {
        font-size: 12px;
    }
`