import { fillCanvas } from '../../../src/index';

const canvas = document.querySelector('canvas');
if (!canvas) throw new Error('Demo canvas is missing.');
fillCanvas(canvas, '#ff7f50');
