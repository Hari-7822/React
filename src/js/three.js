import React from 'react';
import { Canvas, PerspectiveCamera } from '@react-three/fiber'
import * as THREE from 'three';

export default function Bg() {

    return (

        <div id = "canvas">
            <Canvas>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>

    )

}


const scn = new THREE.Scene()
const cam = new PerspectiveCamera(75, Width / Height, 0.1, 1000)
const rend = new THREE.WebGLRenderer()
rend.setSize(width, height)

document.querySelector('#canvas').appendChild(rend.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()

scn.add(mesh)

function anime() {

    requestAnimationFrame(anime)

    rend.render(scn, cam)

}

anime()