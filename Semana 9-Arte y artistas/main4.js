function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight, 
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);


  const heartShape = new THREE.Shape();

  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, 0, -1, -1, -2, 0);
  heartShape.bezierCurveTo(-3, 1, -2, 3, 0, 4);
  heartShape.bezierCurveTo(2, 3, 3, 1, 2, 0);
  heartShape.bezierCurveTo(1, -1, 0, 0, 0, 0);

  const geometry = new THREE.ShapeGeometry(heartShape);

  const material = new THREE.MeshBasicMaterial({
    color: colorObjeto, 
    side: THREE.DoubleSide
  });

  const Corazon = new THREE.Mesh(geometry, material);


  Corazon.scale.set(0.8, 0.8, 0.8);
  Corazon.position.set(0, 1, 0);
  Corazon.rotation.x = Math.PI;

  scene.add(Corazon);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    
    Corazon.rotation.y += 0.005; 

    renderer.render(scene, camera);
  }

  animate();
}


crearEscena("canvas4", 0xFF0000);