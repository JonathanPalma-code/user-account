import React from 'react';
import Main from '../templates/Main';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import UpdateUser from './UpdateUser';

import '../templates/Main.css';

const headerProps = {
  title: 'YourSpace'
}

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateUser profile={props.profile} auth={props.auth}/>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <button className='btn btn-outline-info' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

const UserDetails = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { auth, profile } = props;
  return (
    <Main {...headerProps}>
      <div className='form container pb-2'>
        <center>
          <h2 className='user-title'>{profile.firstName} {profile.lastName}</h2>
          <h3>Welcome to YourSpace.</h3>
        </center>
        <div className="row pt-2 pb-5">
          <div className="col-12 col-lg-4 image-container">
            <img className='picture-profile' src={profile.pictureURL} alt='pictureProfile' />
          </div>
          <div className="col-12 col-lg-8 pt-3">
            <label>First Name</label>
            <h5>{profile.firstName}</h5>
            <label>Last Name</label>
            <h5>{profile.lastName}</h5>
            <label>Email</label>
            <h5>{auth.email}</h5>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            profile={profile}
            auth={auth}
          />
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-warning" onClick={() => setModalShow(true)}>Update</button>
        </div>
      </div>
    </Main>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(UserDetails);