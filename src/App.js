import React, {Component} from 'react';
import Wrapper from "./Components/Wrapper";
// import Header from "./Components/Header";
import Friend from "./Characters.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Friend
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Friend = this.state.Friend.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Friend });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Header>Friends List</Header> */}
        {this.state.Friend.map(friend => (
          <Friend
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
