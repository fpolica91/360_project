import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Container from "./Components/ThreeContainer"
import axios from "axios"
const request = require('sync-request')

class App extends Component {

  picture = 'https://res.cloudinary.com/thejacex/image/upload/v1571101294/thing-gallery/testing.png.png'

  response = request('GET', 'http://localhost:5000/api/upload', {
    json: { imageUrl: "imageUrl" }
  })











  state = {
    image: this.picture,
    test: this.response,
    error: "https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg"
  }


  componentDidMount() {

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
  // getImageUrl = () => {
  //   const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  //   return axios.get(url)
  // }

  // formatter = () => {
  //   const clone = [...this.state.axiosTest]
  //   axios.all([this.getImageUrl()])
  //     .then(axios.spread(function (pokemon) {

  //     })
  //     )
  // }

  getUrl = () => {
    const body = this.state.test

  }



  render() {
    this.getUrl()


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



