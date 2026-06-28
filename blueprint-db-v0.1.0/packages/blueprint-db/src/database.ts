import Dexie from 'dexie';
export class BlueprintDatabase extends Dexie {constructor(){super('BlueprintDB');}}
export const db=new BlueprintDatabase();
