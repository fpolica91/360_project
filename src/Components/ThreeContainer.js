import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import axios from "axios"


class Container extends Component {


state ={
   image:""
}

  async componentWillMount(){
   await this._getAssest()
    let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)
      camera.position.z = 1;
      camera.target = new THREE.Vector3(0,0,0)
      let renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setPixelRatio( window.devicePixelRatio );
      document.body.appendChild( renderer.domElement );
      let loader = new THREE.TextureLoader()
  
      
        // ------ CONDITIONALLY RENDERING IMAGES///

        
    
        let material = new THREE.MeshBasicMaterial({     
        map: loader.load(this.state.image)
      }) 





      const geometry = new THREE.SphereGeometry(500, 60, Math.pi *2);
      geometry.scale(-1, 1, 1)

      let mesh = new THREE.Mesh(
        geometry, material
    )
    scene.add(mesh)
    var light = new THREE.PointLight( 0xffffff, 1, 0 )
    light.position.set(1, 1, 100 );
    scene.add(light)
    const controls = new OrbitControls(camera, this.mount)
   
    function animate (){
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      window.addEventListener('resize', onWindowResize, false)
    }

    // will adjust according to size of screen
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );

    }

  
      animate()

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
             <div ref={ref => (this.mount) = ref}/>
        </div>
    );
  }
}
 
export default Container;

