import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <section>
      <div className='card z-deph-0'>
        <div className='card-content'>
          <span className='card-title'>Notifications</span>
          <ul className='notification'>
            {notifications && notifications.map(elem => {
              return (
                <li key={elem.id}>
                  <span className='pink-text'>{elem.user} </span>
                  <span>{elem.content}</span>
                  <div className='grey-text note-date'>
                    {moment(elem.time.toDate()).fromNow()}
                  </div>
                </li>
            )})}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Notifications;
