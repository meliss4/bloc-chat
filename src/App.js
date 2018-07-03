import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/roomList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAExoHH655BNfUIGW5-dh4IbPukafcgEyQ",
  authDomain: "bloc-chat-23fa0.firebaseapp.com",
  databaseURL: "https://bloc-chat-23fa0.firebaseio.com",
  projectId: "bloc-chat-23fa0",
  storageBucket: "bloc-chat-23fa0.appspot.com",
  messagingSenderId: "166231256085"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return ( 
      //I DONT KNOW WHERE I GOT THIS... I GOOGLED SOMETHING AND IT WORKED, BUT I HAVE NO CLUE WHAT THIS MEANS OR IF ITS RIGHT. 
      <RoomList firebase = {firebase} />
    );
  }
}

export default App;