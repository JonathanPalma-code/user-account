import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Main from '../templates/Main';
import Linkify from 'react-linkify-always-blank';

import '../templates/Main.css';

const headerProps = {
  icon: 'clipboard',
  title: 'Post Details'
}

const UpdateForm = () => {
  return (
    <div className="form container-fluid pb-3">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <input className='form-control' type='text'
              id='title' />
            <label className='form-label' htmlFor='title'>
              <span className='content-name'>Title</span>
            </label>
          </div>
          <div className="form-group pt-2">
            <select defaultValue='Choose a Category...' className='p-1' name="category" id="category">
              <option disabled="disabled">Choose a Category...</option>
              <option value="General">General</option>
              <option value="Prehistoric">Prehistoric</option>
              <option value="Ancient history">Ancient history</option>
              <option value="Middle ages">Middle ages</option>
              <option value="Modern ages">Modern ages</option>
              <option value="Contemporary Ages">Contemporary Ages</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="form-textarea">
            <textarea placeholder='Post Content' rows='8' className='textarea-input' style={{ resize: 'none' }}
              id='content' />
          </div>
        </div>
      </div>
    </div>
  )
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
          Update Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateForm />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-end m-auto">
          <button className="btn btn-warning">
            Update
            </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

const PostDetails = (props) => {
  // console.log(props);
  const [modalShow, setModalShow] = React.useState(false);
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to="/" />

  if (post) {
    return (
      <Main {...headerProps}>
        <Linkify>
          <Nav className='m-auto'>
            <Nav.Link eventKey='0' as={NavLink} to='/dashboard'>
              <i className='fa fa-undo' aria-hidden="true"></i> Back
          </Nav.Link>
          </Nav>
          <section className='container-fluid'>
            <div className="content">
              <h2 className="pb-4 pt-3 text-center" >{post.title}</h2>
              <h5 className="pb-2">Subject: {post.category}</h5>
              <p id='p_wrap'>{post.content}</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between pb-2'>
              <div className='post-actions'>
                <button className="btn btn-warning" onClick={() => setModalShow(true)}>Update</button>
                <button className="ml-2 btn btn-danger">Delete</button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
              <div className="footer text-right">
                <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                <div>{moment(post.createdAt.toDate().toString()).calendar()}</div>
              </div>
            </div>
          </section>
        </Linkify>
      </Main>
    )
  }
  else {
    return (
      <Main {...headerProps}>
        <hr />
        <section className='container center'>
          <p>Loading post...</p>
        </section>
      </Main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null
  return {
    post: post,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails);
