function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const geometry = new THREE.DodecahedronGeometry();
  const material = new THREE.MeshBasicMaterial({ color: colorObjeto });
  const furbol = new THREE.Mesh(geometry, material);

  scene.add(furbol);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);

    furbol.rotation.x += 0.001;
    furbol.rotation.y += 0.001;

    renderer.render(scene, camera);
  }

  animate();
}

crearEscena("canvas2", 0x56B33B); 