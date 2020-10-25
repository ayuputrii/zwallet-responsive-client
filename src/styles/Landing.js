import styled from 'styled-components'

export const Header = styled.header`
    background-image: url('https://i.ibb.co/t2f417f/Mask-Group.png');
    padding: 55px 150px 0 150px;

    @media (max-width: 576px) {
        background-image: none;
        background-color: #6379F4;
        height: 100vh;
    }
`

export const Logo = styled.p`
    font-weight: bold;
    font-size: ${props => props.size};
    margin-bottom: ${props => props.bottom};
    color: #FFFFFF;

    @media (max-width: 576px) {
        margin-bottom: 30px;
        margin-top: 20vh;
    }
`

export const Typo = styled.h1`
    color: ${props => props.color };
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 40px;
`

export const Desc = styled.p`
    font-size: 18px;
    color: ${props => props.color};
    margin-bottom: 50px;
`

export const ButtonLanding = styled.button`
    background-color: ${props => props.primary ? '#6379F4' : '#FFFFFF'};
    color: ${props => props.primary ? '#FFFFFF' : '#6379F4'};
    width: ${props => props.width || '120px'};
    border: 2px solid ${props => props.primary ? '#FFFFFF' : '#6379F4'};
    outline: #6379F4;
    border-radius: 12px;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 576px) {
        align-self: flex-end;
    }
`

export const Left = styled.div`
    flex: 1;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const Partner = styled.div`
    background-color: rgba(71, 58, 209, 0.06);
    margin-bottom: 120px;
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

export const Card = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 4px 250px rgba(172, 172, 172, 0.15);
    border-radius: ${props => props.radius};
    padding: ${props => props.space};
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.center ? 'center' : 'flex-start'};
`

export const TitleCard = styled.span`
    font-size: ${props => props.size};
    font-weight: bold;
    color: #3A3D42;
    margin-top: ${props => props.top};
`

export const DescCard = styled.p`
    color: rgba(58, 61, 66, 0.9);
    font-size: 18px;
    margin-top: ${props => props.top};
    margin-bottom: 0px;
`