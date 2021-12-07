import React, {Component} from 'react';
import {Howl} from "howler";  // Howler JS Audio library
import Punch from "../../audioclips/punch.mp3" // Local sound files need to be imported

 
export class Sounds extends Component {
  // soundPlay function plays the sound
  soundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  render(){
  return (
  <div className="Sounds">
    <h2>Sounds</h2>

    <div>
      <button onClick={() => this.soundPlay(Punch)}>Punch </button>
    </div>

 
  </div>
    );
}
}