import React from 'react'

import styles from './UserMessage.scss';



const UserMessage = ({
    title,
    message,
    color,
    navigateAction
}) => (
    <section className="UserMessage" style={{color}}>
        <h2>
            { title }
        </h2>
        <p>
            { message }
        </p>

        {
            !! navigateAction &&
            (
                <button onClick={()=>navigateAction.action()}>
                    { navigateAction.message }
                </button>
            )
        }
    </section>
)

export default UserMessage;
