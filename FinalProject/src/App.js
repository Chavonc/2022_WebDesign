import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import ImageUpload from './ImageUpload';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '10px solid rgb(202, 200, 200)',
  boxShadow: 24,
  p: 4,
};


function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        console.log(authUser); //輸出是誰
        setUser(authUser);

        // if (authUser.displayName){
        //   // done update username
        // } else {
        //   //if we just create someone
        //   return authUser.updateProfile({
        //     displayName:username,
        //   })
        // }

      } else {
        // user logged out
        setUser(null);
      }


    })

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);


  //UseEffect => runs a piece of code based on a specific condition

  useEffect(() => {
    // this is where the code run
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //every time a new post is added, this code fire
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
      // 類似for迴圈
    })
  }, []);
  // []:run完reset

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message))

    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
    setOpenSignIn(false);

  }


  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://img.onl/l3iFzG"
                alt=""
                width="50%"
              />
            </center>


            <Input
              placeholder="使用者名稱"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            // ref="txt"

            />

            <Input
              type="text"
              placeholder="email / 手機號碼"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="密碼"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{ }


            <Button type="submit" onClick={signUp}>創建新帳號</Button>
            { }
          </form>




        </Box>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <Box sx={style}>
          <form className="app__signin">
            <center>
              <img
                className="app__headerImage"
                src="https://img.onl/l3iFzG"
                alt=""
                width="50%"
              />
            </center>

            <Input
              type="text"
              placeholder="使用者帳號"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="密碼"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={signIn}>登入</Button>

          </form>




        </Box>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://img.onl/l3iFzG"
          alt=""
          width="70%"
        />
      </div>

      {/* <nav><Link to="/"></Link></nav> */}
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)} > 登入</Button>
          <Button onClick={() => setOpen(true)}>創建新帳號</Button>
          <img src="https://img.onl/vtXzAl" width="320px" height="25px"></img>
          <img src="https://img.onl/NaBugy" width="20px" height="25px"></img>
        </div>

      )}
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
        ))
      }

      <Post username="cgu_bartend" caption="飲調社期末社大拉~~\（^∀^）メ（^∀^）ノ" imgUrl="https://img.onl/IbknWF" />
      <Post username="ImLinTing" caption="跟朋友出去玩偷摘口罩拍照(๑˘ ₃˘๑)" imgUrl="https://img.onl/dMNFaN" />
      <Post username="moviee" caption="侏儸紀世界3現正熱映中!搶先看預告!" imgUrl="https://img.onl/bmhQ35" />


    </div>
  );
}

export default App;
