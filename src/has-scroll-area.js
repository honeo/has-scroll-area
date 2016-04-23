/*
	本体

    引数の要素に縦軸、横軸のスクロールバーが出ているかをbooleanで返す
        overflow: scroll;で最初から出ていても本来出る長さかどうかで判断する。

	this = element
*/

function _hasScrollAreaX(){
    return this.clientWidth < this.scrollWidth;
}

function _hasScrollAreaY(){
    return this.clientHeight < this.scrollHeight;
}

function _hasScrollArea(){
	return _hasScrollAreaX.call(this) || _hasScrollAreaY.call(this);
}

export {
	_hasScrollArea,
	_hasScrollAreaX,
	_hasScrollAreaY
}
