/*
	単体用
*/

import {
	_hasScrollArea,
	_hasScrollAreaX,
	_hasScrollAreaY
} from './has-scroll-area.js';

function validation(arg){
	if(!(arg instanceof HTMLElement)){
		throw new TypeError('invalid argument');
	}
}

function hasScrollArea(element){
	validation(element);
	return _hasScrollArea.call(element);
}

function hasScrollAreaX(element){
	validation(element);
    return _hasScrollAreaX.call(element);
}

function hasScrollAreaY(element){
	validation(element);
    return _hasScrollAreaY.call(element);
}

export {
	hasScrollArea,
	hasScrollAreaX,
	hasScrollAreaY
}
