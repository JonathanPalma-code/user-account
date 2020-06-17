import React from 'react';
import moment from 'moment';

import '../templates/Main.css'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <section>
      <div className='card card-notification'>
          <div className='card-header font-weight-bold text-center'>Notifications</div>
          <ul className='notification list-unstyled m-0'>
            {notifications && notifications.map(elem => {
              return (
                <li key={elem.id} className='p-1 text-justify'>
                  <span className='p-0 font-weight-bold'>{elem.user} </span>
                  <span className='notification text-muted font-italic font-weight-light'>
                    {elem.content}, {moment(elem.time.toDate()).fromNow()}
                  </span>
                </li>
            )})}
          </ul>
      </div>
    </section>
  )
}

export default Notifications;
