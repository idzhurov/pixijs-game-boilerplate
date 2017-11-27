import * as PIXI from 'pixi.js';
import { ScenesManager } from '../engine/managers/ScenesManager';
import { Scene } from '../engine/views/Scene';
import { LoadManager } from '../engine/managers/LoadManager';
import { StartScene } from './views/StartScene';

export class Game extends PIXI.Application {

	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: PIXI.Container;
	loader: PIXI.loaders.Loader;
	scenesManager: ScenesManager;
	loadManager: LoadManager;

	constructor() {
		super();
	}

	start() {
		this.scenesManager = new ScenesManager();
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
		document.body.appendChild(this.renderer.view);
		this.scenesManager.createScene('startScene', StartScene);
		this.stage = new PIXI.Container();
		this.stage.addChild(this.scenesManager.activateScene('startScene'));

		this.loadManager = new LoadManager();

		this.loader.add('/assets/assets.json').load(() => {this.setup()});
		this.render();
	}

	setup() {
		var building1 = PIXI.utils.TextureCache['skyscraper1.png'];
		var sprite = new PIXI.Sprite(building1)
		this.stage.addChild(sprite);
		this.render();
	}

}