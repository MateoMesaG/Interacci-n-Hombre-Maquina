function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const geometry = new THREE.TorusGeometry();
  const material = new THREE.MeshBasicMaterial({ color: colorObjeto });
  const Dona = new THREE.Mesh(geometry, material);

  scene.add(Dona);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);

    
    Dona.rotation.y += 0.008;

    renderer.render(scene, camera);
  }

  animate();
}

crearEscena("canvas3", 0x375157); 