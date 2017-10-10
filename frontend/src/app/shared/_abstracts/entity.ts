export class Entity {
	id: number;

	public update(obj: any){
			Object.keys(obj).forEach(key => {
					this[key] = obj[key];
			});
	}
	public static update(obj: Entity, params: any){
		Object.keys(params).forEach(key => {
				obj[key] = params[key];
		});
	}
}
