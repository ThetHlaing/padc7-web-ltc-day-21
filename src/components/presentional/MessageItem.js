import React from 'react';
import {timeStampToDate} from '../../utilities/utilities';

export default function MessageItem(props) {
    const item = props.message;
    const time = timeStampToDate(item.created_at);
    return (
        <div className="message" key={item.id}>
            <p className="content">
                {item.content}
            </p>
            <p className="info">
                by {item.created_by}<br />
                at {time.month} / {time.day} / {time.year} {time.hour} : {time.minute}
            </p>
        </div>
    )
}
