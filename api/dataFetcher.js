let fetcher = null;
class Fetcher {
	constructor() {
		if(fetcher) return fetcher;
		fetcher = this;
	}

	async getData(api, handle) {
		const data = await fetch(api + handle);
		return data;
	}

	async getJSONData(api, handle) {
		const dataJSON = await this.getData(api, handle).then((data) => data.json());
		return dataJSON;
	}
};

fetcher = new Fetcher();