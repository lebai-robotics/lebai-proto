
```Javascript
// 构造js
pbjs -t json-module -w commonjs -o lebai.js ./*.proto
```
```Javascript
//构造ts
pbjs -t static-module ./*.proto | pbts -o lebai.d.ts -
```