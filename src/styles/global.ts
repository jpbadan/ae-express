import { createGlobalStyle } from 'styled-components'

export const GlobalStyle =  createGlobalStyle`
    :root{
        --black-1: #202124;
        --black-2: #313235;


        --white-1: #E8EAED;
        --orange-1: # #FB8B24;
        --green-1: #C7EF00;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //Defining dynamic fontsize (16px -> Desktop default)
    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%; 
        }
    }

    body{
        background: var(--black-2);
        -webkit-font-smoothing: antialiased; /* Optimizing for chrome engine browsers */   
   }

   body, input, textarea, button {
       font-family: 'Work sans', sans-serif;
       font-weight: 400;
       color: var(--white-1);
   }

   h1, h2, h3, h4, h5, h6, strong {
       font-weight: 800;
   }

   button{
       cursor: pointer;
   }

   [disabled]{
       opacity: 0.6;
       cursor: not-allowed;
   }
`