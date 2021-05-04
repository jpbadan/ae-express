import styled from 'styled-components';

export const Container = styled.header`
    background: var(--black-1);
`;

export const Content = styled.div`
        max-width: 1120px;
        margin: 0 auto;

        padding: 0rem 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h1{
            padding-right: 1rem;
        }

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

`;