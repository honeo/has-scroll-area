/*
	単体用
*/

// なぜかconst {...} from '...' だとvalueが全てundefinedになる
import Mod from './has-scroll-area';
const {
	_hasScrollArea,
	_hasScrollAreaX,
	_hasScrollAreaY
} = Mod;

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

export default {
	hasScrollArea,
	hasScrollAreaX,
	hasScrollAreaY
}
