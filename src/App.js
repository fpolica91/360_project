import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Container from "./Components/ThreeContainer"
import axios from "axios"

class App extends Component {
  state = { 
    image:"",
    // image :'https://l13.alamy.com/360/R1GEFW/spherical-360-degree-equirectangular-panorama-of-funchal-marina-marina-do-funchal-madeira-R1GEFW.jpg',
    error:  "https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg"
   }

    componentDidMount() {
      this._getAssest()
   }


   _getAssest = () =>{
    return axios.get('http://localhost:5000/api/upload')
    .then(response =>  {
      let image = response.data[0].imageUrl
      console.log(image)
      this.setState({
        image: image
      })
    })
   }

  render() { 
    return ( 
      <div>
        <Container
          image={this.state.image}
          errorImage={this.state.error}
        /> 
      </div>
     );
  }
}
 
export default App;
 


