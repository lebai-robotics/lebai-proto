/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  lebai: {
    nested: {
      scene: {
        nested: {
          SceneKind: {
            values: {
              UNSPECIFIED: 0,
              TIME_LINE: 1,
              BLOCKLY: 2,
              LUA: 3,
              TREE: 4,
              PYTHON: 5
            }
          },
          SceneModel: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              status: {
                type: "sql.DataStatus",
                id: 2
              },
              top: {
                type: "uint32",
                id: 3
              },
              userId: {
                type: "uint32",
                id: 4
              },
              createdAt: {
                type: "google.protobuf.Timestamp",
                id: 5
              },
              updatedAt: {
                type: "google.protobuf.Timestamp",
                id: 6
              },
              name: {
                type: "string",
                id: 11
              },
              kind: {
                type: "SceneKind",
                id: 12
              },
              source: {
                type: "string",
                id: 13
              },
              code: {
                type: "string",
                id: 14
              },
              checkFirst: {
                type: "bool",
                id: 15
              },
              first: {
                type: "string",
                id: 16
              },
              loopTo: {
                type: "uint32",
                id: 17
              },
              debug: {
                type: "string",
                id: 18
              }
            }
          },
          SceneModelField: {
            oneofs: {
              field: {
                oneof: [
                  "id",
                  "status",
                  "top",
                  "userId",
                  "createdAt",
                  "updatedAt",
                  "name",
                  "kind",
                  "source",
                  "code",
                  "checkFirst",
                  "first",
                  "loopTo",
                  "debug"
                ]
              }
            },
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              status: {
                type: "sql.DataStatus",
                id: 2
              },
              top: {
                type: "uint32",
                id: 3
              },
              userId: {
                type: "uint32",
                id: 4
              },
              createdAt: {
                type: "google.protobuf.Timestamp",
                id: 5
              },
              updatedAt: {
                type: "google.protobuf.Timestamp",
                id: 6
              },
              name: {
                type: "string",
                id: 11
              },
              kind: {
                type: "SceneKind",
                id: 12
              },
              source: {
                type: "string",
                id: 13
              },
              code: {
                type: "string",
                id: 14
              },
              checkFirst: {
                type: "bool",
                id: 15
              },
              first: {
                type: "string",
                id: 16
              },
              loopTo: {
                type: "uint32",
                id: 17
              },
              debug: {
                type: "string",
                id: 18
              }
            }
          },
          SceneSaveRequest: {
            fields: {
              ids: {
                type: "sql.Ids",
                id: 1
              },
              fields: {
                rule: "repeated",
                type: "SceneModelField",
                id: 2
              }
            }
          },
          SceneListRequest: {
            fields: {
              filter: {
                type: "sql.ListFilter",
                id: 1
              },
              exact: {
                rule: "repeated",
                type: "SceneModelField",
                id: 2
              }
            }
          },
          SceneListResponse: {
            fields: {
              list: {
                rule: "repeated",
                type: "SceneModel",
                id: 1
              },
              pager: {
                type: "sql.Pagination",
                id: 2
              }
            }
          },
          SceneRunRequest: {
            fields: {
              id: {
                type: "sql.IdOrKey",
                id: 1
              },
              isMain: {
                type: "bool",
                id: 2
              }
            }
          },
          SceneRunResponse: {
            fields: {
              task: {
                type: "uint32",
                id: 1
              }
            }
          },
          SceneService: {
            methods: {
              SaveScene: {
                requestType: "SceneSaveRequest",
                responseType: "SceneModel"
              },
              LoadScene: {
                requestType: "sql.IndexRequest",
                responseType: "SceneModel"
              },
              LoadSceneList: {
                requestType: "SceneListRequest",
                responseType: "SceneListResponse"
              },
              Scene: {
                requestType: "SceneRunRequest",
                responseType: "SceneRunResponse"
              }
            }
          }
        }
      },
      sql: {
        nested: {
          IdOrKey: {
            oneofs: {
              index: {
                oneof: [
                  "id",
                  "key"
                ]
              }
            },
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              key: {
                type: "string",
                id: 2
              }
            }
          },
          Ids: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              ids: {
                rule: "repeated",
                type: "uint32",
                id: 2
              }
            }
          },
          DateFilter: {
            fields: {
              start: {
                type: "google.protobuf.Timestamp",
                id: 1
              },
              end: {
                type: "google.protobuf.Timestamp",
                id: 2
              }
            }
          },
          Pagination: {
            fields: {
              page: {
                type: "uint32",
                id: 1
              },
              size: {
                type: "uint32",
                id: 2
              },
              total: {
                type: "uint32",
                id: 3
              }
            }
          },
          ListFilter: {
            fields: {
              exact: {
                rule: "repeated",
                type: "string",
                id: 1
              },
              ids: {
                rule: "repeated",
                type: "uint32",
                id: 2
              },
              keyword: {
                type: "string",
                id: 3
              },
              created: {
                type: "DateFilter",
                id: 4
              },
              updated: {
                type: "DateFilter",
                id: 5
              },
              order: {
                type: "string",
                id: 11
              },
              asc: {
                type: "bool",
                id: 12
              },
              pager: {
                type: "Pagination",
                id: 13
              }
            }
          },
          DataStatus: {
            values: {
              NORMAL: 0,
              READ_ONLY: 1,
              HIDDEN: 2,
              DELETED: 3
            }
          },
          IndexRequest: {
            fields: {
              id: {
                type: "IdOrKey",
                id: 1
              }
            }
          },
          IdRequest: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
