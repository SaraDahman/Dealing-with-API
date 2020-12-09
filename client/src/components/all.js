import React, { useState, useEffect } from 'react';

function Posts(props) {
  const [user , setUser] = useState([])
  const [counter , setCounter] = useState(0)
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  const [newPosts, setNewposts] = useState([])


  useEffect(()=> {

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
          return  response.json()
      })
      .then((json) => {

        setUser(json)
        console.log(json); 
      })       
  }, [counter])

  const onePost = (element) =>{
    props.history.push({
        pathname: '/post',
        state: { singlePost: element }
      })
  }
  

  const createPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: post,
        userId: 11,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json); 
        // setTitle(json.title)
        // setPost(json.body)
        let newPost = [json , ...newPosts]
        setNewposts(newPost)
        setCounter(counter+1)  
        setTitle('')
        setPost('')
      })
  }


  const editPost =() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 2,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    setCounter(counter+1)  
  })
  }

      return (
        <div className='posts-container'>
    
                <div className='new-post'>
                    <h3>Add a post</h3>
    
                    <input 
                    type='text' 
                    placeholder='Title' 
                    name='title' 
                    value={title}
                    onChange={(e) =>{setTitle(e.target.value)}}
                    />
    
                    <button onClick={createPost}>post</button>
                    <br />
                    <textarea
                    name='post' 
                    value={post}
                    onChange={(e) =>{setPost(e.target.value)}}
                    ></textarea>   
                </div>
    
         {newPosts.map((element, index) =>{
            return (
              <div className='allposts' key ={index} onClick= {(e) =>{onePost(element)}}>
                  <div className='letter'>
                      {element.title.substr(0,1)}
                  </div>
                  <div className='post'>
                  <h2>{element.title}</h2>
                  </div>
              </div>
              )
          })}

        {user.map((element, index) => {
              if(index % 2 !==0){
                return (
                  <div className='allposts' key ={index} onClick= {(e) =>{onePost(element)}}>
                      <div className='letter'>
                          {element.title.substr(0,1)}
                      </div>
                      <div className='post'>
                      <h2>{element.title}</h2>
                      </div>
                  </div>
                  )
              }
          })}
        </div>
      );
 
}

export default Posts;
