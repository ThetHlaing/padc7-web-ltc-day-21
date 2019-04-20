import React from 'react';
import {timeStampToDate} from '../../utilities/utilities';

export default function MessageItem(props) {
    const item = props.message;
    console.log(props.ownmessage);
    const time = timeStampToDate(item.created_at);
    let classList = "message";
    classList += props.ownmessage ? " goright" : "";
    return (
        
    <div className={classList} key={item.id}>
            <p className="content">
                {item.content}
            </p>
            {
                item.image && 
                <img src={item.image} alt="message content"/>
            }
            <p className="info">
                by {item.created_by}<br />
                at {time.month} / {time.day} / {time.year} {time.hour} : {time.minute}
            </p>
        </div>
    )
}
