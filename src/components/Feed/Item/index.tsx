import { Container, Content, Headline, Description, Ranking } from './styles';
import {GoChevronUp} from 'react-icons/go'

export function Item(){
    return(
        <Container>
            <Ranking>
                <GoChevronUp size={30} fill='#E8EAED' />
            </Ranking>
            <Content>
                <Headline>
                    <a href ='link'>
                        <strong>Embraer delivers 22 jets fighters in first quarter of 2021</strong>
                    </a>
                    <a href='broken'>(www.FlightGlobal.com)</a>
                </Headline>
                <Description>
                    <p>529 points by croes 4 hours ago | 284 comments</p>
                </Description>
            </Content>

        
     
        </Container>
    )
}