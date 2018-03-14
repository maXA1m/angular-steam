export class Game {
    id: number;
    name: string;
    nameURL: string;

    constructor();
    constructor(id: number, name: string, nameURL: string);
    constructor(id?: number, name?: string, nameURL?: string) {
        if(typeof id != 'undefined')
            this.id = id;
        if (typeof name != 'undefined')
            this.name = name;
        if (typeof nameURL != 'undefined')
            this.nameURL = nameURL;
    }
}