import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


////Luces

const light0 = new THREE.AmbientLight( 0x404040,  5); // soft white light
scene.add( light0 );

const light1 = new THREE.DirectionalLight( 0xFAFAFA, 5 );
scene.add( light1 );
light1.position.set( 0, 10, 15 );
const helper1 = new THREE.DirectionalLightHelper( light1, 1 );
scene.add( helper1 );





//Geometrias

const geometry0 = new THREE.BoxGeometry( 5, 0.5, 1 );
const geometry1 = new THREE.PlaneGeometry( 16, 10 );
const geometry2 = new THREE.PlaneGeometry( 10, 10 );
const geometry3 = new THREE.PlaneGeometry( 15, 9 );
const geometry4 = new THREE.CylinderGeometry( 0.5, 0.5, 10, 5 );

//materiales

//textura escalera
const loader0 = new THREE.TextureLoader();
const texture0 = loader0.load( 'https://st2.depositphotos.com/4072575/10713/i/450/depositphotos_107136656-stock-photo-the-red-carpet-background-and.jpg' );
const material0 = new THREE.MeshBasicMaterial( { map: texture0,side: THREE.DoubleSide, color: 0x6A0400 } );

//textura pared
const loader1 = new THREE.TextureLoader();
const texture1 = loader1.load( 'https://thumbs.dreamstime.com/b/textura-del-ladrillo-43904406.jpg' );
const material1 = new THREE.MeshBasicMaterial( { map: texture1,side: THREE.DoubleSide , color: 0x894C2F} );

//textura suelo
const loader2 = new THREE.TextureLoader();
const texture2 = loader2.load( 'https://veja.abril.com.br/wp-content/uploads/2016/12/xadrez-tabuleiro.gif' );
const material2 = new THREE.MeshBasicMaterial( { map: texture2,side: THREE.DoubleSide, color: 0x808080 } );

//textura pilares
const loader3 = new THREE.TextureLoader();
const texture3 = loader3.load( 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR32buo4HkzZBMstgMUEpW1ydkypX0Lti2SM42aCqaue_fKBIlG' );
const material3 = new THREE.MeshBasicMaterial( { map: texture3,side: THREE.DoubleSide, color: 0xB5B5B5 } );

//Personajes

//escaleras
const escalera0 = new THREE.Mesh( geometry0, material0 );
const escalera1 = new THREE.Mesh( geometry0, material0 );
const escalera2 = new THREE.Mesh( geometry0, material0 );
const escalera3 = new THREE.Mesh( geometry0, material0 );
const escalera4 = new THREE.Mesh( geometry0, material0 );
const escalera5 = new THREE.Mesh( geometry0, material0 );
const escalera6 = new THREE.Mesh( geometry0, material0 );
const escalera7 = new THREE.Mesh( geometry0, material0 );
const escalera8 = new THREE.Mesh( geometry0, material0 );
const escalera9 = new THREE.Mesh( geometry0, material0 );
const escalera10 = new THREE.Mesh( geometry0, material0 );
const escalera11 = new THREE.Mesh( geometry0, material0 );
const escalera12 = new THREE.Mesh( geometry0, material0 );
const escalera13 = new THREE.Mesh( geometry0, material0 );
const escalera14 = new THREE.Mesh( geometry0, material0 );
const escalera15 = new THREE.Mesh( geometry0, material0 );

//Pared
const Pared0 = new THREE.Mesh( geometry1, material1 );
const Pared1 = new THREE.Mesh( geometry1, material1 );
const Pared2 = new THREE.Mesh( geometry2, material1 );
const Pared3 = new THREE.Mesh( geometry2, material1 );

//suelo
const Suelo = new THREE.Mesh( geometry3, material2 );

//pilares
const Pilar0 = new THREE.Mesh( geometry4, material3 );
const Pilar1 = new THREE.Mesh( geometry4, material3 );

//agregar a la escena

//escaleras
scene.add( escalera0 );
scene.add( escalera1 );
escalera1.position.set( 0, 0.5, -1 );
scene.add( escalera2 );
escalera2.position.set( 0, 1, -2 );
scene.add( escalera3 );
escalera3.position.set( 0, 1.5, -3 );
scene.add( escalera4 );
escalera4.position.set( 0, 2, -4 );
scene.add( escalera5 );
escalera5.position.set( 0, 2.5, -5 );
scene.add( escalera6 );
escalera6.position.set( 0, 3, -6 );
scene.add( escalera7 );
escalera7.position.set( 0, 3.5, -7 );
scene.add( escalera8 );
escalera8.position.set( 0, 4, -8 );
scene.add( escalera9 );
escalera9.position.set( 0, 4.5, -9 );
scene.add( escalera10 );
escalera10.position.set( 0, 5, -10 );
scene.add( escalera11 );
escalera11.position.set( 0, 5.5, -11 );
scene.add( escalera12 );
escalera12.position.set( 0, 6, -12 );
scene.add( escalera13 );
escalera13.position.set( 0, 6.5, -13 );
scene.add( escalera14 );
escalera14.position.set( 0, 7, -14 );
scene.add( escalera15 );
escalera15.position.set( 0, 7.5, -15 );

//Paredes
scene.add( Pared0 );
Pared0.rotation.y = -Math.PI/2;
Pared0.position.set( -2.5, 4.75, -7.5 );
scene.add( Pared1 );
Pared1.rotation.y = -Math.PI/2;
Pared1.position.set( 2.5, 4.75, -7.5 );
scene.add( Pared2 );
Pared2.rotation.y = -Math.PI/1.5;
Pared2.position.set( -5, 4.75, 4.82 );
scene.add( Pared3 );
Pared3.rotation.y = -Math.PI/-1.5;
Pared3.position.set( 5, 4.75, 4.82 );

//suelo
scene.add( Suelo );
Suelo.rotation.x = -Math.PI/2;
Suelo.position.set( 0, -0.25, 4.95 );

//pilares
scene.add( Pilar0 );
Pilar0.position.set( -2.68, 4.75, 0.9 );
scene.add( Pilar1 );
Pilar1.position.set( 2.68, 4.75, 0.9 );

//MARIO 

const loaderMario = new GLTFLoader();

loaderMario.load('Assets/mario_64_mario.glb', function (gltf) {

    const mario = gltf.scene;

    // ESCALA
    mario.scale.set(1.5, 1.5, 1.5);

    // POSICIÓN
    mario.position.set(0, 3, 2);

    scene.add(mario);
    

});


//camera

camera.position.z = 15;

const controls = new OrbitControls( camera, renderer.domElement );
// controls.update() must be called after any manual changes to the camera's transformd
controls.update();



function animate( time ) {

  //Figura2.rotation.x = time / 2000;
  //Figura2.rotation.y = time / 1000;

    //spotLight.rotation.y = time / 1000;

     //required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
  renderer.render( scene, camera );

}