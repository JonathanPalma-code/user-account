import React from 'react';
import moment from 'moment';

import '../templates/Main.css'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <section>
      <div className='card'>
          <div className='card-header font-weight-bold'>Notifications</div>
          <ul className='notification list-unstyled'>
            {notifications && notifications.map(elem => {
              return (
                <li key={elem.id} className='p-4 bg-light'>
                  <span className='p-0 font-weight-bold'>{elem.user} </span>
                  <span className='text-muted font-italic font-weight-light'>
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
