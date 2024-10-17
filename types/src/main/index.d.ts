type Person = {
    name: string;
    age: number;
};
type HandleEvent = {
    handleClick: (e: Event, cb: () => void) => void;
};
export declare const Version: string;
export declare function say(person: Person): void;
export declare function downloadData(url: string): Promise<string>;
export declare class Animal {
    name: string;
    alive: boolean;
    constructor(name: string, alive: boolean);
    log(): void;
}
export declare class Dog extends Animal {
}
export declare function click(e: Event, cb: () => void): void;
export declare function clickCallback(): void;
export declare const handle: HandleEvent;
export declare function old(): void;
export {};
