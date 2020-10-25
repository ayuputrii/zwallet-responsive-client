import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${props => props.color || '#FFFFFF'};
    padding: ${props => props.space};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: ${props => props.full ? '100%' : props.size};
    box-sizing: border-box;
    margin-bottom: ${props => props.bottom};
`

export const Text = styled.span`
    color: ${props => props.color || '#7A7886'};
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.weight || 'normal'};
`

export const Title = styled.span`
    color: ${props => props.color || '#3A3D42'};
    font-size: ${props => props.size || '18px'};
    font-weight: bold;
`

export const Button = styled.button`
    background-color: ${props => {
        switch(props.variant) {
            case "primary":
                return '#6379F4'
            case "light-primary":
                return 'rgba(99, 121, 244, 0.15)'
            default:
                return props.variant || '#DADADA'
        }
    }};
    color: ${props => props.variant === 'primary' ? '#FFFFFF' : props.variant === 'grey' ? '#88888F' : props.color};
    text-align: center;
    border-radius: 12px; 
    border: transparent;
    outline: none;
    width: ${props => props.width || '100%'}
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    border-radius: 0px;
    position: relative;
    padding: 15px 40px;
    background-color: ${props => props.bg || 'transparent'};
    &::placeholder {
        color: rgba(169, 169, 169, 0.8);
        font-size: 16px;
    }
    &:focus {
        border-bottom: 1px solid #6379F4;
    }
`

export const Label = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${props => props.blur});
    ${Input}:focus & {
        background-image: url(${props => props.focus});
    }
`