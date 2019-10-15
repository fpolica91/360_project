import React, { Component } from 'react';
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


class Container extends Component {



 constructor(props){
    super(props)
    
    this.state ={
        pic: null
    }
  
      let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)
      camera.position.z = 1;
      camera.target = new THREE.Vector3(0,0,0)
      let renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setPixelRatio( window.devicePixelRatio );
      document.body.appendChild( renderer.domElement );
      let loader = new THREE.TextureLoader()
      let material;

      
        // ------ CONDITIONALLY RENDERING IMAGES///
        material = new THREE.MeshBasicMaterial({
        map: loader.load('https://res.cloudinary.com/thejacex/image/upload/v1571101294/thing-gallery/testing.png.png')
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

   componentDidMount() {
     this.setState({
          pic: this.props.image
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

