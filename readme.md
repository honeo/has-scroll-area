# has-scroll-area
[honeo/has-scroll-area](https://github.com/honeo/has-scroll-area)  
[has-scroll-area](https://www.npmjs.com/package/has-scroll-area)

## なにこれ
要素にスクロール領域が存在するかどうか。

## 使い方
```sh
$ npm i -S has-scroll-area
```
```js
import {hasScrollArea, hasScrollAreaX, hasScrollAreaY} from 'has-scroll-area';

hasScrollArea(element);
> boolean
```

## prototype拡張
ご利用は計画的に。
```js
import 'has-scroll-area/register';

element.hasScrollArea();
```
