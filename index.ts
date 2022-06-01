// const protobuf = require("protobufjs");
// const serializer = require("proto3-json-serializer");
// import { SceneListRequest } from "./api/scene/scene";

// const pb_struct_namespace = protobuf.common.get("google/protobuf/struct.proto");
// const pb_struct = protobuf.Root.fromJSON(pb_struct_namespace);
// const Value = pb_struct.lookupType("google.protobuf.Value");
// console.log(SceneListRequest);

// const json = '{"a": 1}';
// const deserialized = serializer.fromProto3JSON(Value, JSON.parse(json));
// console.log(deserialized);

// const serialized = serializer.toProto3JSON(SceneListRequest);
// console.log(JSON.stringify(serialized));

let serializer = require("proto3-json-serializer");
let pb = require("./lebai");

let scene = pb.lookup("lebai.scene");
let sql = pb.lookup("lebai.sql");
let req = scene.SceneListRequest.create({
  filter: sql.ListFilter.create({ keyword: "123", asc: true }),
  exact: [scene.SceneModelField.create({ id: 1, name: "高桥" })],
});

// let req = sql.IndexRequest.create({
//   id: sql.IdOrKey.create({ id: 1 }),
// });

const serialized = serializer.toProto3JSON(req);
console.log(JSON.stringify(serialized));
