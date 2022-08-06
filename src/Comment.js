import React from 'react';

const Comment = ({name, email,onClick}) => {
    return (
        <div onClick={onClick}>
            <p>name : {name}</p>
            <p>email : {email}</p>
        </div>
    );
};

export default Comment;