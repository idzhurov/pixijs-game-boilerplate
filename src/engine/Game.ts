import * as PIXI from 'pixi.js';

export class Game extends PIXI.Application {

	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
	stage: PIXI.Container;

	start() {
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
		var welcome = new PIXI.Text('Hello World!');
		this.stage.addChild(welcome);

		this.renderer.render(this.stage);
	}

}