import * as PIXI from 'pixi.js';

export class Game extends PIXI.Application {

	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: PIXI.Container;

	start() {
		this.renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
		document.body.appendChild(this.renderer.view);
	}

}