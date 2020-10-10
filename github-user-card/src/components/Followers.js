import React, { Component } from 'react'
import axios from 'axios'
export default class Followers extends Component {
    constructor(props) {
        super(props)
        this.state= {
            followers: []
        }
    
       console.log(props.followerList)
       
    }

   componentDidUpdate(){
    if(this.props.followerList.length < 1){
        
    }else{
        axios.get(`${this.props.followerList}`)
        .then((response) => {
            this.setState({followers: response.data})
        })
    }
    
  
   }
    
    render() {
        return (
            <div>
               {this.state.followers.map((e) => <img src={e.avatar_url} />)}
            </div>
        )
    }
}
