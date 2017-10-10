import { module } from 'angular';


import {Greeter} from './Greeter';

const example = new Greeter('World');

export let CocoModule = module('cocoModule', []);

console.log(example.greet());