import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import UpdatePost from './UpdatePost';
import { deletePost } from '../../store/actions/deletePostActions';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Main from '../templates/Main';
import Linkify from 'react-linkify-always-blank';

import '../templates/Main.css';

const headerProps = {
  title: 'Post Details'
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
        <UpdatePost auth={props.auth} post={props.post} id={props.id}/>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <button className='btn-input' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

const PostDetails = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { post, auth, id } = props;

  if (!auth.uid) return <Redirect to="/" />

  const deleteClick = (id) => {
    if (post.authorID === auth.uid) {
      if (window.confirm("Are you sure you want to remove the post?")) {
        props.deletePost(id);
        props.history.push('/dashboard');
      } else {
        return;
      }
    } else {
      alert("Create your own post.\nThere is no need to hack others people posts. =)");
    }
  }

  const ActionVisibility = () => {
    if(post.authorID === auth.uid) {
      return 'inline';
    } else {
      return 'none';
    }
  }

  if (post) {
    return (
      <Main {...headerProps}>
        <Linkify>
          <section className='container'>
          <Nav className='m-auto'>
            <Nav.Link eventKey='0' as={NavLink} to='/dashboard'>
              <i className='fa fa-undo' aria-hidden="true"></i> Back
          </Nav.Link>
          </Nav>
            <div className="content">
              <h2 className="pb-4 pt-3 text-center" >{post.title}</h2>
              <h5 className="pb-2">Subject: {post.category}</h5>
              <p id='p_wrap'>{post.content}</p>
            </div>
            <hr />
            <div className='pb-2'>
              <div className="footer text-center pb-5">
                <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                <div>{moment(post.createdAt.toDate().toString()).calendar()}</div>
              </div>
              <div id='post-actions' className='post-actions' style={{ display: ActionVisibility() }}>
                <span className='btn-container pb-1'>
                  <button className="btn-input" onClick={() => setModalShow(true)}>Update</button>
                </span>
                <span className='btn-container'>
                  <button className="btn-input" onClick={() => deleteClick(id)}>Delete</button>
                </span>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  post={post}
                  id={id}
                  auth={auth}
                />
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
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null
  return {
    id: id,
    post: post,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails);
