/**
 * @file file description
 * @author fewbadboy
 */

import { HandleEvent, Person } from "types"

/**
 * version information 
 * @constant
 * @readonly
 * @type {string} major.minor.patch
 * @default
 */
export const Version: string = '1.0.5'

/**
 * This is a test description
 * @param { Person } person - The object of person
 */
export function say(person: Person) {
  console.log(person)
}

/**
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from
 * @returns {Promise<string>} The data from the UR
 */
export async function downloadData(url: string): Promise<string> {
  return new Promise((resolve) => {
    resolve(url)
  })
}

/**
 * Creates a new Animal.
 * @class Animal
 * @classdesc This is a description of the Animal class.
 */
export class Animal {
  name: string
  alive: boolean

  /**
   * @param name - Animal name
   * @param alive -  Animal alive
   */
  constructor(name: string, alive: boolean) {
    this.name = name
    this.alive = alive
  }

  log() {

  }
}

/**
 * @class
 * @extends Animal
 */
export class Dog extends Animal {

}

/**
 * @function
 * @param {Event} e - An event in the DOM
 * @param {clickCallback} cb -  The callback that handles the click
 */
export function click(e: Event, cb: () => void) {
  // @todo Implement this function
  console.log('mouse click')
  cb()
}

/**
 * This callback is displayed as part of the click
 * @callback
 */
export function clickCallback() {
  console.log('after at click')
}

/**
 * @namespace
 * @borrows click as handleClick
 */
export const handle: HandleEvent = {
  handleClick: click
}


/**
 * @deprecated since version 2.0.0
 * @external String
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String}
 */
export function old() {}