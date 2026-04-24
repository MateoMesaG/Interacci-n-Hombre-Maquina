function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
  const material = new THREE.MeshBasicMaterial({ color: colorObjeto });
  const Torus = new THREE.Mesh(geometry, material);

  scene.add(Torus);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);

    Torus.rotation.x += 0.001;
    Torus.rotation.y += 0.001;

    renderer.render(scene, camera);
  }

  animate();
}

crearEscena("canvas1", 0xBA783F); 