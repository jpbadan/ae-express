import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem 0rem 0rem 0rem;
    border: solid blue 1px;


    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    
`

export const Content = styled.div`
    
    
`

export const Headline = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    & + a{
        padding: 1rem 1rem;
        font-size: 1rem;
        color: var(--white-2);
        text-decoration: none;

        &:hover{
            filter: brightness(1.2);
        }
    }
    
`

export const Description = styled.div`

    p{
            color: var(--white-2);

        }
    
`

export const Ranking = styled.div`

    padding-right: 1rem;

    
`