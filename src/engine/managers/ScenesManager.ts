import { Scene } from '../views/Scene';

export class ScenesManager {
	
	protected currentScene: PIXI.Container;
	public scenes: any = {};

	constructor() {
		
	}

	public createScene(sceneId: string, scene: new () => Scene = Scene): void {
		// TODO: Handler for existing scenes
		const createdScene = new scene();
		this.scenes[sceneId] = createdScene;
	}

	public activateScene(sceneId: string): Scene {
		return this.scenes[sceneId];
	}

	// public static createScene(id: string, TScene: new () => Scene = Scene): Scene {
 //            if (ScenesManager.scenes[id]) return undefined;

 //            var scene = new TScene();

 //            ScenesManager.scenes[id] = scene;

 //            return scene;
 //        }

}