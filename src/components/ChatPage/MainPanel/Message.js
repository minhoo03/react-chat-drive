import React from 'react'
import Media from 'react-bootstrap/Media'
import moment from 'moment'

function Message({ message, user }) {


    const timeFromNow = timestamp => moment(timestamp).fromNow()


    const isImage = message => {
        // message에 image라는 property가 있다면 return
        return message.hasOwnProperty('image') && !message.hasOwnProperty('content')
    }


    return (
        <div>
            <Media>
                <img
                    style={{borderRadius: '10px'}}
                    width={48}
                    height={48}
                    className="mr-3"
                    src={message.user.image}
                    alt={message.user.name}
                />
                <Media.Body>
                    <h6>{message.user.name}
                        <span stype={{fontSize: '10px', color:'gray'}}>
                            {timeFromNow(message.timestmap)}
                        </span>
                    </h6>
                    {isImage(message) ?
                        <img style={{maxWidth:'300px'}} alt="이미지" src={message.image} />
                        :
                        <p>
                            {message.content}
                        </p>
                    }
                    
                </Media.Body>
            </Media>
        </div>
    )
}

export default Message
