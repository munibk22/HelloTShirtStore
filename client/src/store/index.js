import {proxy} from 'valtio';

const state = proxy({
intro: true,
color: '#EFBD48',
isLogoTexture: true,
isFullTesture: false,
logoDecal: './threejs.png',
fullDecal: './threejs.pnpg',
});

export default state;