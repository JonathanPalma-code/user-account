import React from 'react';
import moment from 'moment';

import '../templates/Main.css'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <section>
      <div className='card'>
          <h5 className='card-header font-weight-bold'>Notifications</h5>
          <ul className='notification list-unstyled'>
            {notifications && notifications.map(elem => {
              return (
                <li key={elem.id} className='p-4 text-center'>
                  <div className='card-header p-0 text-success'>{elem.user}</div>
                    <div className='bg-light'>
                    <span>{elem.content}</span>
                    <div className='text-muted font-italic font-weight-light'>
                      {moment(elem.time.toDate()).fromNow()}
                    </div>
                  </div>
                </li>
            )})}
          </ul>
      </div>
    </section>
  )
}

export default Notifications;
