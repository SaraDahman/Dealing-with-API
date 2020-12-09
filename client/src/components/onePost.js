import React, { useState, useEffect } from 'react';
import $ from 'jquery'



function Userpost (props){
    const [post , setPost] = useState({})
    const [comments , setComments] = useState([])
    const [counter , setCounter] = useState(0)
    

    useEffect(()=> {
        setPost(props.location.state.singlePost)
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.location.state.singlePost.id}/comments`)
        .then((response) => response.json())
        .then((json) => {console.log(json); setComments(json)})
    }, [counter])

    const userPosts = (element)=> {
        console.log(element);

        props.history.push({
            pathname: '/posts',
            state: {userId : element}
        })
    }

return(
    <div className='post-container'>
        <div className='one-post'>
            <div className='writing'>
                <h2>"{post.title}"</h2>
                <p>{post.body}</p>

                <span onClick={() =>{userPosts(post.userId)}}>See all posts by this writer</span>
            </div>
            <div className='all-comments'>
                <p>Comments</p>
            {comments.map((element , index) =>{
                return(
                <div className='one-comment' key={index}> 
                <h4>{element.name}</h4>
                <h5>{element.email}</h5>
                <p>"{element.body}"</p>
                </div>
                )
            })}
            </div>
        </div>
    </div>
)
}

export default Userpost