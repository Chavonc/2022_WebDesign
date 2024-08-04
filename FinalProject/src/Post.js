import React from 'react';
//可以打rfce 得到基本樣態
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post({ username ,caption, imgUrl}) {
  return (
    <div className="post">
      <div className="post__header">
          <Avatar
          className="post__avatar"
          alt='RafehQazi'
          src= "./anya.png"
          />

          <h3>{username}</h3>
          {/* header -> avatar + username */}
      </div>
     
      

     <img class="post__image" src={imgUrl} alt=""></img>
      {/* image */}

      <h4 className="post__text"><strong>🤍 💬  ➤<br></br>{username}</strong> {caption}</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post
