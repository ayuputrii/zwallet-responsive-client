import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = props => {
    return (
        <footer className="bg-primary footer d-none d-sm-block">
            <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <div className="panel-left">
                    2020 Zwallet. All right reserved.
                </div>
                <div className="d-flex justify-content-between flex-sm-row flex-column">
                    <div className="mr-4">+62 5637 8882 9901</div>
                    <div>contact@zwallet.com</div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer