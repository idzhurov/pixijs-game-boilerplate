import { Scene } from '../../engine/views/Scene'

export class StartScene extends Scene {

	constructor() {
		super();
		this.createView();
	}

	createView() {
		console.log('Start Scene created');
		var welcome = new PIXI.Text('Hello World!');
		this.addChild(welcome);
	}

}