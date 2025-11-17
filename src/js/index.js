import GUI from "lil-gui";
import * as THREE from "three";

((d, w) => {
  const canvas = document.querySelector("canvas.webgl");
  const scene = new THREE.Scene();

  const colorMain = {
    color: "white",
  };

  //Texture
  const textureLoader = new THREE.TextureLoader();
  const textureGradient = textureLoader.load("img/gradients/3.jpg");
  textureGradient.magFilter = THREE.NearestFilter;
  textureGradient.minFilter = THREE.NearestFilter;

  //Lights
  const dlight = new THREE.DirectionalLight(colorMain.color, 1);
  dlight.position.set(5, 5, 5);
  scene.add(dlight);

  const materialMesh = new THREE.MeshToonMaterial({
    wireframe: false,
    color: colorMain.color,
    gradientMap: textureGradient,
  });

  let meshArray = [];

  const geometry1 = new THREE.DodecahedronGeometry(6, 0);
  const geometry2 = new THREE.TorusGeometry(3, 2, 21, 26, 8);
  const geometry3 = new THREE.ConeGeometry(3, 6, 32);

  const mesh1 = new THREE.Mesh(geometry1, materialMesh);
  const mesh2 = new THREE.Mesh(geometry2, materialMesh);
  const mesh3 = new THREE.Mesh(geometry3, materialMesh);

  meshArray.push(mesh1, mesh2, mesh3);

  let distance = 20;

  mesh1.position.x = w.innerWidth * 0.006;
  mesh2.position.x = -w.innerWidth * 0.006;
  mesh3.position.x = w.innerWidth * 0.006;
  mesh2.position.y = -distance * 1;
  mesh3.position.y = -distance * 2;

  scene.add(mesh1, mesh2, mesh3);

  //galaxy
  const points = 200;
  const pointsPos = new Float32Array(points * 3);
  const galaxy = () => {
    const galaxyBuffer = new THREE.BufferGeometry();
    for (let index = 0; index < points; index++) {
      pointsPos[index * 3] = (Math.random() - 0.5) * 60;
      pointsPos[index * 3 + 1] = distance * 0.5 - Math.random() * 70;
      pointsPos[index * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    galaxyBuffer.setAttribute(
      "position",
      new THREE.BufferAttribute(pointsPos, 3)
    );

    const pointsMaterial = new THREE.PointsMaterial({
      color: colorMain.color,
      sizeAttenuation: true,
      size: 0.3,
    });

    const point = new THREE.Points(galaxyBuffer, pointsMaterial);
    scene.add(point);
  };

  galaxy();
  const render = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: 1 });
  render.setSize(w.innerWidth, w.innerHeight);
  render.setPixelRatio(Math.min(w.devicePixelRatio, 2));

  const camera = new THREE.PerspectiveCamera(
    75,
    w.innerWidth / innerHeight,
    0.1,
    100
  );
  camera.position.z = 15;
  scene.add(camera);
  render.render(scene, camera);

  //scroll
  w.addEventListener("scroll", (e) => {
    camera.position.y = (-w.scrollY / w.innerHeight) * distance;
  });

  //resize
  w.addEventListener("resize", () => {
    camera.aspect = w.innerWidth / w.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize(w.innerWidth, w.innerHeight);
    render.render(scene, camera);
  });
  //Mouse
  w.addEventListener("mousemove", (e) => {
    camera.position.x = e.screenX * 0.002;
    camera.position.y =
      (-w.scrollY / w.innerHeight) * distance + e.screenY * 0.004;
  });

  const gui = new GUI({ title: "Color Control" });
  gui.addColor(materialMesh, "color");

  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    meshArray.forEach((element) => {
      element.rotation.z = elapsedTime * 0.1;
      element.rotation.x = elapsedTime * 0.1;
      element.rotation.y = elapsedTime * 0.1;
    });

    render.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
})(document, window);
