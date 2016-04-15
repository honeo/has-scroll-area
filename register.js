/*
	prototype拡張
*/

// なぜかconst {...} from '...' だとvalueが全てundefinedになる
import Mod from './has-scroll-area';
const {
	_hasScrollArea,
	_hasScrollAreaX,
	_hasScrollAreaY
} = Mod;

Object.defineProperty(HTMLElement.prototype, 'hasScrollArea', {
    value: _hasScrollArea,
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(HTMLElement.prototype, 'hasScrollAreaX', {
    value: _hasScrollAreaX,
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(HTMLElement.prototype, 'hasScrollAreaY', {
    value: _hasScrollAreaY,
    writable: true,
    configurable: true,
    enumerable: false
});

export default
	typeof HTMLElement.prototype.hasScrollArea==='function' &&
	typeof HTMLElement.prototype.hasScrollAreaX==='function' &&
	typeof HTMLElement.prototype.hasScrollAreaY==='function';
