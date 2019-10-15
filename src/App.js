import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Container from "./Components/ThreeContainer"
import axios from "axios"

class App extends Component {
  state = { 
    image : null,
    error:  "https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg"
   }

  async componentDidMount () {
   await this._getAssest()
  }


   _getAssest = async () =>{
    await axios.get('http://localhost:5000/api/upload')
    .then(response =>  {
      let image = response.data[0].imageUrl
      this.setState({
        image: image
      })
    })
   }

  render() { 

    return ( 
      <div>
        <Container
          {...this.props}
          foto={this.state.image}
          errorImage={this.state.error}
        /> 
      </div>
     );
  }
}
 
export default App;
 


