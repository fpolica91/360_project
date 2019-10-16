import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Container from "./Components/ThreeContainer"
import axios from "axios"
const request = require('sync-request')

class App extends Component {

  picture = 'https://res.cloudinary.com/thejacex/image/upload/v1571101294/thing-gallery/testing.png.png'
  request = request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').getBody()


  state = {
    axiosTest: "",
    image: this.picture,
    test: this.request,
    error: "https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg"
  }


  async componentDidMount() {
    await this.formatter()
  }



  //  _getAssest = async () =>{
  //   await axios.get('http://localhost:5000/api/upload')
  //   .then(response =>  {
  //     let image = response.data[0].imageUrl
  //     this.setState({
  //       image: image
  //     })
  //   })
  //  }

  // ('https://pokeapi.co/api/v2/pokemon/ditto')
  getImageUrl = async () => {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
      const response = await axios.get(url)
      return response
    } catch (err) {
      console.log(err)
    }
  }

  formatter = async () => {
    await this.getImageUrl()



  }



  render() {
    console.log(this.getImageUrl())
    return (

      <div>

        <Container
          axiosTest={this.state.axiosTest}
          test={this.state.test}
          foto={this.state.image}
          errorImage={this.state.error}
        />
      </div>
    );
  }
}

export default App;



