import { Container, Content } from './styles';
import { Description } from './Description';
import { Ranking } from './Ranking';
import { Headline } from './Headline';


export function Item(){
    return(
        <Container>
            <Ranking />
            <Content>
                <Headline />
                <Description />
            </Content>
        </Container>
    )
}





