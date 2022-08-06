import React from 'react';

const NewComment = (e) => {
    
    
    
    const [comment,setComment] = useState({
        name: "",
        email:"",
        body:"",
    });
        const nameHandler = (e) => {
            setComment = {...comment, name : e.target.value };}
        const emailHandler = (e) => {
             setComment = {...comment, email : e.target.value };}
        const bodyHandler = (e) => {
         setComment = {...comment, body : e.target.value };}
        

    const postHandler = (e) => {
        console.log(id)
        axios.post(("") ,{...comment, 
            postId: 1})
        .then()
        .catch()
    }

    return (
        <div>
            <div>
                <label>name</label>
                <h2>Add new Comment</h2>
                <input type="text"  onClick={nameHandler}></input>
            </div>
            <div>
                <label>email</label>
                <input type="email" onClick={emailHandler}></input>
            </div>
            <div>
                <label>body</label>
                <input type="type-text"  onClick={bodyHandler}/>
                <textarea />
            </div>
            <button onClick={postHandler}>add new Comment</button>
        </div>
    );
};

export default NewComment;