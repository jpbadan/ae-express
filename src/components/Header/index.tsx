import { Container, Content } from "./styles";


export function Header(){
    return(
        <Container>
            <Content>
                <h1>Aerospace Express</h1>
                <button>Home</button>
                <button>Past</button>
                <button>Comments</button>
                <button>Submit</button>
            </Content>
        </Container>
    )
}