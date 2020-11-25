import { FreeControl } from "@oasis-engine/controls";
import * as dat from "dat.gui";
import {
  Camera,
  ConstantMaterial,
  CuboidGeometry,
  GeometryRenderer,
  Script,
  SystemInfo,
  Vector3,
  Vector4,
  WebGLEngine
} from "oasis-engine";
const gui = new dat.GUI();

//-- create engine object
const engine = new WebGLEngine("o3-demo");
engine.canvas.width = window.innerWidth * SystemInfo.devicePixelRatio;
engine.canvas.height = window.innerHeight * SystemInfo.devicePixelRatio;

const scene = engine.sceneManager.activeScene;
const rootEntity = scene.createRootEntity();

//-- create camera
const cameraEntity = rootEntity.createChild("camera_entity");
cameraEntity.transform.position = new Vector3(0, 0, 50);
cameraEntity.addComponent(Camera);
const control = cameraEntity.addComponent(FreeControl);
control.movementSpeed = 50;

engine.run();

// create two renderer
const cube = rootEntity.createChild("cube1");
const cube2 = rootEntity.createChild("cube2");
cube.transform.position = new Vector3(-10, 0, 0);
cube2.transform.position = new Vector3(10, 0, 0);
const material = new ConstantMaterial(engine, "box");
material.emission = new Vector4(1, 0, 0, 1);
const material2 = new ConstantMaterial(engine, "box2");
material2.emission = new Vector4(0, 0, 1, 1);
const geometry = new CuboidGeometry(engine, 5, 5, 5);

const cubeRenderer = cube.addComponent(GeometryRenderer);
const cubeRenderer2 = cube2.addComponent(GeometryRenderer);

cubeRenderer.geometry = geometry;
cubeRenderer.material = material;

cubeRenderer2.geometry = geometry;
cubeRenderer2.material = material2;

// observe renderer-cull
const state = {
  cube1: "正常渲染",
  cube2: "正常渲染"
};

class ObserverScript extends Script {
  onUpdate() {
    state.cube1 = cubeRenderer.isVisible ? "正常渲染" : "视锥体裁剪";
    state.cube2 = cubeRenderer2.isVisible ? "正常渲染" : "视锥体裁剪";
  }
}

rootEntity.addComponent(ObserverScript);

const folder = gui.addFolder("移动视角，观察视锥体裁剪情况");
folder.add(state, "cube1").name("红色立方体").listen();
folder.add(state, "cube2").name("蓝色立方体").listen();
folder.open();