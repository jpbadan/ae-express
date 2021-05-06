import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
        align-items: center;
        justify-content: flex-start;

        span{
            padding-left: 0.5rem;
            a{
                border: solid green 1px;
                color: var(--white-2);

                &:hover{
                    filter: brightness(1.2);
                }
            }
        }   
            
    
        
`