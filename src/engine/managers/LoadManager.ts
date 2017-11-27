export class LoadManager {

	constructor() {
		// this.loader.add('/assets/assets.json').on('progress', this.onProgressLoader).load(this.onLoaderComplete)
		this.on('progress', this.onProgressLoader);
		this.on('complete', this.onLoaderComplete);
	}

	public onProgressLoader(loader: PIXI.loaders.Loader, resource: PIXI.loaders.Resource): void {
		console.log('loading', resource.url, loader.progress);
	}

	public onLoaderComplete(): void {
		console.log('Done');
	}

}