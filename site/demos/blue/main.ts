import { fillCanvas } from '../../../src/index';

const canvas = document.querySelector('canvas');
if (!canvas) throw new Error('Demo canvas is missing.');
fillCanvas(canvas, '#4169e1');
