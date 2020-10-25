import styled from 'styled-components'

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const TopPanel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 30px 30px;
    box-sizing: border-box;
`

export const BottomPanel = styled.div`
    flex: 1;
    display: flex;
    @media (max-width:1200px) {
        flex-direction: column;
    }
`