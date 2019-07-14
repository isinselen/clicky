import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Friend from "./Components/Friend"
import Friends from "./Characters.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  // state = {
  //   Friends
  // };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const Friends = this.state.Friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ Friends });
  // };

  state = {
    Friends: Friends,
    score: 0,
    topScore: 0,
    clicked: [],
    topMessage: "Click an image to begin"
  };


  clickedImage = props => {
    if (this.state.clicked.includes(props.id) === false) {
      this.state.clicked.push(props.id);
      this.setState({
        score: this.state.score + 1,
      });
      if (this.state.score >= this.state.topScore) {
        this.setState((prevState) => ({ 
          topScore: prevState.score,
          topMessage:"That's right!"
         }))
      };
    }
    else {
      this.setState({
        score: 0,
        clicked: [],
        topMessage: "That's wrong!"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score })
      };
    };
  };

  handleClickedImage = event => {
    event.preventDefault()
    let value = event.currentTarget.value
    console.log(value)
    this.clickedImage(value)
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Friends List</Header>
        {this.state.Friends.map(friend => (
          <button value = {friend.id} onClick = {this.handleClickedImage}>
            <Friend 
              removeFriends={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          </button>
         
        ))}
      </Wrapper>
    );
  }
}

export default App;
