import styled from 'styled-components';

export const Container = styled.div`
    button{
        font-size: 1rem;
        color: var(--white-1);
        background: var(--black-1);
        border: 0;
        padding: 1rem 1.5rem;
        outline: none;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(1.2)
        }
    }

`