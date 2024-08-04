import './App.css';
import React,{Component} from 'react';
import Avatar from '@mui/material/Avatar';//Picture
import Box from '@mui/material/Box';//info Box
import FaceIcon from '@mui/icons-material/Face';//id
import LocationOnIcon from '@mui/icons-material/LocationOn';//location
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';//followers icon
import FollowingIcon from'@mui/icons-material/Favorite';//following icon
import LinkIcon from '@mui/icons-material/Link';//blog link
import CreateIcon from '@mui/icons-material/Create';//created icon
import AutorenewIcon from '@mui/icons-material/Autorenew';//updated icon

const style=
{
  content:
  {
    position:"absolute",
    left:"20%",
    top:"2%",
    color:"gray"
  },
  IconStyle:
  {
    width:"30px",
    color:"#AFEEEE",
  },
  LeftBox:
  {
    padding:"5px",
    position:"absolute",
    left:"40%",
    top:"20%"
  },
  RightBox:
  {
    padding:"5px",
    position:"absolute",
    left:"60%",
    top:"20%"
  },
  TextStyle:
  {
    color:"#737373"
  }
}
class Profile extends Component
{
	constructor(props){
		super(props);
		this.state={
			name:null,
			id:null,
			location:null,
			followers:null,
			following:null,
			created:null,
			updated:null,
      blog:null
		};
	}
  componentDidMount()
  {
    fetch("https://api.github.com/users/cjwu",{method:"GET"})
	  .then(response=>response.json())
	  .then(result=>{
		console.log(result)
		this.setState({name:result.name})
		this.setState({id:result.id})
		this.setState({location:result.location})
		this.setState({followers:result.followers})
		this.setState({following:result.following})
		this.setState({created:result.created_at})
		this.setState({updated:result.updated_at})
    this.setState({blog:result.blog})
	  })
	  .catch(error=>{
		console.log("Error!!!")
	  })
  }

  render(){
    return(
      <div style={style.content}>
        <Box sx={{width:"1000px"}}>
          <Avatar src='https://images.unsplash.com/photo-1531804226530-70f8004aa44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
            alt='Cindy Baker' varients='outlined' color='info' size='lg' 
            sx={{width:180,height:180}}
          />
          <div>
            <h1>{this.state.name}</h1>
          </div>
          <div>
            <h4 style={style.TextStyle}><FaceIcon style={style.IconStyle}/>id: {this.state.id}</h4>
            <h4 style={style.TextStyle}><LocationOnIcon style={style.IconStyle}/>Located in {this.state.location}</h4>
            <h4 style={style.TextStyle}><CreateIcon style={style.IconStyle}/>Started on {this.state.created}</h4>
            <h4 style={style.TextStyle}><AutorenewIcon style={style.IconStyle}/>Updated on {this.state.updated}</h4>
            <h4 style={style.TextStyle}><LinkIcon style={style.IconStyle}/>{this.state.blog}</h4>
          </div>
        </Box>
        <div>
          <Box sx={{width:"150px"}} style={style.LeftBox}>
            <h3 style={style.TextStyle}><EmojiPeopleIcon style={style.IconStyle}/>{this.state.followers} followers </h3>
          </Box>
        </div>
        <div>
          <Box sx={{width:"150px"}} style={style.RightBox}>
            <h3 style={style.TextStyle}><FollowingIcon style={style.IconStyle}/>{this.state.following} following</h3>
          </Box>
        </div>
      </div>
    )
  }
}
export default Profile;