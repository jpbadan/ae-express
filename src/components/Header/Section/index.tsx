import { Container } from "./styles";

interface propsInterface {
    name: string;
}

export function Section(props: propsInterface){
    return(
        <Container>
            <button>{props.name}</button>
        </Container>
    )
}