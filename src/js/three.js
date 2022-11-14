import React, { Component } from "react";
import * as THREE from "three";

export default class Three extends Component {
  componentDidMount() {
    const scn = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(75,
                window.innerWidth / window.innerHeight,
                0.1, 
                1000)
    cam.position.z += 20
    
    const rend = new THREE.WebGLRenderer( { antialias : true } )
                
    this.mount.appendChild(rend.domElement)
    rend.setSize(window.innerWidth, window.innerHeight)
    
            
    const tgeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const tmat = new THREE.MeshBasicMaterial( { color : 0x00ff00, wireframe : true } );
    const torus = new THREE.Mesh(tgeo, tmat);
    scn.add(torus);
    
            
    const anime = () => {
            
        requestAnimationFrame(anime)
        rend.render(scn, cam)
                
        torus.rotation.x += 0.04;
        torus.rotation.y += 0.03;
        torus.rotation.z += 0.02
            
    };
            
    anime();

  }

  render() {

    return <div ref={ref => (this.mount = ref)} />;
  
    }

}

