import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import Userpost from './onePost';

function Userposts(props) {
    console.log(props.location.state.userId);
    const [userPosts , setUserposts] = useState([])
    const [counter , setCounter] = useState(0)
    


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${props.location.state.userId}/posts`)
        .then((response) => response.json())
        .then((json) => {console.log(json); setUserposts(json)})
        
    }, [counter])


    const onePost = (element) =>{
        props.history.push({
            pathname: '/post',
            state: { singlePost: element }
          })
      }

    return (
        <div className='posts-container'>            
        {userPosts.map((element, index) => {
              return (
                  <div className='allposts' key ={index} onClick= {(e) =>{onePost(element)}}>
                      <div className='letter'>
                          {element.title.substr(0,1)}
                      </div>
                      <div className='post'>
                      <h2>{element.title}</h2>
                      {/* <p>{element.body}</p> */}
                      </div>
                  </div>
                  )
          })}
        </div>
      );
}

export default Userposts