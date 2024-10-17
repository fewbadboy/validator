export const Version = '1.0.5';
export function say(person) {
    console.log(person);
}
export async function downloadData(url) {
    return new Promise((resolve) => {
        resolve(url);
    });
}
export class Animal {
    name;
    alive;
    constructor(name, alive) {
        this.name = name;
        this.alive = alive;
    }
    log() {
    }
}
export class Dog extends Animal {
}
export function click(e, cb) {
    console.log('mouse click');
    cb();
}
export function clickCallback() {
    console.log('after at click');
}
export const handle = {
    handleClick: click
};
export function old() { }
