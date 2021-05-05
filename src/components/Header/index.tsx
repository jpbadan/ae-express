import { Section } from "./Section";
import { Container, Content } from "./styles";


export function Header(){
    return(
        <Container>
            <Content>
                <h1>Aerospace Express</h1>
                <Section name='Home'/>
                <Section name='Past'/>
                <Section name='Comments'/>
                <Section name='Submit'/>

            </Content>
        </Container>
    )
}