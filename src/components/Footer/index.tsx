import { Container, Content } from "./styles";
import {GiAirplaneDeparture} from 'react-icons/gi'
import {BiHeart, BiCopyright} from 'react-icons/bi'


export function Footer(){
    return (
        <Container>
            <Content>
                <span>
                    <BiCopyright />
                </span> 
                2021 Aerospace Express | Made with 
                <span>
                    <BiHeart />
                </span> 
                in Toulouse
                <span>
                    <GiAirplaneDeparture />
                </span> 
            </Content>
        </Container>
    )
}