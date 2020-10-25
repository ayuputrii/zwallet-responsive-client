import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { About, ButtonLanding, Card, Desc, DescCard, Header, Left, Logo, Partner, Right, TitleCard, Typo } from '../../styles/Landing'
import Support from '../../icons/landing/support.svg'
import Privacy from '../../icons/landing/privacy.svg'
import Download from '../../icons/landing/download.svg'

const Landing = props => {
    return (
        <main className="bg-white">
            <Header>
                <Container className="d-flex flex-lg-row flex-column">
                    <Left>
                        <Logo size="29px" bottom="140px" className="d-flex justify-content-center justify-content-sm-start">
                            Zwallet
                        </Logo>
                        <Typo color="#FFFFFF" className="d-none d-sm-block">
                            Awesome App For Saving Time.
                        </Typo>
                        <Desc color="#FFFFFF" className="d-none d-sm-block">
                            We bring you a mobile app for banking problems that oftenly wasting much of your times.
                        </Desc>
                        <Link to="/register" className="d-none d-sm-block">
                            <ButtonLanding className="mb-3" width="173px">
                                Try It Free
                            </ButtonLanding>
                        </Link>
                    </Left>
                    <Right>
                        <div className="d-flex justify-content-center justify-content-sm-end d-sm-none d-lg-flex">
                            <Link to="/login">
                                <ButtonLanding primary className="mr-3">Login</ButtonLanding>
                            </Link>
                            <Link to="/register">
                                <ButtonLanding>Sign Up</ButtonLanding>
                            </Link>
                        </div>
                        <img className="d-none d-md-block" src="https://i.ibb.co/SwdWWkK/Phone-Header.png" alt="phone" />
                    </Right>
                </Container>
            </Header>
            <Partner className="d-none d-sm-block">
                <Container style={{paddingTop: '90px', paddingBottom: '90px'}}>
                    <img width="100%" src="https://i.ibb.co/4KTJW00/Logo.png" alt="partner" />
                </Container>
            </Partner>
            <Container>
                <About className="d-none d-sm-block">
                    <Typo color="#6379F4">
                        About <span className="text-dark">the Application.</span>
                    </Typo>
                    <Desc color="#3A3D42">
                        We have some great features from the application and it’s totally free to use by all users around the world.
                    </Desc>
                    <div style={{ marginBottom: '120px'}} className="d-flex flex-lg-row flex-column">
                        <Card space="40px 30px 40px 30px" radius="25px" center>
                            <img src={Support} alt="phone" />
                            <TitleCard size="24px" top="35px">
                                24/7 Support
                            </TitleCard>
                            <DescCard top="35px">
                                We have 24/7 contact support so you can contact us whenever you want and we will respond it.
                            </DescCard>
                        </Card>
                        <Card space="40px 30px 40px 30px" radius="25px" center>
                            <img src={Privacy} alt="phone" />
                            <TitleCard size="24px" top="35px">
                                Data Privacy
                            </TitleCard>
                            <DescCard top="35px">
                                We make sure your data is safe in our database and we will encrypt any data you submitted to us.
                            </DescCard>
                        </Card>
                        <Card space="40px 30px 40px 30px" radius="25px" center>
                            <img src={Download} alt="phone" />
                            <TitleCard size="24px" top="35px">
                                Easy Download
                            </TitleCard>
                            <DescCard top="35px">
                                Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.
                            </DescCard>
                        </Card>
                    </div>
                </About>
            </Container>
            <Partner className="d-none d-sm-block">
                <Container className="d-flex flex-lg-row flex-column">
                    <img src="https://i.ibb.co/6FQ8VpZ/Phone-Feature.png" alt="feature" />
                    <div style={{margin: '174px auto'}}>
                        <Typo color="#3A3D42">
                            All The <span className="text-primary">Great</span> Zwallet Features.
                        </Typo>
                        <div className="d-flex flex-column">
                            <Card space="25px" radius="25px">
                                <TitleCard size="20px">
                                    <span className="text-primary">1.</span> Small Fee
                                </TitleCard>
                                <DescCard top="15px">
                                    We only charge 5% of every success transaction done in Zwallet app.
                                </DescCard>
                            </Card>
                            <Card space="25px" radius="25px">
                                <TitleCard size="20px">
                                    <span className="text-primary">2.</span> Data Secured
                                </TitleCard>
                                <DescCard top="15px">
                                    All your data is secured properly in our system and it’s encrypted.
                                </DescCard>
                            </Card>
                            <Card space="25px" radius="25px">
                                <TitleCard size="20px">
                                    <span className="text-primary">3.</span> User Friendly
                                </TitleCard>
                                <DescCard top="15px">
                                    Zwallet come up with modern and sleek design and not complicated.
                                </DescCard>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Partner>
            <Container>
                <About className="d-none d-sm-block">
                    <Typo color="#3A3D42">
                        What Users are <span className="text-primary">Saying.</span>
                    </Typo>
                    <Desc color="#3A3D42">
                        We have some great features from the application and it’s totally free to use by all users around the world.
                    </Desc>
                    <div style={{ marginBottom: '120px'}} className="d-flex flex-lg-row flex-column">
                        <Card space="40px 30px 40px 30px" radius="30px" center>
                            <img src={Support} alt="phone" />
                            <TitleCard size="24px">
                                Alex Hansinburg
                            </TitleCard>
                            <DescCard top="35px">
                                Designer
                            </DescCard>
                            <DescCard top="35px">
                                “This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”
                            </DescCard>
                        </Card>
                    </div>
                </About>
            </Container>
            <footer className="bg-primary d-none d-sm-block">
                <Container style={{paddingTop: '80px', paddingBottom: '80px'}}>
                    <Logo size="36px">Zwallet</Logo>
                    <Desc color="rgba(239, 239, 239, 0.75)">
                        Simplify financial needs and saving much time in banking needs with one single app.
                    </Desc>
                    <hr style={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}/>
                    <div className="d-flex justify-content-between">
                        <Desc color="rgba(239, 239, 239, 0.9);">2020 Zwallet. All right reserved.</Desc>
                        <div className="d-flex justify-content-between">
                            <Desc color="#EFEFEF" className="mr-4">+62 5637 8882 9901</Desc>
                            <Desc color="#EFEFEF">contact@zwallet.com</Desc>
                        </div>
                    </div>
                </Container>
            </footer>
        </main>
    )
}

export default Landing