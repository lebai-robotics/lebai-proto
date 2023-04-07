/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  lebai: {
    nested: {
      backup: {
        nested: {
          BackupInfo: {
            fields: {
              system: {
                type: "system.SystemInfo",
                id: 1
              },
              robot: {
                type: "system.RobotInfo",
                id: 2
              },
              hardware: {
                type: "system.HardwareInfo",
                id: 3
              },
              software: {
                type: "system.SoftwareInfo",
                id: 4
              },
              timestamp: {
                type: "google.protobuf.Timestamp",
                id: 21
              },
              option: {
                type: "Options",
                id: 22
              }
            }
          },
          Options: {
            fields: {
              arm: {
                type: "bool",
                id: 11
              },
              config: {
                type: "bool",
                id: 21
              },
              data: {
                type: "bool",
                id: 22
              },
              file: {
                type: "bool",
                id: 23
              },
              docker: {
                type: "bool",
                id: 24
              }
            }
          },
          BackupRequest: {
            fields: {
              file: {
                type: "string",
                id: 1
              },
              option: {
                type: "Options",
                id: 10
              }
            }
          },
          GetBackupInfoRequest: {
            fields: {
              file: {
                type: "string",
                id: 1
              }
            }
          },
          RestoreRequest: {
            fields: {
              file: {
                type: "string",
                id: 1
              },
              option: {
                type: "Options",
                id: 10
              }
            }
          },
          BackupService: {
            methods: {
              Backup: {
                requestType: "BackupRequest",
                responseType: "google.protobuf.Empty"
              },
              GetBackupInfo: {
                requestType: "GetBackupInfoRequest",
                responseType: "BackupInfo"
              },
              Restore: {
                requestType: "RestoreRequest",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      system: {
        nested: {
          HelloData: {
            fields: {
              data: {
                type: "string",
                id: 1
              }
            }
          },
          MemoryInfo: {
            fields: {
              used: {
                type: "uint64",
                id: 11
              },
              total: {
                type: "uint64",
                id: 12
              },
              usedSwap: {
                type: "uint64",
                id: 21,
                options: {
                  json_name: "used_swap"
                }
              },
              totalSwap: {
                type: "uint64",
                id: 22,
                options: {
                  json_name: "total_swap"
                }
              }
            }
          },
          DiskInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              used: {
                type: "uint64",
                id: 11
              },
              total: {
                type: "uint64",
                id: 12
              }
            }
          },
          NetworkKind: {
            values: {
              UNKNOWN: 0,
              LOOPBACK: 1,
              ETHERNET: 2,
              WIRELESS: 3,
              CELLULAR: 4,
              USB: 5,
              DOCKER: 11
            }
          },
          NetworkInfo: {
            fields: {
              ifname: {
                type: "string",
                id: 1
              },
              kind: {
                type: "NetworkKind",
                id: 2
              },
              isVirtual: {
                type: "bool",
                id: 3,
                options: {
                  json_name: "is_virtual"
                }
              },
              mac: {
                type: "string",
                id: 9
              },
              ips: {
                rule: "repeated",
                type: "string",
                id: 11
              },
              gateway: {
                type: "string",
                id: 21
              },
              netmask: {
                type: "string",
                id: 22
              }
            }
          },
          CpuInfo: {
            fields: {
              brand: {
                type: "string",
                id: 1
              },
              num: {
                type: "uint32",
                id: 2
              },
              frequency: {
                type: "uint64",
                id: 3
              },
              temperature: {
                type: "float",
                id: 21
              },
              critical: {
                type: "float",
                id: 22
              }
            }
          },
          SystemInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              kernelVersion: {
                type: "string",
                id: 2,
                options: {
                  json_name: "kernel_version"
                }
              },
              osVersion: {
                type: "string",
                id: 3,
                options: {
                  json_name: "os_version"
                }
              },
              hostName: {
                type: "string",
                id: 4,
                options: {
                  json_name: "host_name"
                }
              },
              memory: {
                type: "MemoryInfo",
                id: 11
              },
              disks: {
                rule: "repeated",
                type: "DiskInfo",
                id: 21
              },
              networks: {
                rule: "repeated",
                type: "NetworkInfo",
                id: 31
              },
              cpu: {
                type: "CpuInfo",
                id: 41
              }
            }
          },
          SetVirtualIpRequest: {
            fields: {
              ifname: {
                type: "string",
                id: 1
              },
              ip: {
                type: "string",
                id: 11
              },
              netmask: {
                type: "string",
                id: 22
              }
            }
          },
          BoxModel: {
            values: {
              LM3: 0,
              LA3: 10
            }
          },
          ArmModel: {
            values: {
              J6M1: 0,
              J6L1: 1,
              J5L1: 11
            }
          },
          RobotInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              mac: {
                type: "string",
                id: 3
              },
              boxModel: {
                type: "BoxModel",
                id: 21,
                options: {
                  json_name: "box_model"
                }
              },
              boxSn: {
                type: "string",
                id: 22,
                options: {
                  json_name: "box_sn"
                }
              },
              armModel: {
                type: "ArmModel",
                id: 31,
                options: {
                  json_name: "arm_model"
                }
              },
              armSn: {
                type: "string",
                id: 32,
                options: {
                  json_name: "arm_sn"
                }
              }
            }
          },
          DeviceInfo: {
            fields: {
              invalid: {
                type: "bool",
                id: 1
              },
              sn: {
                type: "string",
                id: 11
              },
              version: {
                type: "string",
                id: 12
              },
              partition: {
                type: "hardware.FirmwarePartition",
                id: 13
              },
              diNum: {
                type: "uint32",
                id: 21,
                options: {
                  json_name: "di_num"
                }
              },
              doNum: {
                type: "uint32",
                id: 22,
                options: {
                  json_name: "do_num"
                }
              },
              dioNum: {
                type: "uint32",
                id: 23,
                options: {
                  json_name: "dio_num"
                }
              },
              aiNum: {
                type: "uint32",
                id: 26,
                options: {
                  json_name: "ai_num"
                }
              },
              aoNum: {
                type: "uint32",
                id: 27,
                options: {
                  json_name: "ao_num"
                }
              }
            }
          },
          HardwareInfo: {
            fields: {
              comboard: {
                type: "DeviceInfo",
                id: 1
              },
              joints: {
                rule: "repeated",
                type: "DeviceInfo",
                id: 2
              },
              flange: {
                type: "DeviceInfo",
                id: 3
              },
              led: {
                type: "DeviceInfo",
                id: 4
              },
              extraIo: {
                type: "DeviceInfo",
                id: 11,
                options: {
                  json_name: "extra_io"
                }
              }
            }
          },
          SoftwareInfo: {
            fields: {
              rcVersion: {
                type: "string",
                id: 1,
                options: {
                  json_name: "rc_version"
                }
              }
            }
          },
          RobotState: {
            values: {
              DISCONNECTED: 0,
              ESTOP: 1,
              BOOTING: 2,
              ROBOT_OFF: 3,
              ROBOT_ON: 4,
              IDLE: 5,
              PAUSED: 6,
              MOVING: 7,
              UPDATING: 8,
              STARTING: 9,
              STOPPING: 10,
              TEACHING: 11,
              STOP: 12,
              FINETUNING: 13
            }
          },
          GetRobotStateResponse: {
            fields: {
              state: {
                type: "RobotState",
                id: 1
              }
            }
          },
          PhyData: {
            fields: {
              jointTemp: {
                rule: "repeated",
                type: "double",
                id: 2,
                options: {
                  json_name: "joint_temp"
                }
              },
              jointVoltage: {
                rule: "repeated",
                type: "double",
                id: 11,
                options: {
                  json_name: "joint_voltage"
                }
              },
              flangeVoltage: {
                type: "double",
                id: 12,
                options: {
                  json_name: "flange_voltage"
                }
              }
            }
          },
          EstopReason: {
            values: {
              NONE: 0,
              SYSTEM: 2,
              MANUAL: 3,
              HARD_ESTOP: 4,
              COLLISION: 5,
              JOINT_LIMIT: 6,
              EXCEED: 7,
              TRAJECTORY_ERROR: 8,
              COMM_ERROR: 11,
              CAN_ERROR: 12,
              JOINT_ERROR: 13
            }
          },
          GetEstopReasonResponse: {
            fields: {
              reason: {
                type: "EstopReason",
                id: 1
              }
            }
          },
          SystemService: {
            methods: {
              Hello: {
                requestType: "HelloData",
                responseType: "HelloData"
              },
              GetSystemInfo: {
                requestType: "google.protobuf.Empty",
                responseType: "SystemInfo"
              },
              GetRobotInfo: {
                requestType: "google.protobuf.Empty",
                responseType: "RobotInfo"
              },
              GetHardwareInfo: {
                requestType: "google.protobuf.Empty",
                responseType: "HardwareInfo"
              },
              GetSoftwareInfo: {
                requestType: "google.protobuf.Empty",
                responseType: "SoftwareInfo"
              },
              SetVirtualIp: {
                requestType: "SetVirtualIpRequest",
                responseType: "google.protobuf.Empty"
              },
              GetRobotState: {
                requestType: "google.protobuf.Empty",
                responseType: "GetRobotStateResponse"
              },
              SubRobotState: {
                requestType: "SubscribeRequest",
                responseType: "GetRobotStateResponse",
                responseStream: true
              },
              GetPhyData: {
                requestType: "google.protobuf.Empty",
                responseType: "PhyData"
              },
              SubPhyData: {
                requestType: "SubscribeRequest",
                responseType: "PhyData",
                responseStream: true
              },
              Powerdown: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              Reboot: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              StartSys: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              StopSys: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              Stop: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              Estop: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              GetEstopReason: {
                requestType: "google.protobuf.Empty",
                responseType: "GetEstopReasonResponse"
              }
            }
          }
        }
      },
      SubscribeRequest: {
        fields: {
          intervalMin: {
            type: "uint64",
            id: 11,
            options: {
              json_name: "interval_min"
            }
          },
          intervalMax: {
            type: "uint64",
            id: 12,
            options: {
              json_name: "interval_max"
            }
          }
        }
      },
      hardware: {
        nested: {
          Address: {
            values: {
              EMPTY: 0,
              JOINT1: 1,
              JOINT2: 2,
              JOINT3: 3,
              JOINT4: 4,
              JOINT5: 5,
              JOINT6: 6,
              JOINT7: 7,
              FLANGE: 8,
              CLAW: 9,
              LED: 10,
              DIAL: 13,
              COMM_BOARD: 14,
              TEST_BOARD: 15
            }
          },
          FirmwarePartition: {
            values: {
              A: 0,
              B: 1,
              C: 2,
              UNKNOWN: 3
            }
          },
          FirmwareInfo: {
            fields: {
              sn: {
                type: "string",
                id: 1
              },
              version: {
                type: "string",
                id: 2
              },
              partition: {
                type: "FirmwarePartition",
                id: 3
              }
            }
          },
          StartOtaRequest: {
            fields: {
              address: {
                type: "Address",
                id: 1
              },
              partition: {
                type: "FirmwarePartition",
                id: 2
              },
              file: {
                type: "string",
                id: 11
              }
            }
          },
          SwitchPartitionRequest: {
            fields: {
              address: {
                type: "Address",
                id: 1
              },
              partition: {
                type: "FirmwarePartition",
                id: 2
              }
            }
          },
          Step: {
            values: {
              NONE: 0,
              WAIT: 1,
              DOWNLOADING: 2,
              FLASHING: 3,
              RESTART: 4,
              DONE: 5,
              FAIL: 6
            }
          },
          OtaState: {
            fields: {
              step: {
                type: "Step",
                id: 1
              },
              progress: {
                type: "uint32",
                id: 2
              }
            }
          },
          HardwareService: {
            methods: {
              StartOta: {
                requestType: "StartOtaRequest",
                responseType: "google.protobuf.Empty"
              },
              SwitchPartition: {
                requestType: "SwitchPartitionRequest",
                responseType: "google.protobuf.Empty"
              },
              GetOtaState: {
                requestType: "google.protobuf.Empty",
                responseType: "OtaState"
              }
            }
          }
        }
      },
      claw: {
        nested: {
          Address: {
            values: {
              AMPLITUDE: 0,
              FORCE: 1,
              VOLTAGE: 2,
              DISTANCE: 3,
              DO: 4,
              ACTUAL_AMPLITUDE: 5,
              ACTUAL_FORCE: 6,
              WEIGHT: 7,
              INIT: 8,
              FLAG: 9,
              ERROR: 10,
              DISABLE_INIT: 11
            }
          },
          Claw: {
            fields: {
              force: {
                type: "double",
                id: 1
              },
              amplitude: {
                type: "double",
                id: 2
              },
              weight: {
                type: "double",
                id: 3
              },
              holdOn: {
                type: "bool",
                id: 4,
                options: {
                  json_name: "hold_on"
                }
              }
            }
          },
          InitClawRequest: {
            fields: {
              force: {
                type: "bool",
                id: 1
              }
            }
          },
          SetClawRequest: {
            fields: {
              force: {
                type: "google.protobuf.DoubleValue",
                id: 1
              },
              amplitude: {
                type: "google.protobuf.DoubleValue",
                id: 2
              }
            }
          },
          SetClawAoRequest: {
            fields: {
              address: {
                type: "Address",
                id: 1
              },
              value: {
                type: "double",
                id: 2
              }
            }
          },
          GetClawAiRequest: {
            fields: {
              address: {
                type: "Address",
                id: 1
              }
            }
          },
          GetClawAiResponse: {
            fields: {
              value: {
                type: "double",
                id: 2
              }
            }
          },
          WaitClawAiRequest: {
            fields: {
              address: {
                type: "Address",
                id: 1
              },
              value: {
                type: "double",
                id: 2
              },
              relation: {
                type: "cmp.Relation",
                id: 3
              }
            }
          },
          ClawService: {
            methods: {
              InitClaw: {
                requestType: "InitClawRequest",
                responseType: "google.protobuf.Empty"
              },
              SetClaw: {
                requestType: "SetClawRequest",
                responseType: "google.protobuf.Empty"
              },
              GetClaw: {
                requestType: "google.protobuf.Empty",
                responseType: "Claw"
              },
              SetClawAo: {
                requestType: "SetClawAoRequest",
                responseType: "google.protobuf.Empty"
              },
              GetClawAi: {
                requestType: "GetClawAiRequest",
                responseType: "GetClawAiResponse"
              },
              WaitClawAi: {
                requestType: "WaitClawAiRequest",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      cmp: {
        nested: {
          Logic: {
            values: {
              AND: 0,
              OR: 2,
              NOT: 3
            }
          },
          Relation: {
            values: {
              EQ: 0,
              NEQ: 2,
              LT: 3,
              LTE: 4,
              GT: 5,
              GTE: 6
            }
          }
        }
      },
      db: {
        nested: {
          SaveRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "string",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          LoadRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          LoadResponse: {
            fields: {
              data: {
                type: "string",
                id: 2
              }
            }
          },
          LoadListRequest: {
            fields: {
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          LoadListResponse: {
            fields: {
              names: {
                rule: "repeated",
                type: "string",
                id: 2
              }
            }
          },
          DeleteRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          Dir: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              id: {
                type: "uint32",
                id: 2
              }
            }
          },
          UpdateDirRequest: {
            fields: {
              from: {
                type: "string",
                id: 1
              },
              to: {
                type: "string",
                id: 2
              }
            }
          },
          Dirs: {
            fields: {
              dirs: {
                rule: "repeated",
                type: "Dir",
                id: 1
              }
            }
          },
          DbService: {
            methods: {
              CreateDir: {
                requestType: "Dir",
                responseType: "google.protobuf.Empty"
              },
              UpdateDir: {
                requestType: "UpdateDirRequest",
                responseType: "google.protobuf.Empty"
              },
              GetDirs: {
                requestType: "google.protobuf.Empty",
                responseType: "Dirs"
              }
            }
          }
        }
      },
      dynamic: {
        nested: {
          Payload: {
            fields: {
              mass: {
                type: "double",
                id: 1
              },
              cog: {
                type: "posture.Position",
                id: 2
              }
            }
          },
          SetPayloadRequest: {
            fields: {
              mass: {
                type: "google.protobuf.DoubleValue",
                id: 1
              },
              cog: {
                type: "posture.Position",
                id: 2
              }
            }
          },
          SavePayloadRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "Payload",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          DynamicService: {
            methods: {
              SavePayload: {
                requestType: "SavePayloadRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadPayload: {
                requestType: "db.LoadRequest",
                responseType: "Payload"
              },
              LoadPayloadList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              SetPayload: {
                requestType: "SetPayloadRequest",
                responseType: "google.protobuf.Empty"
              },
              GetPayload: {
                requestType: "google.protobuf.Empty",
                responseType: "Payload"
              },
              SetGravity: {
                requestType: "posture.Position",
                responseType: "google.protobuf.Empty"
              },
              GetGravity: {
                requestType: "google.protobuf.Empty",
                responseType: "posture.Position"
              }
            }
          }
        }
      },
      posture: {
        nested: {
          JointPose: {
            fields: {
              joint: {
                rule: "repeated",
                type: "double",
                id: 1
              }
            }
          },
          JointFrame: {
            fields: {
              kind: {
                type: "Kind",
                id: 1
              },
              pose: {
                type: "JointPose",
                id: 2
              }
            },
            nested: {
              Kind: {
                values: {
                  BASE: 0,
                  CURRENT: 1,
                  LAST: 11,
                  CUSTOM: 99
                }
              }
            }
          },
          RotationMatrix: {
            fields: {
              m11: {
                type: "double",
                id: 11
              },
              m12: {
                type: "double",
                id: 12
              },
              m13: {
                type: "double",
                id: 13
              },
              m21: {
                type: "double",
                id: 21
              },
              m22: {
                type: "double",
                id: 22
              },
              m23: {
                type: "double",
                id: 23
              },
              m31: {
                type: "double",
                id: 31
              },
              m32: {
                type: "double",
                id: 32
              },
              m33: {
                type: "double",
                id: 33
              }
            }
          },
          EulerZyx: {
            fields: {
              x: {
                type: "double",
                id: 1
              },
              y: {
                type: "double",
                id: 2
              },
              z: {
                type: "double",
                id: 3
              }
            }
          },
          Quaternion: {
            fields: {
              w: {
                type: "double",
                id: 1
              },
              i: {
                type: "double",
                id: 2
              },
              j: {
                type: "double",
                id: 3
              },
              k: {
                type: "double",
                id: 4
              }
            }
          },
          Rotation: {
            fields: {
              eulerZyx: {
                type: "EulerZyx",
                id: 1,
                options: {
                  json_name: "euler_zyx"
                }
              },
              quaternion: {
                type: "Quaternion",
                id: 2
              },
              matrix: {
                type: "RotationMatrix",
                id: 3
              }
            }
          },
          Position: {
            fields: {
              x: {
                type: "double",
                id: 1
              },
              y: {
                type: "double",
                id: 2
              },
              z: {
                type: "double",
                id: 3
              }
            }
          },
          CartesianPose: {
            fields: {
              position: {
                type: "Position",
                id: 1
              },
              rotation: {
                type: "Rotation",
                id: 2
              }
            }
          },
          CartesianMatrix: {
            fields: {
              m11: {
                type: "double",
                id: 11
              },
              m12: {
                type: "double",
                id: 12
              },
              m13: {
                type: "double",
                id: 13
              },
              m14: {
                type: "double",
                id: 14
              },
              m21: {
                type: "double",
                id: 21
              },
              m22: {
                type: "double",
                id: 22
              },
              m23: {
                type: "double",
                id: 23
              },
              m24: {
                type: "double",
                id: 24
              },
              m31: {
                type: "double",
                id: 31
              },
              m32: {
                type: "double",
                id: 32
              },
              m33: {
                type: "double",
                id: 33
              },
              m34: {
                type: "double",
                id: 34
              },
              m41: {
                type: "double",
                id: 41
              },
              m42: {
                type: "double",
                id: 42
              },
              m43: {
                type: "double",
                id: 43
              },
              m44: {
                type: "double",
                id: 44
              }
            }
          },
          CartesianFrame: {
            fields: {
              positionKind: {
                type: "Kind",
                id: 1,
                options: {
                  json_name: "position_kind"
                }
              },
              position: {
                type: "Position",
                id: 2
              },
              rotationKind: {
                type: "Kind",
                id: 3,
                options: {
                  json_name: "rotation_kind"
                }
              },
              rotation: {
                type: "Rotation",
                id: 4
              }
            },
            nested: {
              Kind: {
                values: {
                  BASE: 0,
                  FLANGE: 1,
                  TCP: 2,
                  LAST_FLANGE: 11,
                  LAST_TCP: 12,
                  CUSTOM: 99
                }
              }
            }
          },
          Pose: {
            fields: {
              kind: {
                type: "Kind",
                id: 1
              },
              cart: {
                type: "CartesianPose",
                id: 11
              },
              cartFrameIndex: {
                type: "db.LoadRequest",
                id: 12,
                options: {
                  json_name: "cart_frame_index"
                }
              },
              cartFrame: {
                type: "CartesianFrame",
                id: 13,
                options: {
                  json_name: "cart_frame"
                }
              },
              joint: {
                type: "JointPose",
                id: 21
              }
            },
            nested: {
              Kind: {
                values: {
                  CARTESIAN: 0,
                  JOINT: 1
                }
              }
            }
          },
          SavePoseRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "Pose",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          SaveFrameRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "CartesianFrame",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          PoseRequest: {
            fields: {
              pose: {
                type: "Pose",
                id: 1
              }
            }
          },
          GetInverseKinRequest: {
            fields: {
              pose: {
                type: "Pose",
                id: 1
              },
              refer: {
                type: "JointPose",
                id: 2
              }
            }
          },
          GetPoseTransRequest: {
            fields: {
              from: {
                type: "Pose",
                id: 1
              },
              fromTo: {
                type: "Pose",
                id: 2,
                options: {
                  json_name: "from_to"
                }
              }
            }
          },
          GetPoseAddRequest: {
            fields: {
              pose: {
                type: "Pose",
                id: 1
              },
              delta: {
                type: "Pose",
                id: 2
              }
            }
          },
          PostureService: {
            methods: {
              SavePose: {
                requestType: "SavePoseRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadPose: {
                requestType: "db.LoadRequest",
                responseType: "Pose"
              },
              LoadPoseList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              SaveFrame: {
                requestType: "SaveFrameRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadFrame: {
                requestType: "db.LoadRequest",
                responseType: "CartesianFrame"
              },
              LoadFrameList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              GetForwardKin: {
                requestType: "PoseRequest",
                responseType: "CartesianPose"
              },
              GetInverseKin: {
                requestType: "GetInverseKinRequest",
                responseType: "JointPose"
              },
              GetPoseTrans: {
                requestType: "GetPoseTransRequest",
                responseType: "CartesianPose"
              },
              GetPoseAdd: {
                requestType: "GetPoseAddRequest",
                responseType: "CartesianPose"
              },
              GetPoseInverse: {
                requestType: "PoseRequest",
                responseType: "CartesianPose"
              }
            }
          }
        }
      },
      file: {
        nested: {
          File: {
            fields: {
              isDir: {
                type: "bool",
                id: 3,
                options: {
                  json_name: "is_dir"
                }
              },
              data: {
                type: "bytes",
                id: 10
              }
            }
          },
          FileIndex: {
            fields: {
              dir: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          FileName: {
            fields: {
              name: {
                type: "string",
                id: 2
              },
              isDir: {
                type: "bool",
                id: 10,
                options: {
                  json_name: "is_dir"
                }
              }
            }
          },
          SaveFileRequest: {
            fields: {
              dir: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              file: {
                type: "File",
                id: 10
              }
            }
          },
          DownloadFileRequest: {
            fields: {
              dir: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              url: {
                type: "string",
                id: 10
              }
            }
          },
          RenameFileRequest: {
            fields: {
              from: {
                type: "FileIndex",
                id: 1
              },
              to: {
                type: "FileIndex",
                id: 2
              }
            }
          },
          LoadFileListRequest: {
            fields: {
              dir: {
                type: "string",
                id: 1
              },
              prefix: {
                type: "string",
                id: 2
              },
              suffix: {
                type: "string",
                id: 3
              }
            }
          },
          LoadFileListResponse: {
            fields: {
              files: {
                rule: "repeated",
                type: "FileName",
                id: 1
              }
            }
          },
          ZipRequest: {
            fields: {
              zip: {
                type: "FileIndex",
                id: 1
              },
              files: {
                rule: "repeated",
                type: "string",
                id: 11
              },
              dir: {
                type: "string",
                id: 2
              }
            }
          },
          UnzipRequest: {
            fields: {
              zip: {
                type: "FileIndex",
                id: 1
              },
              files: {
                rule: "repeated",
                type: "string",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          LoadZipListRequest: {
            fields: {
              zip: {
                type: "FileIndex",
                id: 1
              },
              dir: {
                type: "string",
                id: 2
              },
              prefix: {
                type: "string",
                id: 12
              },
              suffix: {
                type: "string",
                id: 13
              }
            }
          },
          LoadZipListResponse: {
            fields: {
              files: {
                rule: "repeated",
                type: "FileName",
                id: 1
              }
            }
          },
          FileService: {
            methods: {
              SaveFile: {
                requestType: "SaveFileRequest",
                responseType: "google.protobuf.Empty"
              },
              DownloadFile: {
                requestType: "DownloadFileRequest",
                responseType: "google.protobuf.Empty"
              },
              RenameFile: {
                requestType: "RenameFileRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadFile: {
                requestType: "FileIndex",
                responseType: "File"
              },
              LoadFileList: {
                requestType: "LoadFileListRequest",
                responseType: "LoadFileListResponse"
              },
              Zip: {
                requestType: "ZipRequest",
                responseType: "google.protobuf.Empty"
              },
              Unzip: {
                requestType: "UnzipRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadZipList: {
                requestType: "LoadZipListRequest",
                responseType: "LoadZipListResponse"
              }
            }
          }
        }
      },
      io: {
        nested: {
          IoDevice: {
            values: {
              ROBOT: 0,
              FLANGE: 1,
              EXTRA: 2,
              SHOULDER: 11,
              FLANGE_BTN: 12
            }
          },
          IoPinKind: {
            values: {
              DI: 0,
              DO: 1,
              AI: 2,
              AO: 3
            }
          },
          DigitalMode: {
            values: {
              INPUT: 0,
              OUTPUT: 1
            }
          },
          AnalogMode: {
            values: {
              VOLTAGE: 0,
              CURRENT: 1
            }
          },
          SetDoPinRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              value: {
                type: "uint32",
                id: 11
              }
            }
          },
          SetDoPinsRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              values: {
                rule: "repeated",
                type: "uint32",
                id: 11
              }
            }
          },
          GetDioPinRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              }
            }
          },
          GetDioPinResponse: {
            fields: {
              value: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetDioPinsRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetDioPinsResponse: {
            fields: {
              values: {
                rule: "repeated",
                type: "uint32",
                id: 11
              }
            }
          },
          SetAoPinRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              value: {
                type: "double",
                id: 11
              }
            }
          },
          SetAoPinsRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              values: {
                rule: "repeated",
                type: "double",
                id: 11
              }
            }
          },
          GetAioPinRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              }
            }
          },
          GetAioPinResponse: {
            fields: {
              value: {
                type: "double",
                id: 11
              }
            }
          },
          GetAioPinsRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetAioPinsResponse: {
            fields: {
              values: {
                rule: "repeated",
                type: "double",
                id: 11
              }
            }
          },
          ButtonIndex: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              }
            }
          },
          ButtonState: {
            values: {
              EMPTY: 0,
              UP: 1,
              LONG_DOWN: 2,
              CLICK: 3
            }
          },
          ButtonStatus: {
            fields: {
              state: {
                type: "ButtonState",
                id: 1
              },
              time: {
                type: "uint32",
                id: 2
              }
            }
          },
          ButtonsStatus: {
            fields: {
              button: {
                type: "ButtonIndex",
                id: 1
              },
              status: {
                type: "ButtonStatus",
                id: 2
              }
            }
          },
          SetDioModeRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              mode: {
                type: "DigitalMode",
                id: 11
              }
            }
          },
          GetDioModeRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetDioModeResponse: {
            fields: {
              mode: {
                type: "DigitalMode",
                id: 11
              }
            }
          },
          GetDiosModeRequest: {
            fields: {
              device: {
                type: "IoDevice",
                id: 1
              },
              pin: {
                type: "uint32",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetDiosModeResponse: {
            fields: {
              modes: {
                rule: "repeated",
                type: "DigitalMode",
                id: 11
              }
            }
          },
          IoService: {
            methods: {
              GetDi: {
                requestType: "GetDioPinRequest",
                responseType: "GetDioPinResponse"
              },
              GetDis: {
                requestType: "GetDioPinsRequest",
                responseType: "GetDioPinsResponse"
              },
              GetDo: {
                requestType: "GetDioPinRequest",
                responseType: "GetDioPinResponse"
              },
              GetDos: {
                requestType: "GetDioPinsRequest",
                responseType: "GetDioPinsResponse"
              },
              SetDo: {
                requestType: "SetDoPinRequest",
                responseType: "google.protobuf.Empty"
              },
              SetDos: {
                requestType: "SetDoPinsRequest",
                responseType: "google.protobuf.Empty"
              },
              GetAi: {
                requestType: "GetAioPinRequest",
                responseType: "GetAioPinResponse"
              },
              GetAis: {
                requestType: "GetAioPinsRequest",
                responseType: "GetAioPinsResponse"
              },
              GetAo: {
                requestType: "GetAioPinRequest",
                responseType: "GetAioPinResponse"
              },
              GetAos: {
                requestType: "GetAioPinsRequest",
                responseType: "GetAioPinsResponse"
              },
              SetAo: {
                requestType: "SetAoPinRequest",
                responseType: "google.protobuf.Empty"
              },
              SetAos: {
                requestType: "SetAoPinsRequest",
                responseType: "google.protobuf.Empty"
              },
              EnableButton: {
                requestType: "ButtonIndex",
                responseType: "google.protobuf.Empty"
              },
              DisableButton: {
                requestType: "ButtonIndex",
                responseType: "google.protobuf.Empty"
              },
              SubButtonsStatus: {
                requestType: "google.protobuf.Empty",
                responseType: "ButtonsStatus",
                responseStream: true
              },
              SetDioMode: {
                requestType: "SetDioModeRequest",
                responseType: "google.protobuf.Empty"
              },
              GetDioMode: {
                requestType: "GetDioModeRequest",
                responseType: "GetDioModeResponse"
              },
              GetDiosMode: {
                requestType: "GetDiosModeRequest",
                responseType: "GetDiosModeResponse"
              }
            }
          }
        }
      },
      kinematic: {
        nested: {
          DhParam: {
            fields: {
              a: {
                type: "double",
                id: 1
              },
              alpha: {
                type: "double",
                id: 2
              },
              d: {
                type: "double",
                id: 3
              },
              theta: {
                type: "double",
                id: 4
              }
            }
          },
          DhParams: {
            fields: {
              params: {
                rule: "repeated",
                type: "DhParam",
                id: 1
              }
            }
          },
          KinFactor: {
            fields: {
              speedFactor: {
                type: "int32",
                id: 1,
                options: {
                  json_name: "speed_factor"
                }
              }
            }
          },
          KinData: {
            fields: {
              actualJointPose: {
                rule: "repeated",
                type: "double",
                id: 1,
                options: {
                  json_name: "actual_joint_pose"
                }
              },
              actualJointSpeed: {
                rule: "repeated",
                type: "double",
                id: 2,
                options: {
                  json_name: "actual_joint_speed"
                }
              },
              actualJointAcc: {
                rule: "repeated",
                type: "double",
                id: 3,
                options: {
                  json_name: "actual_joint_acc"
                }
              },
              actualJointTorque: {
                rule: "repeated",
                type: "double",
                id: 4,
                options: {
                  json_name: "actual_joint_torque"
                }
              },
              targetJointPose: {
                rule: "repeated",
                type: "double",
                id: 11,
                options: {
                  json_name: "target_joint_pose"
                }
              },
              targetJointSpeed: {
                rule: "repeated",
                type: "double",
                id: 12,
                options: {
                  json_name: "target_joint_speed"
                }
              },
              targetJointAcc: {
                rule: "repeated",
                type: "double",
                id: 13,
                options: {
                  json_name: "target_joint_acc"
                }
              },
              targetJointTorque: {
                rule: "repeated",
                type: "double",
                id: 14,
                options: {
                  json_name: "target_joint_torque"
                }
              },
              actualTcpPose: {
                type: "posture.CartesianPose",
                id: 21,
                options: {
                  json_name: "actual_tcp_pose"
                }
              },
              targetTcpPose: {
                type: "posture.CartesianPose",
                id: 31,
                options: {
                  json_name: "target_tcp_pose"
                }
              },
              actualFlangePose: {
                type: "posture.CartesianPose",
                id: 41,
                options: {
                  json_name: "actual_flange_pose"
                }
              }
            }
          },
          SaveTcpRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "posture.CartesianPose",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          CalcFrameRequest: {
            fields: {
              o: {
                type: "posture.CartesianPose",
                id: 1
              },
              x: {
                type: "posture.CartesianPose",
                id: 2
              },
              xy: {
                type: "posture.CartesianPose",
                id: 3
              }
            }
          },
          CalcTcpRequest: {
            fields: {
              poses: {
                rule: "repeated",
                type: "posture.CartesianPose",
                id: 1
              }
            }
          },
          KinematicService: {
            methods: {
              SaveTcp: {
                requestType: "SaveTcpRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadTcp: {
                requestType: "db.LoadRequest",
                responseType: "posture.CartesianPose"
              },
              LoadTcpList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              SetDh: {
                requestType: "DhParams",
                responseType: "google.protobuf.Empty"
              },
              GetDh: {
                requestType: "google.protobuf.Empty",
                responseType: "DhParams"
              },
              SetKinFactor: {
                requestType: "KinFactor",
                responseType: "google.protobuf.Empty"
              },
              GetKinFactor: {
                requestType: "google.protobuf.Empty",
                responseType: "KinFactor"
              },
              GetKinData: {
                requestType: "google.protobuf.Empty",
                responseType: "KinData"
              },
              SubKinData: {
                requestType: "SubscribeRequest",
                responseType: "KinData",
                responseStream: true
              },
              CalcFrame: {
                requestType: "CalcFrameRequest",
                responseType: "posture.CartesianPose"
              },
              CalcTcp: {
                requestType: "CalcTcpRequest",
                responseType: "posture.CartesianPose"
              },
              SetTcp: {
                requestType: "posture.CartesianPose",
                responseType: "google.protobuf.Empty"
              },
              GetTcp: {
                requestType: "google.protobuf.Empty",
                responseType: "posture.CartesianPose"
              }
            }
          }
        }
      },
      led: {
        nested: {
          LedMode: {
            values: {
              HOLD_LED: 0,
              CLOSE_LED: 1,
              OPEN_LED: 2,
              BREATH: 3,
              FOUR: 4,
              WATER: 5,
              BLINK: 6
            }
          },
          LedSpeed: {
            values: {
              HOLD_LED_SPEED: 0,
              FAST: 1,
              NORMAL: 2,
              SLOW: 3
            }
          },
          LedColor: {
            values: {
              RED: 0,
              GREEN: 1,
              BLUE: 2,
              PINK: 3,
              YELLOW: 4,
              CYAN: 5,
              GRAY: 6,
              BROWN: 7,
              ORANGE: 8,
              GOLD: 9,
              INDIGO: 10,
              LIGHT_SKY_BLUE: 11,
              DARK_VIOLET: 12,
              CHOCOLATE: 13,
              LIGHT_RED: 14,
              WHITE: 15
            }
          },
          LedData: {
            fields: {
              mode: {
                type: "LedMode",
                id: 1
              },
              speed: {
                type: "LedSpeed",
                id: 2
              },
              colors: {
                rule: "repeated",
                type: "LedColor",
                id: 3
              }
            }
          },
          FanMode: {
            values: {
              HOLD_FAN: 0,
              CLOSE_FAN: 1,
              OPEN_FAN: 2
            }
          },
          FanData: {
            fields: {
              mode: {
                type: "FanMode",
                id: 1
              }
            }
          },
          VoiceKind: {
            values: {
              OFF: 0,
              BOOTING: 1,
              STOPING: 2,
              COLLISION_DETECTED: 3,
              UPGRADE: 4,
              TEACH_MODE_ON: 5,
              TEACH_MODE_OFF: 6,
              FINE_TUNNING_ON: 7,
              FINE_TUNNING_OFF: 8,
              FINE_TUNNING_CHANGE: 9,
              BORING: 10,
              CUSTOM1: 11,
              CUSTOM2: 12,
              CUSTOM3: 13,
              CUSTOM4: 14,
              CUSTOM5: 15
            }
          },
          Volume: {
            values: {
              MUTE: 0,
              LOW: 1,
              MID: 2,
              HIGH: 3
            }
          },
          VoiceData: {
            fields: {
              voice: {
                type: "VoiceKind",
                id: 2
              },
              volume: {
                type: "Volume",
                id: 3
              }
            }
          },
          LedStyle: {
            fields: {
              led: {
                type: "LedData",
                id: 1
              },
              voice: {
                type: "VoiceKind",
                id: 2
              },
              volume: {
                type: "Volume",
                id: 3
              }
            }
          },
          SaveLedStyleRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "LedStyle",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          LedStyleItem: {
            fields: {
              state: {
                type: "system.RobotState",
                id: 1
              },
              style: {
                type: "LedStyle",
                id: 2
              }
            }
          },
          LedStyles: {
            fields: {
              styles: {
                keyType: "int32",
                type: "LedStyle",
                id: 1
              }
            }
          },
          LedService: {
            methods: {
              SaveLedStyle: {
                requestType: "SaveLedStyleRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadLedStyle: {
                requestType: "db.LoadRequest",
                responseType: "LedStyle"
              },
              LoadLedStyleList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              SetLedStyle: {
                requestType: "LedStyleItem",
                responseType: "google.protobuf.Empty"
              },
              SetLedStyles: {
                requestType: "LedStyles",
                responseType: "google.protobuf.Empty"
              },
              GetLedStyles: {
                requestType: "google.protobuf.Empty",
                responseType: "LedStyles"
              },
              SetLed: {
                requestType: "LedData",
                responseType: "google.protobuf.Empty"
              },
              SetVoice: {
                requestType: "VoiceData",
                responseType: "google.protobuf.Empty"
              },
              SetFan: {
                requestType: "FanData",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      message: {
        nested: {
          Level: {
            values: {
              INFO: 0,
              WARN: 1,
              ERROR: 2
            }
          },
          Kind: {
            values: {
              ESTOP: 0,
              HARD_ESTOP_LOCK: 1,
              DRIVER_ERROR: 2,
              REACH_JOINT_LIMIT: 3,
              COLLISION_DETECTED: 4,
              JONIT_SPEED_EXCEED: 5,
              TRAJECTOR_ERROR: 6,
              OTA_FAILED: 7
            }
          },
          Message: {
            fields: {
              level: {
                type: "Level",
                id: 1
              },
              kind: {
                type: "Kind",
                id: 2
              },
              detail: {
                type: "string",
                id: 3
              },
              time: {
                type: "google.protobuf.Timestamp",
                id: 11
              }
            }
          },
          Messages: {
            fields: {
              messages: {
                rule: "repeated",
                type: "Message",
                id: 1
              }
            }
          },
          MessageService: {
            methods: {
              GetMessages: {
                requestType: "google.protobuf.Empty",
                responseType: "Messages"
              },
              SubMessage: {
                requestType: "google.protobuf.Empty",
                responseType: "Message",
                responseStream: true
              }
            }
          }
        }
      },
      modbus: {
        nested: {
          ModbusKind: {
            values: {
              ROBOT: 0,
              FLANGE: 1,
              EXTRA: 2,
              MODBUS_FLANGE: 3,
              MODBUS_RTU: 4,
              MODBUS_TCP: 5
            }
          },
          Modbus: {
            fields: {
              kind: {
                type: "ModbusKind",
                id: 12
              },
              address: {
                type: "string",
                id: 13
              },
              port: {
                type: "uint32",
                id: 14
              },
              slaveId: {
                type: "uint32",
                id: 15,
                options: {
                  json_name: "slave_id"
                }
              }
            }
          },
          SaveModbusRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "Modbus",
                id: 2
              }
            }
          },
          ModbusRegisterKind: {
            values: {
              DISCRETE_INPUT: 0,
              COIL: 1,
              INPUT_REGISTER: 2,
              HOLDING_REGISTER: 3
            }
          },
          ModbusRegister: {
            fields: {
              kind: {
                type: "ModbusRegisterKind",
                id: 12
              },
              address: {
                type: "uint32",
                id: 13
              }
            }
          },
          SaveModbusRegisterRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              data: {
                type: "ModbusRegister",
                id: 11
              }
            }
          },
          LoadModbusRegisterRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          },
          LoadModbusRegisterListRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              }
            }
          },
          SetCoilRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              value: {
                type: "bool",
                id: 11
              }
            }
          },
          SetCoilsRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              values: {
                rule: "repeated",
                type: "bool",
                id: 11
              }
            }
          },
          GetCoilRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              }
            }
          },
          GetCoilResponse: {
            fields: {
              value: {
                type: "bool",
                id: 11
              }
            }
          },
          GetCoilsRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetCoilsResponse: {
            fields: {
              values: {
                rule: "repeated",
                type: "bool",
                id: 11
              }
            }
          },
          SetRegisterRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              value: {
                type: "uint32",
                id: 11
              }
            }
          },
          SetRegistersRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              values: {
                rule: "repeated",
                type: "uint32",
                id: 11
              }
            }
          },
          GetRegisterRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              }
            }
          },
          GetRegisterResponse: {
            fields: {
              value: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetRegistersRequest: {
            fields: {
              device: {
                type: "string",
                id: 1
              },
              pin: {
                type: "string",
                id: 2
              },
              count: {
                type: "uint32",
                id: 11
              }
            }
          },
          GetRegistersResponse: {
            fields: {
              values: {
                rule: "repeated",
                type: "uint32",
                id: 11
              }
            }
          },
          ModbusService: {
            methods: {
              SaveModbus: {
                requestType: "SaveModbusRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadModbus: {
                requestType: "db.LoadRequest",
                responseType: "Modbus"
              },
              LoadModbusList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              },
              SaveModbusRegister: {
                requestType: "SaveModbusRegisterRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadModbusRegister: {
                requestType: "LoadModbusRegisterRequest",
                responseType: "ModbusRegister"
              },
              LoadModbusRegisterList: {
                requestType: "LoadModbusRegisterListRequest",
                responseType: "db.LoadListResponse"
              },
              ReadDiscreteInputs: {
                requestType: "GetCoilsRequest",
                responseType: "GetCoilsResponse"
              },
              ReadCoils: {
                requestType: "GetCoilsRequest",
                responseType: "GetCoilsResponse"
              },
              WriteSingleCoil: {
                requestType: "SetCoilRequest",
                responseType: "google.protobuf.Empty"
              },
              WriteMultipleCoils: {
                requestType: "SetCoilsRequest",
                responseType: "google.protobuf.Empty"
              },
              ReadInputRegisters: {
                requestType: "GetRegistersRequest",
                responseType: "GetRegistersResponse"
              },
              ReadHoldingRegisters: {
                requestType: "GetRegistersRequest",
                responseType: "GetRegistersResponse"
              },
              WriteSingleRegister: {
                requestType: "SetRegisterRequest",
                responseType: "google.protobuf.Empty"
              },
              WriteMultipleRegisters: {
                requestType: "SetRegistersRequest",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      motion: {
        nested: {
          MotionIndex: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          },
          MotionState: {
            values: {
              WAIT: 0,
              RUNNING: 1,
              FINISHED: 2
            }
          },
          GetMotionStateResponse: {
            fields: {
              state: {
                type: "MotionState",
                id: 1
              }
            }
          },
          MoveParam: {
            fields: {
              velocity: {
                type: "double",
                id: 2
              },
              acc: {
                type: "double",
                id: 3
              },
              time: {
                type: "double",
                id: 4
              },
              radius: {
                type: "double",
                id: 5
              }
            }
          },
          MoveRequest: {
            fields: {
              pose: {
                type: "posture.Pose",
                id: 1
              },
              param: {
                type: "MoveParam",
                id: 11
              }
            }
          },
          MovecRequest: {
            fields: {
              poseVia: {
                type: "posture.Pose",
                id: 1,
                options: {
                  json_name: "pose_via"
                }
              },
              pose: {
                type: "posture.Pose",
                id: 2
              },
              rad: {
                type: "double",
                id: 3
              },
              param: {
                type: "MoveParam",
                id: 11
              }
            }
          },
          SpeedParam: {
            fields: {
              acc: {
                type: "double",
                id: 3
              },
              time: {
                type: "double",
                id: 4
              },
              constrained: {
                type: "bool",
                id: 6
              }
            }
          },
          SpeedJRequest: {
            fields: {
              speed: {
                type: "posture.JointPose",
                id: 1
              },
              param: {
                type: "SpeedParam",
                id: 11
              }
            }
          },
          SpeedLRequest: {
            fields: {
              speed: {
                type: "posture.CartesianPose",
                id: 1
              },
              param: {
                type: "SpeedParam",
                id: 11
              },
              frame: {
                type: "posture.CartesianFrame",
                id: 21
              }
            }
          },
          JointMove: {
            fields: {
              pose: {
                type: "double",
                id: 1
              },
              velocity: {
                type: "double",
                id: 2
              },
              acc: {
                type: "double",
                id: 3
              }
            }
          },
          MovePvatRequest: {
            fields: {
              duration: {
                type: "double",
                id: 11
              },
              joints: {
                rule: "repeated",
                type: "JointMove",
                id: 1
              }
            }
          },
          Wrench: {
            fields: {
              force: {
                type: "posture.Position",
                id: 1
              },
              torque: {
                type: "posture.Position",
                id: 2
              }
            }
          },
          ForceSensor: {
            values: {
              DISABLE: 0,
              INSTANTANEOUS: 1,
              CONTINUOUS: 2,
              WEIGHT1: 11
            }
          },
          SetForceSensorRequest: {
            fields: {
              sensor: {
                type: "ForceSensor",
                id: 1
              }
            }
          },
          StartForceModeRequest: {
            fields: {
              limit: {
                type: "posture.CartesianPose",
                id: 1
              },
              wrench: {
                type: "Wrench",
                id: 2
              }
            }
          },
          ForceModeParam: {
            fields: {
              threshold: {
                type: "double",
                id: 1
              },
              damping: {
                type: "double",
                id: 2
              },
              mass: {
                type: "double",
                id: 3
              }
            }
          },
          SetForceModeParamRequest: {
            fields: {
              threshold: {
                type: "google.protobuf.DoubleValue",
                id: 1
              },
              damping: {
                type: "google.protobuf.DoubleValue",
                id: 2
              },
              mass: {
                type: "google.protobuf.DoubleValue",
                id: 3
              }
            }
          },
          MotionService: {
            methods: {
              StopMove: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              SkipMove: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              WaitMove: {
                requestType: "MotionIndex",
                responseType: "google.protobuf.Empty"
              },
              GetRunningMotion: {
                requestType: "google.protobuf.Empty",
                responseType: "MotionIndex"
              },
              GetMotionState: {
                requestType: "MotionIndex",
                responseType: "GetMotionStateResponse"
              },
              TowardJoint: {
                requestType: "MoveRequest",
                responseType: "MotionIndex"
              },
              MoveJoint: {
                requestType: "MoveRequest",
                responseType: "MotionIndex"
              },
              MoveLinear: {
                requestType: "MoveRequest",
                responseType: "MotionIndex"
              },
              MoveCircular: {
                requestType: "MovecRequest",
                responseType: "MotionIndex"
              },
              MovePvat: {
                requestType: "MovePvatRequest",
                responseType: "google.protobuf.Empty"
              },
              SpeedJoint: {
                requestType: "SpeedJRequest",
                responseType: "google.protobuf.Empty"
              },
              SpeedLinear: {
                requestType: "SpeedLRequest",
                responseType: "google.protobuf.Empty"
              },
              StartTeachMode: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              EndTeachMode: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              SetTcpForce: {
                requestType: "Wrench",
                responseType: "google.protobuf.Empty"
              },
              GetTcpForce: {
                requestType: "google.protobuf.Empty",
                responseType: "Wrench"
              },
              SetForceModeSensor: {
                requestType: "SetForceSensorRequest",
                responseType: "google.protobuf.Empty"
              },
              SetForceModeParam: {
                requestType: "SetForceModeParamRequest",
                responseType: "google.protobuf.Empty"
              },
              StartForceMode: {
                requestType: "StartForceModeRequest",
                responseType: "google.protobuf.Empty"
              },
              EndForceMode: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      motor: {
        nested: {
          MotorMode: {
            values: {
              Position: 0,
              Torque: 1,
              Speed: 2
            }
          },
          ServoParam: {
            fields: {
              positionKp: {
                type: "double",
                id: 1,
                options: {
                  json_name: "position_kp"
                }
              },
              speedKp: {
                type: "double",
                id: 2,
                options: {
                  json_name: "speed_kp"
                }
              },
              speedIt: {
                type: "double",
                id: 3,
                options: {
                  json_name: "speed_it"
                }
              },
              torqueCmdFilter: {
                type: "double",
                id: 4,
                options: {
                  json_name: "torque_cmd_filter"
                }
              }
            }
          },
          ServoParams: {
            fields: {
              params: {
                rule: "repeated",
                type: "ServoParam",
                id: 1
              }
            }
          },
          SetZeroRequest: {
            fields: {
              pose: {
                rule: "repeated",
                type: "double",
                id: 1
              },
              valids: {
                rule: "repeated",
                type: "bool",
                id: 2
              }
            }
          },
          ExtraServoParam: {
            fields: {
              accPositionKp: {
                type: "double",
                id: 1,
                options: {
                  json_name: "acc_position_kp"
                }
              },
              accSpeedKp: {
                type: "double",
                id: 2,
                options: {
                  json_name: "acc_speed_kp"
                }
              },
              accSpeedIt: {
                type: "double",
                id: 3,
                options: {
                  json_name: "acc_speed_it"
                }
              },
              uniPositionKp: {
                type: "double",
                id: 4,
                options: {
                  json_name: "uni_position_kp"
                }
              },
              uniSpeedKp: {
                type: "double",
                id: 5,
                options: {
                  json_name: "uni_speed_kp"
                }
              },
              uniSpeedIt: {
                type: "double",
                id: 6,
                options: {
                  json_name: "uni_speed_it"
                }
              },
              decPositionKp: {
                type: "double",
                id: 7,
                options: {
                  json_name: "dec_position_kp"
                }
              },
              decSpeedKp: {
                type: "double",
                id: 8,
                options: {
                  json_name: "dec_speed_kp"
                }
              },
              decSpeedIt: {
                type: "double",
                id: 9,
                options: {
                  json_name: "dec_speed_it"
                }
              }
            }
          },
          SetExtraServoParamsRequest: {
            fields: {
              params: {
                rule: "repeated",
                type: "ExtraServoParam",
                id: 1
              },
              valids: {
                rule: "repeated",
                type: "bool",
                id: 2
              }
            }
          },
          ResetExtraServoParamsRequest: {
            fields: {
              valids: {
                rule: "repeated",
                type: "bool",
                id: 1
              }
            }
          },
          MotorService: {
            methods: {
              SetServoParams: {
                requestType: "ServoParams",
                responseType: "google.protobuf.Empty"
              },
              GetServoParams: {
                requestType: "google.protobuf.Empty",
                responseType: "ServoParams"
              },
              SetZero: {
                requestType: "SetZeroRequest",
                responseType: "google.protobuf.Empty"
              },
              SetExtraServoParams: {
                requestType: "SetExtraServoParamsRequest",
                responseType: "google.protobuf.Empty"
              },
              ResetExtraServoParams: {
                requestType: "ResetExtraServoParamsRequest",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      multi_devices: {
        nested: {
          DeviceInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              mac: {
                type: "string",
                id: 2
              },
              ip: {
                type: "string",
                id: 3
              },
              online: {
                type: "bool",
                id: 11
              }
            }
          },
          DiscoverRobotsResponse: {
            fields: {
              devices: {
                rule: "repeated",
                type: "DeviceInfo",
                id: 1
              }
            }
          },
          MultiDevicesService: {
            methods: {
              DiscoverRobots: {
                requestType: "google.protobuf.Empty",
                responseType: "DiscoverRobotsResponse"
              }
            }
          }
        }
      },
      plugin: {
        nested: {
          PluginInfo: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              version: {
                type: "string",
                id: 2
              },
              detail: {
                type: "string",
                id: 6
              },
              enable: {
                type: "bool",
                id: 11
              }
            }
          },
          PluginIndex: {
            fields: {
              name: {
                type: "string",
                id: 1
              }
            }
          },
          Plugins: {
            fields: {
              plugins: {
                rule: "repeated",
                type: "PluginInfo",
                id: 1
              }
            }
          },
          SetPluginRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              enable: {
                type: "google.protobuf.BoolValue",
                id: 11
              }
            }
          },
          RunPluginRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              id: {
                type: "uint32",
                id: 9
              },
              method: {
                type: "string",
                id: 11
              },
              params: {
                rule: "repeated",
                type: "string",
                id: 12
              }
            }
          },
          RunPluginIndex: {
            fields: {
              id: {
                type: "uint32",
                id: 9
              }
            }
          },
          RunPluginStdout: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              id: {
                type: "uint32",
                id: 9
              },
              stdout: {
                type: "string",
                id: 11
              }
            }
          },
          PluginService: {
            methods: {
              LoadPlugin: {
                requestType: "PluginIndex",
                responseType: "PluginInfo"
              },
              LoadPlugins: {
                requestType: "google.protobuf.Empty",
                responseType: "Plugins"
              },
              InstallPlugin: {
                requestType: "PluginIndex",
                responseType: "google.protobuf.Empty"
              },
              UninstallPlugin: {
                requestType: "PluginIndex",
                responseType: "google.protobuf.Empty"
              },
              SetPlugin: {
                requestType: "SetPluginRequest",
                responseType: "google.protobuf.Empty"
              },
              CallPlugin: {
                requestType: "RunPluginRequest",
                responseType: "RunPluginIndex"
              },
              ExecPlugin: {
                requestType: "RunPluginRequest",
                responseType: "RunPluginIndex"
              },
              WaitPluginStdout: {
                requestType: "RunPluginIndex",
                responseType: "RunPluginStdout"
              },
              SubPluginIpc: {
                requestType: "PluginIndex",
                responseType: "RunPluginRequest",
                responseStream: true
              },
              ResponsePluginIpc: {
                requestType: "RunPluginStdout",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      quality: {
        nested: {
          Auth: {
            fields: {
              time: {
                type: "string",
                id: 1
              },
              auth: {
                type: "string",
                id: 2
              }
            }
          },
          EmptyRequest: {
            fields: {
              auth: {
                type: "Auth",
                id: 1
              }
            }
          },
          BoxTestResponse: {
            fields: {
              status: {
                type: "int32",
                id: 1
              }
            }
          },
          InitRobotRequest: {
            fields: {
              auth: {
                type: "Auth",
                id: 1
              },
              info: {
                type: "system.RobotInfo",
                id: 11
              }
            }
          },
          InitRobotResponse: {
            fields: {
              cup: {
                type: "string",
                id: 1
              }
            }
          },
          QualityService: {
            methods: {
              BoxTest: {
                requestType: "EmptyRequest",
                responseType: "BoxTestResponse"
              },
              InitRobot: {
                requestType: "InitRobotRequest",
                responseType: "InitRobotResponse"
              }
            }
          }
        }
      },
      safety: {
        nested: {
          CollisionTorqueDiff: {
            fields: {
              diffs: {
                rule: "repeated",
                type: "double",
                id: 1
              }
            }
          },
          CollisionDetectorAction: {
            values: {
              ESTOP: 0,
              PAUSE: 1,
              NONE: 2
            }
          },
          CollisionDetector: {
            fields: {
              action: {
                type: "CollisionDetectorAction",
                id: 1
              },
              pauseTime: {
                type: "uint32",
                id: 2,
                options: {
                  json_name: "pause_time"
                }
              },
              sensitivity: {
                type: "uint32",
                id: 3
              }
            }
          },
          JointLimit: {
            fields: {
              minPosition: {
                type: "double",
                id: 1,
                options: {
                  json_name: "min_position"
                }
              },
              maxPosition: {
                type: "double",
                id: 2,
                options: {
                  json_name: "max_position"
                }
              },
              maxA: {
                type: "double",
                id: 3,
                options: {
                  json_name: "max_a"
                }
              },
              maxV: {
                type: "double",
                id: 4,
                options: {
                  json_name: "max_v"
                }
              }
            }
          },
          JointsLimit: {
            fields: {
              joints: {
                rule: "repeated",
                type: "JointLimit",
                id: 1
              }
            }
          },
          CartesianLimit: {
            fields: {
              maxA: {
                type: "double",
                id: 1,
                options: {
                  json_name: "max_a"
                }
              },
              maxV: {
                type: "double",
                id: 2,
                options: {
                  json_name: "max_v"
                }
              },
              eqRadius: {
                type: "double",
                id: 3,
                options: {
                  json_name: "eq_radius"
                }
              }
            }
          },
          SafetyService: {
            methods: {
              EnableCollisionDetector: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              DisableCollisionDetector: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              SetCollisionTorqueDiff: {
                requestType: "CollisionTorqueDiff",
                responseType: "google.protobuf.Empty"
              },
              GetCollisionTorqueDiff: {
                requestType: "google.protobuf.Empty",
                responseType: "CollisionTorqueDiff"
              },
              SetCollisionDetector: {
                requestType: "CollisionDetector",
                responseType: "google.protobuf.Empty"
              },
              GetCollisionDetector: {
                requestType: "google.protobuf.Empty",
                responseType: "CollisionDetector"
              },
              EnableLimit: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              DisableLimit: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              SetJointsLimit: {
                requestType: "JointsLimit",
                responseType: "google.protobuf.Empty"
              },
              GetJointsLimit: {
                requestType: "google.protobuf.Empty",
                responseType: "JointsLimit"
              },
              SetCartLimit: {
                requestType: "CartesianLimit",
                responseType: "google.protobuf.Empty"
              },
              GetCartLimit: {
                requestType: "google.protobuf.Empty",
                responseType: "CartesianLimit"
              }
            }
          }
        }
      },
      shortcut: {
        nested: {
          ShortcutIndex: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          },
          Shortcut: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              dir: {
                type: "string",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              }
            }
          },
          ShortcutList: {
            fields: {
              list: {
                rule: "repeated",
                type: "Shortcut",
                id: 1
              }
            }
          },
          ShortcutService: {
            methods: {
              SetShortPose: {
                requestType: "Shortcut",
                responseType: "google.protobuf.Empty"
              },
              GetShortPose: {
                requestType: "ShortcutIndex",
                responseType: "Shortcut"
              },
              GetShortPoses: {
                requestType: "google.protobuf.Empty",
                responseType: "ShortcutList"
              },
              SetShortTask: {
                requestType: "Shortcut",
                responseType: "google.protobuf.Empty"
              },
              GetShortTask: {
                requestType: "ShortcutIndex",
                responseType: "Shortcut"
              },
              GetShortTasks: {
                requestType: "google.protobuf.Empty",
                responseType: "ShortcutList"
              }
            }
          }
        }
      },
      signal: {
        nested: {
          SetSignalRequest: {
            fields: {
              key: {
                type: "uint32",
                id: 1
              },
              value: {
                type: "int32",
                id: 2
              }
            }
          },
          WaitSignalRequest: {
            fields: {
              key: {
                type: "uint32",
                id: 1
              },
              value: {
                type: "int32",
                id: 2
              },
              relation: {
                type: "cmp.Relation",
                id: 3
              }
            }
          },
          GetSignalRequest: {
            fields: {
              key: {
                type: "uint32",
                id: 1
              }
            }
          },
          GetSignalResponse: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          SignalService: {
            methods: {
              SetSignal: {
                requestType: "SetSignalRequest",
                responseType: "google.protobuf.Empty"
              },
              GetSignal: {
                requestType: "GetSignalRequest",
                responseType: "GetSignalResponse"
              },
              WaitSignal: {
                requestType: "WaitSignalRequest",
                responseType: "google.protobuf.Empty"
              },
              AddSignal: {
                requestType: "SetSignalRequest",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      storage: {
        nested: {
          ItemIndex: {
            fields: {
              key: {
                type: "string",
                id: 1
              }
            }
          },
          Item: {
            fields: {
              key: {
                type: "string",
                id: 1
              },
              value: {
                type: "string",
                id: 2
              }
            }
          },
          GetItemsRequest: {
            fields: {
              prefix: {
                type: "string",
                id: 1
              }
            }
          },
          Items: {
            fields: {
              items: {
                rule: "repeated",
                type: "Item",
                id: 1
              }
            }
          },
          StorageService: {
            methods: {
              SetItem: {
                requestType: "Item",
                responseType: "google.protobuf.Empty"
              },
              GetItem: {
                requestType: "ItemIndex",
                responseType: "Item"
              },
              GetItems: {
                requestType: "GetItemsRequest",
                responseType: "Items"
              }
            }
          }
        }
      },
      structure: {
        nested: {
          Structure: {
            fields: {
              active: {
                type: "bool",
                id: 10
              },
              name: {
                type: "string",
                id: 11
              },
              kind: {
                type: "system.ArmModel",
                id: 12
              },
              dof: {
                type: "uint32",
                id: 13
              },
              dh: {
                type: "string",
                id: 14
              },
              dyn: {
                type: "string",
                id: 15
              },
              servo: {
                type: "string",
                id: 16
              }
            }
          },
          SaveStructureRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              data: {
                type: "Structure",
                id: 2
              },
              dir: {
                type: "string",
                id: 11
              }
            }
          },
          StructureService: {
            methods: {
              SaveStructure: {
                requestType: "SaveStructureRequest",
                responseType: "google.protobuf.Empty"
              },
              LoadStructure: {
                requestType: "db.LoadRequest",
                responseType: "Structure"
              },
              LoadStructureList: {
                requestType: "db.LoadListRequest",
                responseType: "db.LoadListResponse"
              }
            }
          }
        }
      },
      task: {
        nested: {
          TaskKind: {
            values: {
              LUA: 0,
              APP: 10
            }
          },
          TaskState: {
            values: {
              WAIT: 0,
              RUNNING: 1,
              PAUSE: 2,
              SUCCESS: 3,
              INTERRUPT: 4,
              FAIL: 5,
              BEGIN: 11,
              INTERRUPTING: 14
            }
          },
          TaskIndex: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          },
          Task: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              blockId: {
                type: "string",
                id: 10,
                options: {
                  json_name: "block_id"
                }
              },
              eventId: {
                type: "uint32",
                id: 11,
                options: {
                  json_name: "event_id"
                }
              },
              state: {
                type: "TaskState",
                id: 12
              },
              loopCount: {
                type: "uint32",
                id: 13,
                options: {
                  json_name: "loop_count"
                }
              },
              loopTo: {
                type: "uint32",
                id: 14,
                options: {
                  json_name: "loop_to"
                }
              },
              isParallel: {
                type: "bool",
                id: 15,
                options: {
                  json_name: "is_parallel"
                }
              },
              isSimu: {
                type: "bool",
                id: 16,
                options: {
                  json_name: "is_simu"
                }
              },
              stdout: {
                type: "string",
                id: 17
              },
              startedAt: {
                type: "google.protobuf.Timestamp",
                id: 18,
                options: {
                  json_name: "started_at"
                }
              },
              endedAt: {
                type: "google.protobuf.Timestamp",
                id: 19,
                options: {
                  json_name: "ended_at"
                }
              },
              pauseAt: {
                type: "google.protobuf.Timestamp",
                id: 20,
                options: {
                  json_name: "pause_at"
                }
              },
              prePause: {
                type: "uint32",
                id: 21,
                options: {
                  json_name: "pre_pause"
                }
              },
              kind: {
                type: "TaskKind",
                id: 30
              },
              dir: {
                type: "string",
                id: 31
              },
              name: {
                type: "string",
                id: 32
              },
              params: {
                rule: "repeated",
                type: "string",
                id: 33
              }
            }
          },
          TaskIds: {
            fields: {
              ids: {
                rule: "repeated",
                type: "uint32",
                id: 1
              }
            }
          },
          Tasks: {
            fields: {
              tasks: {
                rule: "repeated",
                type: "Task",
                id: 1
              }
            }
          },
          TaskStdout: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              done: {
                type: "bool",
                id: 11
              },
              stdout: {
                type: "string",
                id: 12
              }
            }
          },
          StartTaskRequest: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              isParallel: {
                type: "bool",
                id: 2,
                options: {
                  json_name: "is_parallel"
                }
              },
              loopTo: {
                type: "uint32",
                id: 3,
                options: {
                  json_name: "loop_to"
                }
              },
              dir: {
                type: "string",
                id: 11
              },
              kind: {
                type: "TaskKind",
                id: 12
              },
              params: {
                rule: "repeated",
                type: "string",
                id: 22
              }
            }
          },
          PauseRequest: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              time: {
                type: "uint64",
                id: 11
              },
              wait: {
                type: "bool",
                id: 12
              }
            }
          },
          TaskService: {
            methods: {
              LoadTask: {
                requestType: "TaskIndex",
                responseType: "Task"
              },
              LoadTaskList: {
                requestType: "google.protobuf.Empty",
                responseType: "TaskIds"
              },
              LoadRunningTasks: {
                requestType: "google.protobuf.Empty",
                responseType: "Tasks"
              },
              StartTask: {
                requestType: "StartTaskRequest",
                responseType: "TaskIndex"
              },
              GetTaskStdout: {
                requestType: "TaskIndex",
                responseType: "TaskStdout"
              },
              SubTaskStdout: {
                requestType: "TaskIndex",
                responseType: "TaskStdout",
                responseStream: true
              },
              WaitTask: {
                requestType: "TaskIndex",
                responseType: "google.protobuf.Empty"
              },
              PauseTask: {
                requestType: "PauseRequest",
                responseType: "google.protobuf.Empty"
              },
              ResumeTask: {
                requestType: "TaskIndex",
                responseType: "google.protobuf.Empty"
              },
              CancelTask: {
                requestType: "TaskIndex",
                responseType: "google.protobuf.Empty"
              }
            }
          }
        }
      },
      trigger: {
        nested: {
          Condition: {
            fields: {
              pressed: {
                rule: "repeated",
                type: "io.ButtonIndex",
                id: 1
              },
              button: {
                type: "io.ButtonIndex",
                id: 11
              },
              status: {
                type: "io.ButtonStatus",
                id: 12
              },
              startup: {
                type: "bool",
                id: 21
              }
            }
          },
          Function: {
            values: {
              NONE: 0,
              START_TEACH_MODE: 1,
              END_TEACH_MODE: 2,
              SET_ZERO: 3,
              CHANGE_POWER: 4,
              SHORT_TASK1: 11,
              SHORT_TASK2: 12,
              SHORT_TASK3: 13,
              SHORT_TASK4: 14,
              SHORT_TASK5: 15,
              SHORT_TASK6: 16,
              SHORT_TASK7: 17,
              SHORT_TASK8: 18,
              SHORT_TASK9: 19
            }
          },
          Trigger: {
            fields: {
              condition: {
                type: "Condition",
                id: 1
              },
              "function": {
                type: "Function",
                id: 11
              }
            }
          },
          Triggers: {
            fields: {
              triggers: {
                rule: "repeated",
                type: "Trigger",
                id: 1
              }
            }
          },
          TriggerService: {
            methods: {
              SetTrigger: {
                requestType: "Trigger",
                responseType: "google.protobuf.Empty"
              },
              GetTriggers: {
                requestType: "google.protobuf.Empty",
                responseType: "Triggers"
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
          Empty: {
            fields: {}
          },
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
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
