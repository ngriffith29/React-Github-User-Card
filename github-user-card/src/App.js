import React, { Component } from 'react'
import axios from 'axios'
import Followers from './components/Followers'
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      input: '',
      profile: {
        login: '',
        bio: '',
        pic: ''
      },
      followers: []
 
    
    }

    this.updateInput = this.updateInput.bind(this)
    this.submitInput = this.submitInput.bind(this)
 }


 
 
 updateInput(e) {
  this.setState({...this.state,input: e.target.value})
}





submitInput(e) {
  e.preventDefault()
  axios.get(`https://api.github.com/users/${this.state.input}`)
  .then((response) => {
    let newState= {
      input: '',
      profile: {
        login: response.data.login,
        bio: response.data.bio,
        pic: response.data.avatar_url
      },
      followers: response.data.followers_url,
    }
    this.setState(newState);
  })
}





  render() {
    return (
      <div>
        <input placeholder="type your profile name to get your stats" type="text" value={this.state.input} onChange={this.updateInput} />
        <button onClick={this.submitInput}>Get profile </button>
    <h1>{this.state.profile.login}</h1>
    <h1>{this.state.profile.bio}</h1>
    <img src={this.state.profile.pic} />

    <Followers followerList={this.state.followers} />
      </div>
    )
  }
}
