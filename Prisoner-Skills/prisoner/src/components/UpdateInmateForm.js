import React from 'react';

const UpdateFriendForm = props => {
    return (
        <form>
            <input placeholder={props.inmate.name} />
            <input placeholder={props.inmate.release} />
            <input placeholder={props.inmate.state} />
        </form>
    )
}

export default UpdateFriendForm