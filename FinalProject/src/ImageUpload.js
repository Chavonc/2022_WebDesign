import { Button } from '@mui/material';
import React ,{useState} from 'react';
// import { Input } from '@mui/material';
import { db,storage } from './firebase';
import firebase from 'firebase/compat/app';
import LinearProgress from '@mui/material/LinearProgress';
import $ from 'jquery';
import './imageUpload.css'


function ImageUpload({username}) {
     const [image, setImage] = useState(null);  
     const [progress, setProgress] = useState(0);
     const [caption, setCaption] = useState('');
     


     const handleChange = (e) => {
          if (e.target.files[0]){
          setImage(e.target.files[0]);
          }
     }

     const handleUpload =() => {
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       
       uploadTask.on(
          "state_changed",
          (snapshot) => {
               // progress function
               const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               ); //percentage
               setProgress(progress);
          },
          (error) => {
               // error function
               console.log(error);
               alert(error.message);
          },
          () => {
               // complete function
               storage
                 .ref("images")
                 .child(image.name)
                 .getDownloadURL()
                 .then(url => {
                    // post image inside db
                    db.collection("posts").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                      caption: caption,
                      imgUrl:url,
                      username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                 })
          }
       )
     }

  return (
    <div className='imageupload'>

      {/* I want to have */}
      {/* Caption input */}
      {/* File picker */}
      {/* Post button */}
      <progess value={progress} max = "100" />
     
      {/* <LinearProgress value="70" max = "100"/> */}
      <input type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)}value={caption}/>
      <input type="file" onChange={handleChange} />
      <Button onclick={handleUpload}>
          Upload
      </Button>



    </div>
  )
}

export default ImageUpload
