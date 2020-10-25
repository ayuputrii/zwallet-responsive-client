import React, { Fragment, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import { Container, Modal, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Edit from '../../icons/edit-profile.svg'
import ArrowRight from '../../icons/arrow-right.svg'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/action/login'
import { userLogout, editUser } from '../../redux/action/user'
import { imageURI } from '../../utils'

const Profile = props => {
    const [name, setName] = useState('')
    const [imageFile, setImageFile] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.user)
    const { token } = useSelector(state => state.auth)

    const style = {
        label: {
            borderRadius: "10px",
            backgroundColor: "#E5E8ED",
            padding: "20px",
            marginBottom: "20px",
            width: "433px",
            cursor: 'pointer'
        }
    }

    const splitPhone = (phone) => {
        if(phone) {
            const newPhone = phone.split('').map((item, index) => {
                if(index === 2 || index === 6) {
                    return item + '-'
                } else {
                    return item
                }
            })
    
            return newPhone
        } else {
            return ""
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name && imageFile) {
            const formData = new FormData()
            formData.append('photo', imageFile)
            dispatch(editUser(formData, token))
        } else if(name && !imageFile) {
            dispatch(editUser({name}, token))
        } else if(name && imageFile) {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('photo', imageFile)
            dispatch(editUser(formData, token))
        }
        window.location.reload()
    }

    return (
        <Fragment>
            <Navbar />
            <Container className="d-flex mt-5">
                <Menu active={4} />
                <div className="content-main d-flex flex-column align-items-center py-5">
                    <img className="mb-3" style={{borderRadius: '10px'}} width="80px" height="80px" src={imageURI+data.photo} alt="" />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <img onClick={() => setModalShow(true)} style={{cursor: 'pointer'}} className="mr-2" src={Edit} alt="edit" height="11px" />
                        <p className="mb-0 text-muted med">Edit</p>
                    </div>
                    <p className="mb-2 big bold text-dark">{data.name}</p>
                    <p className="med text-muted">+62 {splitPhone(data.phone)}</p>
                    <Link to={{ pathname: `/profile/info`}} style={style.label} className="mt-4 d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Personal Information</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link to={{ pathname: `/profile/password`}} style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Change Password</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link to={{ pathname: `/profile/pin`}} style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Change PIN</p>
                        <img src={ArrowRight} alt="arrow" />
                    </Link>
                    <Link onClick={() => {
                            dispatch(logout())
                            dispatch(userLogout())
                        }} to="/" style={style.label} className="d-flex justify-content-between align-items-center">
                        <p className="bold med text-dark mb-0">Logout</p>
                    </Link>
                    <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow} onHide={() => setModalShow(false)} >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Profile
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={onSubmit}>
                            <div className="d-flex flex-column align-items-center mb-4">
                                <img width="90px" height="90px" style={{borderRadius: '10px'}} className="mb-3 mt-3" src={imageURI + data.photo} alt="dp" />
                                <p className="mb-2 big bold text-dark">{data.name}</p>
                                <input name="name" onChange={(e) => setName(e.target.value)} value={name} style={{borderBottom: '1px solid rgba(169, 169, 169, 0.6)', borderRadius: 0}} className="bg-transparent mb-3" type="text" placeholder="Enter new name" />
                                <input name="photo" className="bg-transparent" type="file" onChange={(e) => setImageFile(e.target.files[0])}/>
                            </div>
                            <Button type="submit">Edit</Button>
                        </form>
                    </Modal.Body>
                    </Modal>
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Profile