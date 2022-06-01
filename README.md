## protoc

https://github.com/protocolbuffers/protobuf/releases/

## 文档

https://github.com/pseudomuto/protoc-gen-doc/releases

```bash
protoc --doc_out=./doc ./*.proto
```

## JavaScript & TypeScript

### 安装

```bash
npm install -g protobufjs
```

### 构造 js 文件

```bash
pbjs -t json-module -w commonjs -o lebai.js ./*.proto
```

### 构造 ts 文件

```bash
pbjs -t static-module ./*.proto | pbts -o lebai.d.ts -
```
