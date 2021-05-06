import styled from 'styled-components';

export const Container = styled.div`
    /* border: solid red 1px; */
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 0rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >span{
        /* border: solid yellow 1px; */
        display:flex;
        padding: 1rem 0rem;
        div{
            width: 3rem;
            /* border: solid green 1px; */
        }

        >a{
            /* border: solid white 1px; */
            align-self: flex-start;

            padding: 0rem 0rem;

            font-weight: 800;
            font-size: 1.5rem;
        }

    
    }


`