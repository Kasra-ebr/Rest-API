import React, { useEffect, useState } from 'react';
import axios from "axios";



const FullComment = ({commentId}) => {
   const [comment, setComment] = useState(null);

    useEffect(()=> {
        const getCComments= async ()=> {
            try {
                const { data } = await axios.get(
                    ""
                );
                setComment(data));
            } catch (error) { }
        }
    })

const deleteHandler = async () => {
    /*
    axios
    .delete("");
    const {data} = await.axios.get("");
    setcComments(data)
    .catch(err)=> console.log(err)
    */

  
  
  try {
         await axios.delete("");
          const {data} = await axios.get("");
          setComment(data);

      } catch (error) {

      }

}
    

    if (!commentId) return  <p> please select a coment</p>;
    
    let commnetDetail = <p>please select a comment</p>; 

    if (commentId) commnetDetail = <p> loading</p>
    if (comment) {
        commnetDetail= (
            <div className='fullComment'>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <button onClick={deleteHandler}></button>
        </div>
        )

    }

    return commnetDetail;
}

export default FullComment;