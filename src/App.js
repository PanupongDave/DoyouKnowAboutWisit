import React, { Component } from 'react';
import './App.css';
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App animated fadeIn">
        <header className="App-header">
          <img src={'https://graph.facebook.com/100002420637495/picture?width=800'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Wisit, He come from panga</h1>
        </header>
        <div id="globalContainer">
          <div id="mainContainer">
            <div id="fbProfileCover">
              <div className="cover">
                <span className="coverWrap">
                  <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/c0.136.851.315/p851x315/40077546_1968509109906424_6541088733423206400_o.jpg?_nc_cat=102&oh=283d43ddd38584b809bf91ead1f9d9be&oe=5C50A261" alt="" className="coverPhotoImg"/>
                </span>
              </div>
              <div id="fbTimelineHeadline">
                <div className="absolute"></div>
                <div className="profile_nav"></div>
                <div className="profilePicThumb">
                  <img src="https://graph.facebook.com/100002420637495/picture?width=800" className="img"/>
                </div>
                <div className="menu">
                  ทำต่อที 555555555555555555
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
