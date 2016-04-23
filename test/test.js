console.log('has-scroll-area: test');

// Modules
require("babel-register")({
	ignore: false,
	presets: ['es2015', 'stage-0']
});
const hasSameContents = require('has-same-contents').default;
const path = require('path');
const Nightmare = require('nightmare');

// var
const pagepath = 'file://' + path.join(__dirname, 'test.html');
const nightmare = Nightmare({
	show: true,
	nodeIntegration: true
});

nightmare
	.goto(pagepath)
	.evaluate( ()=>{
		require('babel-polyfill');
		require("babel-register")({
			presets: ['es2015', 'stage-0']
		});
		const isRegister = require('../src/register').default;
		const obj = require('../');
		const hasScrollAreaX = obj.hasScrollAreaX;
		const hasScrollAreaY = obj.hasScrollAreaY;
		const hasScrollArea = obj.hasScrollArea;

		const checkObj = {
			hasScrollArea: typeof obj.hasScrollArea==='function',
			hasScrollAreaX: typeof obj.hasScrollAreaX==='function',
			hasScrollAreaY: typeof obj.hasScrollAreaY==='function',
			isRegister,
			prototype_hasScrollArea: typeof HTMLElement.prototype.hasScrollArea==='function',
			prototype_hasScrollAreaX: typeof HTMLElement.prototype.hasScrollAreaX==='function',
			prototype_hasScrollAreaY: typeof HTMLElement.prototype.hasScrollAreaY==='function',
		};
		Object.keys(checkObj).forEach( (key)=>{
			if(!checkObj[key]){
				throw new Error(`failed: ${key}`);
			}else{
				console.log(`success: ${key}`);
			}
		});
		return true;
	})
	.evaluate( ()=>{
		const obj = require('../');
		const hasScrollArea = obj.hasScrollArea;
		const hasScrollAreaX = obj.hasScrollAreaX;
		const hasScrollAreaY = obj.hasScrollAreaY;
		const pArr = Array.from(document.querySelectorAll('body > p'));
		const divArr = Array.from(document.querySelectorAll('body > div'));
		const pArr_result = pArr.map( (element)=>{
			return {
				all: hasScrollArea(element),
				x: hasScrollAreaX(element),
				y: hasScrollAreaY(element)
			}
		});
		const pArr_prototype_result = pArr.map( (element)=>{
			return {
				all: element.hasScrollArea(),
				x: element.hasScrollAreaX(),
				y: element.hasScrollAreaY()
			}
		});
		const divArr_result = divArr.map( (element)=>{
			return {
				all: hasScrollArea(element),
				x: hasScrollAreaX(element),
				y: hasScrollAreaY(element)
			}
		});
		const divArr_prototype_result = divArr.map( (element)=>{
			return {
				all: element.hasScrollArea(),
				x: element.hasScrollAreaX(),
				y: element.hasScrollAreaY()
			}
		});
		return {divArr_result, divArr_prototype_result, pArr_result, pArr_prototype_result}
	})
	.end()
	.then( (arg)=>{
		const checkArr = [
			{all: false, x: false, y: false},
			{all: false, x: false, y: false},
			{all: true, x: true, y: false},
			{all: true, x: false, y: true},
			{all: true, x: true, y: true}
		];
		const divArr_result = arg.divArr_result;
		const divArr_prototype_result = arg.divArr_prototype_result;
		const pArr_result = arg.pArr_result;
		const pArr_prototype_result = arg.pArr_prototype_result;
		for(var i=0, len=checkArr.length; i<len; i++){
			const result = hasSameContents(
				checkArr[i],
				divArr_result[i],
				divArr_prototype_result[i],
				pArr_result[i],
				pArr_prototype_result[i]
			);
			if(result){
				console.log(`success: ${i}`);
			}else{
				throw new Error(`failed: ${i}`);
			}
		}
	})
	.catch( (error)=>{
		console.log('catch', error);
		throw new Error(error);
	});
