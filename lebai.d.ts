import * as $protobuf from "protobufjs";
/** Namespace lebai. */
export namespace lebai {

    /** Namespace backup. */
    namespace backup {

        /** Properties of a BackupInfo. */
        interface IBackupInfo {

            /** BackupInfo system */
            system?: (lebai.system.ISystemInfo|null);

            /** BackupInfo robot */
            robot?: (lebai.system.IRobotInfo|null);

            /** BackupInfo hardware */
            hardware?: (lebai.system.IHardwareInfo|null);

            /** BackupInfo software */
            software?: (lebai.system.ISoftwareInfo|null);

            /** BackupInfo timestamp */
            timestamp?: (google.protobuf.ITimestamp|null);

            /** BackupInfo option */
            option?: (lebai.backup.IOptions|null);
        }

        /** Represents a BackupInfo. */
        class BackupInfo implements IBackupInfo {

            /**
             * Constructs a new BackupInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.backup.IBackupInfo);

            /** BackupInfo system. */
            public system?: (lebai.system.ISystemInfo|null);

            /** BackupInfo robot. */
            public robot?: (lebai.system.IRobotInfo|null);

            /** BackupInfo hardware. */
            public hardware?: (lebai.system.IHardwareInfo|null);

            /** BackupInfo software. */
            public software?: (lebai.system.ISoftwareInfo|null);

            /** BackupInfo timestamp. */
            public timestamp?: (google.protobuf.ITimestamp|null);

            /** BackupInfo option. */
            public option?: (lebai.backup.IOptions|null);

            /**
             * Creates a new BackupInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BackupInfo instance
             */
            public static create(properties?: lebai.backup.IBackupInfo): lebai.backup.BackupInfo;

            /**
             * Encodes the specified BackupInfo message. Does not implicitly {@link lebai.backup.BackupInfo.verify|verify} messages.
             * @param message BackupInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.backup.IBackupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BackupInfo message, length delimited. Does not implicitly {@link lebai.backup.BackupInfo.verify|verify} messages.
             * @param message BackupInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.backup.IBackupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BackupInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BackupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.backup.BackupInfo;

            /**
             * Decodes a BackupInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BackupInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.backup.BackupInfo;

            /**
             * Verifies a BackupInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BackupInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BackupInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.backup.BackupInfo;

            /**
             * Creates a plain object from a BackupInfo message. Also converts values to other types if specified.
             * @param message BackupInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.backup.BackupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BackupInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Options. */
        interface IOptions {

            /** Options arm */
            arm?: (boolean|null);

            /** Options config */
            config?: (boolean|null);

            /** Options data */
            data?: (boolean|null);

            /** Options file */
            file?: (boolean|null);

            /** Options docker */
            docker?: (boolean|null);
        }

        /** Represents an Options. */
        class Options implements IOptions {

            /**
             * Constructs a new Options.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.backup.IOptions);

            /** Options arm. */
            public arm: boolean;

            /** Options config. */
            public config: boolean;

            /** Options data. */
            public data: boolean;

            /** Options file. */
            public file: boolean;

            /** Options docker. */
            public docker: boolean;

            /**
             * Creates a new Options instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Options instance
             */
            public static create(properties?: lebai.backup.IOptions): lebai.backup.Options;

            /**
             * Encodes the specified Options message. Does not implicitly {@link lebai.backup.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.backup.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link lebai.backup.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.backup.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.backup.Options;

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.backup.Options;

            /**
             * Verifies an Options message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Options
             */
            public static fromObject(object: { [k: string]: any }): lebai.backup.Options;

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @param message Options
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.backup.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Options to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BackupRequest. */
        interface IBackupRequest {

            /** BackupRequest file */
            file?: (string|null);

            /** BackupRequest option */
            option?: (lebai.backup.IOptions|null);
        }

        /** Represents a BackupRequest. */
        class BackupRequest implements IBackupRequest {

            /**
             * Constructs a new BackupRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.backup.IBackupRequest);

            /** BackupRequest file. */
            public file: string;

            /** BackupRequest option. */
            public option?: (lebai.backup.IOptions|null);

            /**
             * Creates a new BackupRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BackupRequest instance
             */
            public static create(properties?: lebai.backup.IBackupRequest): lebai.backup.BackupRequest;

            /**
             * Encodes the specified BackupRequest message. Does not implicitly {@link lebai.backup.BackupRequest.verify|verify} messages.
             * @param message BackupRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.backup.IBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BackupRequest message, length delimited. Does not implicitly {@link lebai.backup.BackupRequest.verify|verify} messages.
             * @param message BackupRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.backup.IBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BackupRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BackupRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.backup.BackupRequest;

            /**
             * Decodes a BackupRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BackupRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.backup.BackupRequest;

            /**
             * Verifies a BackupRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BackupRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BackupRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.backup.BackupRequest;

            /**
             * Creates a plain object from a BackupRequest message. Also converts values to other types if specified.
             * @param message BackupRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.backup.BackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BackupRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetBackupInfoRequest. */
        interface IGetBackupInfoRequest {

            /** GetBackupInfoRequest file */
            file?: (string|null);
        }

        /** Represents a GetBackupInfoRequest. */
        class GetBackupInfoRequest implements IGetBackupInfoRequest {

            /**
             * Constructs a new GetBackupInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.backup.IGetBackupInfoRequest);

            /** GetBackupInfoRequest file. */
            public file: string;

            /**
             * Creates a new GetBackupInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetBackupInfoRequest instance
             */
            public static create(properties?: lebai.backup.IGetBackupInfoRequest): lebai.backup.GetBackupInfoRequest;

            /**
             * Encodes the specified GetBackupInfoRequest message. Does not implicitly {@link lebai.backup.GetBackupInfoRequest.verify|verify} messages.
             * @param message GetBackupInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.backup.IGetBackupInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetBackupInfoRequest message, length delimited. Does not implicitly {@link lebai.backup.GetBackupInfoRequest.verify|verify} messages.
             * @param message GetBackupInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.backup.IGetBackupInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetBackupInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetBackupInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.backup.GetBackupInfoRequest;

            /**
             * Decodes a GetBackupInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetBackupInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.backup.GetBackupInfoRequest;

            /**
             * Verifies a GetBackupInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetBackupInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetBackupInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.backup.GetBackupInfoRequest;

            /**
             * Creates a plain object from a GetBackupInfoRequest message. Also converts values to other types if specified.
             * @param message GetBackupInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.backup.GetBackupInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetBackupInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RestoreRequest. */
        interface IRestoreRequest {

            /** RestoreRequest file */
            file?: (string|null);

            /** RestoreRequest option */
            option?: (lebai.backup.IOptions|null);
        }

        /** Represents a RestoreRequest. */
        class RestoreRequest implements IRestoreRequest {

            /**
             * Constructs a new RestoreRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.backup.IRestoreRequest);

            /** RestoreRequest file. */
            public file: string;

            /** RestoreRequest option. */
            public option?: (lebai.backup.IOptions|null);

            /**
             * Creates a new RestoreRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RestoreRequest instance
             */
            public static create(properties?: lebai.backup.IRestoreRequest): lebai.backup.RestoreRequest;

            /**
             * Encodes the specified RestoreRequest message. Does not implicitly {@link lebai.backup.RestoreRequest.verify|verify} messages.
             * @param message RestoreRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.backup.IRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RestoreRequest message, length delimited. Does not implicitly {@link lebai.backup.RestoreRequest.verify|verify} messages.
             * @param message RestoreRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.backup.IRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RestoreRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RestoreRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.backup.RestoreRequest;

            /**
             * Decodes a RestoreRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RestoreRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.backup.RestoreRequest;

            /**
             * Verifies a RestoreRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RestoreRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RestoreRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.backup.RestoreRequest;

            /**
             * Creates a plain object from a RestoreRequest message. Also converts values to other types if specified.
             * @param message RestoreRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.backup.RestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RestoreRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a BackupService */
        class BackupService extends $protobuf.rpc.Service {

            /**
             * Constructs a new BackupService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new BackupService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BackupService;

            /**
             * Calls Backup.
             * @param request BackupRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public backup(request: lebai.backup.IBackupRequest, callback: lebai.backup.BackupService.BackupCallback): void;

            /**
             * Calls Backup.
             * @param request BackupRequest message or plain object
             * @returns Promise
             */
            public backup(request: lebai.backup.IBackupRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetBackupInfo.
             * @param request GetBackupInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and BackupInfo
             */
            public getBackupInfo(request: lebai.backup.IGetBackupInfoRequest, callback: lebai.backup.BackupService.GetBackupInfoCallback): void;

            /**
             * Calls GetBackupInfo.
             * @param request GetBackupInfoRequest message or plain object
             * @returns Promise
             */
            public getBackupInfo(request: lebai.backup.IGetBackupInfoRequest): Promise<lebai.backup.BackupInfo>;

            /**
             * Calls Restore.
             * @param request RestoreRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public restore(request: lebai.backup.IRestoreRequest, callback: lebai.backup.BackupService.RestoreCallback): void;

            /**
             * Calls Restore.
             * @param request RestoreRequest message or plain object
             * @returns Promise
             */
            public restore(request: lebai.backup.IRestoreRequest): Promise<google.protobuf.Empty>;
        }

        namespace BackupService {

            /**
             * Callback as used by {@link lebai.backup.BackupService#backup}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type BackupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.backup.BackupService#getBackupInfo}.
             * @param error Error, if any
             * @param [response] BackupInfo
             */
            type GetBackupInfoCallback = (error: (Error|null), response?: lebai.backup.BackupInfo) => void;

            /**
             * Callback as used by {@link lebai.backup.BackupService#restore}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type RestoreCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace system. */
    namespace system {

        /** Properties of a HelloData. */
        interface IHelloData {

            /** HelloData data */
            data?: (string|null);
        }

        /** Represents a HelloData. */
        class HelloData implements IHelloData {

            /**
             * Constructs a new HelloData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IHelloData);

            /** HelloData data. */
            public data: string;

            /**
             * Creates a new HelloData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HelloData instance
             */
            public static create(properties?: lebai.system.IHelloData): lebai.system.HelloData;

            /**
             * Encodes the specified HelloData message. Does not implicitly {@link lebai.system.HelloData.verify|verify} messages.
             * @param message HelloData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IHelloData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HelloData message, length delimited. Does not implicitly {@link lebai.system.HelloData.verify|verify} messages.
             * @param message HelloData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IHelloData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HelloData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HelloData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.HelloData;

            /**
             * Decodes a HelloData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HelloData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.HelloData;

            /**
             * Verifies a HelloData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HelloData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HelloData
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.HelloData;

            /**
             * Creates a plain object from a HelloData message. Also converts values to other types if specified.
             * @param message HelloData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.HelloData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HelloData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SystemInfo. */
        interface ISystemInfo {

            /** SystemInfo name */
            name?: (string|null);

            /** SystemInfo kernelVersion */
            kernelVersion?: (string|null);

            /** SystemInfo osVersion */
            osVersion?: (string|null);

            /** SystemInfo hostName */
            hostName?: (string|null);

            /** SystemInfo totalMemory */
            totalMemory?: (number|null);

            /** SystemInfo usedMemory */
            usedMemory?: (number|null);

            /** SystemInfo totalSwap */
            totalSwap?: (number|null);

            /** SystemInfo usedSwap */
            usedSwap?: (number|null);

            /** SystemInfo disks */
            disks?: (string[]|null);

            /** SystemInfo networks */
            networks?: (string[]|null);

            /** SystemInfo components */
            components?: (string[]|null);

            /** SystemInfo processes */
            processes?: (string[]|null);
        }

        /** Represents a SystemInfo. */
        class SystemInfo implements ISystemInfo {

            /**
             * Constructs a new SystemInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.ISystemInfo);

            /** SystemInfo name. */
            public name: string;

            /** SystemInfo kernelVersion. */
            public kernelVersion: string;

            /** SystemInfo osVersion. */
            public osVersion: string;

            /** SystemInfo hostName. */
            public hostName: string;

            /** SystemInfo totalMemory. */
            public totalMemory: number;

            /** SystemInfo usedMemory. */
            public usedMemory: number;

            /** SystemInfo totalSwap. */
            public totalSwap: number;

            /** SystemInfo usedSwap. */
            public usedSwap: number;

            /** SystemInfo disks. */
            public disks: string[];

            /** SystemInfo networks. */
            public networks: string[];

            /** SystemInfo components. */
            public components: string[];

            /** SystemInfo processes. */
            public processes: string[];

            /**
             * Creates a new SystemInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemInfo instance
             */
            public static create(properties?: lebai.system.ISystemInfo): lebai.system.SystemInfo;

            /**
             * Encodes the specified SystemInfo message. Does not implicitly {@link lebai.system.SystemInfo.verify|verify} messages.
             * @param message SystemInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link lebai.system.SystemInfo.verify|verify} messages.
             * @param message SystemInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.SystemInfo;

            /**
             * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.SystemInfo;

            /**
             * Verifies a SystemInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.SystemInfo;

            /**
             * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
             * @param message SystemInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.SystemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** RobotModel enum. */
        enum RobotModel {
            LM3 = 0,
            LM3_L1 = 1,
            LM3_J5L = 2,
            LM6J = 11
        }

        /** Properties of a RobotInfo. */
        interface IRobotInfo {

            /** RobotInfo name */
            name?: (string|null);

            /** RobotInfo model */
            model?: (string|null);

            /** RobotInfo mac */
            mac?: (string|null);

            /** RobotInfo robot */
            robot?: (string|null);

            /** RobotInfo arm */
            arm?: (string|null);

            /** RobotInfo cup */
            cup?: (string|null);
        }

        /** Represents a RobotInfo. */
        class RobotInfo implements IRobotInfo {

            /**
             * Constructs a new RobotInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IRobotInfo);

            /** RobotInfo name. */
            public name: string;

            /** RobotInfo model. */
            public model: string;

            /** RobotInfo mac. */
            public mac: string;

            /** RobotInfo robot. */
            public robot: string;

            /** RobotInfo arm. */
            public arm: string;

            /** RobotInfo cup. */
            public cup: string;

            /**
             * Creates a new RobotInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RobotInfo instance
             */
            public static create(properties?: lebai.system.IRobotInfo): lebai.system.RobotInfo;

            /**
             * Encodes the specified RobotInfo message. Does not implicitly {@link lebai.system.RobotInfo.verify|verify} messages.
             * @param message RobotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IRobotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RobotInfo message, length delimited. Does not implicitly {@link lebai.system.RobotInfo.verify|verify} messages.
             * @param message RobotInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IRobotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RobotInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RobotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.RobotInfo;

            /**
             * Decodes a RobotInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RobotInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.RobotInfo;

            /**
             * Verifies a RobotInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RobotInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RobotInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.RobotInfo;

            /**
             * Creates a plain object from a RobotInfo message. Also converts values to other types if specified.
             * @param message RobotInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.RobotInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RobotInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ComboardInfo. */
        interface IComboardInfo {

            /** ComboardInfo sn */
            sn?: (string|null);

            /** ComboardInfo version */
            version?: (string|null);

            /** ComboardInfo partition */
            partition?: (lebai.hardware.FirmwarePartition|null);

            /** ComboardInfo diNum */
            diNum?: (number|null);

            /** ComboardInfo doNum */
            doNum?: (number|null);

            /** ComboardInfo aiNum */
            aiNum?: (number|null);

            /** ComboardInfo aoNum */
            aoNum?: (number|null);
        }

        /** Represents a ComboardInfo. */
        class ComboardInfo implements IComboardInfo {

            /**
             * Constructs a new ComboardInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IComboardInfo);

            /** ComboardInfo sn. */
            public sn: string;

            /** ComboardInfo version. */
            public version: string;

            /** ComboardInfo partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /** ComboardInfo diNum. */
            public diNum: number;

            /** ComboardInfo doNum. */
            public doNum: number;

            /** ComboardInfo aiNum. */
            public aiNum: number;

            /** ComboardInfo aoNum. */
            public aoNum: number;

            /**
             * Creates a new ComboardInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComboardInfo instance
             */
            public static create(properties?: lebai.system.IComboardInfo): lebai.system.ComboardInfo;

            /**
             * Encodes the specified ComboardInfo message. Does not implicitly {@link lebai.system.ComboardInfo.verify|verify} messages.
             * @param message ComboardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IComboardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComboardInfo message, length delimited. Does not implicitly {@link lebai.system.ComboardInfo.verify|verify} messages.
             * @param message ComboardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IComboardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComboardInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComboardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.ComboardInfo;

            /**
             * Decodes a ComboardInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ComboardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.ComboardInfo;

            /**
             * Verifies a ComboardInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComboardInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComboardInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.ComboardInfo;

            /**
             * Creates a plain object from a ComboardInfo message. Also converts values to other types if specified.
             * @param message ComboardInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.ComboardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComboardInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JointInfo. */
        interface IJointInfo {

            /** JointInfo sn */
            sn?: (string|null);

            /** JointInfo version */
            version?: (string|null);

            /** JointInfo partition */
            partition?: (lebai.hardware.FirmwarePartition|null);
        }

        /** Represents a JointInfo. */
        class JointInfo implements IJointInfo {

            /**
             * Constructs a new JointInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IJointInfo);

            /** JointInfo sn. */
            public sn: string;

            /** JointInfo version. */
            public version: string;

            /** JointInfo partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /**
             * Creates a new JointInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointInfo instance
             */
            public static create(properties?: lebai.system.IJointInfo): lebai.system.JointInfo;

            /**
             * Encodes the specified JointInfo message. Does not implicitly {@link lebai.system.JointInfo.verify|verify} messages.
             * @param message JointInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IJointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointInfo message, length delimited. Does not implicitly {@link lebai.system.JointInfo.verify|verify} messages.
             * @param message JointInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IJointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.JointInfo;

            /**
             * Decodes a JointInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.JointInfo;

            /**
             * Verifies a JointInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.JointInfo;

            /**
             * Creates a plain object from a JointInfo message. Also converts values to other types if specified.
             * @param message JointInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.JointInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FlangeInfo. */
        interface IFlangeInfo {

            /** FlangeInfo sn */
            sn?: (string|null);

            /** FlangeInfo version */
            version?: (string|null);

            /** FlangeInfo partition */
            partition?: (lebai.hardware.FirmwarePartition|null);

            /** FlangeInfo diNum */
            diNum?: (number|null);

            /** FlangeInfo doNum */
            doNum?: (number|null);

            /** FlangeInfo aiNum */
            aiNum?: (number|null);

            /** FlangeInfo aoNum */
            aoNum?: (number|null);
        }

        /** Represents a FlangeInfo. */
        class FlangeInfo implements IFlangeInfo {

            /**
             * Constructs a new FlangeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IFlangeInfo);

            /** FlangeInfo sn. */
            public sn: string;

            /** FlangeInfo version. */
            public version: string;

            /** FlangeInfo partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /** FlangeInfo diNum. */
            public diNum: number;

            /** FlangeInfo doNum. */
            public doNum: number;

            /** FlangeInfo aiNum. */
            public aiNum: number;

            /** FlangeInfo aoNum. */
            public aoNum: number;

            /**
             * Creates a new FlangeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FlangeInfo instance
             */
            public static create(properties?: lebai.system.IFlangeInfo): lebai.system.FlangeInfo;

            /**
             * Encodes the specified FlangeInfo message. Does not implicitly {@link lebai.system.FlangeInfo.verify|verify} messages.
             * @param message FlangeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IFlangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FlangeInfo message, length delimited. Does not implicitly {@link lebai.system.FlangeInfo.verify|verify} messages.
             * @param message FlangeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IFlangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FlangeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FlangeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.FlangeInfo;

            /**
             * Decodes a FlangeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FlangeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.FlangeInfo;

            /**
             * Verifies a FlangeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FlangeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FlangeInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.FlangeInfo;

            /**
             * Creates a plain object from a FlangeInfo message. Also converts values to other types if specified.
             * @param message FlangeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.FlangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FlangeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LedInfo. */
        interface ILedInfo {

            /** LedInfo sn */
            sn?: (string|null);

            /** LedInfo version */
            version?: (string|null);

            /** LedInfo partition */
            partition?: (lebai.hardware.FirmwarePartition|null);
        }

        /** Represents a LedInfo. */
        class LedInfo implements ILedInfo {

            /**
             * Constructs a new LedInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.ILedInfo);

            /** LedInfo sn. */
            public sn: string;

            /** LedInfo version. */
            public version: string;

            /** LedInfo partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /**
             * Creates a new LedInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LedInfo instance
             */
            public static create(properties?: lebai.system.ILedInfo): lebai.system.LedInfo;

            /**
             * Encodes the specified LedInfo message. Does not implicitly {@link lebai.system.LedInfo.verify|verify} messages.
             * @param message LedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.ILedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LedInfo message, length delimited. Does not implicitly {@link lebai.system.LedInfo.verify|verify} messages.
             * @param message LedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.ILedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LedInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.LedInfo;

            /**
             * Decodes a LedInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.LedInfo;

            /**
             * Verifies a LedInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LedInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LedInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.LedInfo;

            /**
             * Creates a plain object from a LedInfo message. Also converts values to other types if specified.
             * @param message LedInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.LedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LedInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtraIoInfo. */
        interface IExtraIoInfo {

            /** ExtraIoInfo valid */
            valid?: (boolean|null);

            /** ExtraIoInfo diNum */
            diNum?: (number|null);

            /** ExtraIoInfo doNum */
            doNum?: (number|null);

            /** ExtraIoInfo aiNum */
            aiNum?: (number|null);

            /** ExtraIoInfo aoNum */
            aoNum?: (number|null);
        }

        /** Represents an ExtraIoInfo. */
        class ExtraIoInfo implements IExtraIoInfo {

            /**
             * Constructs a new ExtraIoInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IExtraIoInfo);

            /** ExtraIoInfo valid. */
            public valid: boolean;

            /** ExtraIoInfo diNum. */
            public diNum: number;

            /** ExtraIoInfo doNum. */
            public doNum: number;

            /** ExtraIoInfo aiNum. */
            public aiNum: number;

            /** ExtraIoInfo aoNum. */
            public aoNum: number;

            /**
             * Creates a new ExtraIoInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtraIoInfo instance
             */
            public static create(properties?: lebai.system.IExtraIoInfo): lebai.system.ExtraIoInfo;

            /**
             * Encodes the specified ExtraIoInfo message. Does not implicitly {@link lebai.system.ExtraIoInfo.verify|verify} messages.
             * @param message ExtraIoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IExtraIoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtraIoInfo message, length delimited. Does not implicitly {@link lebai.system.ExtraIoInfo.verify|verify} messages.
             * @param message ExtraIoInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IExtraIoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtraIoInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtraIoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.ExtraIoInfo;

            /**
             * Decodes an ExtraIoInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtraIoInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.ExtraIoInfo;

            /**
             * Verifies an ExtraIoInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtraIoInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtraIoInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.ExtraIoInfo;

            /**
             * Creates a plain object from an ExtraIoInfo message. Also converts values to other types if specified.
             * @param message ExtraIoInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.ExtraIoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtraIoInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HardwareInfo. */
        interface IHardwareInfo {

            /** HardwareInfo comboard */
            comboard?: (lebai.system.IComboardInfo|null);

            /** HardwareInfo joints */
            joints?: (lebai.system.IJointInfo[]|null);

            /** HardwareInfo flange */
            flange?: (lebai.system.IFlangeInfo|null);

            /** HardwareInfo led */
            led?: (lebai.system.ILedInfo|null);

            /** HardwareInfo extraIo */
            extraIo?: (lebai.system.IExtraIoInfo|null);
        }

        /** Represents a HardwareInfo. */
        class HardwareInfo implements IHardwareInfo {

            /**
             * Constructs a new HardwareInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IHardwareInfo);

            /** HardwareInfo comboard. */
            public comboard?: (lebai.system.IComboardInfo|null);

            /** HardwareInfo joints. */
            public joints: lebai.system.IJointInfo[];

            /** HardwareInfo flange. */
            public flange?: (lebai.system.IFlangeInfo|null);

            /** HardwareInfo led. */
            public led?: (lebai.system.ILedInfo|null);

            /** HardwareInfo extraIo. */
            public extraIo?: (lebai.system.IExtraIoInfo|null);

            /**
             * Creates a new HardwareInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HardwareInfo instance
             */
            public static create(properties?: lebai.system.IHardwareInfo): lebai.system.HardwareInfo;

            /**
             * Encodes the specified HardwareInfo message. Does not implicitly {@link lebai.system.HardwareInfo.verify|verify} messages.
             * @param message HardwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IHardwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HardwareInfo message, length delimited. Does not implicitly {@link lebai.system.HardwareInfo.verify|verify} messages.
             * @param message HardwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IHardwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HardwareInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HardwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.HardwareInfo;

            /**
             * Decodes a HardwareInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HardwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.HardwareInfo;

            /**
             * Verifies a HardwareInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HardwareInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HardwareInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.HardwareInfo;

            /**
             * Creates a plain object from a HardwareInfo message. Also converts values to other types if specified.
             * @param message HardwareInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.HardwareInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HardwareInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SoftwareInfo. */
        interface ISoftwareInfo {

            /** SoftwareInfo rcVersion */
            rcVersion?: (string|null);
        }

        /** Represents a SoftwareInfo. */
        class SoftwareInfo implements ISoftwareInfo {

            /**
             * Constructs a new SoftwareInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.ISoftwareInfo);

            /** SoftwareInfo rcVersion. */
            public rcVersion: string;

            /**
             * Creates a new SoftwareInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SoftwareInfo instance
             */
            public static create(properties?: lebai.system.ISoftwareInfo): lebai.system.SoftwareInfo;

            /**
             * Encodes the specified SoftwareInfo message. Does not implicitly {@link lebai.system.SoftwareInfo.verify|verify} messages.
             * @param message SoftwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.ISoftwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SoftwareInfo message, length delimited. Does not implicitly {@link lebai.system.SoftwareInfo.verify|verify} messages.
             * @param message SoftwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.ISoftwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SoftwareInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SoftwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.SoftwareInfo;

            /**
             * Decodes a SoftwareInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SoftwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.SoftwareInfo;

            /**
             * Verifies a SoftwareInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SoftwareInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SoftwareInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.SoftwareInfo;

            /**
             * Creates a plain object from a SoftwareInfo message. Also converts values to other types if specified.
             * @param message SoftwareInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.SoftwareInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SoftwareInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** RobotState enum. */
        enum RobotState {
            DISCONNECTED = 0,
            ESTOP = 1,
            BOOTING = 2,
            ROBOT_OFF = 3,
            ROBOT_ON = 4,
            IDLE = 5,
            PAUSED = 6,
            MOVING = 7,
            UPDATING = 8,
            STARTING = 9,
            STOPPING = 10,
            TEACHING = 11,
            STOP = 12,
            FINETUNING = 13
        }

        /** Properties of a GetRobotStateResponse. */
        interface IGetRobotStateResponse {

            /** GetRobotStateResponse state */
            state?: (lebai.system.RobotState|null);
        }

        /** Represents a GetRobotStateResponse. */
        class GetRobotStateResponse implements IGetRobotStateResponse {

            /**
             * Constructs a new GetRobotStateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IGetRobotStateResponse);

            /** GetRobotStateResponse state. */
            public state: lebai.system.RobotState;

            /**
             * Creates a new GetRobotStateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRobotStateResponse instance
             */
            public static create(properties?: lebai.system.IGetRobotStateResponse): lebai.system.GetRobotStateResponse;

            /**
             * Encodes the specified GetRobotStateResponse message. Does not implicitly {@link lebai.system.GetRobotStateResponse.verify|verify} messages.
             * @param message GetRobotStateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IGetRobotStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRobotStateResponse message, length delimited. Does not implicitly {@link lebai.system.GetRobotStateResponse.verify|verify} messages.
             * @param message GetRobotStateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IGetRobotStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRobotStateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRobotStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.GetRobotStateResponse;

            /**
             * Decodes a GetRobotStateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRobotStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.GetRobotStateResponse;

            /**
             * Verifies a GetRobotStateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRobotStateResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRobotStateResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.GetRobotStateResponse;

            /**
             * Creates a plain object from a GetRobotStateResponse message. Also converts values to other types if specified.
             * @param message GetRobotStateResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.GetRobotStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRobotStateResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PhyData. */
        interface IPhyData {

            /** PhyData jointTemp */
            jointTemp?: (number[]|null);

            /** PhyData jointVoltage */
            jointVoltage?: (number[]|null);

            /** PhyData flangeVoltage */
            flangeVoltage?: (number|null);
        }

        /** Represents a PhyData. */
        class PhyData implements IPhyData {

            /**
             * Constructs a new PhyData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IPhyData);

            /** PhyData jointTemp. */
            public jointTemp: number[];

            /** PhyData jointVoltage. */
            public jointVoltage: number[];

            /** PhyData flangeVoltage. */
            public flangeVoltage: number;

            /**
             * Creates a new PhyData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhyData instance
             */
            public static create(properties?: lebai.system.IPhyData): lebai.system.PhyData;

            /**
             * Encodes the specified PhyData message. Does not implicitly {@link lebai.system.PhyData.verify|verify} messages.
             * @param message PhyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IPhyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhyData message, length delimited. Does not implicitly {@link lebai.system.PhyData.verify|verify} messages.
             * @param message PhyData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IPhyData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhyData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.PhyData;

            /**
             * Decodes a PhyData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhyData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.PhyData;

            /**
             * Verifies a PhyData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhyData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhyData
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.PhyData;

            /**
             * Creates a plain object from a PhyData message. Also converts values to other types if specified.
             * @param message PhyData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.PhyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhyData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** EstopReason enum. */
        enum EstopReason {
            NONE = 0,
            SYSTEM = 2,
            MANUAL = 3,
            HARD_ESTOP = 4,
            COLLISION = 5,
            JOINT_LIMIT = 6,
            EXCEED = 7,
            TRAJECTORY_ERROR = 8,
            COMM_ERROR = 11,
            CAN_ERROR = 12,
            JOINT_ERROR = 13
        }

        /** Properties of a GetEstopReasonResponse. */
        interface IGetEstopReasonResponse {

            /** GetEstopReasonResponse reason */
            reason?: (lebai.system.EstopReason|null);
        }

        /** Represents a GetEstopReasonResponse. */
        class GetEstopReasonResponse implements IGetEstopReasonResponse {

            /**
             * Constructs a new GetEstopReasonResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.system.IGetEstopReasonResponse);

            /** GetEstopReasonResponse reason. */
            public reason: lebai.system.EstopReason;

            /**
             * Creates a new GetEstopReasonResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEstopReasonResponse instance
             */
            public static create(properties?: lebai.system.IGetEstopReasonResponse): lebai.system.GetEstopReasonResponse;

            /**
             * Encodes the specified GetEstopReasonResponse message. Does not implicitly {@link lebai.system.GetEstopReasonResponse.verify|verify} messages.
             * @param message GetEstopReasonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.system.IGetEstopReasonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEstopReasonResponse message, length delimited. Does not implicitly {@link lebai.system.GetEstopReasonResponse.verify|verify} messages.
             * @param message GetEstopReasonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.system.IGetEstopReasonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEstopReasonResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEstopReasonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.system.GetEstopReasonResponse;

            /**
             * Decodes a GetEstopReasonResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEstopReasonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.system.GetEstopReasonResponse;

            /**
             * Verifies a GetEstopReasonResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEstopReasonResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEstopReasonResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.system.GetEstopReasonResponse;

            /**
             * Creates a plain object from a GetEstopReasonResponse message. Also converts values to other types if specified.
             * @param message GetEstopReasonResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.system.GetEstopReasonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEstopReasonResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a SystemService */
        class SystemService extends $protobuf.rpc.Service {

            /**
             * Constructs a new SystemService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new SystemService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SystemService;

            /**
             * Calls Hello.
             * @param request HelloData message or plain object
             * @param callback Node-style callback called with the error, if any, and HelloData
             */
            public hello(request: lebai.system.IHelloData, callback: lebai.system.SystemService.HelloCallback): void;

            /**
             * Calls Hello.
             * @param request HelloData message or plain object
             * @returns Promise
             */
            public hello(request: lebai.system.IHelloData): Promise<lebai.system.HelloData>;

            /**
             * Calls GetSystemInfo.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and SystemInfo
             */
            public getSystemInfo(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetSystemInfoCallback): void;

            /**
             * Calls GetSystemInfo.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getSystemInfo(request: google.protobuf.IEmpty): Promise<lebai.system.SystemInfo>;

            /**
             * Calls GetRobotInfo.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and RobotInfo
             */
            public getRobotInfo(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetRobotInfoCallback): void;

            /**
             * Calls GetRobotInfo.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getRobotInfo(request: google.protobuf.IEmpty): Promise<lebai.system.RobotInfo>;

            /**
             * Calls GetHardwareInfo.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and HardwareInfo
             */
            public getHardwareInfo(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetHardwareInfoCallback): void;

            /**
             * Calls GetHardwareInfo.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getHardwareInfo(request: google.protobuf.IEmpty): Promise<lebai.system.HardwareInfo>;

            /**
             * Calls GetSoftwareInfo.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and SoftwareInfo
             */
            public getSoftwareInfo(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetSoftwareInfoCallback): void;

            /**
             * Calls GetSoftwareInfo.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getSoftwareInfo(request: google.protobuf.IEmpty): Promise<lebai.system.SoftwareInfo>;

            /**
             * Calls GetRobotState.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and GetRobotStateResponse
             */
            public getRobotState(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetRobotStateCallback): void;

            /**
             * Calls GetRobotState.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getRobotState(request: google.protobuf.IEmpty): Promise<lebai.system.GetRobotStateResponse>;

            /**
             * Calls SubRobotState.
             * @param request SubscribeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetRobotStateResponse
             */
            public subRobotState(request: lebai.ISubscribeRequest, callback: lebai.system.SystemService.SubRobotStateCallback): void;

            /**
             * Calls SubRobotState.
             * @param request SubscribeRequest message or plain object
             * @returns Promise
             */
            public subRobotState(request: lebai.ISubscribeRequest): Promise<lebai.system.GetRobotStateResponse>;

            /**
             * Calls GetPhyData.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and PhyData
             */
            public getPhyData(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetPhyDataCallback): void;

            /**
             * Calls GetPhyData.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getPhyData(request: google.protobuf.IEmpty): Promise<lebai.system.PhyData>;

            /**
             * Calls SubPhyData.
             * @param request SubscribeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and PhyData
             */
            public subPhyData(request: lebai.ISubscribeRequest, callback: lebai.system.SystemService.SubPhyDataCallback): void;

            /**
             * Calls SubPhyData.
             * @param request SubscribeRequest message or plain object
             * @returns Promise
             */
            public subPhyData(request: lebai.ISubscribeRequest): Promise<lebai.system.PhyData>;

            /**
             * Calls Powerdown.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public powerdown(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.PowerdownCallback): void;

            /**
             * Calls Powerdown.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public powerdown(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls Reboot.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public reboot(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.RebootCallback): void;

            /**
             * Calls Reboot.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public reboot(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls StartSys.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public startSys(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.StartSysCallback): void;

            /**
             * Calls StartSys.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public startSys(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls StopSys.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public stopSys(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.StopSysCallback): void;

            /**
             * Calls StopSys.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public stopSys(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls Stop.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public stop(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.StopCallback): void;

            /**
             * Calls Stop.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public stop(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls Estop.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public estop(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.EstopCallback): void;

            /**
             * Calls Estop.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public estop(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls GetEstopReason.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and GetEstopReasonResponse
             */
            public getEstopReason(request: google.protobuf.IEmpty, callback: lebai.system.SystemService.GetEstopReasonCallback): void;

            /**
             * Calls GetEstopReason.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getEstopReason(request: google.protobuf.IEmpty): Promise<lebai.system.GetEstopReasonResponse>;
        }

        namespace SystemService {

            /**
             * Callback as used by {@link lebai.system.SystemService#hello}.
             * @param error Error, if any
             * @param [response] HelloData
             */
            type HelloCallback = (error: (Error|null), response?: lebai.system.HelloData) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getSystemInfo}.
             * @param error Error, if any
             * @param [response] SystemInfo
             */
            type GetSystemInfoCallback = (error: (Error|null), response?: lebai.system.SystemInfo) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getRobotInfo}.
             * @param error Error, if any
             * @param [response] RobotInfo
             */
            type GetRobotInfoCallback = (error: (Error|null), response?: lebai.system.RobotInfo) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getHardwareInfo}.
             * @param error Error, if any
             * @param [response] HardwareInfo
             */
            type GetHardwareInfoCallback = (error: (Error|null), response?: lebai.system.HardwareInfo) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getSoftwareInfo}.
             * @param error Error, if any
             * @param [response] SoftwareInfo
             */
            type GetSoftwareInfoCallback = (error: (Error|null), response?: lebai.system.SoftwareInfo) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getRobotState}.
             * @param error Error, if any
             * @param [response] GetRobotStateResponse
             */
            type GetRobotStateCallback = (error: (Error|null), response?: lebai.system.GetRobotStateResponse) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#subRobotState}.
             * @param error Error, if any
             * @param [response] GetRobotStateResponse
             */
            type SubRobotStateCallback = (error: (Error|null), response?: lebai.system.GetRobotStateResponse) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getPhyData}.
             * @param error Error, if any
             * @param [response] PhyData
             */
            type GetPhyDataCallback = (error: (Error|null), response?: lebai.system.PhyData) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#subPhyData}.
             * @param error Error, if any
             * @param [response] PhyData
             */
            type SubPhyDataCallback = (error: (Error|null), response?: lebai.system.PhyData) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#powerdown}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type PowerdownCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#reboot}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type RebootCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#startSys}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StartSysCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#stopSys}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StopSysCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#stop}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StopCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#estop}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EstopCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.system.SystemService#getEstopReason}.
             * @param error Error, if any
             * @param [response] GetEstopReasonResponse
             */
            type GetEstopReasonCallback = (error: (Error|null), response?: lebai.system.GetEstopReasonResponse) => void;
        }
    }

    /** Properties of a SubscribeRequest. */
    interface ISubscribeRequest {

        /** SubscribeRequest intervalMin */
        intervalMin?: (number|Long|null);

        /** SubscribeRequest intervalMax */
        intervalMax?: (number|Long|null);
    }

    /** Represents a SubscribeRequest. */
    class SubscribeRequest implements ISubscribeRequest {

        /**
         * Constructs a new SubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lebai.ISubscribeRequest);

        /** SubscribeRequest intervalMin. */
        public intervalMin: (number|Long);

        /** SubscribeRequest intervalMax. */
        public intervalMax: (number|Long);

        /**
         * Creates a new SubscribeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeRequest instance
         */
        public static create(properties?: lebai.ISubscribeRequest): lebai.SubscribeRequest;

        /**
         * Encodes the specified SubscribeRequest message. Does not implicitly {@link lebai.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lebai.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link lebai.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lebai.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.SubscribeRequest;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.SubscribeRequest;

        /**
         * Verifies a SubscribeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeRequest
         */
        public static fromObject(object: { [k: string]: any }): lebai.SubscribeRequest;

        /**
         * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
         * @param message SubscribeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lebai.SubscribeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace hardware. */
    namespace hardware {

        /** Address enum. */
        enum Address {
            EMPTY = 0,
            JOINT1 = 1,
            JOINT2 = 2,
            JOINT3 = 3,
            JOINT4 = 4,
            JOINT5 = 5,
            JOINT6 = 6,
            JOINT7 = 7,
            FLANGE = 8,
            CLAW = 9,
            LED = 10,
            DIAL = 13,
            COMM_BOARD = 14,
            TEST_BOARD = 15
        }

        /** FirmwarePartition enum. */
        enum FirmwarePartition {
            A = 0,
            B = 1,
            C = 2,
            UNKNOWN = 3
        }

        /** Properties of a FirmwareInfo. */
        interface IFirmwareInfo {

            /** FirmwareInfo sn */
            sn?: (string|null);

            /** FirmwareInfo version */
            version?: (string|null);

            /** FirmwareInfo partition */
            partition?: (lebai.hardware.FirmwarePartition|null);
        }

        /** Represents a FirmwareInfo. */
        class FirmwareInfo implements IFirmwareInfo {

            /**
             * Constructs a new FirmwareInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.hardware.IFirmwareInfo);

            /** FirmwareInfo sn. */
            public sn: string;

            /** FirmwareInfo version. */
            public version: string;

            /** FirmwareInfo partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /**
             * Creates a new FirmwareInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FirmwareInfo instance
             */
            public static create(properties?: lebai.hardware.IFirmwareInfo): lebai.hardware.FirmwareInfo;

            /**
             * Encodes the specified FirmwareInfo message. Does not implicitly {@link lebai.hardware.FirmwareInfo.verify|verify} messages.
             * @param message FirmwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.hardware.IFirmwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FirmwareInfo message, length delimited. Does not implicitly {@link lebai.hardware.FirmwareInfo.verify|verify} messages.
             * @param message FirmwareInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.hardware.IFirmwareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirmwareInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FirmwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.hardware.FirmwareInfo;

            /**
             * Decodes a FirmwareInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FirmwareInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.hardware.FirmwareInfo;

            /**
             * Verifies a FirmwareInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FirmwareInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FirmwareInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.hardware.FirmwareInfo;

            /**
             * Creates a plain object from a FirmwareInfo message. Also converts values to other types if specified.
             * @param message FirmwareInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.hardware.FirmwareInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FirmwareInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartOtaRequest. */
        interface IStartOtaRequest {

            /** StartOtaRequest address */
            address?: (lebai.hardware.Address|null);

            /** StartOtaRequest partition */
            partition?: (lebai.hardware.FirmwarePartition|null);

            /** StartOtaRequest file */
            file?: (string|null);
        }

        /** Represents a StartOtaRequest. */
        class StartOtaRequest implements IStartOtaRequest {

            /**
             * Constructs a new StartOtaRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.hardware.IStartOtaRequest);

            /** StartOtaRequest address. */
            public address: lebai.hardware.Address;

            /** StartOtaRequest partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /** StartOtaRequest file. */
            public file: string;

            /**
             * Creates a new StartOtaRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartOtaRequest instance
             */
            public static create(properties?: lebai.hardware.IStartOtaRequest): lebai.hardware.StartOtaRequest;

            /**
             * Encodes the specified StartOtaRequest message. Does not implicitly {@link lebai.hardware.StartOtaRequest.verify|verify} messages.
             * @param message StartOtaRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.hardware.IStartOtaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartOtaRequest message, length delimited. Does not implicitly {@link lebai.hardware.StartOtaRequest.verify|verify} messages.
             * @param message StartOtaRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.hardware.IStartOtaRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartOtaRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartOtaRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.hardware.StartOtaRequest;

            /**
             * Decodes a StartOtaRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartOtaRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.hardware.StartOtaRequest;

            /**
             * Verifies a StartOtaRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartOtaRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartOtaRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.hardware.StartOtaRequest;

            /**
             * Creates a plain object from a StartOtaRequest message. Also converts values to other types if specified.
             * @param message StartOtaRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.hardware.StartOtaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartOtaRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SwitchPartitionRequest. */
        interface ISwitchPartitionRequest {

            /** SwitchPartitionRequest address */
            address?: (lebai.hardware.Address|null);

            /** SwitchPartitionRequest partition */
            partition?: (lebai.hardware.FirmwarePartition|null);
        }

        /** Represents a SwitchPartitionRequest. */
        class SwitchPartitionRequest implements ISwitchPartitionRequest {

            /**
             * Constructs a new SwitchPartitionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.hardware.ISwitchPartitionRequest);

            /** SwitchPartitionRequest address. */
            public address: lebai.hardware.Address;

            /** SwitchPartitionRequest partition. */
            public partition: lebai.hardware.FirmwarePartition;

            /**
             * Creates a new SwitchPartitionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SwitchPartitionRequest instance
             */
            public static create(properties?: lebai.hardware.ISwitchPartitionRequest): lebai.hardware.SwitchPartitionRequest;

            /**
             * Encodes the specified SwitchPartitionRequest message. Does not implicitly {@link lebai.hardware.SwitchPartitionRequest.verify|verify} messages.
             * @param message SwitchPartitionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.hardware.ISwitchPartitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SwitchPartitionRequest message, length delimited. Does not implicitly {@link lebai.hardware.SwitchPartitionRequest.verify|verify} messages.
             * @param message SwitchPartitionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.hardware.ISwitchPartitionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SwitchPartitionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SwitchPartitionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.hardware.SwitchPartitionRequest;

            /**
             * Decodes a SwitchPartitionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SwitchPartitionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.hardware.SwitchPartitionRequest;

            /**
             * Verifies a SwitchPartitionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SwitchPartitionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SwitchPartitionRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.hardware.SwitchPartitionRequest;

            /**
             * Creates a plain object from a SwitchPartitionRequest message. Also converts values to other types if specified.
             * @param message SwitchPartitionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.hardware.SwitchPartitionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SwitchPartitionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Step enum. */
        enum Step {
            NONE = 0,
            WAIT = 1,
            DOWNLOADING = 2,
            FLASHING = 3,
            RESTART = 4,
            DONE = 5,
            FAIL = 6
        }

        /** Properties of an OtaState. */
        interface IOtaState {

            /** OtaState step */
            step?: (lebai.hardware.Step|null);

            /** OtaState progress */
            progress?: (number|null);
        }

        /** Represents an OtaState. */
        class OtaState implements IOtaState {

            /**
             * Constructs a new OtaState.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.hardware.IOtaState);

            /** OtaState step. */
            public step: lebai.hardware.Step;

            /** OtaState progress. */
            public progress: number;

            /**
             * Creates a new OtaState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OtaState instance
             */
            public static create(properties?: lebai.hardware.IOtaState): lebai.hardware.OtaState;

            /**
             * Encodes the specified OtaState message. Does not implicitly {@link lebai.hardware.OtaState.verify|verify} messages.
             * @param message OtaState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.hardware.IOtaState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OtaState message, length delimited. Does not implicitly {@link lebai.hardware.OtaState.verify|verify} messages.
             * @param message OtaState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.hardware.IOtaState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OtaState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OtaState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.hardware.OtaState;

            /**
             * Decodes an OtaState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OtaState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.hardware.OtaState;

            /**
             * Verifies an OtaState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OtaState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OtaState
             */
            public static fromObject(object: { [k: string]: any }): lebai.hardware.OtaState;

            /**
             * Creates a plain object from an OtaState message. Also converts values to other types if specified.
             * @param message OtaState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.hardware.OtaState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OtaState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a HardwareService */
        class HardwareService extends $protobuf.rpc.Service {

            /**
             * Constructs a new HardwareService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new HardwareService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HardwareService;

            /**
             * Calls StartOta.
             * @param request StartOtaRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public startOta(request: lebai.hardware.IStartOtaRequest, callback: lebai.hardware.HardwareService.StartOtaCallback): void;

            /**
             * Calls StartOta.
             * @param request StartOtaRequest message or plain object
             * @returns Promise
             */
            public startOta(request: lebai.hardware.IStartOtaRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SwitchPartition.
             * @param request SwitchPartitionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public switchPartition(request: lebai.hardware.ISwitchPartitionRequest, callback: lebai.hardware.HardwareService.SwitchPartitionCallback): void;

            /**
             * Calls SwitchPartition.
             * @param request SwitchPartitionRequest message or plain object
             * @returns Promise
             */
            public switchPartition(request: lebai.hardware.ISwitchPartitionRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetOtaState.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and OtaState
             */
            public getOtaState(request: google.protobuf.IEmpty, callback: lebai.hardware.HardwareService.GetOtaStateCallback): void;

            /**
             * Calls GetOtaState.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getOtaState(request: google.protobuf.IEmpty): Promise<lebai.hardware.OtaState>;
        }

        namespace HardwareService {

            /**
             * Callback as used by {@link lebai.hardware.HardwareService#startOta}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StartOtaCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.hardware.HardwareService#switchPartition}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SwitchPartitionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.hardware.HardwareService#getOtaState}.
             * @param error Error, if any
             * @param [response] OtaState
             */
            type GetOtaStateCallback = (error: (Error|null), response?: lebai.hardware.OtaState) => void;
        }
    }

    /** Namespace claw. */
    namespace claw {

        /** Address enum. */
        enum Address {
            AMPLITUDE = 0,
            FORCE = 1,
            VOLTAGE = 2,
            DISTANCE = 3,
            DO = 4,
            ACTUAL_AMPLITUDE = 5,
            ACTUAL_FORCE = 6,
            WEIGHT = 7,
            INIT = 8,
            FLAG = 9,
            ERROR = 10
        }

        /** Properties of a Claw. */
        interface IClaw {

            /** Claw force */
            force?: (number|null);

            /** Claw amplitude */
            amplitude?: (number|null);

            /** Claw weight */
            weight?: (number|null);

            /** Claw holdOn */
            holdOn?: (boolean|null);
        }

        /** Represents a Claw. */
        class Claw implements IClaw {

            /**
             * Constructs a new Claw.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.IClaw);

            /** Claw force. */
            public force: number;

            /** Claw amplitude. */
            public amplitude: number;

            /** Claw weight. */
            public weight: number;

            /** Claw holdOn. */
            public holdOn: boolean;

            /**
             * Creates a new Claw instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Claw instance
             */
            public static create(properties?: lebai.claw.IClaw): lebai.claw.Claw;

            /**
             * Encodes the specified Claw message. Does not implicitly {@link lebai.claw.Claw.verify|verify} messages.
             * @param message Claw message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.IClaw, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Claw message, length delimited. Does not implicitly {@link lebai.claw.Claw.verify|verify} messages.
             * @param message Claw message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.IClaw, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Claw message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Claw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.Claw;

            /**
             * Decodes a Claw message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Claw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.Claw;

            /**
             * Verifies a Claw message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Claw message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Claw
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.Claw;

            /**
             * Creates a plain object from a Claw message. Also converts values to other types if specified.
             * @param message Claw
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.Claw, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Claw to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InitClawRequest. */
        interface IInitClawRequest {

            /** InitClawRequest force */
            force?: (boolean|null);
        }

        /** Represents an InitClawRequest. */
        class InitClawRequest implements IInitClawRequest {

            /**
             * Constructs a new InitClawRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.IInitClawRequest);

            /** InitClawRequest force. */
            public force: boolean;

            /**
             * Creates a new InitClawRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InitClawRequest instance
             */
            public static create(properties?: lebai.claw.IInitClawRequest): lebai.claw.InitClawRequest;

            /**
             * Encodes the specified InitClawRequest message. Does not implicitly {@link lebai.claw.InitClawRequest.verify|verify} messages.
             * @param message InitClawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.IInitClawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InitClawRequest message, length delimited. Does not implicitly {@link lebai.claw.InitClawRequest.verify|verify} messages.
             * @param message InitClawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.IInitClawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InitClawRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InitClawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.InitClawRequest;

            /**
             * Decodes an InitClawRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InitClawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.InitClawRequest;

            /**
             * Verifies an InitClawRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InitClawRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InitClawRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.InitClawRequest;

            /**
             * Creates a plain object from an InitClawRequest message. Also converts values to other types if specified.
             * @param message InitClawRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.InitClawRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InitClawRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetClawRequest. */
        interface ISetClawRequest {

            /** SetClawRequest force */
            force?: (google.protobuf.IDoubleValue|null);

            /** SetClawRequest amplitude */
            amplitude?: (google.protobuf.IDoubleValue|null);
        }

        /** Represents a SetClawRequest. */
        class SetClawRequest implements ISetClawRequest {

            /**
             * Constructs a new SetClawRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.ISetClawRequest);

            /** SetClawRequest force. */
            public force?: (google.protobuf.IDoubleValue|null);

            /** SetClawRequest amplitude. */
            public amplitude?: (google.protobuf.IDoubleValue|null);

            /**
             * Creates a new SetClawRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetClawRequest instance
             */
            public static create(properties?: lebai.claw.ISetClawRequest): lebai.claw.SetClawRequest;

            /**
             * Encodes the specified SetClawRequest message. Does not implicitly {@link lebai.claw.SetClawRequest.verify|verify} messages.
             * @param message SetClawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.ISetClawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetClawRequest message, length delimited. Does not implicitly {@link lebai.claw.SetClawRequest.verify|verify} messages.
             * @param message SetClawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.ISetClawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetClawRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetClawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.SetClawRequest;

            /**
             * Decodes a SetClawRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetClawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.SetClawRequest;

            /**
             * Verifies a SetClawRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetClawRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetClawRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.SetClawRequest;

            /**
             * Creates a plain object from a SetClawRequest message. Also converts values to other types if specified.
             * @param message SetClawRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.SetClawRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetClawRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetClawAoRequest. */
        interface ISetClawAoRequest {

            /** SetClawAoRequest address */
            address?: (lebai.claw.Address|null);

            /** SetClawAoRequest value */
            value?: (number|null);
        }

        /** Represents a SetClawAoRequest. */
        class SetClawAoRequest implements ISetClawAoRequest {

            /**
             * Constructs a new SetClawAoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.ISetClawAoRequest);

            /** SetClawAoRequest address. */
            public address: lebai.claw.Address;

            /** SetClawAoRequest value. */
            public value: number;

            /**
             * Creates a new SetClawAoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetClawAoRequest instance
             */
            public static create(properties?: lebai.claw.ISetClawAoRequest): lebai.claw.SetClawAoRequest;

            /**
             * Encodes the specified SetClawAoRequest message. Does not implicitly {@link lebai.claw.SetClawAoRequest.verify|verify} messages.
             * @param message SetClawAoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.ISetClawAoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetClawAoRequest message, length delimited. Does not implicitly {@link lebai.claw.SetClawAoRequest.verify|verify} messages.
             * @param message SetClawAoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.ISetClawAoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetClawAoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetClawAoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.SetClawAoRequest;

            /**
             * Decodes a SetClawAoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetClawAoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.SetClawAoRequest;

            /**
             * Verifies a SetClawAoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetClawAoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetClawAoRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.SetClawAoRequest;

            /**
             * Creates a plain object from a SetClawAoRequest message. Also converts values to other types if specified.
             * @param message SetClawAoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.SetClawAoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetClawAoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetClawAiRequest. */
        interface IGetClawAiRequest {

            /** GetClawAiRequest address */
            address?: (lebai.claw.Address|null);
        }

        /** Represents a GetClawAiRequest. */
        class GetClawAiRequest implements IGetClawAiRequest {

            /**
             * Constructs a new GetClawAiRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.IGetClawAiRequest);

            /** GetClawAiRequest address. */
            public address: lebai.claw.Address;

            /**
             * Creates a new GetClawAiRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetClawAiRequest instance
             */
            public static create(properties?: lebai.claw.IGetClawAiRequest): lebai.claw.GetClawAiRequest;

            /**
             * Encodes the specified GetClawAiRequest message. Does not implicitly {@link lebai.claw.GetClawAiRequest.verify|verify} messages.
             * @param message GetClawAiRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.IGetClawAiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetClawAiRequest message, length delimited. Does not implicitly {@link lebai.claw.GetClawAiRequest.verify|verify} messages.
             * @param message GetClawAiRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.IGetClawAiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetClawAiRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetClawAiRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.GetClawAiRequest;

            /**
             * Decodes a GetClawAiRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetClawAiRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.GetClawAiRequest;

            /**
             * Verifies a GetClawAiRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetClawAiRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetClawAiRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.GetClawAiRequest;

            /**
             * Creates a plain object from a GetClawAiRequest message. Also converts values to other types if specified.
             * @param message GetClawAiRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.GetClawAiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetClawAiRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetClawAiResponse. */
        interface IGetClawAiResponse {

            /** GetClawAiResponse value */
            value?: (number|null);
        }

        /** Represents a GetClawAiResponse. */
        class GetClawAiResponse implements IGetClawAiResponse {

            /**
             * Constructs a new GetClawAiResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.IGetClawAiResponse);

            /** GetClawAiResponse value. */
            public value: number;

            /**
             * Creates a new GetClawAiResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetClawAiResponse instance
             */
            public static create(properties?: lebai.claw.IGetClawAiResponse): lebai.claw.GetClawAiResponse;

            /**
             * Encodes the specified GetClawAiResponse message. Does not implicitly {@link lebai.claw.GetClawAiResponse.verify|verify} messages.
             * @param message GetClawAiResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.IGetClawAiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetClawAiResponse message, length delimited. Does not implicitly {@link lebai.claw.GetClawAiResponse.verify|verify} messages.
             * @param message GetClawAiResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.IGetClawAiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetClawAiResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetClawAiResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.GetClawAiResponse;

            /**
             * Decodes a GetClawAiResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetClawAiResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.GetClawAiResponse;

            /**
             * Verifies a GetClawAiResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetClawAiResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetClawAiResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.GetClawAiResponse;

            /**
             * Creates a plain object from a GetClawAiResponse message. Also converts values to other types if specified.
             * @param message GetClawAiResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.GetClawAiResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetClawAiResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitClawAiRequest. */
        interface IWaitClawAiRequest {

            /** WaitClawAiRequest address */
            address?: (lebai.claw.Address|null);

            /** WaitClawAiRequest value */
            value?: (number|null);

            /** WaitClawAiRequest relation */
            relation?: (lebai.cmp.Relation|null);
        }

        /** Represents a WaitClawAiRequest. */
        class WaitClawAiRequest implements IWaitClawAiRequest {

            /**
             * Constructs a new WaitClawAiRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.claw.IWaitClawAiRequest);

            /** WaitClawAiRequest address. */
            public address: lebai.claw.Address;

            /** WaitClawAiRequest value. */
            public value: number;

            /** WaitClawAiRequest relation. */
            public relation: lebai.cmp.Relation;

            /**
             * Creates a new WaitClawAiRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitClawAiRequest instance
             */
            public static create(properties?: lebai.claw.IWaitClawAiRequest): lebai.claw.WaitClawAiRequest;

            /**
             * Encodes the specified WaitClawAiRequest message. Does not implicitly {@link lebai.claw.WaitClawAiRequest.verify|verify} messages.
             * @param message WaitClawAiRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.claw.IWaitClawAiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitClawAiRequest message, length delimited. Does not implicitly {@link lebai.claw.WaitClawAiRequest.verify|verify} messages.
             * @param message WaitClawAiRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.claw.IWaitClawAiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitClawAiRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitClawAiRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.claw.WaitClawAiRequest;

            /**
             * Decodes a WaitClawAiRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitClawAiRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.claw.WaitClawAiRequest;

            /**
             * Verifies a WaitClawAiRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitClawAiRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitClawAiRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.claw.WaitClawAiRequest;

            /**
             * Creates a plain object from a WaitClawAiRequest message. Also converts values to other types if specified.
             * @param message WaitClawAiRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.claw.WaitClawAiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitClawAiRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ClawService */
        class ClawService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ClawService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ClawService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ClawService;

            /**
             * Calls InitClaw.
             * @param request InitClawRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public initClaw(request: lebai.claw.IInitClawRequest, callback: lebai.claw.ClawService.InitClawCallback): void;

            /**
             * Calls InitClaw.
             * @param request InitClawRequest message or plain object
             * @returns Promise
             */
            public initClaw(request: lebai.claw.IInitClawRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetClaw.
             * @param request SetClawRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setClaw(request: lebai.claw.ISetClawRequest, callback: lebai.claw.ClawService.SetClawCallback): void;

            /**
             * Calls SetClaw.
             * @param request SetClawRequest message or plain object
             * @returns Promise
             */
            public setClaw(request: lebai.claw.ISetClawRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetClaw.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Claw
             */
            public getClaw(request: google.protobuf.IEmpty, callback: lebai.claw.ClawService.GetClawCallback): void;

            /**
             * Calls GetClaw.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getClaw(request: google.protobuf.IEmpty): Promise<lebai.claw.Claw>;

            /**
             * Calls SetClawAo.
             * @param request SetClawAoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setClawAo(request: lebai.claw.ISetClawAoRequest, callback: lebai.claw.ClawService.SetClawAoCallback): void;

            /**
             * Calls SetClawAo.
             * @param request SetClawAoRequest message or plain object
             * @returns Promise
             */
            public setClawAo(request: lebai.claw.ISetClawAoRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetClawAi.
             * @param request GetClawAiRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetClawAiResponse
             */
            public getClawAi(request: lebai.claw.IGetClawAiRequest, callback: lebai.claw.ClawService.GetClawAiCallback): void;

            /**
             * Calls GetClawAi.
             * @param request GetClawAiRequest message or plain object
             * @returns Promise
             */
            public getClawAi(request: lebai.claw.IGetClawAiRequest): Promise<lebai.claw.GetClawAiResponse>;

            /**
             * Calls WaitClawAi.
             * @param request WaitClawAiRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public waitClawAi(request: lebai.claw.IWaitClawAiRequest, callback: lebai.claw.ClawService.WaitClawAiCallback): void;

            /**
             * Calls WaitClawAi.
             * @param request WaitClawAiRequest message or plain object
             * @returns Promise
             */
            public waitClawAi(request: lebai.claw.IWaitClawAiRequest): Promise<google.protobuf.Empty>;
        }

        namespace ClawService {

            /**
             * Callback as used by {@link lebai.claw.ClawService#initClaw}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type InitClawCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.claw.ClawService#setClaw}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetClawCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.claw.ClawService#getClaw}.
             * @param error Error, if any
             * @param [response] Claw
             */
            type GetClawCallback = (error: (Error|null), response?: lebai.claw.Claw) => void;

            /**
             * Callback as used by {@link lebai.claw.ClawService#setClawAo}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetClawAoCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.claw.ClawService#getClawAi}.
             * @param error Error, if any
             * @param [response] GetClawAiResponse
             */
            type GetClawAiCallback = (error: (Error|null), response?: lebai.claw.GetClawAiResponse) => void;

            /**
             * Callback as used by {@link lebai.claw.ClawService#waitClawAi}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WaitClawAiCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace cmp. */
    namespace cmp {

        /** Logic enum. */
        enum Logic {
            AND = 0,
            OR = 2,
            NOT = 3
        }

        /** Relation enum. */
        enum Relation {
            EQ = 0,
            NEQ = 2,
            LT = 3,
            LTE = 4,
            GT = 5,
            GTE = 6
        }
    }

    /** Namespace db. */
    namespace db {

        /** Properties of a SaveRequest. */
        interface ISaveRequest {

            /** SaveRequest name */
            name?: (string|null);

            /** SaveRequest data */
            data?: (string|null);

            /** SaveRequest dir */
            dir?: (string|null);
        }

        /** Represents a SaveRequest. */
        class SaveRequest implements ISaveRequest {

            /**
             * Constructs a new SaveRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.ISaveRequest);

            /** SaveRequest name. */
            public name: string;

            /** SaveRequest data. */
            public data: string;

            /** SaveRequest dir. */
            public dir: string;

            /**
             * Creates a new SaveRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveRequest instance
             */
            public static create(properties?: lebai.db.ISaveRequest): lebai.db.SaveRequest;

            /**
             * Encodes the specified SaveRequest message. Does not implicitly {@link lebai.db.SaveRequest.verify|verify} messages.
             * @param message SaveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.ISaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveRequest message, length delimited. Does not implicitly {@link lebai.db.SaveRequest.verify|verify} messages.
             * @param message SaveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.ISaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.SaveRequest;

            /**
             * Decodes a SaveRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.SaveRequest;

            /**
             * Verifies a SaveRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.SaveRequest;

            /**
             * Creates a plain object from a SaveRequest message. Also converts values to other types if specified.
             * @param message SaveRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.SaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadRequest. */
        interface ILoadRequest {

            /** LoadRequest name */
            name?: (string|null);

            /** LoadRequest dir */
            dir?: (string|null);
        }

        /** Represents a LoadRequest. */
        class LoadRequest implements ILoadRequest {

            /**
             * Constructs a new LoadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.ILoadRequest);

            /** LoadRequest name. */
            public name: string;

            /** LoadRequest dir. */
            public dir: string;

            /**
             * Creates a new LoadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadRequest instance
             */
            public static create(properties?: lebai.db.ILoadRequest): lebai.db.LoadRequest;

            /**
             * Encodes the specified LoadRequest message. Does not implicitly {@link lebai.db.LoadRequest.verify|verify} messages.
             * @param message LoadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.ILoadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadRequest message, length delimited. Does not implicitly {@link lebai.db.LoadRequest.verify|verify} messages.
             * @param message LoadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.ILoadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.LoadRequest;

            /**
             * Decodes a LoadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.LoadRequest;

            /**
             * Verifies a LoadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.LoadRequest;

            /**
             * Creates a plain object from a LoadRequest message. Also converts values to other types if specified.
             * @param message LoadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.LoadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadResponse. */
        interface ILoadResponse {

            /** LoadResponse data */
            data?: (string|null);
        }

        /** Represents a LoadResponse. */
        class LoadResponse implements ILoadResponse {

            /**
             * Constructs a new LoadResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.ILoadResponse);

            /** LoadResponse data. */
            public data: string;

            /**
             * Creates a new LoadResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadResponse instance
             */
            public static create(properties?: lebai.db.ILoadResponse): lebai.db.LoadResponse;

            /**
             * Encodes the specified LoadResponse message. Does not implicitly {@link lebai.db.LoadResponse.verify|verify} messages.
             * @param message LoadResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.ILoadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadResponse message, length delimited. Does not implicitly {@link lebai.db.LoadResponse.verify|verify} messages.
             * @param message LoadResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.ILoadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.LoadResponse;

            /**
             * Decodes a LoadResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.LoadResponse;

            /**
             * Verifies a LoadResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.LoadResponse;

            /**
             * Creates a plain object from a LoadResponse message. Also converts values to other types if specified.
             * @param message LoadResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.LoadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadListRequest. */
        interface ILoadListRequest {

            /** LoadListRequest dir */
            dir?: (string|null);
        }

        /** Represents a LoadListRequest. */
        class LoadListRequest implements ILoadListRequest {

            /**
             * Constructs a new LoadListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.ILoadListRequest);

            /** LoadListRequest dir. */
            public dir: string;

            /**
             * Creates a new LoadListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadListRequest instance
             */
            public static create(properties?: lebai.db.ILoadListRequest): lebai.db.LoadListRequest;

            /**
             * Encodes the specified LoadListRequest message. Does not implicitly {@link lebai.db.LoadListRequest.verify|verify} messages.
             * @param message LoadListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.ILoadListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadListRequest message, length delimited. Does not implicitly {@link lebai.db.LoadListRequest.verify|verify} messages.
             * @param message LoadListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.ILoadListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.LoadListRequest;

            /**
             * Decodes a LoadListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.LoadListRequest;

            /**
             * Verifies a LoadListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadListRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.LoadListRequest;

            /**
             * Creates a plain object from a LoadListRequest message. Also converts values to other types if specified.
             * @param message LoadListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.LoadListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadListResponse. */
        interface ILoadListResponse {

            /** LoadListResponse names */
            names?: (string[]|null);
        }

        /** Represents a LoadListResponse. */
        class LoadListResponse implements ILoadListResponse {

            /**
             * Constructs a new LoadListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.ILoadListResponse);

            /** LoadListResponse names. */
            public names: string[];

            /**
             * Creates a new LoadListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadListResponse instance
             */
            public static create(properties?: lebai.db.ILoadListResponse): lebai.db.LoadListResponse;

            /**
             * Encodes the specified LoadListResponse message. Does not implicitly {@link lebai.db.LoadListResponse.verify|verify} messages.
             * @param message LoadListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.ILoadListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadListResponse message, length delimited. Does not implicitly {@link lebai.db.LoadListResponse.verify|verify} messages.
             * @param message LoadListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.ILoadListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.LoadListResponse;

            /**
             * Decodes a LoadListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.LoadListResponse;

            /**
             * Verifies a LoadListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadListResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.LoadListResponse;

            /**
             * Creates a plain object from a LoadListResponse message. Also converts values to other types if specified.
             * @param message LoadListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.LoadListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteRequest. */
        interface IDeleteRequest {

            /** DeleteRequest name */
            name?: (string|null);

            /** DeleteRequest dir */
            dir?: (string|null);
        }

        /** Represents a DeleteRequest. */
        class DeleteRequest implements IDeleteRequest {

            /**
             * Constructs a new DeleteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.IDeleteRequest);

            /** DeleteRequest name. */
            public name: string;

            /** DeleteRequest dir. */
            public dir: string;

            /**
             * Creates a new DeleteRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteRequest instance
             */
            public static create(properties?: lebai.db.IDeleteRequest): lebai.db.DeleteRequest;

            /**
             * Encodes the specified DeleteRequest message. Does not implicitly {@link lebai.db.DeleteRequest.verify|verify} messages.
             * @param message DeleteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link lebai.db.DeleteRequest.verify|verify} messages.
             * @param message DeleteRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.DeleteRequest;

            /**
             * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.DeleteRequest;

            /**
             * Verifies a DeleteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.DeleteRequest;

            /**
             * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
             * @param message DeleteRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Dir. */
        interface IDir {

            /** Dir name */
            name?: (string|null);

            /** Dir id */
            id?: (number|null);
        }

        /** Represents a Dir. */
        class Dir implements IDir {

            /**
             * Constructs a new Dir.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.IDir);

            /** Dir name. */
            public name: string;

            /** Dir id. */
            public id: number;

            /**
             * Creates a new Dir instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Dir instance
             */
            public static create(properties?: lebai.db.IDir): lebai.db.Dir;

            /**
             * Encodes the specified Dir message. Does not implicitly {@link lebai.db.Dir.verify|verify} messages.
             * @param message Dir message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.IDir, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Dir message, length delimited. Does not implicitly {@link lebai.db.Dir.verify|verify} messages.
             * @param message Dir message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.IDir, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Dir message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Dir
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.Dir;

            /**
             * Decodes a Dir message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Dir
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.Dir;

            /**
             * Verifies a Dir message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Dir message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Dir
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.Dir;

            /**
             * Creates a plain object from a Dir message. Also converts values to other types if specified.
             * @param message Dir
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.Dir, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Dir to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateDirRequest. */
        interface IUpdateDirRequest {

            /** UpdateDirRequest from */
            from?: (string|null);

            /** UpdateDirRequest to */
            to?: (string|null);
        }

        /** Represents an UpdateDirRequest. */
        class UpdateDirRequest implements IUpdateDirRequest {

            /**
             * Constructs a new UpdateDirRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.IUpdateDirRequest);

            /** UpdateDirRequest from. */
            public from: string;

            /** UpdateDirRequest to. */
            public to: string;

            /**
             * Creates a new UpdateDirRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateDirRequest instance
             */
            public static create(properties?: lebai.db.IUpdateDirRequest): lebai.db.UpdateDirRequest;

            /**
             * Encodes the specified UpdateDirRequest message. Does not implicitly {@link lebai.db.UpdateDirRequest.verify|verify} messages.
             * @param message UpdateDirRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.IUpdateDirRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateDirRequest message, length delimited. Does not implicitly {@link lebai.db.UpdateDirRequest.verify|verify} messages.
             * @param message UpdateDirRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.IUpdateDirRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateDirRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateDirRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.UpdateDirRequest;

            /**
             * Decodes an UpdateDirRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateDirRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.UpdateDirRequest;

            /**
             * Verifies an UpdateDirRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateDirRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateDirRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.UpdateDirRequest;

            /**
             * Creates a plain object from an UpdateDirRequest message. Also converts values to other types if specified.
             * @param message UpdateDirRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.UpdateDirRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateDirRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Dirs. */
        interface IDirs {

            /** Dirs dirs */
            dirs?: (lebai.db.IDir[]|null);
        }

        /** Represents a Dirs. */
        class Dirs implements IDirs {

            /**
             * Constructs a new Dirs.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.db.IDirs);

            /** Dirs dirs. */
            public dirs: lebai.db.IDir[];

            /**
             * Creates a new Dirs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Dirs instance
             */
            public static create(properties?: lebai.db.IDirs): lebai.db.Dirs;

            /**
             * Encodes the specified Dirs message. Does not implicitly {@link lebai.db.Dirs.verify|verify} messages.
             * @param message Dirs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.db.IDirs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Dirs message, length delimited. Does not implicitly {@link lebai.db.Dirs.verify|verify} messages.
             * @param message Dirs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.db.IDirs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Dirs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Dirs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.db.Dirs;

            /**
             * Decodes a Dirs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Dirs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.db.Dirs;

            /**
             * Verifies a Dirs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Dirs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Dirs
             */
            public static fromObject(object: { [k: string]: any }): lebai.db.Dirs;

            /**
             * Creates a plain object from a Dirs message. Also converts values to other types if specified.
             * @param message Dirs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.db.Dirs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Dirs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a DbService */
        class DbService extends $protobuf.rpc.Service {

            /**
             * Constructs a new DbService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DbService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DbService;

            /**
             * Calls CreateDir.
             * @param request Dir message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public createDir(request: lebai.db.IDir, callback: lebai.db.DbService.CreateDirCallback): void;

            /**
             * Calls CreateDir.
             * @param request Dir message or plain object
             * @returns Promise
             */
            public createDir(request: lebai.db.IDir): Promise<google.protobuf.Empty>;

            /**
             * Calls UpdateDir.
             * @param request UpdateDirRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public updateDir(request: lebai.db.IUpdateDirRequest, callback: lebai.db.DbService.UpdateDirCallback): void;

            /**
             * Calls UpdateDir.
             * @param request UpdateDirRequest message or plain object
             * @returns Promise
             */
            public updateDir(request: lebai.db.IUpdateDirRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetDirs.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Dirs
             */
            public getDirs(request: google.protobuf.IEmpty, callback: lebai.db.DbService.GetDirsCallback): void;

            /**
             * Calls GetDirs.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getDirs(request: google.protobuf.IEmpty): Promise<lebai.db.Dirs>;
        }

        namespace DbService {

            /**
             * Callback as used by {@link lebai.db.DbService#createDir}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CreateDirCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.db.DbService#updateDir}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type UpdateDirCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.db.DbService#getDirs}.
             * @param error Error, if any
             * @param [response] Dirs
             */
            type GetDirsCallback = (error: (Error|null), response?: lebai.db.Dirs) => void;
        }
    }

    /** Namespace dynamic. */
    namespace dynamic {

        /** Properties of a Payload. */
        interface IPayload {

            /** Payload mass */
            mass?: (number|null);

            /** Payload cog */
            cog?: (lebai.posture.IPosition|null);
        }

        /** Represents a Payload. */
        class Payload implements IPayload {

            /**
             * Constructs a new Payload.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.dynamic.IPayload);

            /** Payload mass. */
            public mass: number;

            /** Payload cog. */
            public cog?: (lebai.posture.IPosition|null);

            /**
             * Creates a new Payload instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Payload instance
             */
            public static create(properties?: lebai.dynamic.IPayload): lebai.dynamic.Payload;

            /**
             * Encodes the specified Payload message. Does not implicitly {@link lebai.dynamic.Payload.verify|verify} messages.
             * @param message Payload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.dynamic.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Payload message, length delimited. Does not implicitly {@link lebai.dynamic.Payload.verify|verify} messages.
             * @param message Payload message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.dynamic.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Payload message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.dynamic.Payload;

            /**
             * Decodes a Payload message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.dynamic.Payload;

            /**
             * Verifies a Payload message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Payload message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Payload
             */
            public static fromObject(object: { [k: string]: any }): lebai.dynamic.Payload;

            /**
             * Creates a plain object from a Payload message. Also converts values to other types if specified.
             * @param message Payload
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.dynamic.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Payload to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetPayloadRequest. */
        interface ISetPayloadRequest {

            /** SetPayloadRequest mass */
            mass?: (google.protobuf.IDoubleValue|null);

            /** SetPayloadRequest cog */
            cog?: (lebai.posture.IPosition|null);
        }

        /** Represents a SetPayloadRequest. */
        class SetPayloadRequest implements ISetPayloadRequest {

            /**
             * Constructs a new SetPayloadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.dynamic.ISetPayloadRequest);

            /** SetPayloadRequest mass. */
            public mass?: (google.protobuf.IDoubleValue|null);

            /** SetPayloadRequest cog. */
            public cog?: (lebai.posture.IPosition|null);

            /**
             * Creates a new SetPayloadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetPayloadRequest instance
             */
            public static create(properties?: lebai.dynamic.ISetPayloadRequest): lebai.dynamic.SetPayloadRequest;

            /**
             * Encodes the specified SetPayloadRequest message. Does not implicitly {@link lebai.dynamic.SetPayloadRequest.verify|verify} messages.
             * @param message SetPayloadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.dynamic.ISetPayloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetPayloadRequest message, length delimited. Does not implicitly {@link lebai.dynamic.SetPayloadRequest.verify|verify} messages.
             * @param message SetPayloadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.dynamic.ISetPayloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetPayloadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetPayloadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.dynamic.SetPayloadRequest;

            /**
             * Decodes a SetPayloadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetPayloadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.dynamic.SetPayloadRequest;

            /**
             * Verifies a SetPayloadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetPayloadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetPayloadRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.dynamic.SetPayloadRequest;

            /**
             * Creates a plain object from a SetPayloadRequest message. Also converts values to other types if specified.
             * @param message SetPayloadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.dynamic.SetPayloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetPayloadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SavePayloadRequest. */
        interface ISavePayloadRequest {

            /** SavePayloadRequest name */
            name?: (string|null);

            /** SavePayloadRequest data */
            data?: (lebai.dynamic.IPayload|null);

            /** SavePayloadRequest dir */
            dir?: (string|null);
        }

        /** Represents a SavePayloadRequest. */
        class SavePayloadRequest implements ISavePayloadRequest {

            /**
             * Constructs a new SavePayloadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.dynamic.ISavePayloadRequest);

            /** SavePayloadRequest name. */
            public name: string;

            /** SavePayloadRequest data. */
            public data?: (lebai.dynamic.IPayload|null);

            /** SavePayloadRequest dir. */
            public dir: string;

            /**
             * Creates a new SavePayloadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SavePayloadRequest instance
             */
            public static create(properties?: lebai.dynamic.ISavePayloadRequest): lebai.dynamic.SavePayloadRequest;

            /**
             * Encodes the specified SavePayloadRequest message. Does not implicitly {@link lebai.dynamic.SavePayloadRequest.verify|verify} messages.
             * @param message SavePayloadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.dynamic.ISavePayloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SavePayloadRequest message, length delimited. Does not implicitly {@link lebai.dynamic.SavePayloadRequest.verify|verify} messages.
             * @param message SavePayloadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.dynamic.ISavePayloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SavePayloadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SavePayloadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.dynamic.SavePayloadRequest;

            /**
             * Decodes a SavePayloadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SavePayloadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.dynamic.SavePayloadRequest;

            /**
             * Verifies a SavePayloadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SavePayloadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SavePayloadRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.dynamic.SavePayloadRequest;

            /**
             * Creates a plain object from a SavePayloadRequest message. Also converts values to other types if specified.
             * @param message SavePayloadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.dynamic.SavePayloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SavePayloadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a DynamicService */
        class DynamicService extends $protobuf.rpc.Service {

            /**
             * Constructs a new DynamicService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DynamicService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DynamicService;

            /**
             * Calls SavePayload.
             * @param request SavePayloadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public savePayload(request: lebai.dynamic.ISavePayloadRequest, callback: lebai.dynamic.DynamicService.SavePayloadCallback): void;

            /**
             * Calls SavePayload.
             * @param request SavePayloadRequest message or plain object
             * @returns Promise
             */
            public savePayload(request: lebai.dynamic.ISavePayloadRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadPayload.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Payload
             */
            public loadPayload(request: lebai.db.ILoadRequest, callback: lebai.dynamic.DynamicService.LoadPayloadCallback): void;

            /**
             * Calls LoadPayload.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadPayload(request: lebai.db.ILoadRequest): Promise<lebai.dynamic.Payload>;

            /**
             * Calls LoadPayloadList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadPayloadList(request: lebai.db.ILoadListRequest, callback: lebai.dynamic.DynamicService.LoadPayloadListCallback): void;

            /**
             * Calls LoadPayloadList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadPayloadList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls SetPayload.
             * @param request SetPayloadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setPayload(request: lebai.dynamic.ISetPayloadRequest, callback: lebai.dynamic.DynamicService.SetPayloadCallback): void;

            /**
             * Calls SetPayload.
             * @param request SetPayloadRequest message or plain object
             * @returns Promise
             */
            public setPayload(request: lebai.dynamic.ISetPayloadRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetPayload.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Payload
             */
            public getPayload(request: google.protobuf.IEmpty, callback: lebai.dynamic.DynamicService.GetPayloadCallback): void;

            /**
             * Calls GetPayload.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getPayload(request: google.protobuf.IEmpty): Promise<lebai.dynamic.Payload>;

            /**
             * Calls SetGravity.
             * @param request Position message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setGravity(request: lebai.posture.IPosition, callback: lebai.dynamic.DynamicService.SetGravityCallback): void;

            /**
             * Calls SetGravity.
             * @param request Position message or plain object
             * @returns Promise
             */
            public setGravity(request: lebai.posture.IPosition): Promise<google.protobuf.Empty>;

            /**
             * Calls GetGravity.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Position
             */
            public getGravity(request: google.protobuf.IEmpty, callback: lebai.dynamic.DynamicService.GetGravityCallback): void;

            /**
             * Calls GetGravity.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getGravity(request: google.protobuf.IEmpty): Promise<lebai.posture.Position>;
        }

        namespace DynamicService {

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#savePayload}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SavePayloadCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#loadPayload}.
             * @param error Error, if any
             * @param [response] Payload
             */
            type LoadPayloadCallback = (error: (Error|null), response?: lebai.dynamic.Payload) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#loadPayloadList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadPayloadListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#setPayload}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetPayloadCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#getPayload}.
             * @param error Error, if any
             * @param [response] Payload
             */
            type GetPayloadCallback = (error: (Error|null), response?: lebai.dynamic.Payload) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#setGravity}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetGravityCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.dynamic.DynamicService#getGravity}.
             * @param error Error, if any
             * @param [response] Position
             */
            type GetGravityCallback = (error: (Error|null), response?: lebai.posture.Position) => void;
        }
    }

    /** Namespace posture. */
    namespace posture {

        /** Properties of a JointPose. */
        interface IJointPose {

            /** JointPose joint */
            joint?: (number[]|null);
        }

        /** Represents a JointPose. */
        class JointPose implements IJointPose {

            /**
             * Constructs a new JointPose.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IJointPose);

            /** JointPose joint. */
            public joint: number[];

            /**
             * Creates a new JointPose instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointPose instance
             */
            public static create(properties?: lebai.posture.IJointPose): lebai.posture.JointPose;

            /**
             * Encodes the specified JointPose message. Does not implicitly {@link lebai.posture.JointPose.verify|verify} messages.
             * @param message JointPose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IJointPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointPose message, length delimited. Does not implicitly {@link lebai.posture.JointPose.verify|verify} messages.
             * @param message JointPose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IJointPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointPose message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointPose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.JointPose;

            /**
             * Decodes a JointPose message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointPose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.JointPose;

            /**
             * Verifies a JointPose message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointPose message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointPose
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.JointPose;

            /**
             * Creates a plain object from a JointPose message. Also converts values to other types if specified.
             * @param message JointPose
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.JointPose, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointPose to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JointFrame. */
        interface IJointFrame {

            /** JointFrame kind */
            kind?: (lebai.posture.JointFrame.Kind|null);

            /** JointFrame pose */
            pose?: (lebai.posture.IJointPose|null);
        }

        /** Represents a JointFrame. */
        class JointFrame implements IJointFrame {

            /**
             * Constructs a new JointFrame.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IJointFrame);

            /** JointFrame kind. */
            public kind: lebai.posture.JointFrame.Kind;

            /** JointFrame pose. */
            public pose?: (lebai.posture.IJointPose|null);

            /**
             * Creates a new JointFrame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointFrame instance
             */
            public static create(properties?: lebai.posture.IJointFrame): lebai.posture.JointFrame;

            /**
             * Encodes the specified JointFrame message. Does not implicitly {@link lebai.posture.JointFrame.verify|verify} messages.
             * @param message JointFrame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IJointFrame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointFrame message, length delimited. Does not implicitly {@link lebai.posture.JointFrame.verify|verify} messages.
             * @param message JointFrame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IJointFrame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointFrame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.JointFrame;

            /**
             * Decodes a JointFrame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.JointFrame;

            /**
             * Verifies a JointFrame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointFrame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointFrame
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.JointFrame;

            /**
             * Creates a plain object from a JointFrame message. Also converts values to other types if specified.
             * @param message JointFrame
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.JointFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointFrame to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace JointFrame {

            /** Kind enum. */
            enum Kind {
                BASE = 0,
                CURRENT = 1,
                LAST = 11,
                CUSTOM = 99
            }
        }

        /** Properties of a RotationMatrix. */
        interface IRotationMatrix {

            /** RotationMatrix m11 */
            m11?: (number|null);

            /** RotationMatrix m12 */
            m12?: (number|null);

            /** RotationMatrix m13 */
            m13?: (number|null);

            /** RotationMatrix m21 */
            m21?: (number|null);

            /** RotationMatrix m22 */
            m22?: (number|null);

            /** RotationMatrix m23 */
            m23?: (number|null);

            /** RotationMatrix m31 */
            m31?: (number|null);

            /** RotationMatrix m32 */
            m32?: (number|null);

            /** RotationMatrix m33 */
            m33?: (number|null);
        }

        /** Represents a RotationMatrix. */
        class RotationMatrix implements IRotationMatrix {

            /**
             * Constructs a new RotationMatrix.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IRotationMatrix);

            /** RotationMatrix m11. */
            public m11: number;

            /** RotationMatrix m12. */
            public m12: number;

            /** RotationMatrix m13. */
            public m13: number;

            /** RotationMatrix m21. */
            public m21: number;

            /** RotationMatrix m22. */
            public m22: number;

            /** RotationMatrix m23. */
            public m23: number;

            /** RotationMatrix m31. */
            public m31: number;

            /** RotationMatrix m32. */
            public m32: number;

            /** RotationMatrix m33. */
            public m33: number;

            /**
             * Creates a new RotationMatrix instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RotationMatrix instance
             */
            public static create(properties?: lebai.posture.IRotationMatrix): lebai.posture.RotationMatrix;

            /**
             * Encodes the specified RotationMatrix message. Does not implicitly {@link lebai.posture.RotationMatrix.verify|verify} messages.
             * @param message RotationMatrix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IRotationMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RotationMatrix message, length delimited. Does not implicitly {@link lebai.posture.RotationMatrix.verify|verify} messages.
             * @param message RotationMatrix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IRotationMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RotationMatrix message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RotationMatrix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.RotationMatrix;

            /**
             * Decodes a RotationMatrix message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RotationMatrix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.RotationMatrix;

            /**
             * Verifies a RotationMatrix message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RotationMatrix message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RotationMatrix
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.RotationMatrix;

            /**
             * Creates a plain object from a RotationMatrix message. Also converts values to other types if specified.
             * @param message RotationMatrix
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.RotationMatrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RotationMatrix to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EulerZyx. */
        interface IEulerZyx {

            /** EulerZyx x */
            x?: (number|null);

            /** EulerZyx y */
            y?: (number|null);

            /** EulerZyx z */
            z?: (number|null);
        }

        /** Represents an EulerZyx. */
        class EulerZyx implements IEulerZyx {

            /**
             * Constructs a new EulerZyx.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IEulerZyx);

            /** EulerZyx x. */
            public x: number;

            /** EulerZyx y. */
            public y: number;

            /** EulerZyx z. */
            public z: number;

            /**
             * Creates a new EulerZyx instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EulerZyx instance
             */
            public static create(properties?: lebai.posture.IEulerZyx): lebai.posture.EulerZyx;

            /**
             * Encodes the specified EulerZyx message. Does not implicitly {@link lebai.posture.EulerZyx.verify|verify} messages.
             * @param message EulerZyx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IEulerZyx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EulerZyx message, length delimited. Does not implicitly {@link lebai.posture.EulerZyx.verify|verify} messages.
             * @param message EulerZyx message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IEulerZyx, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EulerZyx message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EulerZyx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.EulerZyx;

            /**
             * Decodes an EulerZyx message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EulerZyx
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.EulerZyx;

            /**
             * Verifies an EulerZyx message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EulerZyx message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EulerZyx
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.EulerZyx;

            /**
             * Creates a plain object from an EulerZyx message. Also converts values to other types if specified.
             * @param message EulerZyx
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.EulerZyx, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EulerZyx to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Quaternion. */
        interface IQuaternion {

            /** Quaternion w */
            w?: (number|null);

            /** Quaternion i */
            i?: (number|null);

            /** Quaternion j */
            j?: (number|null);

            /** Quaternion k */
            k?: (number|null);
        }

        /** Represents a Quaternion. */
        class Quaternion implements IQuaternion {

            /**
             * Constructs a new Quaternion.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IQuaternion);

            /** Quaternion w. */
            public w: number;

            /** Quaternion i. */
            public i: number;

            /** Quaternion j. */
            public j: number;

            /** Quaternion k. */
            public k: number;

            /**
             * Creates a new Quaternion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Quaternion instance
             */
            public static create(properties?: lebai.posture.IQuaternion): lebai.posture.Quaternion;

            /**
             * Encodes the specified Quaternion message. Does not implicitly {@link lebai.posture.Quaternion.verify|verify} messages.
             * @param message Quaternion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Quaternion message, length delimited. Does not implicitly {@link lebai.posture.Quaternion.verify|verify} messages.
             * @param message Quaternion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Quaternion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.Quaternion;

            /**
             * Decodes a Quaternion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.Quaternion;

            /**
             * Verifies a Quaternion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Quaternion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Quaternion
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.Quaternion;

            /**
             * Creates a plain object from a Quaternion message. Also converts values to other types if specified.
             * @param message Quaternion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.Quaternion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Quaternion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Rotation. */
        interface IRotation {

            /** Rotation eulerZyx */
            eulerZyx?: (lebai.posture.IEulerZyx|null);

            /** Rotation quaternion */
            quaternion?: (lebai.posture.IQuaternion|null);

            /** Rotation matrix */
            matrix?: (lebai.posture.IRotationMatrix|null);
        }

        /** Represents a Rotation. */
        class Rotation implements IRotation {

            /**
             * Constructs a new Rotation.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IRotation);

            /** Rotation eulerZyx. */
            public eulerZyx?: (lebai.posture.IEulerZyx|null);

            /** Rotation quaternion. */
            public quaternion?: (lebai.posture.IQuaternion|null);

            /** Rotation matrix. */
            public matrix?: (lebai.posture.IRotationMatrix|null);

            /**
             * Creates a new Rotation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rotation instance
             */
            public static create(properties?: lebai.posture.IRotation): lebai.posture.Rotation;

            /**
             * Encodes the specified Rotation message. Does not implicitly {@link lebai.posture.Rotation.verify|verify} messages.
             * @param message Rotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IRotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rotation message, length delimited. Does not implicitly {@link lebai.posture.Rotation.verify|verify} messages.
             * @param message Rotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IRotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Rotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.Rotation;

            /**
             * Decodes a Rotation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Rotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.Rotation;

            /**
             * Verifies a Rotation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rotation
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.Rotation;

            /**
             * Creates a plain object from a Rotation message. Also converts values to other types if specified.
             * @param message Rotation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.Rotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rotation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Position. */
        interface IPosition {

            /** Position x */
            x?: (number|null);

            /** Position y */
            y?: (number|null);

            /** Position z */
            z?: (number|null);
        }

        /** Represents a Position. */
        class Position implements IPosition {

            /**
             * Constructs a new Position.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IPosition);

            /** Position x. */
            public x: number;

            /** Position y. */
            public y: number;

            /** Position z. */
            public z: number;

            /**
             * Creates a new Position instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Position instance
             */
            public static create(properties?: lebai.posture.IPosition): lebai.posture.Position;

            /**
             * Encodes the specified Position message. Does not implicitly {@link lebai.posture.Position.verify|verify} messages.
             * @param message Position message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Position message, length delimited. Does not implicitly {@link lebai.posture.Position.verify|verify} messages.
             * @param message Position message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Position message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.Position;

            /**
             * Decodes a Position message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.Position;

            /**
             * Verifies a Position message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Position message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Position
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.Position;

            /**
             * Creates a plain object from a Position message. Also converts values to other types if specified.
             * @param message Position
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Position to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CartesianPose. */
        interface ICartesianPose {

            /** CartesianPose position */
            position?: (lebai.posture.IPosition|null);

            /** CartesianPose rotation */
            rotation?: (lebai.posture.IRotation|null);
        }

        /** Represents a CartesianPose. */
        class CartesianPose implements ICartesianPose {

            /**
             * Constructs a new CartesianPose.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.ICartesianPose);

            /** CartesianPose position. */
            public position?: (lebai.posture.IPosition|null);

            /** CartesianPose rotation. */
            public rotation?: (lebai.posture.IRotation|null);

            /**
             * Creates a new CartesianPose instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CartesianPose instance
             */
            public static create(properties?: lebai.posture.ICartesianPose): lebai.posture.CartesianPose;

            /**
             * Encodes the specified CartesianPose message. Does not implicitly {@link lebai.posture.CartesianPose.verify|verify} messages.
             * @param message CartesianPose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.ICartesianPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CartesianPose message, length delimited. Does not implicitly {@link lebai.posture.CartesianPose.verify|verify} messages.
             * @param message CartesianPose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.ICartesianPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CartesianPose message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CartesianPose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.CartesianPose;

            /**
             * Decodes a CartesianPose message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CartesianPose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.CartesianPose;

            /**
             * Verifies a CartesianPose message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CartesianPose message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CartesianPose
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.CartesianPose;

            /**
             * Creates a plain object from a CartesianPose message. Also converts values to other types if specified.
             * @param message CartesianPose
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.CartesianPose, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CartesianPose to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CartesianMatrix. */
        interface ICartesianMatrix {

            /** CartesianMatrix m11 */
            m11?: (number|null);

            /** CartesianMatrix m12 */
            m12?: (number|null);

            /** CartesianMatrix m13 */
            m13?: (number|null);

            /** CartesianMatrix m14 */
            m14?: (number|null);

            /** CartesianMatrix m21 */
            m21?: (number|null);

            /** CartesianMatrix m22 */
            m22?: (number|null);

            /** CartesianMatrix m23 */
            m23?: (number|null);

            /** CartesianMatrix m24 */
            m24?: (number|null);

            /** CartesianMatrix m31 */
            m31?: (number|null);

            /** CartesianMatrix m32 */
            m32?: (number|null);

            /** CartesianMatrix m33 */
            m33?: (number|null);

            /** CartesianMatrix m34 */
            m34?: (number|null);

            /** CartesianMatrix m41 */
            m41?: (number|null);

            /** CartesianMatrix m42 */
            m42?: (number|null);

            /** CartesianMatrix m43 */
            m43?: (number|null);

            /** CartesianMatrix m44 */
            m44?: (number|null);
        }

        /** Represents a CartesianMatrix. */
        class CartesianMatrix implements ICartesianMatrix {

            /**
             * Constructs a new CartesianMatrix.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.ICartesianMatrix);

            /** CartesianMatrix m11. */
            public m11: number;

            /** CartesianMatrix m12. */
            public m12: number;

            /** CartesianMatrix m13. */
            public m13: number;

            /** CartesianMatrix m14. */
            public m14: number;

            /** CartesianMatrix m21. */
            public m21: number;

            /** CartesianMatrix m22. */
            public m22: number;

            /** CartesianMatrix m23. */
            public m23: number;

            /** CartesianMatrix m24. */
            public m24: number;

            /** CartesianMatrix m31. */
            public m31: number;

            /** CartesianMatrix m32. */
            public m32: number;

            /** CartesianMatrix m33. */
            public m33: number;

            /** CartesianMatrix m34. */
            public m34: number;

            /** CartesianMatrix m41. */
            public m41: number;

            /** CartesianMatrix m42. */
            public m42: number;

            /** CartesianMatrix m43. */
            public m43: number;

            /** CartesianMatrix m44. */
            public m44: number;

            /**
             * Creates a new CartesianMatrix instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CartesianMatrix instance
             */
            public static create(properties?: lebai.posture.ICartesianMatrix): lebai.posture.CartesianMatrix;

            /**
             * Encodes the specified CartesianMatrix message. Does not implicitly {@link lebai.posture.CartesianMatrix.verify|verify} messages.
             * @param message CartesianMatrix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.ICartesianMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CartesianMatrix message, length delimited. Does not implicitly {@link lebai.posture.CartesianMatrix.verify|verify} messages.
             * @param message CartesianMatrix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.ICartesianMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CartesianMatrix message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CartesianMatrix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.CartesianMatrix;

            /**
             * Decodes a CartesianMatrix message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CartesianMatrix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.CartesianMatrix;

            /**
             * Verifies a CartesianMatrix message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CartesianMatrix message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CartesianMatrix
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.CartesianMatrix;

            /**
             * Creates a plain object from a CartesianMatrix message. Also converts values to other types if specified.
             * @param message CartesianMatrix
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.CartesianMatrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CartesianMatrix to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CartesianFrame. */
        interface ICartesianFrame {

            /** CartesianFrame positionKind */
            positionKind?: (lebai.posture.CartesianFrame.Kind|null);

            /** CartesianFrame position */
            position?: (lebai.posture.IPosition|null);

            /** CartesianFrame rotationKind */
            rotationKind?: (lebai.posture.CartesianFrame.Kind|null);

            /** CartesianFrame rotation */
            rotation?: (lebai.posture.IRotation|null);
        }

        /** Represents a CartesianFrame. */
        class CartesianFrame implements ICartesianFrame {

            /**
             * Constructs a new CartesianFrame.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.ICartesianFrame);

            /** CartesianFrame positionKind. */
            public positionKind: lebai.posture.CartesianFrame.Kind;

            /** CartesianFrame position. */
            public position?: (lebai.posture.IPosition|null);

            /** CartesianFrame rotationKind. */
            public rotationKind: lebai.posture.CartesianFrame.Kind;

            /** CartesianFrame rotation. */
            public rotation?: (lebai.posture.IRotation|null);

            /**
             * Creates a new CartesianFrame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CartesianFrame instance
             */
            public static create(properties?: lebai.posture.ICartesianFrame): lebai.posture.CartesianFrame;

            /**
             * Encodes the specified CartesianFrame message. Does not implicitly {@link lebai.posture.CartesianFrame.verify|verify} messages.
             * @param message CartesianFrame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.ICartesianFrame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CartesianFrame message, length delimited. Does not implicitly {@link lebai.posture.CartesianFrame.verify|verify} messages.
             * @param message CartesianFrame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.ICartesianFrame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CartesianFrame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CartesianFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.CartesianFrame;

            /**
             * Decodes a CartesianFrame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CartesianFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.CartesianFrame;

            /**
             * Verifies a CartesianFrame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CartesianFrame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CartesianFrame
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.CartesianFrame;

            /**
             * Creates a plain object from a CartesianFrame message. Also converts values to other types if specified.
             * @param message CartesianFrame
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.CartesianFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CartesianFrame to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CartesianFrame {

            /** Kind enum. */
            enum Kind {
                BASE = 0,
                FLANGE = 1,
                TCP = 2,
                LAST_FLANGE = 11,
                LAST_TCP = 12,
                CUSTOM = 99
            }
        }

        /** Properties of a Pose. */
        interface IPose {

            /** Pose kind */
            kind?: (lebai.posture.Pose.Kind|null);

            /** Pose cart */
            cart?: (lebai.posture.ICartesianPose|null);

            /** Pose cartFrameIndex */
            cartFrameIndex?: (lebai.db.ILoadRequest|null);

            /** Pose cartFrame */
            cartFrame?: (lebai.posture.ICartesianFrame|null);

            /** Pose joint */
            joint?: (lebai.posture.IJointPose|null);
        }

        /** Represents a Pose. */
        class Pose implements IPose {

            /**
             * Constructs a new Pose.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IPose);

            /** Pose kind. */
            public kind: lebai.posture.Pose.Kind;

            /** Pose cart. */
            public cart?: (lebai.posture.ICartesianPose|null);

            /** Pose cartFrameIndex. */
            public cartFrameIndex?: (lebai.db.ILoadRequest|null);

            /** Pose cartFrame. */
            public cartFrame?: (lebai.posture.ICartesianFrame|null);

            /** Pose joint. */
            public joint?: (lebai.posture.IJointPose|null);

            /**
             * Creates a new Pose instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pose instance
             */
            public static create(properties?: lebai.posture.IPose): lebai.posture.Pose;

            /**
             * Encodes the specified Pose message. Does not implicitly {@link lebai.posture.Pose.verify|verify} messages.
             * @param message Pose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pose message, length delimited. Does not implicitly {@link lebai.posture.Pose.verify|verify} messages.
             * @param message Pose message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pose message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.Pose;

            /**
             * Decodes a Pose message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.Pose;

            /**
             * Verifies a Pose message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pose message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pose
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.Pose;

            /**
             * Creates a plain object from a Pose message. Also converts values to other types if specified.
             * @param message Pose
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.Pose, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pose to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Pose {

            /** Kind enum. */
            enum Kind {
                CARTESIAN = 0,
                JOINT = 1
            }
        }

        /** Properties of a SavePoseRequest. */
        interface ISavePoseRequest {

            /** SavePoseRequest name */
            name?: (string|null);

            /** SavePoseRequest data */
            data?: (lebai.posture.IPose|null);

            /** SavePoseRequest dir */
            dir?: (string|null);
        }

        /** Represents a SavePoseRequest. */
        class SavePoseRequest implements ISavePoseRequest {

            /**
             * Constructs a new SavePoseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.ISavePoseRequest);

            /** SavePoseRequest name. */
            public name: string;

            /** SavePoseRequest data. */
            public data?: (lebai.posture.IPose|null);

            /** SavePoseRequest dir. */
            public dir: string;

            /**
             * Creates a new SavePoseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SavePoseRequest instance
             */
            public static create(properties?: lebai.posture.ISavePoseRequest): lebai.posture.SavePoseRequest;

            /**
             * Encodes the specified SavePoseRequest message. Does not implicitly {@link lebai.posture.SavePoseRequest.verify|verify} messages.
             * @param message SavePoseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.ISavePoseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SavePoseRequest message, length delimited. Does not implicitly {@link lebai.posture.SavePoseRequest.verify|verify} messages.
             * @param message SavePoseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.ISavePoseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SavePoseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SavePoseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.SavePoseRequest;

            /**
             * Decodes a SavePoseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SavePoseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.SavePoseRequest;

            /**
             * Verifies a SavePoseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SavePoseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SavePoseRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.SavePoseRequest;

            /**
             * Creates a plain object from a SavePoseRequest message. Also converts values to other types if specified.
             * @param message SavePoseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.SavePoseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SavePoseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveFrameRequest. */
        interface ISaveFrameRequest {

            /** SaveFrameRequest name */
            name?: (string|null);

            /** SaveFrameRequest data */
            data?: (lebai.posture.ICartesianFrame|null);

            /** SaveFrameRequest dir */
            dir?: (string|null);
        }

        /** Represents a SaveFrameRequest. */
        class SaveFrameRequest implements ISaveFrameRequest {

            /**
             * Constructs a new SaveFrameRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.ISaveFrameRequest);

            /** SaveFrameRequest name. */
            public name: string;

            /** SaveFrameRequest data. */
            public data?: (lebai.posture.ICartesianFrame|null);

            /** SaveFrameRequest dir. */
            public dir: string;

            /**
             * Creates a new SaveFrameRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFrameRequest instance
             */
            public static create(properties?: lebai.posture.ISaveFrameRequest): lebai.posture.SaveFrameRequest;

            /**
             * Encodes the specified SaveFrameRequest message. Does not implicitly {@link lebai.posture.SaveFrameRequest.verify|verify} messages.
             * @param message SaveFrameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.ISaveFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFrameRequest message, length delimited. Does not implicitly {@link lebai.posture.SaveFrameRequest.verify|verify} messages.
             * @param message SaveFrameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.ISaveFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFrameRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.SaveFrameRequest;

            /**
             * Decodes a SaveFrameRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.SaveFrameRequest;

            /**
             * Verifies a SaveFrameRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFrameRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFrameRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.SaveFrameRequest;

            /**
             * Creates a plain object from a SaveFrameRequest message. Also converts values to other types if specified.
             * @param message SaveFrameRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.SaveFrameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFrameRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PoseRequest. */
        interface IPoseRequest {

            /** PoseRequest pose */
            pose?: (lebai.posture.IPose|null);
        }

        /** Represents a PoseRequest. */
        class PoseRequest implements IPoseRequest {

            /**
             * Constructs a new PoseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IPoseRequest);

            /** PoseRequest pose. */
            public pose?: (lebai.posture.IPose|null);

            /**
             * Creates a new PoseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PoseRequest instance
             */
            public static create(properties?: lebai.posture.IPoseRequest): lebai.posture.PoseRequest;

            /**
             * Encodes the specified PoseRequest message. Does not implicitly {@link lebai.posture.PoseRequest.verify|verify} messages.
             * @param message PoseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IPoseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PoseRequest message, length delimited. Does not implicitly {@link lebai.posture.PoseRequest.verify|verify} messages.
             * @param message PoseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IPoseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PoseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PoseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.PoseRequest;

            /**
             * Decodes a PoseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PoseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.PoseRequest;

            /**
             * Verifies a PoseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PoseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PoseRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.PoseRequest;

            /**
             * Creates a plain object from a PoseRequest message. Also converts values to other types if specified.
             * @param message PoseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.PoseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PoseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetInverseKinRequest. */
        interface IGetInverseKinRequest {

            /** GetInverseKinRequest pose */
            pose?: (lebai.posture.IPose|null);

            /** GetInverseKinRequest refer */
            refer?: (lebai.posture.IJointPose|null);
        }

        /** Represents a GetInverseKinRequest. */
        class GetInverseKinRequest implements IGetInverseKinRequest {

            /**
             * Constructs a new GetInverseKinRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IGetInverseKinRequest);

            /** GetInverseKinRequest pose. */
            public pose?: (lebai.posture.IPose|null);

            /** GetInverseKinRequest refer. */
            public refer?: (lebai.posture.IJointPose|null);

            /**
             * Creates a new GetInverseKinRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetInverseKinRequest instance
             */
            public static create(properties?: lebai.posture.IGetInverseKinRequest): lebai.posture.GetInverseKinRequest;

            /**
             * Encodes the specified GetInverseKinRequest message. Does not implicitly {@link lebai.posture.GetInverseKinRequest.verify|verify} messages.
             * @param message GetInverseKinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IGetInverseKinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetInverseKinRequest message, length delimited. Does not implicitly {@link lebai.posture.GetInverseKinRequest.verify|verify} messages.
             * @param message GetInverseKinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IGetInverseKinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetInverseKinRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetInverseKinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.GetInverseKinRequest;

            /**
             * Decodes a GetInverseKinRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetInverseKinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.GetInverseKinRequest;

            /**
             * Verifies a GetInverseKinRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetInverseKinRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetInverseKinRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.GetInverseKinRequest;

            /**
             * Creates a plain object from a GetInverseKinRequest message. Also converts values to other types if specified.
             * @param message GetInverseKinRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.GetInverseKinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetInverseKinRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetPoseTransRequest. */
        interface IGetPoseTransRequest {

            /** GetPoseTransRequest from */
            from?: (lebai.posture.IPose|null);

            /** GetPoseTransRequest fromTo */
            fromTo?: (lebai.posture.IPose|null);
        }

        /** Represents a GetPoseTransRequest. */
        class GetPoseTransRequest implements IGetPoseTransRequest {

            /**
             * Constructs a new GetPoseTransRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.posture.IGetPoseTransRequest);

            /** GetPoseTransRequest from. */
            public from?: (lebai.posture.IPose|null);

            /** GetPoseTransRequest fromTo. */
            public fromTo?: (lebai.posture.IPose|null);

            /**
             * Creates a new GetPoseTransRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetPoseTransRequest instance
             */
            public static create(properties?: lebai.posture.IGetPoseTransRequest): lebai.posture.GetPoseTransRequest;

            /**
             * Encodes the specified GetPoseTransRequest message. Does not implicitly {@link lebai.posture.GetPoseTransRequest.verify|verify} messages.
             * @param message GetPoseTransRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.posture.IGetPoseTransRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetPoseTransRequest message, length delimited. Does not implicitly {@link lebai.posture.GetPoseTransRequest.verify|verify} messages.
             * @param message GetPoseTransRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.posture.IGetPoseTransRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPoseTransRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPoseTransRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.posture.GetPoseTransRequest;

            /**
             * Decodes a GetPoseTransRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPoseTransRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.posture.GetPoseTransRequest;

            /**
             * Verifies a GetPoseTransRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetPoseTransRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetPoseTransRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.posture.GetPoseTransRequest;

            /**
             * Creates a plain object from a GetPoseTransRequest message. Also converts values to other types if specified.
             * @param message GetPoseTransRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.posture.GetPoseTransRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetPoseTransRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a PostureService */
        class PostureService extends $protobuf.rpc.Service {

            /**
             * Constructs a new PostureService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new PostureService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PostureService;

            /**
             * Calls SavePose.
             * @param request SavePoseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public savePose(request: lebai.posture.ISavePoseRequest, callback: lebai.posture.PostureService.SavePoseCallback): void;

            /**
             * Calls SavePose.
             * @param request SavePoseRequest message or plain object
             * @returns Promise
             */
            public savePose(request: lebai.posture.ISavePoseRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadPose.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Pose
             */
            public loadPose(request: lebai.db.ILoadRequest, callback: lebai.posture.PostureService.LoadPoseCallback): void;

            /**
             * Calls LoadPose.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadPose(request: lebai.db.ILoadRequest): Promise<lebai.posture.Pose>;

            /**
             * Calls LoadPoseList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadPoseList(request: lebai.db.ILoadListRequest, callback: lebai.posture.PostureService.LoadPoseListCallback): void;

            /**
             * Calls LoadPoseList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadPoseList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls SaveFrame.
             * @param request SaveFrameRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveFrame(request: lebai.posture.ISaveFrameRequest, callback: lebai.posture.PostureService.SaveFrameCallback): void;

            /**
             * Calls SaveFrame.
             * @param request SaveFrameRequest message or plain object
             * @returns Promise
             */
            public saveFrame(request: lebai.posture.ISaveFrameRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadFrame.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianFrame
             */
            public loadFrame(request: lebai.db.ILoadRequest, callback: lebai.posture.PostureService.LoadFrameCallback): void;

            /**
             * Calls LoadFrame.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadFrame(request: lebai.db.ILoadRequest): Promise<lebai.posture.CartesianFrame>;

            /**
             * Calls LoadFrameList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadFrameList(request: lebai.db.ILoadListRequest, callback: lebai.posture.PostureService.LoadFrameListCallback): void;

            /**
             * Calls LoadFrameList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadFrameList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls GetForwardKin.
             * @param request PoseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public getForwardKin(request: lebai.posture.IPoseRequest, callback: lebai.posture.PostureService.GetForwardKinCallback): void;

            /**
             * Calls GetForwardKin.
             * @param request PoseRequest message or plain object
             * @returns Promise
             */
            public getForwardKin(request: lebai.posture.IPoseRequest): Promise<lebai.posture.CartesianPose>;

            /**
             * Calls GetInverseKin.
             * @param request GetInverseKinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and JointPose
             */
            public getInverseKin(request: lebai.posture.IGetInverseKinRequest, callback: lebai.posture.PostureService.GetInverseKinCallback): void;

            /**
             * Calls GetInverseKin.
             * @param request GetInverseKinRequest message or plain object
             * @returns Promise
             */
            public getInverseKin(request: lebai.posture.IGetInverseKinRequest): Promise<lebai.posture.JointPose>;

            /**
             * Calls GetPoseTrans.
             * @param request GetPoseTransRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public getPoseTrans(request: lebai.posture.IGetPoseTransRequest, callback: lebai.posture.PostureService.GetPoseTransCallback): void;

            /**
             * Calls GetPoseTrans.
             * @param request GetPoseTransRequest message or plain object
             * @returns Promise
             */
            public getPoseTrans(request: lebai.posture.IGetPoseTransRequest): Promise<lebai.posture.CartesianPose>;

            /**
             * Calls GetPoseInverse.
             * @param request PoseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public getPoseInverse(request: lebai.posture.IPoseRequest, callback: lebai.posture.PostureService.GetPoseInverseCallback): void;

            /**
             * Calls GetPoseInverse.
             * @param request PoseRequest message or plain object
             * @returns Promise
             */
            public getPoseInverse(request: lebai.posture.IPoseRequest): Promise<lebai.posture.CartesianPose>;
        }

        namespace PostureService {

            /**
             * Callback as used by {@link lebai.posture.PostureService#savePose}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SavePoseCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#loadPose}.
             * @param error Error, if any
             * @param [response] Pose
             */
            type LoadPoseCallback = (error: (Error|null), response?: lebai.posture.Pose) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#loadPoseList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadPoseListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#saveFrame}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveFrameCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#loadFrame}.
             * @param error Error, if any
             * @param [response] CartesianFrame
             */
            type LoadFrameCallback = (error: (Error|null), response?: lebai.posture.CartesianFrame) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#loadFrameList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadFrameListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#getForwardKin}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type GetForwardKinCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#getInverseKin}.
             * @param error Error, if any
             * @param [response] JointPose
             */
            type GetInverseKinCallback = (error: (Error|null), response?: lebai.posture.JointPose) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#getPoseTrans}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type GetPoseTransCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;

            /**
             * Callback as used by {@link lebai.posture.PostureService#getPoseInverse}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type GetPoseInverseCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;
        }
    }

    /** Namespace file. */
    namespace file {

        /** Properties of a File. */
        interface IFile {

            /** File isDir */
            isDir?: (boolean|null);

            /** File data */
            data?: (Uint8Array|null);
        }

        /** Represents a File. */
        class File implements IFile {

            /**
             * Constructs a new File.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IFile);

            /** File isDir. */
            public isDir: boolean;

            /** File data. */
            public data: Uint8Array;

            /**
             * Creates a new File instance using the specified properties.
             * @param [properties] Properties to set
             * @returns File instance
             */
            public static create(properties?: lebai.file.IFile): lebai.file.File;

            /**
             * Encodes the specified File message. Does not implicitly {@link lebai.file.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified File message, length delimited. Does not implicitly {@link lebai.file.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a File message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.File;

            /**
             * Decodes a File message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.File;

            /**
             * Verifies a File message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a File message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns File
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.File;

            /**
             * Creates a plain object from a File message. Also converts values to other types if specified.
             * @param message File
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this File to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileIndex. */
        interface IFileIndex {

            /** FileIndex dir */
            dir?: (string|null);

            /** FileIndex name */
            name?: (string|null);
        }

        /** Represents a FileIndex. */
        class FileIndex implements IFileIndex {

            /**
             * Constructs a new FileIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IFileIndex);

            /** FileIndex dir. */
            public dir: string;

            /** FileIndex name. */
            public name: string;

            /**
             * Creates a new FileIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileIndex instance
             */
            public static create(properties?: lebai.file.IFileIndex): lebai.file.FileIndex;

            /**
             * Encodes the specified FileIndex message. Does not implicitly {@link lebai.file.FileIndex.verify|verify} messages.
             * @param message FileIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IFileIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileIndex message, length delimited. Does not implicitly {@link lebai.file.FileIndex.verify|verify} messages.
             * @param message FileIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IFileIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.FileIndex;

            /**
             * Decodes a FileIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.FileIndex;

            /**
             * Verifies a FileIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.FileIndex;

            /**
             * Creates a plain object from a FileIndex message. Also converts values to other types if specified.
             * @param message FileIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.FileIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileName. */
        interface IFileName {

            /** FileName name */
            name?: (string|null);

            /** FileName isDir */
            isDir?: (boolean|null);
        }

        /** Represents a FileName. */
        class FileName implements IFileName {

            /**
             * Constructs a new FileName.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IFileName);

            /** FileName name. */
            public name: string;

            /** FileName isDir. */
            public isDir: boolean;

            /**
             * Creates a new FileName instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileName instance
             */
            public static create(properties?: lebai.file.IFileName): lebai.file.FileName;

            /**
             * Encodes the specified FileName message. Does not implicitly {@link lebai.file.FileName.verify|verify} messages.
             * @param message FileName message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IFileName, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileName message, length delimited. Does not implicitly {@link lebai.file.FileName.verify|verify} messages.
             * @param message FileName message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IFileName, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileName message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.FileName;

            /**
             * Decodes a FileName message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileName
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.FileName;

            /**
             * Verifies a FileName message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileName message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileName
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.FileName;

            /**
             * Creates a plain object from a FileName message. Also converts values to other types if specified.
             * @param message FileName
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.FileName, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileName to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveFileRequest. */
        interface ISaveFileRequest {

            /** SaveFileRequest dir */
            dir?: (string|null);

            /** SaveFileRequest name */
            name?: (string|null);

            /** SaveFileRequest file */
            file?: (lebai.file.IFile|null);
        }

        /** Represents a SaveFileRequest. */
        class SaveFileRequest implements ISaveFileRequest {

            /**
             * Constructs a new SaveFileRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.ISaveFileRequest);

            /** SaveFileRequest dir. */
            public dir: string;

            /** SaveFileRequest name. */
            public name: string;

            /** SaveFileRequest file. */
            public file?: (lebai.file.IFile|null);

            /**
             * Creates a new SaveFileRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFileRequest instance
             */
            public static create(properties?: lebai.file.ISaveFileRequest): lebai.file.SaveFileRequest;

            /**
             * Encodes the specified SaveFileRequest message. Does not implicitly {@link lebai.file.SaveFileRequest.verify|verify} messages.
             * @param message SaveFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.ISaveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFileRequest message, length delimited. Does not implicitly {@link lebai.file.SaveFileRequest.verify|verify} messages.
             * @param message SaveFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.ISaveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFileRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.SaveFileRequest;

            /**
             * Decodes a SaveFileRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.SaveFileRequest;

            /**
             * Verifies a SaveFileRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFileRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFileRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.SaveFileRequest;

            /**
             * Creates a plain object from a SaveFileRequest message. Also converts values to other types if specified.
             * @param message SaveFileRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.SaveFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFileRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RenameFileRequest. */
        interface IRenameFileRequest {

            /** RenameFileRequest from */
            from?: (lebai.file.IFileIndex|null);

            /** RenameFileRequest to */
            to?: (lebai.file.IFileIndex|null);
        }

        /** Represents a RenameFileRequest. */
        class RenameFileRequest implements IRenameFileRequest {

            /**
             * Constructs a new RenameFileRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IRenameFileRequest);

            /** RenameFileRequest from. */
            public from?: (lebai.file.IFileIndex|null);

            /** RenameFileRequest to. */
            public to?: (lebai.file.IFileIndex|null);

            /**
             * Creates a new RenameFileRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameFileRequest instance
             */
            public static create(properties?: lebai.file.IRenameFileRequest): lebai.file.RenameFileRequest;

            /**
             * Encodes the specified RenameFileRequest message. Does not implicitly {@link lebai.file.RenameFileRequest.verify|verify} messages.
             * @param message RenameFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IRenameFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameFileRequest message, length delimited. Does not implicitly {@link lebai.file.RenameFileRequest.verify|verify} messages.
             * @param message RenameFileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IRenameFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameFileRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.RenameFileRequest;

            /**
             * Decodes a RenameFileRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameFileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.RenameFileRequest;

            /**
             * Verifies a RenameFileRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameFileRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameFileRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.RenameFileRequest;

            /**
             * Creates a plain object from a RenameFileRequest message. Also converts values to other types if specified.
             * @param message RenameFileRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.RenameFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameFileRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadFileListRequest. */
        interface ILoadFileListRequest {

            /** LoadFileListRequest dir */
            dir?: (string|null);

            /** LoadFileListRequest prefix */
            prefix?: (string|null);

            /** LoadFileListRequest suffix */
            suffix?: (string|null);
        }

        /** Represents a LoadFileListRequest. */
        class LoadFileListRequest implements ILoadFileListRequest {

            /**
             * Constructs a new LoadFileListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.ILoadFileListRequest);

            /** LoadFileListRequest dir. */
            public dir: string;

            /** LoadFileListRequest prefix. */
            public prefix: string;

            /** LoadFileListRequest suffix. */
            public suffix: string;

            /**
             * Creates a new LoadFileListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadFileListRequest instance
             */
            public static create(properties?: lebai.file.ILoadFileListRequest): lebai.file.LoadFileListRequest;

            /**
             * Encodes the specified LoadFileListRequest message. Does not implicitly {@link lebai.file.LoadFileListRequest.verify|verify} messages.
             * @param message LoadFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.ILoadFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadFileListRequest message, length delimited. Does not implicitly {@link lebai.file.LoadFileListRequest.verify|verify} messages.
             * @param message LoadFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.ILoadFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadFileListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.LoadFileListRequest;

            /**
             * Decodes a LoadFileListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.LoadFileListRequest;

            /**
             * Verifies a LoadFileListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadFileListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadFileListRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.LoadFileListRequest;

            /**
             * Creates a plain object from a LoadFileListRequest message. Also converts values to other types if specified.
             * @param message LoadFileListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.LoadFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadFileListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadFileListResponse. */
        interface ILoadFileListResponse {

            /** LoadFileListResponse files */
            files?: (lebai.file.IFileName[]|null);
        }

        /** Represents a LoadFileListResponse. */
        class LoadFileListResponse implements ILoadFileListResponse {

            /**
             * Constructs a new LoadFileListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.ILoadFileListResponse);

            /** LoadFileListResponse files. */
            public files: lebai.file.IFileName[];

            /**
             * Creates a new LoadFileListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadFileListResponse instance
             */
            public static create(properties?: lebai.file.ILoadFileListResponse): lebai.file.LoadFileListResponse;

            /**
             * Encodes the specified LoadFileListResponse message. Does not implicitly {@link lebai.file.LoadFileListResponse.verify|verify} messages.
             * @param message LoadFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.ILoadFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadFileListResponse message, length delimited. Does not implicitly {@link lebai.file.LoadFileListResponse.verify|verify} messages.
             * @param message LoadFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.ILoadFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadFileListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.LoadFileListResponse;

            /**
             * Decodes a LoadFileListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.LoadFileListResponse;

            /**
             * Verifies a LoadFileListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadFileListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadFileListResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.LoadFileListResponse;

            /**
             * Creates a plain object from a LoadFileListResponse message. Also converts values to other types if specified.
             * @param message LoadFileListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.LoadFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadFileListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ZipRequest. */
        interface IZipRequest {

            /** ZipRequest zip */
            zip?: (lebai.file.IFileIndex|null);

            /** ZipRequest files */
            files?: (string[]|null);

            /** ZipRequest dir */
            dir?: (string|null);
        }

        /** Represents a ZipRequest. */
        class ZipRequest implements IZipRequest {

            /**
             * Constructs a new ZipRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IZipRequest);

            /** ZipRequest zip. */
            public zip?: (lebai.file.IFileIndex|null);

            /** ZipRequest files. */
            public files: string[];

            /** ZipRequest dir. */
            public dir: string;

            /**
             * Creates a new ZipRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ZipRequest instance
             */
            public static create(properties?: lebai.file.IZipRequest): lebai.file.ZipRequest;

            /**
             * Encodes the specified ZipRequest message. Does not implicitly {@link lebai.file.ZipRequest.verify|verify} messages.
             * @param message ZipRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IZipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ZipRequest message, length delimited. Does not implicitly {@link lebai.file.ZipRequest.verify|verify} messages.
             * @param message ZipRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IZipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ZipRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ZipRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.ZipRequest;

            /**
             * Decodes a ZipRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ZipRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.ZipRequest;

            /**
             * Verifies a ZipRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ZipRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ZipRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.ZipRequest;

            /**
             * Creates a plain object from a ZipRequest message. Also converts values to other types if specified.
             * @param message ZipRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.ZipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ZipRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UnzipRequest. */
        interface IUnzipRequest {

            /** UnzipRequest zip */
            zip?: (lebai.file.IFileIndex|null);

            /** UnzipRequest files */
            files?: (string[]|null);

            /** UnzipRequest dir */
            dir?: (string|null);
        }

        /** Represents an UnzipRequest. */
        class UnzipRequest implements IUnzipRequest {

            /**
             * Constructs a new UnzipRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.IUnzipRequest);

            /** UnzipRequest zip. */
            public zip?: (lebai.file.IFileIndex|null);

            /** UnzipRequest files. */
            public files: string[];

            /** UnzipRequest dir. */
            public dir: string;

            /**
             * Creates a new UnzipRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UnzipRequest instance
             */
            public static create(properties?: lebai.file.IUnzipRequest): lebai.file.UnzipRequest;

            /**
             * Encodes the specified UnzipRequest message. Does not implicitly {@link lebai.file.UnzipRequest.verify|verify} messages.
             * @param message UnzipRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.IUnzipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UnzipRequest message, length delimited. Does not implicitly {@link lebai.file.UnzipRequest.verify|verify} messages.
             * @param message UnzipRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.IUnzipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UnzipRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UnzipRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.UnzipRequest;

            /**
             * Decodes an UnzipRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UnzipRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.UnzipRequest;

            /**
             * Verifies an UnzipRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UnzipRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UnzipRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.UnzipRequest;

            /**
             * Creates a plain object from an UnzipRequest message. Also converts values to other types if specified.
             * @param message UnzipRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.UnzipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UnzipRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadZipListRequest. */
        interface ILoadZipListRequest {

            /** LoadZipListRequest zip */
            zip?: (lebai.file.IFileIndex|null);

            /** LoadZipListRequest dir */
            dir?: (string|null);

            /** LoadZipListRequest prefix */
            prefix?: (string|null);

            /** LoadZipListRequest suffix */
            suffix?: (string|null);
        }

        /** Represents a LoadZipListRequest. */
        class LoadZipListRequest implements ILoadZipListRequest {

            /**
             * Constructs a new LoadZipListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.ILoadZipListRequest);

            /** LoadZipListRequest zip. */
            public zip?: (lebai.file.IFileIndex|null);

            /** LoadZipListRequest dir. */
            public dir: string;

            /** LoadZipListRequest prefix. */
            public prefix: string;

            /** LoadZipListRequest suffix. */
            public suffix: string;

            /**
             * Creates a new LoadZipListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadZipListRequest instance
             */
            public static create(properties?: lebai.file.ILoadZipListRequest): lebai.file.LoadZipListRequest;

            /**
             * Encodes the specified LoadZipListRequest message. Does not implicitly {@link lebai.file.LoadZipListRequest.verify|verify} messages.
             * @param message LoadZipListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.ILoadZipListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadZipListRequest message, length delimited. Does not implicitly {@link lebai.file.LoadZipListRequest.verify|verify} messages.
             * @param message LoadZipListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.ILoadZipListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadZipListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadZipListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.LoadZipListRequest;

            /**
             * Decodes a LoadZipListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadZipListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.LoadZipListRequest;

            /**
             * Verifies a LoadZipListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadZipListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadZipListRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.LoadZipListRequest;

            /**
             * Creates a plain object from a LoadZipListRequest message. Also converts values to other types if specified.
             * @param message LoadZipListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.LoadZipListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadZipListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadZipListResponse. */
        interface ILoadZipListResponse {

            /** LoadZipListResponse files */
            files?: (lebai.file.IFileName[]|null);
        }

        /** Represents a LoadZipListResponse. */
        class LoadZipListResponse implements ILoadZipListResponse {

            /**
             * Constructs a new LoadZipListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.file.ILoadZipListResponse);

            /** LoadZipListResponse files. */
            public files: lebai.file.IFileName[];

            /**
             * Creates a new LoadZipListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadZipListResponse instance
             */
            public static create(properties?: lebai.file.ILoadZipListResponse): lebai.file.LoadZipListResponse;

            /**
             * Encodes the specified LoadZipListResponse message. Does not implicitly {@link lebai.file.LoadZipListResponse.verify|verify} messages.
             * @param message LoadZipListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.file.ILoadZipListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadZipListResponse message, length delimited. Does not implicitly {@link lebai.file.LoadZipListResponse.verify|verify} messages.
             * @param message LoadZipListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.file.ILoadZipListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadZipListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadZipListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.file.LoadZipListResponse;

            /**
             * Decodes a LoadZipListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadZipListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.file.LoadZipListResponse;

            /**
             * Verifies a LoadZipListResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadZipListResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadZipListResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.file.LoadZipListResponse;

            /**
             * Creates a plain object from a LoadZipListResponse message. Also converts values to other types if specified.
             * @param message LoadZipListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.file.LoadZipListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadZipListResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a FileService */
        class FileService extends $protobuf.rpc.Service {

            /**
             * Constructs a new FileService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new FileService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FileService;

            /**
             * Calls SaveFile.
             * @param request SaveFileRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveFile(request: lebai.file.ISaveFileRequest, callback: lebai.file.FileService.SaveFileCallback): void;

            /**
             * Calls SaveFile.
             * @param request SaveFileRequest message or plain object
             * @returns Promise
             */
            public saveFile(request: lebai.file.ISaveFileRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls RenameFile.
             * @param request RenameFileRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public renameFile(request: lebai.file.IRenameFileRequest, callback: lebai.file.FileService.RenameFileCallback): void;

            /**
             * Calls RenameFile.
             * @param request RenameFileRequest message or plain object
             * @returns Promise
             */
            public renameFile(request: lebai.file.IRenameFileRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadFile.
             * @param request FileIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and File
             */
            public loadFile(request: lebai.file.IFileIndex, callback: lebai.file.FileService.LoadFileCallback): void;

            /**
             * Calls LoadFile.
             * @param request FileIndex message or plain object
             * @returns Promise
             */
            public loadFile(request: lebai.file.IFileIndex): Promise<lebai.file.File>;

            /**
             * Calls LoadFileList.
             * @param request LoadFileListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadFileListResponse
             */
            public loadFileList(request: lebai.file.ILoadFileListRequest, callback: lebai.file.FileService.LoadFileListCallback): void;

            /**
             * Calls LoadFileList.
             * @param request LoadFileListRequest message or plain object
             * @returns Promise
             */
            public loadFileList(request: lebai.file.ILoadFileListRequest): Promise<lebai.file.LoadFileListResponse>;

            /**
             * Calls Zip.
             * @param request ZipRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public zip(request: lebai.file.IZipRequest, callback: lebai.file.FileService.ZipCallback): void;

            /**
             * Calls Zip.
             * @param request ZipRequest message or plain object
             * @returns Promise
             */
            public zip(request: lebai.file.IZipRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls Unzip.
             * @param request UnzipRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public unzip(request: lebai.file.IUnzipRequest, callback: lebai.file.FileService.UnzipCallback): void;

            /**
             * Calls Unzip.
             * @param request UnzipRequest message or plain object
             * @returns Promise
             */
            public unzip(request: lebai.file.IUnzipRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadZipList.
             * @param request LoadZipListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadZipListResponse
             */
            public loadZipList(request: lebai.file.ILoadZipListRequest, callback: lebai.file.FileService.LoadZipListCallback): void;

            /**
             * Calls LoadZipList.
             * @param request LoadZipListRequest message or plain object
             * @returns Promise
             */
            public loadZipList(request: lebai.file.ILoadZipListRequest): Promise<lebai.file.LoadZipListResponse>;
        }

        namespace FileService {

            /**
             * Callback as used by {@link lebai.file.FileService#saveFile}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveFileCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#renameFile}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type RenameFileCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#loadFile}.
             * @param error Error, if any
             * @param [response] File
             */
            type LoadFileCallback = (error: (Error|null), response?: lebai.file.File) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#loadFileList}.
             * @param error Error, if any
             * @param [response] LoadFileListResponse
             */
            type LoadFileListCallback = (error: (Error|null), response?: lebai.file.LoadFileListResponse) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#zip}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ZipCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#unzip}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type UnzipCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.file.FileService#loadZipList}.
             * @param error Error, if any
             * @param [response] LoadZipListResponse
             */
            type LoadZipListCallback = (error: (Error|null), response?: lebai.file.LoadZipListResponse) => void;
        }
    }

    /** Namespace io. */
    namespace io {

        /** IoDevice enum. */
        enum IoDevice {
            ROBOT = 0,
            FLANGE = 1,
            EXTRA = 2,
            SHOULDER = 11,
            FLANGE_BTN = 12
        }

        /** IoPinKind enum. */
        enum IoPinKind {
            DI = 0,
            DO = 1,
            AI = 2,
            AO = 3
        }

        /** AnalogMode enum. */
        enum AnalogMode {
            VOLTAGE = 0,
            CURRENT = 1
        }

        /** Properties of a SetDoPinRequest. */
        interface ISetDoPinRequest {

            /** SetDoPinRequest device */
            device?: (lebai.io.IoDevice|null);

            /** SetDoPinRequest pin */
            pin?: (number|null);

            /** SetDoPinRequest value */
            value?: (number|null);
        }

        /** Represents a SetDoPinRequest. */
        class SetDoPinRequest implements ISetDoPinRequest {

            /**
             * Constructs a new SetDoPinRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.ISetDoPinRequest);

            /** SetDoPinRequest device. */
            public device: lebai.io.IoDevice;

            /** SetDoPinRequest pin. */
            public pin: number;

            /** SetDoPinRequest value. */
            public value: number;

            /**
             * Creates a new SetDoPinRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetDoPinRequest instance
             */
            public static create(properties?: lebai.io.ISetDoPinRequest): lebai.io.SetDoPinRequest;

            /**
             * Encodes the specified SetDoPinRequest message. Does not implicitly {@link lebai.io.SetDoPinRequest.verify|verify} messages.
             * @param message SetDoPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.ISetDoPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetDoPinRequest message, length delimited. Does not implicitly {@link lebai.io.SetDoPinRequest.verify|verify} messages.
             * @param message SetDoPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.ISetDoPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetDoPinRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetDoPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.SetDoPinRequest;

            /**
             * Decodes a SetDoPinRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetDoPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.SetDoPinRequest;

            /**
             * Verifies a SetDoPinRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetDoPinRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetDoPinRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.SetDoPinRequest;

            /**
             * Creates a plain object from a SetDoPinRequest message. Also converts values to other types if specified.
             * @param message SetDoPinRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.SetDoPinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetDoPinRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetDoPinsRequest. */
        interface ISetDoPinsRequest {

            /** SetDoPinsRequest device */
            device?: (lebai.io.IoDevice|null);

            /** SetDoPinsRequest pin */
            pin?: (number|null);

            /** SetDoPinsRequest values */
            values?: (number[]|null);
        }

        /** Represents a SetDoPinsRequest. */
        class SetDoPinsRequest implements ISetDoPinsRequest {

            /**
             * Constructs a new SetDoPinsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.ISetDoPinsRequest);

            /** SetDoPinsRequest device. */
            public device: lebai.io.IoDevice;

            /** SetDoPinsRequest pin. */
            public pin: number;

            /** SetDoPinsRequest values. */
            public values: number[];

            /**
             * Creates a new SetDoPinsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetDoPinsRequest instance
             */
            public static create(properties?: lebai.io.ISetDoPinsRequest): lebai.io.SetDoPinsRequest;

            /**
             * Encodes the specified SetDoPinsRequest message. Does not implicitly {@link lebai.io.SetDoPinsRequest.verify|verify} messages.
             * @param message SetDoPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.ISetDoPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetDoPinsRequest message, length delimited. Does not implicitly {@link lebai.io.SetDoPinsRequest.verify|verify} messages.
             * @param message SetDoPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.ISetDoPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetDoPinsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetDoPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.SetDoPinsRequest;

            /**
             * Decodes a SetDoPinsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetDoPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.SetDoPinsRequest;

            /**
             * Verifies a SetDoPinsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetDoPinsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetDoPinsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.SetDoPinsRequest;

            /**
             * Creates a plain object from a SetDoPinsRequest message. Also converts values to other types if specified.
             * @param message SetDoPinsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.SetDoPinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetDoPinsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetDioPinRequest. */
        interface IGetDioPinRequest {

            /** GetDioPinRequest device */
            device?: (lebai.io.IoDevice|null);

            /** GetDioPinRequest pin */
            pin?: (number|null);
        }

        /** Represents a GetDioPinRequest. */
        class GetDioPinRequest implements IGetDioPinRequest {

            /**
             * Constructs a new GetDioPinRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetDioPinRequest);

            /** GetDioPinRequest device. */
            public device: lebai.io.IoDevice;

            /** GetDioPinRequest pin. */
            public pin: number;

            /**
             * Creates a new GetDioPinRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDioPinRequest instance
             */
            public static create(properties?: lebai.io.IGetDioPinRequest): lebai.io.GetDioPinRequest;

            /**
             * Encodes the specified GetDioPinRequest message. Does not implicitly {@link lebai.io.GetDioPinRequest.verify|verify} messages.
             * @param message GetDioPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetDioPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetDioPinRequest message, length delimited. Does not implicitly {@link lebai.io.GetDioPinRequest.verify|verify} messages.
             * @param message GetDioPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetDioPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDioPinRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDioPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetDioPinRequest;

            /**
             * Decodes a GetDioPinRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetDioPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetDioPinRequest;

            /**
             * Verifies a GetDioPinRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetDioPinRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetDioPinRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetDioPinRequest;

            /**
             * Creates a plain object from a GetDioPinRequest message. Also converts values to other types if specified.
             * @param message GetDioPinRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetDioPinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetDioPinRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetDioPinResponse. */
        interface IGetDioPinResponse {

            /** GetDioPinResponse value */
            value?: (number|null);
        }

        /** Represents a GetDioPinResponse. */
        class GetDioPinResponse implements IGetDioPinResponse {

            /**
             * Constructs a new GetDioPinResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetDioPinResponse);

            /** GetDioPinResponse value. */
            public value: number;

            /**
             * Creates a new GetDioPinResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDioPinResponse instance
             */
            public static create(properties?: lebai.io.IGetDioPinResponse): lebai.io.GetDioPinResponse;

            /**
             * Encodes the specified GetDioPinResponse message. Does not implicitly {@link lebai.io.GetDioPinResponse.verify|verify} messages.
             * @param message GetDioPinResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetDioPinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetDioPinResponse message, length delimited. Does not implicitly {@link lebai.io.GetDioPinResponse.verify|verify} messages.
             * @param message GetDioPinResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetDioPinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDioPinResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDioPinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetDioPinResponse;

            /**
             * Decodes a GetDioPinResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetDioPinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetDioPinResponse;

            /**
             * Verifies a GetDioPinResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetDioPinResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetDioPinResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetDioPinResponse;

            /**
             * Creates a plain object from a GetDioPinResponse message. Also converts values to other types if specified.
             * @param message GetDioPinResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetDioPinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetDioPinResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetDioPinsRequest. */
        interface IGetDioPinsRequest {

            /** GetDioPinsRequest device */
            device?: (lebai.io.IoDevice|null);

            /** GetDioPinsRequest pin */
            pin?: (number|null);

            /** GetDioPinsRequest count */
            count?: (number|null);
        }

        /** Represents a GetDioPinsRequest. */
        class GetDioPinsRequest implements IGetDioPinsRequest {

            /**
             * Constructs a new GetDioPinsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetDioPinsRequest);

            /** GetDioPinsRequest device. */
            public device: lebai.io.IoDevice;

            /** GetDioPinsRequest pin. */
            public pin: number;

            /** GetDioPinsRequest count. */
            public count: number;

            /**
             * Creates a new GetDioPinsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDioPinsRequest instance
             */
            public static create(properties?: lebai.io.IGetDioPinsRequest): lebai.io.GetDioPinsRequest;

            /**
             * Encodes the specified GetDioPinsRequest message. Does not implicitly {@link lebai.io.GetDioPinsRequest.verify|verify} messages.
             * @param message GetDioPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetDioPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetDioPinsRequest message, length delimited. Does not implicitly {@link lebai.io.GetDioPinsRequest.verify|verify} messages.
             * @param message GetDioPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetDioPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDioPinsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDioPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetDioPinsRequest;

            /**
             * Decodes a GetDioPinsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetDioPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetDioPinsRequest;

            /**
             * Verifies a GetDioPinsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetDioPinsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetDioPinsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetDioPinsRequest;

            /**
             * Creates a plain object from a GetDioPinsRequest message. Also converts values to other types if specified.
             * @param message GetDioPinsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetDioPinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetDioPinsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetDioPinsResponse. */
        interface IGetDioPinsResponse {

            /** GetDioPinsResponse values */
            values?: (number[]|null);
        }

        /** Represents a GetDioPinsResponse. */
        class GetDioPinsResponse implements IGetDioPinsResponse {

            /**
             * Constructs a new GetDioPinsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetDioPinsResponse);

            /** GetDioPinsResponse values. */
            public values: number[];

            /**
             * Creates a new GetDioPinsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDioPinsResponse instance
             */
            public static create(properties?: lebai.io.IGetDioPinsResponse): lebai.io.GetDioPinsResponse;

            /**
             * Encodes the specified GetDioPinsResponse message. Does not implicitly {@link lebai.io.GetDioPinsResponse.verify|verify} messages.
             * @param message GetDioPinsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetDioPinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetDioPinsResponse message, length delimited. Does not implicitly {@link lebai.io.GetDioPinsResponse.verify|verify} messages.
             * @param message GetDioPinsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetDioPinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDioPinsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetDioPinsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetDioPinsResponse;

            /**
             * Decodes a GetDioPinsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetDioPinsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetDioPinsResponse;

            /**
             * Verifies a GetDioPinsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetDioPinsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetDioPinsResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetDioPinsResponse;

            /**
             * Creates a plain object from a GetDioPinsResponse message. Also converts values to other types if specified.
             * @param message GetDioPinsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetDioPinsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetDioPinsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetAoPinRequest. */
        interface ISetAoPinRequest {

            /** SetAoPinRequest device */
            device?: (lebai.io.IoDevice|null);

            /** SetAoPinRequest pin */
            pin?: (number|null);

            /** SetAoPinRequest value */
            value?: (number|null);
        }

        /** Represents a SetAoPinRequest. */
        class SetAoPinRequest implements ISetAoPinRequest {

            /**
             * Constructs a new SetAoPinRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.ISetAoPinRequest);

            /** SetAoPinRequest device. */
            public device: lebai.io.IoDevice;

            /** SetAoPinRequest pin. */
            public pin: number;

            /** SetAoPinRequest value. */
            public value: number;

            /**
             * Creates a new SetAoPinRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetAoPinRequest instance
             */
            public static create(properties?: lebai.io.ISetAoPinRequest): lebai.io.SetAoPinRequest;

            /**
             * Encodes the specified SetAoPinRequest message. Does not implicitly {@link lebai.io.SetAoPinRequest.verify|verify} messages.
             * @param message SetAoPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.ISetAoPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetAoPinRequest message, length delimited. Does not implicitly {@link lebai.io.SetAoPinRequest.verify|verify} messages.
             * @param message SetAoPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.ISetAoPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetAoPinRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetAoPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.SetAoPinRequest;

            /**
             * Decodes a SetAoPinRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetAoPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.SetAoPinRequest;

            /**
             * Verifies a SetAoPinRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetAoPinRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetAoPinRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.SetAoPinRequest;

            /**
             * Creates a plain object from a SetAoPinRequest message. Also converts values to other types if specified.
             * @param message SetAoPinRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.SetAoPinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetAoPinRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetAoPinsRequest. */
        interface ISetAoPinsRequest {

            /** SetAoPinsRequest device */
            device?: (lebai.io.IoDevice|null);

            /** SetAoPinsRequest pin */
            pin?: (number|null);

            /** SetAoPinsRequest values */
            values?: (number[]|null);
        }

        /** Represents a SetAoPinsRequest. */
        class SetAoPinsRequest implements ISetAoPinsRequest {

            /**
             * Constructs a new SetAoPinsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.ISetAoPinsRequest);

            /** SetAoPinsRequest device. */
            public device: lebai.io.IoDevice;

            /** SetAoPinsRequest pin. */
            public pin: number;

            /** SetAoPinsRequest values. */
            public values: number[];

            /**
             * Creates a new SetAoPinsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetAoPinsRequest instance
             */
            public static create(properties?: lebai.io.ISetAoPinsRequest): lebai.io.SetAoPinsRequest;

            /**
             * Encodes the specified SetAoPinsRequest message. Does not implicitly {@link lebai.io.SetAoPinsRequest.verify|verify} messages.
             * @param message SetAoPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.ISetAoPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetAoPinsRequest message, length delimited. Does not implicitly {@link lebai.io.SetAoPinsRequest.verify|verify} messages.
             * @param message SetAoPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.ISetAoPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetAoPinsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetAoPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.SetAoPinsRequest;

            /**
             * Decodes a SetAoPinsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetAoPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.SetAoPinsRequest;

            /**
             * Verifies a SetAoPinsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetAoPinsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetAoPinsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.SetAoPinsRequest;

            /**
             * Creates a plain object from a SetAoPinsRequest message. Also converts values to other types if specified.
             * @param message SetAoPinsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.SetAoPinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetAoPinsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAioPinRequest. */
        interface IGetAioPinRequest {

            /** GetAioPinRequest device */
            device?: (lebai.io.IoDevice|null);

            /** GetAioPinRequest pin */
            pin?: (number|null);
        }

        /** Represents a GetAioPinRequest. */
        class GetAioPinRequest implements IGetAioPinRequest {

            /**
             * Constructs a new GetAioPinRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetAioPinRequest);

            /** GetAioPinRequest device. */
            public device: lebai.io.IoDevice;

            /** GetAioPinRequest pin. */
            public pin: number;

            /**
             * Creates a new GetAioPinRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAioPinRequest instance
             */
            public static create(properties?: lebai.io.IGetAioPinRequest): lebai.io.GetAioPinRequest;

            /**
             * Encodes the specified GetAioPinRequest message. Does not implicitly {@link lebai.io.GetAioPinRequest.verify|verify} messages.
             * @param message GetAioPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetAioPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAioPinRequest message, length delimited. Does not implicitly {@link lebai.io.GetAioPinRequest.verify|verify} messages.
             * @param message GetAioPinRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetAioPinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAioPinRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAioPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetAioPinRequest;

            /**
             * Decodes a GetAioPinRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAioPinRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetAioPinRequest;

            /**
             * Verifies a GetAioPinRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAioPinRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAioPinRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetAioPinRequest;

            /**
             * Creates a plain object from a GetAioPinRequest message. Also converts values to other types if specified.
             * @param message GetAioPinRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetAioPinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAioPinRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAioPinResponse. */
        interface IGetAioPinResponse {

            /** GetAioPinResponse value */
            value?: (number|null);
        }

        /** Represents a GetAioPinResponse. */
        class GetAioPinResponse implements IGetAioPinResponse {

            /**
             * Constructs a new GetAioPinResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetAioPinResponse);

            /** GetAioPinResponse value. */
            public value: number;

            /**
             * Creates a new GetAioPinResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAioPinResponse instance
             */
            public static create(properties?: lebai.io.IGetAioPinResponse): lebai.io.GetAioPinResponse;

            /**
             * Encodes the specified GetAioPinResponse message. Does not implicitly {@link lebai.io.GetAioPinResponse.verify|verify} messages.
             * @param message GetAioPinResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetAioPinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAioPinResponse message, length delimited. Does not implicitly {@link lebai.io.GetAioPinResponse.verify|verify} messages.
             * @param message GetAioPinResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetAioPinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAioPinResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAioPinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetAioPinResponse;

            /**
             * Decodes a GetAioPinResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAioPinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetAioPinResponse;

            /**
             * Verifies a GetAioPinResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAioPinResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAioPinResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetAioPinResponse;

            /**
             * Creates a plain object from a GetAioPinResponse message. Also converts values to other types if specified.
             * @param message GetAioPinResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetAioPinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAioPinResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAioPinsRequest. */
        interface IGetAioPinsRequest {

            /** GetAioPinsRequest device */
            device?: (lebai.io.IoDevice|null);

            /** GetAioPinsRequest pin */
            pin?: (number|null);

            /** GetAioPinsRequest count */
            count?: (number|null);
        }

        /** Represents a GetAioPinsRequest. */
        class GetAioPinsRequest implements IGetAioPinsRequest {

            /**
             * Constructs a new GetAioPinsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetAioPinsRequest);

            /** GetAioPinsRequest device. */
            public device: lebai.io.IoDevice;

            /** GetAioPinsRequest pin. */
            public pin: number;

            /** GetAioPinsRequest count. */
            public count: number;

            /**
             * Creates a new GetAioPinsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAioPinsRequest instance
             */
            public static create(properties?: lebai.io.IGetAioPinsRequest): lebai.io.GetAioPinsRequest;

            /**
             * Encodes the specified GetAioPinsRequest message. Does not implicitly {@link lebai.io.GetAioPinsRequest.verify|verify} messages.
             * @param message GetAioPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetAioPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAioPinsRequest message, length delimited. Does not implicitly {@link lebai.io.GetAioPinsRequest.verify|verify} messages.
             * @param message GetAioPinsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetAioPinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAioPinsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAioPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetAioPinsRequest;

            /**
             * Decodes a GetAioPinsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAioPinsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetAioPinsRequest;

            /**
             * Verifies a GetAioPinsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAioPinsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAioPinsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetAioPinsRequest;

            /**
             * Creates a plain object from a GetAioPinsRequest message. Also converts values to other types if specified.
             * @param message GetAioPinsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetAioPinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAioPinsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetAioPinsResponse. */
        interface IGetAioPinsResponse {

            /** GetAioPinsResponse values */
            values?: (number[]|null);
        }

        /** Represents a GetAioPinsResponse. */
        class GetAioPinsResponse implements IGetAioPinsResponse {

            /**
             * Constructs a new GetAioPinsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IGetAioPinsResponse);

            /** GetAioPinsResponse values. */
            public values: number[];

            /**
             * Creates a new GetAioPinsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetAioPinsResponse instance
             */
            public static create(properties?: lebai.io.IGetAioPinsResponse): lebai.io.GetAioPinsResponse;

            /**
             * Encodes the specified GetAioPinsResponse message. Does not implicitly {@link lebai.io.GetAioPinsResponse.verify|verify} messages.
             * @param message GetAioPinsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IGetAioPinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetAioPinsResponse message, length delimited. Does not implicitly {@link lebai.io.GetAioPinsResponse.verify|verify} messages.
             * @param message GetAioPinsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IGetAioPinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetAioPinsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetAioPinsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.GetAioPinsResponse;

            /**
             * Decodes a GetAioPinsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetAioPinsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.GetAioPinsResponse;

            /**
             * Verifies a GetAioPinsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetAioPinsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetAioPinsResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.GetAioPinsResponse;

            /**
             * Creates a plain object from a GetAioPinsResponse message. Also converts values to other types if specified.
             * @param message GetAioPinsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.GetAioPinsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetAioPinsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ButtonIndex. */
        interface IButtonIndex {

            /** ButtonIndex device */
            device?: (lebai.io.IoDevice|null);

            /** ButtonIndex pin */
            pin?: (number|null);
        }

        /** Represents a ButtonIndex. */
        class ButtonIndex implements IButtonIndex {

            /**
             * Constructs a new ButtonIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IButtonIndex);

            /** ButtonIndex device. */
            public device: lebai.io.IoDevice;

            /** ButtonIndex pin. */
            public pin: number;

            /**
             * Creates a new ButtonIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtonIndex instance
             */
            public static create(properties?: lebai.io.IButtonIndex): lebai.io.ButtonIndex;

            /**
             * Encodes the specified ButtonIndex message. Does not implicitly {@link lebai.io.ButtonIndex.verify|verify} messages.
             * @param message ButtonIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IButtonIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtonIndex message, length delimited. Does not implicitly {@link lebai.io.ButtonIndex.verify|verify} messages.
             * @param message ButtonIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IButtonIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtonIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtonIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.ButtonIndex;

            /**
             * Decodes a ButtonIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtonIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.ButtonIndex;

            /**
             * Verifies a ButtonIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtonIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtonIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.ButtonIndex;

            /**
             * Creates a plain object from a ButtonIndex message. Also converts values to other types if specified.
             * @param message ButtonIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.ButtonIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtonIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ButtonState enum. */
        enum ButtonState {
            EMPTY = 0,
            UP = 1,
            LONG_DOWN = 2,
            CLICK = 3
        }

        /** Properties of a ButtonStatus. */
        interface IButtonStatus {

            /** ButtonStatus state */
            state?: (lebai.io.ButtonState|null);

            /** ButtonStatus time */
            time?: (number|null);
        }

        /** Represents a ButtonStatus. */
        class ButtonStatus implements IButtonStatus {

            /**
             * Constructs a new ButtonStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IButtonStatus);

            /** ButtonStatus state. */
            public state: lebai.io.ButtonState;

            /** ButtonStatus time. */
            public time: number;

            /**
             * Creates a new ButtonStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtonStatus instance
             */
            public static create(properties?: lebai.io.IButtonStatus): lebai.io.ButtonStatus;

            /**
             * Encodes the specified ButtonStatus message. Does not implicitly {@link lebai.io.ButtonStatus.verify|verify} messages.
             * @param message ButtonStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IButtonStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtonStatus message, length delimited. Does not implicitly {@link lebai.io.ButtonStatus.verify|verify} messages.
             * @param message ButtonStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IButtonStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtonStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtonStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.ButtonStatus;

            /**
             * Decodes a ButtonStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtonStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.ButtonStatus;

            /**
             * Verifies a ButtonStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtonStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtonStatus
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.ButtonStatus;

            /**
             * Creates a plain object from a ButtonStatus message. Also converts values to other types if specified.
             * @param message ButtonStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.ButtonStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtonStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ButtonsStatus. */
        interface IButtonsStatus {

            /** ButtonsStatus button */
            button?: (lebai.io.IButtonIndex|null);

            /** ButtonsStatus status */
            status?: (lebai.io.IButtonStatus|null);
        }

        /** Represents a ButtonsStatus. */
        class ButtonsStatus implements IButtonsStatus {

            /**
             * Constructs a new ButtonsStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.io.IButtonsStatus);

            /** ButtonsStatus button. */
            public button?: (lebai.io.IButtonIndex|null);

            /** ButtonsStatus status. */
            public status?: (lebai.io.IButtonStatus|null);

            /**
             * Creates a new ButtonsStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtonsStatus instance
             */
            public static create(properties?: lebai.io.IButtonsStatus): lebai.io.ButtonsStatus;

            /**
             * Encodes the specified ButtonsStatus message. Does not implicitly {@link lebai.io.ButtonsStatus.verify|verify} messages.
             * @param message ButtonsStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.io.IButtonsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtonsStatus message, length delimited. Does not implicitly {@link lebai.io.ButtonsStatus.verify|verify} messages.
             * @param message ButtonsStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.io.IButtonsStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtonsStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtonsStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.io.ButtonsStatus;

            /**
             * Decodes a ButtonsStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtonsStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.io.ButtonsStatus;

            /**
             * Verifies a ButtonsStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtonsStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtonsStatus
             */
            public static fromObject(object: { [k: string]: any }): lebai.io.ButtonsStatus;

            /**
             * Creates a plain object from a ButtonsStatus message. Also converts values to other types if specified.
             * @param message ButtonsStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.io.ButtonsStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtonsStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents an IoService */
        class IoService extends $protobuf.rpc.Service {

            /**
             * Constructs a new IoService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new IoService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IoService;

            /**
             * Calls GetDi.
             * @param request GetDioPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetDioPinResponse
             */
            public getDi(request: lebai.io.IGetDioPinRequest, callback: lebai.io.IoService.GetDiCallback): void;

            /**
             * Calls GetDi.
             * @param request GetDioPinRequest message or plain object
             * @returns Promise
             */
            public getDi(request: lebai.io.IGetDioPinRequest): Promise<lebai.io.GetDioPinResponse>;

            /**
             * Calls GetDis.
             * @param request GetDioPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetDioPinsResponse
             */
            public getDis(request: lebai.io.IGetDioPinsRequest, callback: lebai.io.IoService.GetDisCallback): void;

            /**
             * Calls GetDis.
             * @param request GetDioPinsRequest message or plain object
             * @returns Promise
             */
            public getDis(request: lebai.io.IGetDioPinsRequest): Promise<lebai.io.GetDioPinsResponse>;

            /**
             * Calls GetDo.
             * @param request GetDioPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetDioPinResponse
             */
            public getDo(request: lebai.io.IGetDioPinRequest, callback: lebai.io.IoService.GetDoCallback): void;

            /**
             * Calls GetDo.
             * @param request GetDioPinRequest message or plain object
             * @returns Promise
             */
            public getDo(request: lebai.io.IGetDioPinRequest): Promise<lebai.io.GetDioPinResponse>;

            /**
             * Calls GetDos.
             * @param request GetDioPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetDioPinsResponse
             */
            public getDos(request: lebai.io.IGetDioPinsRequest, callback: lebai.io.IoService.GetDosCallback): void;

            /**
             * Calls GetDos.
             * @param request GetDioPinsRequest message or plain object
             * @returns Promise
             */
            public getDos(request: lebai.io.IGetDioPinsRequest): Promise<lebai.io.GetDioPinsResponse>;

            /**
             * Calls SetDo.
             * @param request SetDoPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setDo(request: lebai.io.ISetDoPinRequest, callback: lebai.io.IoService.SetDoCallback): void;

            /**
             * Calls SetDo.
             * @param request SetDoPinRequest message or plain object
             * @returns Promise
             */
            public setDo(request: lebai.io.ISetDoPinRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetDos.
             * @param request SetDoPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setDos(request: lebai.io.ISetDoPinsRequest, callback: lebai.io.IoService.SetDosCallback): void;

            /**
             * Calls SetDos.
             * @param request SetDoPinsRequest message or plain object
             * @returns Promise
             */
            public setDos(request: lebai.io.ISetDoPinsRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetAi.
             * @param request GetAioPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetAioPinResponse
             */
            public getAi(request: lebai.io.IGetAioPinRequest, callback: lebai.io.IoService.GetAiCallback): void;

            /**
             * Calls GetAi.
             * @param request GetAioPinRequest message or plain object
             * @returns Promise
             */
            public getAi(request: lebai.io.IGetAioPinRequest): Promise<lebai.io.GetAioPinResponse>;

            /**
             * Calls GetAis.
             * @param request GetAioPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetAioPinsResponse
             */
            public getAis(request: lebai.io.IGetAioPinsRequest, callback: lebai.io.IoService.GetAisCallback): void;

            /**
             * Calls GetAis.
             * @param request GetAioPinsRequest message or plain object
             * @returns Promise
             */
            public getAis(request: lebai.io.IGetAioPinsRequest): Promise<lebai.io.GetAioPinsResponse>;

            /**
             * Calls GetAo.
             * @param request GetAioPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetAioPinResponse
             */
            public getAo(request: lebai.io.IGetAioPinRequest, callback: lebai.io.IoService.GetAoCallback): void;

            /**
             * Calls GetAo.
             * @param request GetAioPinRequest message or plain object
             * @returns Promise
             */
            public getAo(request: lebai.io.IGetAioPinRequest): Promise<lebai.io.GetAioPinResponse>;

            /**
             * Calls GetAos.
             * @param request GetAioPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetAioPinsResponse
             */
            public getAos(request: lebai.io.IGetAioPinsRequest, callback: lebai.io.IoService.GetAosCallback): void;

            /**
             * Calls GetAos.
             * @param request GetAioPinsRequest message or plain object
             * @returns Promise
             */
            public getAos(request: lebai.io.IGetAioPinsRequest): Promise<lebai.io.GetAioPinsResponse>;

            /**
             * Calls SetAo.
             * @param request SetAoPinRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setAo(request: lebai.io.ISetAoPinRequest, callback: lebai.io.IoService.SetAoCallback): void;

            /**
             * Calls SetAo.
             * @param request SetAoPinRequest message or plain object
             * @returns Promise
             */
            public setAo(request: lebai.io.ISetAoPinRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetAos.
             * @param request SetAoPinsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setAos(request: lebai.io.ISetAoPinsRequest, callback: lebai.io.IoService.SetAosCallback): void;

            /**
             * Calls SetAos.
             * @param request SetAoPinsRequest message or plain object
             * @returns Promise
             */
            public setAos(request: lebai.io.ISetAoPinsRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls EnableButton.
             * @param request ButtonIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public enableButton(request: lebai.io.IButtonIndex, callback: lebai.io.IoService.EnableButtonCallback): void;

            /**
             * Calls EnableButton.
             * @param request ButtonIndex message or plain object
             * @returns Promise
             */
            public enableButton(request: lebai.io.IButtonIndex): Promise<google.protobuf.Empty>;

            /**
             * Calls DisableButton.
             * @param request ButtonIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public disableButton(request: lebai.io.IButtonIndex, callback: lebai.io.IoService.DisableButtonCallback): void;

            /**
             * Calls DisableButton.
             * @param request ButtonIndex message or plain object
             * @returns Promise
             */
            public disableButton(request: lebai.io.IButtonIndex): Promise<google.protobuf.Empty>;

            /**
             * Calls SubButtonsStatus.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and ButtonsStatus
             */
            public subButtonsStatus(request: google.protobuf.IEmpty, callback: lebai.io.IoService.SubButtonsStatusCallback): void;

            /**
             * Calls SubButtonsStatus.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public subButtonsStatus(request: google.protobuf.IEmpty): Promise<lebai.io.ButtonsStatus>;
        }

        namespace IoService {

            /**
             * Callback as used by {@link lebai.io.IoService#getDi}.
             * @param error Error, if any
             * @param [response] GetDioPinResponse
             */
            type GetDiCallback = (error: (Error|null), response?: lebai.io.GetDioPinResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getDis}.
             * @param error Error, if any
             * @param [response] GetDioPinsResponse
             */
            type GetDisCallback = (error: (Error|null), response?: lebai.io.GetDioPinsResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getDo}.
             * @param error Error, if any
             * @param [response] GetDioPinResponse
             */
            type GetDoCallback = (error: (Error|null), response?: lebai.io.GetDioPinResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getDos}.
             * @param error Error, if any
             * @param [response] GetDioPinsResponse
             */
            type GetDosCallback = (error: (Error|null), response?: lebai.io.GetDioPinsResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#setDo}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetDoCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#setDos}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetDosCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getAi}.
             * @param error Error, if any
             * @param [response] GetAioPinResponse
             */
            type GetAiCallback = (error: (Error|null), response?: lebai.io.GetAioPinResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getAis}.
             * @param error Error, if any
             * @param [response] GetAioPinsResponse
             */
            type GetAisCallback = (error: (Error|null), response?: lebai.io.GetAioPinsResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getAo}.
             * @param error Error, if any
             * @param [response] GetAioPinResponse
             */
            type GetAoCallback = (error: (Error|null), response?: lebai.io.GetAioPinResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#getAos}.
             * @param error Error, if any
             * @param [response] GetAioPinsResponse
             */
            type GetAosCallback = (error: (Error|null), response?: lebai.io.GetAioPinsResponse) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#setAo}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetAoCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#setAos}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetAosCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#enableButton}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EnableButtonCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#disableButton}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DisableButtonCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.io.IoService#subButtonsStatus}.
             * @param error Error, if any
             * @param [response] ButtonsStatus
             */
            type SubButtonsStatusCallback = (error: (Error|null), response?: lebai.io.ButtonsStatus) => void;
        }
    }

    /** Namespace kinematic. */
    namespace kinematic {

        /** Properties of a DhParam. */
        interface IDhParam {

            /** DhParam a */
            a?: (number|null);

            /** DhParam alpha */
            alpha?: (number|null);

            /** DhParam d */
            d?: (number|null);

            /** DhParam theta */
            theta?: (number|null);
        }

        /** Represents a DhParam. */
        class DhParam implements IDhParam {

            /**
             * Constructs a new DhParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.IDhParam);

            /** DhParam a. */
            public a: number;

            /** DhParam alpha. */
            public alpha: number;

            /** DhParam d. */
            public d: number;

            /** DhParam theta. */
            public theta: number;

            /**
             * Creates a new DhParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DhParam instance
             */
            public static create(properties?: lebai.kinematic.IDhParam): lebai.kinematic.DhParam;

            /**
             * Encodes the specified DhParam message. Does not implicitly {@link lebai.kinematic.DhParam.verify|verify} messages.
             * @param message DhParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.IDhParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DhParam message, length delimited. Does not implicitly {@link lebai.kinematic.DhParam.verify|verify} messages.
             * @param message DhParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.IDhParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DhParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DhParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.DhParam;

            /**
             * Decodes a DhParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DhParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.DhParam;

            /**
             * Verifies a DhParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DhParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DhParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.DhParam;

            /**
             * Creates a plain object from a DhParam message. Also converts values to other types if specified.
             * @param message DhParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.DhParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DhParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DhParams. */
        interface IDhParams {

            /** DhParams params */
            params?: (lebai.kinematic.IDhParam[]|null);
        }

        /** Represents a DhParams. */
        class DhParams implements IDhParams {

            /**
             * Constructs a new DhParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.IDhParams);

            /** DhParams params. */
            public params: lebai.kinematic.IDhParam[];

            /**
             * Creates a new DhParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DhParams instance
             */
            public static create(properties?: lebai.kinematic.IDhParams): lebai.kinematic.DhParams;

            /**
             * Encodes the specified DhParams message. Does not implicitly {@link lebai.kinematic.DhParams.verify|verify} messages.
             * @param message DhParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.IDhParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DhParams message, length delimited. Does not implicitly {@link lebai.kinematic.DhParams.verify|verify} messages.
             * @param message DhParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.IDhParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DhParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DhParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.DhParams;

            /**
             * Decodes a DhParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DhParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.DhParams;

            /**
             * Verifies a DhParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DhParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DhParams
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.DhParams;

            /**
             * Creates a plain object from a DhParams message. Also converts values to other types if specified.
             * @param message DhParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.DhParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DhParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KinFactor. */
        interface IKinFactor {

            /** KinFactor speedFactor */
            speedFactor?: (number|null);
        }

        /** Represents a KinFactor. */
        class KinFactor implements IKinFactor {

            /**
             * Constructs a new KinFactor.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.IKinFactor);

            /** KinFactor speedFactor. */
            public speedFactor: number;

            /**
             * Creates a new KinFactor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KinFactor instance
             */
            public static create(properties?: lebai.kinematic.IKinFactor): lebai.kinematic.KinFactor;

            /**
             * Encodes the specified KinFactor message. Does not implicitly {@link lebai.kinematic.KinFactor.verify|verify} messages.
             * @param message KinFactor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.IKinFactor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KinFactor message, length delimited. Does not implicitly {@link lebai.kinematic.KinFactor.verify|verify} messages.
             * @param message KinFactor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.IKinFactor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KinFactor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KinFactor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.KinFactor;

            /**
             * Decodes a KinFactor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KinFactor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.KinFactor;

            /**
             * Verifies a KinFactor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KinFactor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KinFactor
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.KinFactor;

            /**
             * Creates a plain object from a KinFactor message. Also converts values to other types if specified.
             * @param message KinFactor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.KinFactor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KinFactor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KinData. */
        interface IKinData {

            /** KinData actualJointPose */
            actualJointPose?: (number[]|null);

            /** KinData actualJointSpeed */
            actualJointSpeed?: (number[]|null);

            /** KinData actualJointAcc */
            actualJointAcc?: (number[]|null);

            /** KinData actualJointTorque */
            actualJointTorque?: (number[]|null);

            /** KinData targetJointPose */
            targetJointPose?: (number[]|null);

            /** KinData targetJointSpeed */
            targetJointSpeed?: (number[]|null);

            /** KinData targetJointAcc */
            targetJointAcc?: (number[]|null);

            /** KinData targetJointTorque */
            targetJointTorque?: (number[]|null);

            /** KinData actualTcpPose */
            actualTcpPose?: (lebai.posture.ICartesianPose|null);

            /** KinData targetTcpPose */
            targetTcpPose?: (lebai.posture.ICartesianPose|null);

            /** KinData actualFlangePose */
            actualFlangePose?: (lebai.posture.ICartesianPose|null);
        }

        /** Represents a KinData. */
        class KinData implements IKinData {

            /**
             * Constructs a new KinData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.IKinData);

            /** KinData actualJointPose. */
            public actualJointPose: number[];

            /** KinData actualJointSpeed. */
            public actualJointSpeed: number[];

            /** KinData actualJointAcc. */
            public actualJointAcc: number[];

            /** KinData actualJointTorque. */
            public actualJointTorque: number[];

            /** KinData targetJointPose. */
            public targetJointPose: number[];

            /** KinData targetJointSpeed. */
            public targetJointSpeed: number[];

            /** KinData targetJointAcc. */
            public targetJointAcc: number[];

            /** KinData targetJointTorque. */
            public targetJointTorque: number[];

            /** KinData actualTcpPose. */
            public actualTcpPose?: (lebai.posture.ICartesianPose|null);

            /** KinData targetTcpPose. */
            public targetTcpPose?: (lebai.posture.ICartesianPose|null);

            /** KinData actualFlangePose. */
            public actualFlangePose?: (lebai.posture.ICartesianPose|null);

            /**
             * Creates a new KinData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KinData instance
             */
            public static create(properties?: lebai.kinematic.IKinData): lebai.kinematic.KinData;

            /**
             * Encodes the specified KinData message. Does not implicitly {@link lebai.kinematic.KinData.verify|verify} messages.
             * @param message KinData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.IKinData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KinData message, length delimited. Does not implicitly {@link lebai.kinematic.KinData.verify|verify} messages.
             * @param message KinData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.IKinData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KinData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KinData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.KinData;

            /**
             * Decodes a KinData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KinData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.KinData;

            /**
             * Verifies a KinData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KinData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KinData
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.KinData;

            /**
             * Creates a plain object from a KinData message. Also converts values to other types if specified.
             * @param message KinData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.KinData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KinData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveTcpRequest. */
        interface ISaveTcpRequest {

            /** SaveTcpRequest name */
            name?: (string|null);

            /** SaveTcpRequest data */
            data?: (lebai.posture.ICartesianPose|null);

            /** SaveTcpRequest dir */
            dir?: (string|null);
        }

        /** Represents a SaveTcpRequest. */
        class SaveTcpRequest implements ISaveTcpRequest {

            /**
             * Constructs a new SaveTcpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.ISaveTcpRequest);

            /** SaveTcpRequest name. */
            public name: string;

            /** SaveTcpRequest data. */
            public data?: (lebai.posture.ICartesianPose|null);

            /** SaveTcpRequest dir. */
            public dir: string;

            /**
             * Creates a new SaveTcpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTcpRequest instance
             */
            public static create(properties?: lebai.kinematic.ISaveTcpRequest): lebai.kinematic.SaveTcpRequest;

            /**
             * Encodes the specified SaveTcpRequest message. Does not implicitly {@link lebai.kinematic.SaveTcpRequest.verify|verify} messages.
             * @param message SaveTcpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.ISaveTcpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTcpRequest message, length delimited. Does not implicitly {@link lebai.kinematic.SaveTcpRequest.verify|verify} messages.
             * @param message SaveTcpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.ISaveTcpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTcpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTcpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.SaveTcpRequest;

            /**
             * Decodes a SaveTcpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTcpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.SaveTcpRequest;

            /**
             * Verifies a SaveTcpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTcpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTcpRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.SaveTcpRequest;

            /**
             * Creates a plain object from a SaveTcpRequest message. Also converts values to other types if specified.
             * @param message SaveTcpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.SaveTcpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTcpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CalcFrameRequest. */
        interface ICalcFrameRequest {

            /** CalcFrameRequest o */
            o?: (lebai.posture.ICartesianPose|null);

            /** CalcFrameRequest x */
            x?: (lebai.posture.ICartesianPose|null);

            /** CalcFrameRequest xy */
            xy?: (lebai.posture.ICartesianPose|null);
        }

        /** Represents a CalcFrameRequest. */
        class CalcFrameRequest implements ICalcFrameRequest {

            /**
             * Constructs a new CalcFrameRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.ICalcFrameRequest);

            /** CalcFrameRequest o. */
            public o?: (lebai.posture.ICartesianPose|null);

            /** CalcFrameRequest x. */
            public x?: (lebai.posture.ICartesianPose|null);

            /** CalcFrameRequest xy. */
            public xy?: (lebai.posture.ICartesianPose|null);

            /**
             * Creates a new CalcFrameRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CalcFrameRequest instance
             */
            public static create(properties?: lebai.kinematic.ICalcFrameRequest): lebai.kinematic.CalcFrameRequest;

            /**
             * Encodes the specified CalcFrameRequest message. Does not implicitly {@link lebai.kinematic.CalcFrameRequest.verify|verify} messages.
             * @param message CalcFrameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.ICalcFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CalcFrameRequest message, length delimited. Does not implicitly {@link lebai.kinematic.CalcFrameRequest.verify|verify} messages.
             * @param message CalcFrameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.ICalcFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CalcFrameRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CalcFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.CalcFrameRequest;

            /**
             * Decodes a CalcFrameRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CalcFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.CalcFrameRequest;

            /**
             * Verifies a CalcFrameRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CalcFrameRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CalcFrameRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.CalcFrameRequest;

            /**
             * Creates a plain object from a CalcFrameRequest message. Also converts values to other types if specified.
             * @param message CalcFrameRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.CalcFrameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CalcFrameRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CalcTcpRequest. */
        interface ICalcTcpRequest {

            /** CalcTcpRequest poses */
            poses?: (lebai.posture.ICartesianPose[]|null);
        }

        /** Represents a CalcTcpRequest. */
        class CalcTcpRequest implements ICalcTcpRequest {

            /**
             * Constructs a new CalcTcpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.kinematic.ICalcTcpRequest);

            /** CalcTcpRequest poses. */
            public poses: lebai.posture.ICartesianPose[];

            /**
             * Creates a new CalcTcpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CalcTcpRequest instance
             */
            public static create(properties?: lebai.kinematic.ICalcTcpRequest): lebai.kinematic.CalcTcpRequest;

            /**
             * Encodes the specified CalcTcpRequest message. Does not implicitly {@link lebai.kinematic.CalcTcpRequest.verify|verify} messages.
             * @param message CalcTcpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.kinematic.ICalcTcpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CalcTcpRequest message, length delimited. Does not implicitly {@link lebai.kinematic.CalcTcpRequest.verify|verify} messages.
             * @param message CalcTcpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.kinematic.ICalcTcpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CalcTcpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CalcTcpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.kinematic.CalcTcpRequest;

            /**
             * Decodes a CalcTcpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CalcTcpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.kinematic.CalcTcpRequest;

            /**
             * Verifies a CalcTcpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CalcTcpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CalcTcpRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.kinematic.CalcTcpRequest;

            /**
             * Creates a plain object from a CalcTcpRequest message. Also converts values to other types if specified.
             * @param message CalcTcpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.kinematic.CalcTcpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CalcTcpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a KinematicService */
        class KinematicService extends $protobuf.rpc.Service {

            /**
             * Constructs a new KinematicService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new KinematicService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): KinematicService;

            /**
             * Calls SaveTcp.
             * @param request SaveTcpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveTcp(request: lebai.kinematic.ISaveTcpRequest, callback: lebai.kinematic.KinematicService.SaveTcpCallback): void;

            /**
             * Calls SaveTcp.
             * @param request SaveTcpRequest message or plain object
             * @returns Promise
             */
            public saveTcp(request: lebai.kinematic.ISaveTcpRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadTcp.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public loadTcp(request: lebai.db.ILoadRequest, callback: lebai.kinematic.KinematicService.LoadTcpCallback): void;

            /**
             * Calls LoadTcp.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadTcp(request: lebai.db.ILoadRequest): Promise<lebai.posture.CartesianPose>;

            /**
             * Calls LoadTcpList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadTcpList(request: lebai.db.ILoadListRequest, callback: lebai.kinematic.KinematicService.LoadTcpListCallback): void;

            /**
             * Calls LoadTcpList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadTcpList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls SetDh.
             * @param request DhParams message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setDh(request: lebai.kinematic.IDhParams, callback: lebai.kinematic.KinematicService.SetDhCallback): void;

            /**
             * Calls SetDh.
             * @param request DhParams message or plain object
             * @returns Promise
             */
            public setDh(request: lebai.kinematic.IDhParams): Promise<google.protobuf.Empty>;

            /**
             * Calls GetDh.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and DhParams
             */
            public getDh(request: google.protobuf.IEmpty, callback: lebai.kinematic.KinematicService.GetDhCallback): void;

            /**
             * Calls GetDh.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getDh(request: google.protobuf.IEmpty): Promise<lebai.kinematic.DhParams>;

            /**
             * Calls SetKinFactor.
             * @param request KinFactor message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setKinFactor(request: lebai.kinematic.IKinFactor, callback: lebai.kinematic.KinematicService.SetKinFactorCallback): void;

            /**
             * Calls SetKinFactor.
             * @param request KinFactor message or plain object
             * @returns Promise
             */
            public setKinFactor(request: lebai.kinematic.IKinFactor): Promise<google.protobuf.Empty>;

            /**
             * Calls GetKinFactor.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and KinFactor
             */
            public getKinFactor(request: google.protobuf.IEmpty, callback: lebai.kinematic.KinematicService.GetKinFactorCallback): void;

            /**
             * Calls GetKinFactor.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getKinFactor(request: google.protobuf.IEmpty): Promise<lebai.kinematic.KinFactor>;

            /**
             * Calls GetKinData.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and KinData
             */
            public getKinData(request: google.protobuf.IEmpty, callback: lebai.kinematic.KinematicService.GetKinDataCallback): void;

            /**
             * Calls GetKinData.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getKinData(request: google.protobuf.IEmpty): Promise<lebai.kinematic.KinData>;

            /**
             * Calls SubKinData.
             * @param request SubscribeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and KinData
             */
            public subKinData(request: lebai.ISubscribeRequest, callback: lebai.kinematic.KinematicService.SubKinDataCallback): void;

            /**
             * Calls SubKinData.
             * @param request SubscribeRequest message or plain object
             * @returns Promise
             */
            public subKinData(request: lebai.ISubscribeRequest): Promise<lebai.kinematic.KinData>;

            /**
             * Calls CalcFrame.
             * @param request CalcFrameRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public calcFrame(request: lebai.kinematic.ICalcFrameRequest, callback: lebai.kinematic.KinematicService.CalcFrameCallback): void;

            /**
             * Calls CalcFrame.
             * @param request CalcFrameRequest message or plain object
             * @returns Promise
             */
            public calcFrame(request: lebai.kinematic.ICalcFrameRequest): Promise<lebai.posture.CartesianPose>;

            /**
             * Calls CalcTcp.
             * @param request CalcTcpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public calcTcp(request: lebai.kinematic.ICalcTcpRequest, callback: lebai.kinematic.KinematicService.CalcTcpCallback): void;

            /**
             * Calls CalcTcp.
             * @param request CalcTcpRequest message or plain object
             * @returns Promise
             */
            public calcTcp(request: lebai.kinematic.ICalcTcpRequest): Promise<lebai.posture.CartesianPose>;

            /**
             * Calls SetTcp.
             * @param request CartesianPose message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setTcp(request: lebai.posture.ICartesianPose, callback: lebai.kinematic.KinematicService.SetTcpCallback): void;

            /**
             * Calls SetTcp.
             * @param request CartesianPose message or plain object
             * @returns Promise
             */
            public setTcp(request: lebai.posture.ICartesianPose): Promise<google.protobuf.Empty>;

            /**
             * Calls GetTcp.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianPose
             */
            public getTcp(request: google.protobuf.IEmpty, callback: lebai.kinematic.KinematicService.GetTcpCallback): void;

            /**
             * Calls GetTcp.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getTcp(request: google.protobuf.IEmpty): Promise<lebai.posture.CartesianPose>;
        }

        namespace KinematicService {

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#saveTcp}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveTcpCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#loadTcp}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type LoadTcpCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#loadTcpList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadTcpListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#setDh}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetDhCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#getDh}.
             * @param error Error, if any
             * @param [response] DhParams
             */
            type GetDhCallback = (error: (Error|null), response?: lebai.kinematic.DhParams) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#setKinFactor}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetKinFactorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#getKinFactor}.
             * @param error Error, if any
             * @param [response] KinFactor
             */
            type GetKinFactorCallback = (error: (Error|null), response?: lebai.kinematic.KinFactor) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#getKinData}.
             * @param error Error, if any
             * @param [response] KinData
             */
            type GetKinDataCallback = (error: (Error|null), response?: lebai.kinematic.KinData) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#subKinData}.
             * @param error Error, if any
             * @param [response] KinData
             */
            type SubKinDataCallback = (error: (Error|null), response?: lebai.kinematic.KinData) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#calcFrame}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type CalcFrameCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#calcTcp}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type CalcTcpCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#setTcp}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetTcpCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.kinematic.KinematicService#getTcp}.
             * @param error Error, if any
             * @param [response] CartesianPose
             */
            type GetTcpCallback = (error: (Error|null), response?: lebai.posture.CartesianPose) => void;
        }
    }

    /** Namespace led. */
    namespace led {

        /** LedMode enum. */
        enum LedMode {
            HOLD_LED = 0,
            CLOSE_LED = 1,
            OPEN_LED = 2,
            BREATH = 3,
            FOUR = 4,
            WATER = 5,
            BLINK = 6
        }

        /** LedSpeed enum. */
        enum LedSpeed {
            HOLD_LED_SPEED = 0,
            FAST = 1,
            NORMAL = 2,
            SLOW = 3
        }

        /** LedColor enum. */
        enum LedColor {
            RED = 0,
            GREEN = 1,
            BLUE = 2,
            PINK = 3,
            YELLOW = 4,
            CYAN = 5,
            GRAY = 6,
            BROWN = 7,
            ORANGE = 8,
            GOLD = 9,
            INDIGO = 10,
            LIGHT_SKY_BLUE = 11,
            DARK_VIOLET = 12,
            CHOCOLATE = 13,
            LIGHT_RED = 14,
            WHITE = 15
        }

        /** Properties of a LedData. */
        interface ILedData {

            /** LedData mode */
            mode?: (lebai.led.LedMode|null);

            /** LedData speed */
            speed?: (lebai.led.LedSpeed|null);

            /** LedData colors */
            colors?: (lebai.led.LedColor[]|null);
        }

        /** Represents a LedData. */
        class LedData implements ILedData {

            /**
             * Constructs a new LedData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.ILedData);

            /** LedData mode. */
            public mode: lebai.led.LedMode;

            /** LedData speed. */
            public speed: lebai.led.LedSpeed;

            /** LedData colors. */
            public colors: lebai.led.LedColor[];

            /**
             * Creates a new LedData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LedData instance
             */
            public static create(properties?: lebai.led.ILedData): lebai.led.LedData;

            /**
             * Encodes the specified LedData message. Does not implicitly {@link lebai.led.LedData.verify|verify} messages.
             * @param message LedData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.ILedData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LedData message, length delimited. Does not implicitly {@link lebai.led.LedData.verify|verify} messages.
             * @param message LedData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.ILedData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LedData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.LedData;

            /**
             * Decodes a LedData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LedData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.LedData;

            /**
             * Verifies a LedData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LedData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LedData
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.LedData;

            /**
             * Creates a plain object from a LedData message. Also converts values to other types if specified.
             * @param message LedData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.LedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LedData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FanMode enum. */
        enum FanMode {
            HOLD_FAN = 0,
            CLOSE_FAN = 1,
            OPEN_FAN = 2
        }

        /** Properties of a FanData. */
        interface IFanData {

            /** FanData mode */
            mode?: (lebai.led.FanMode|null);
        }

        /** Represents a FanData. */
        class FanData implements IFanData {

            /**
             * Constructs a new FanData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.IFanData);

            /** FanData mode. */
            public mode: lebai.led.FanMode;

            /**
             * Creates a new FanData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FanData instance
             */
            public static create(properties?: lebai.led.IFanData): lebai.led.FanData;

            /**
             * Encodes the specified FanData message. Does not implicitly {@link lebai.led.FanData.verify|verify} messages.
             * @param message FanData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.IFanData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FanData message, length delimited. Does not implicitly {@link lebai.led.FanData.verify|verify} messages.
             * @param message FanData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.IFanData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FanData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FanData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.FanData;

            /**
             * Decodes a FanData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FanData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.FanData;

            /**
             * Verifies a FanData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FanData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FanData
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.FanData;

            /**
             * Creates a plain object from a FanData message. Also converts values to other types if specified.
             * @param message FanData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.FanData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FanData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** VoiceKind enum. */
        enum VoiceKind {
            OFF = 0,
            BOOTING = 1,
            STOPING = 2,
            COLLISION_DETECTED = 3,
            UPGRADE = 4,
            TEACH_MODE_ON = 5,
            TEACH_MODE_OFF = 6,
            FINE_TUNNING_ON = 7,
            FINE_TUNNING_OFF = 8,
            FINE_TUNNING_CHANGE = 9,
            BORING = 10,
            CUSTOM1 = 11,
            CUSTOM2 = 12,
            CUSTOM3 = 13,
            CUSTOM4 = 14,
            CUSTOM5 = 15
        }

        /** Volume enum. */
        enum Volume {
            MUTE = 0,
            LOW = 1,
            MID = 2,
            HIGH = 3
        }

        /** Properties of a VoiceData. */
        interface IVoiceData {

            /** VoiceData voice */
            voice?: (lebai.led.VoiceKind|null);

            /** VoiceData volume */
            volume?: (lebai.led.Volume|null);
        }

        /** Represents a VoiceData. */
        class VoiceData implements IVoiceData {

            /**
             * Constructs a new VoiceData.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.IVoiceData);

            /** VoiceData voice. */
            public voice: lebai.led.VoiceKind;

            /** VoiceData volume. */
            public volume: lebai.led.Volume;

            /**
             * Creates a new VoiceData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VoiceData instance
             */
            public static create(properties?: lebai.led.IVoiceData): lebai.led.VoiceData;

            /**
             * Encodes the specified VoiceData message. Does not implicitly {@link lebai.led.VoiceData.verify|verify} messages.
             * @param message VoiceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.IVoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified VoiceData message, length delimited. Does not implicitly {@link lebai.led.VoiceData.verify|verify} messages.
             * @param message VoiceData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.IVoiceData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VoiceData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VoiceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.VoiceData;

            /**
             * Decodes a VoiceData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VoiceData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.VoiceData;

            /**
             * Verifies a VoiceData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a VoiceData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns VoiceData
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.VoiceData;

            /**
             * Creates a plain object from a VoiceData message. Also converts values to other types if specified.
             * @param message VoiceData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.VoiceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this VoiceData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LedStyle. */
        interface ILedStyle {

            /** LedStyle led */
            led?: (lebai.led.ILedData|null);

            /** LedStyle voice */
            voice?: (lebai.led.VoiceKind|null);

            /** LedStyle volume */
            volume?: (lebai.led.Volume|null);
        }

        /** Represents a LedStyle. */
        class LedStyle implements ILedStyle {

            /**
             * Constructs a new LedStyle.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.ILedStyle);

            /** LedStyle led. */
            public led?: (lebai.led.ILedData|null);

            /** LedStyle voice. */
            public voice: lebai.led.VoiceKind;

            /** LedStyle volume. */
            public volume: lebai.led.Volume;

            /**
             * Creates a new LedStyle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LedStyle instance
             */
            public static create(properties?: lebai.led.ILedStyle): lebai.led.LedStyle;

            /**
             * Encodes the specified LedStyle message. Does not implicitly {@link lebai.led.LedStyle.verify|verify} messages.
             * @param message LedStyle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.ILedStyle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LedStyle message, length delimited. Does not implicitly {@link lebai.led.LedStyle.verify|verify} messages.
             * @param message LedStyle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.ILedStyle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LedStyle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LedStyle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.LedStyle;

            /**
             * Decodes a LedStyle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LedStyle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.LedStyle;

            /**
             * Verifies a LedStyle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LedStyle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LedStyle
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.LedStyle;

            /**
             * Creates a plain object from a LedStyle message. Also converts values to other types if specified.
             * @param message LedStyle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.LedStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LedStyle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveLedStyleRequest. */
        interface ISaveLedStyleRequest {

            /** SaveLedStyleRequest name */
            name?: (string|null);

            /** SaveLedStyleRequest data */
            data?: (lebai.led.ILedStyle|null);

            /** SaveLedStyleRequest dir */
            dir?: (string|null);
        }

        /** Represents a SaveLedStyleRequest. */
        class SaveLedStyleRequest implements ISaveLedStyleRequest {

            /**
             * Constructs a new SaveLedStyleRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.ISaveLedStyleRequest);

            /** SaveLedStyleRequest name. */
            public name: string;

            /** SaveLedStyleRequest data. */
            public data?: (lebai.led.ILedStyle|null);

            /** SaveLedStyleRequest dir. */
            public dir: string;

            /**
             * Creates a new SaveLedStyleRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveLedStyleRequest instance
             */
            public static create(properties?: lebai.led.ISaveLedStyleRequest): lebai.led.SaveLedStyleRequest;

            /**
             * Encodes the specified SaveLedStyleRequest message. Does not implicitly {@link lebai.led.SaveLedStyleRequest.verify|verify} messages.
             * @param message SaveLedStyleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.ISaveLedStyleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveLedStyleRequest message, length delimited. Does not implicitly {@link lebai.led.SaveLedStyleRequest.verify|verify} messages.
             * @param message SaveLedStyleRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.ISaveLedStyleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveLedStyleRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveLedStyleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.SaveLedStyleRequest;

            /**
             * Decodes a SaveLedStyleRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveLedStyleRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.SaveLedStyleRequest;

            /**
             * Verifies a SaveLedStyleRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveLedStyleRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveLedStyleRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.SaveLedStyleRequest;

            /**
             * Creates a plain object from a SaveLedStyleRequest message. Also converts values to other types if specified.
             * @param message SaveLedStyleRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.SaveLedStyleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveLedStyleRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LedStyleItem. */
        interface ILedStyleItem {

            /** LedStyleItem state */
            state?: (lebai.system.RobotState|null);

            /** LedStyleItem style */
            style?: (lebai.led.ILedStyle|null);
        }

        /** Represents a LedStyleItem. */
        class LedStyleItem implements ILedStyleItem {

            /**
             * Constructs a new LedStyleItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.ILedStyleItem);

            /** LedStyleItem state. */
            public state: lebai.system.RobotState;

            /** LedStyleItem style. */
            public style?: (lebai.led.ILedStyle|null);

            /**
             * Creates a new LedStyleItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LedStyleItem instance
             */
            public static create(properties?: lebai.led.ILedStyleItem): lebai.led.LedStyleItem;

            /**
             * Encodes the specified LedStyleItem message. Does not implicitly {@link lebai.led.LedStyleItem.verify|verify} messages.
             * @param message LedStyleItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.ILedStyleItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LedStyleItem message, length delimited. Does not implicitly {@link lebai.led.LedStyleItem.verify|verify} messages.
             * @param message LedStyleItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.ILedStyleItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LedStyleItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LedStyleItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.LedStyleItem;

            /**
             * Decodes a LedStyleItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LedStyleItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.LedStyleItem;

            /**
             * Verifies a LedStyleItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LedStyleItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LedStyleItem
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.LedStyleItem;

            /**
             * Creates a plain object from a LedStyleItem message. Also converts values to other types if specified.
             * @param message LedStyleItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.LedStyleItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LedStyleItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LedStyles. */
        interface ILedStyles {

            /** LedStyles styles */
            styles?: ({ [k: string]: lebai.led.ILedStyle }|null);
        }

        /** Represents a LedStyles. */
        class LedStyles implements ILedStyles {

            /**
             * Constructs a new LedStyles.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.led.ILedStyles);

            /** LedStyles styles. */
            public styles: { [k: string]: lebai.led.ILedStyle };

            /**
             * Creates a new LedStyles instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LedStyles instance
             */
            public static create(properties?: lebai.led.ILedStyles): lebai.led.LedStyles;

            /**
             * Encodes the specified LedStyles message. Does not implicitly {@link lebai.led.LedStyles.verify|verify} messages.
             * @param message LedStyles message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.led.ILedStyles, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LedStyles message, length delimited. Does not implicitly {@link lebai.led.LedStyles.verify|verify} messages.
             * @param message LedStyles message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.led.ILedStyles, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LedStyles message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LedStyles
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.led.LedStyles;

            /**
             * Decodes a LedStyles message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LedStyles
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.led.LedStyles;

            /**
             * Verifies a LedStyles message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LedStyles message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LedStyles
             */
            public static fromObject(object: { [k: string]: any }): lebai.led.LedStyles;

            /**
             * Creates a plain object from a LedStyles message. Also converts values to other types if specified.
             * @param message LedStyles
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.led.LedStyles, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LedStyles to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a LedService */
        class LedService extends $protobuf.rpc.Service {

            /**
             * Constructs a new LedService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new LedService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LedService;

            /**
             * Calls SaveLedStyle.
             * @param request SaveLedStyleRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveLedStyle(request: lebai.led.ISaveLedStyleRequest, callback: lebai.led.LedService.SaveLedStyleCallback): void;

            /**
             * Calls SaveLedStyle.
             * @param request SaveLedStyleRequest message or plain object
             * @returns Promise
             */
            public saveLedStyle(request: lebai.led.ISaveLedStyleRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadLedStyle.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LedStyle
             */
            public loadLedStyle(request: lebai.db.ILoadRequest, callback: lebai.led.LedService.LoadLedStyleCallback): void;

            /**
             * Calls LoadLedStyle.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadLedStyle(request: lebai.db.ILoadRequest): Promise<lebai.led.LedStyle>;

            /**
             * Calls LoadLedStyleList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadLedStyleList(request: lebai.db.ILoadListRequest, callback: lebai.led.LedService.LoadLedStyleListCallback): void;

            /**
             * Calls LoadLedStyleList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadLedStyleList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls SetLedStyle.
             * @param request LedStyleItem message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setLedStyle(request: lebai.led.ILedStyleItem, callback: lebai.led.LedService.SetLedStyleCallback): void;

            /**
             * Calls SetLedStyle.
             * @param request LedStyleItem message or plain object
             * @returns Promise
             */
            public setLedStyle(request: lebai.led.ILedStyleItem): Promise<google.protobuf.Empty>;

            /**
             * Calls SetLedStyles.
             * @param request LedStyles message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setLedStyles(request: lebai.led.ILedStyles, callback: lebai.led.LedService.SetLedStylesCallback): void;

            /**
             * Calls SetLedStyles.
             * @param request LedStyles message or plain object
             * @returns Promise
             */
            public setLedStyles(request: lebai.led.ILedStyles): Promise<google.protobuf.Empty>;

            /**
             * Calls GetLedStyles.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and LedStyles
             */
            public getLedStyles(request: google.protobuf.IEmpty, callback: lebai.led.LedService.GetLedStylesCallback): void;

            /**
             * Calls GetLedStyles.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getLedStyles(request: google.protobuf.IEmpty): Promise<lebai.led.LedStyles>;

            /**
             * Calls SetLed.
             * @param request LedData message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setLed(request: lebai.led.ILedData, callback: lebai.led.LedService.SetLedCallback): void;

            /**
             * Calls SetLed.
             * @param request LedData message or plain object
             * @returns Promise
             */
            public setLed(request: lebai.led.ILedData): Promise<google.protobuf.Empty>;

            /**
             * Calls SetVoice.
             * @param request VoiceData message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setVoice(request: lebai.led.IVoiceData, callback: lebai.led.LedService.SetVoiceCallback): void;

            /**
             * Calls SetVoice.
             * @param request VoiceData message or plain object
             * @returns Promise
             */
            public setVoice(request: lebai.led.IVoiceData): Promise<google.protobuf.Empty>;

            /**
             * Calls SetFan.
             * @param request FanData message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setFan(request: lebai.led.IFanData, callback: lebai.led.LedService.SetFanCallback): void;

            /**
             * Calls SetFan.
             * @param request FanData message or plain object
             * @returns Promise
             */
            public setFan(request: lebai.led.IFanData): Promise<google.protobuf.Empty>;
        }

        namespace LedService {

            /**
             * Callback as used by {@link lebai.led.LedService#saveLedStyle}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveLedStyleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#loadLedStyle}.
             * @param error Error, if any
             * @param [response] LedStyle
             */
            type LoadLedStyleCallback = (error: (Error|null), response?: lebai.led.LedStyle) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#loadLedStyleList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadLedStyleListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#setLedStyle}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetLedStyleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#setLedStyles}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetLedStylesCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#getLedStyles}.
             * @param error Error, if any
             * @param [response] LedStyles
             */
            type GetLedStylesCallback = (error: (Error|null), response?: lebai.led.LedStyles) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#setLed}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetLedCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#setVoice}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetVoiceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.led.LedService#setFan}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetFanCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace modbus. */
    namespace modbus {

        /** ModbusKind enum. */
        enum ModbusKind {
            ROBOT = 0,
            FLANGE = 1,
            EXTRA = 2,
            MODBUS_FLANGE = 3,
            MODBUS_RTU = 4,
            MODBUS_TCP = 5
        }

        /** Properties of a Modbus. */
        interface IModbus {

            /** Modbus kind */
            kind?: (lebai.modbus.ModbusKind|null);

            /** Modbus address */
            address?: (string|null);

            /** Modbus port */
            port?: (number|null);

            /** Modbus slaveId */
            slaveId?: (number|null);
        }

        /** Represents a Modbus. */
        class Modbus implements IModbus {

            /**
             * Constructs a new Modbus.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IModbus);

            /** Modbus kind. */
            public kind: lebai.modbus.ModbusKind;

            /** Modbus address. */
            public address: string;

            /** Modbus port. */
            public port: number;

            /** Modbus slaveId. */
            public slaveId: number;

            /**
             * Creates a new Modbus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Modbus instance
             */
            public static create(properties?: lebai.modbus.IModbus): lebai.modbus.Modbus;

            /**
             * Encodes the specified Modbus message. Does not implicitly {@link lebai.modbus.Modbus.verify|verify} messages.
             * @param message Modbus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IModbus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Modbus message, length delimited. Does not implicitly {@link lebai.modbus.Modbus.verify|verify} messages.
             * @param message Modbus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IModbus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Modbus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Modbus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.Modbus;

            /**
             * Decodes a Modbus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Modbus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.Modbus;

            /**
             * Verifies a Modbus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Modbus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Modbus
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.Modbus;

            /**
             * Creates a plain object from a Modbus message. Also converts values to other types if specified.
             * @param message Modbus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.Modbus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Modbus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveModbusRequest. */
        interface ISaveModbusRequest {

            /** SaveModbusRequest name */
            name?: (string|null);

            /** SaveModbusRequest data */
            data?: (lebai.modbus.IModbus|null);
        }

        /** Represents a SaveModbusRequest. */
        class SaveModbusRequest implements ISaveModbusRequest {

            /**
             * Constructs a new SaveModbusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISaveModbusRequest);

            /** SaveModbusRequest name. */
            public name: string;

            /** SaveModbusRequest data. */
            public data?: (lebai.modbus.IModbus|null);

            /**
             * Creates a new SaveModbusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveModbusRequest instance
             */
            public static create(properties?: lebai.modbus.ISaveModbusRequest): lebai.modbus.SaveModbusRequest;

            /**
             * Encodes the specified SaveModbusRequest message. Does not implicitly {@link lebai.modbus.SaveModbusRequest.verify|verify} messages.
             * @param message SaveModbusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISaveModbusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveModbusRequest message, length delimited. Does not implicitly {@link lebai.modbus.SaveModbusRequest.verify|verify} messages.
             * @param message SaveModbusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISaveModbusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveModbusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveModbusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SaveModbusRequest;

            /**
             * Decodes a SaveModbusRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveModbusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SaveModbusRequest;

            /**
             * Verifies a SaveModbusRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveModbusRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveModbusRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SaveModbusRequest;

            /**
             * Creates a plain object from a SaveModbusRequest message. Also converts values to other types if specified.
             * @param message SaveModbusRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SaveModbusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveModbusRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ModbusRegisterKind enum. */
        enum ModbusRegisterKind {
            DISCRETE_INPUT = 0,
            COIL = 1,
            INPUT_REGISTER = 2,
            HOLDING_REGISTER = 3
        }

        /** Properties of a ModbusRegister. */
        interface IModbusRegister {

            /** ModbusRegister kind */
            kind?: (lebai.modbus.ModbusRegisterKind|null);

            /** ModbusRegister address */
            address?: (number|null);
        }

        /** Represents a ModbusRegister. */
        class ModbusRegister implements IModbusRegister {

            /**
             * Constructs a new ModbusRegister.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IModbusRegister);

            /** ModbusRegister kind. */
            public kind: lebai.modbus.ModbusRegisterKind;

            /** ModbusRegister address. */
            public address: number;

            /**
             * Creates a new ModbusRegister instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModbusRegister instance
             */
            public static create(properties?: lebai.modbus.IModbusRegister): lebai.modbus.ModbusRegister;

            /**
             * Encodes the specified ModbusRegister message. Does not implicitly {@link lebai.modbus.ModbusRegister.verify|verify} messages.
             * @param message ModbusRegister message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IModbusRegister, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModbusRegister message, length delimited. Does not implicitly {@link lebai.modbus.ModbusRegister.verify|verify} messages.
             * @param message ModbusRegister message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IModbusRegister, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModbusRegister message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModbusRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.ModbusRegister;

            /**
             * Decodes a ModbusRegister message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModbusRegister
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.ModbusRegister;

            /**
             * Verifies a ModbusRegister message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModbusRegister message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModbusRegister
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.ModbusRegister;

            /**
             * Creates a plain object from a ModbusRegister message. Also converts values to other types if specified.
             * @param message ModbusRegister
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.ModbusRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModbusRegister to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveModbusRegisterRequest. */
        interface ISaveModbusRegisterRequest {

            /** SaveModbusRegisterRequest device */
            device?: (string|null);

            /** SaveModbusRegisterRequest name */
            name?: (string|null);

            /** SaveModbusRegisterRequest data */
            data?: (lebai.modbus.IModbusRegister|null);
        }

        /** Represents a SaveModbusRegisterRequest. */
        class SaveModbusRegisterRequest implements ISaveModbusRegisterRequest {

            /**
             * Constructs a new SaveModbusRegisterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISaveModbusRegisterRequest);

            /** SaveModbusRegisterRequest device. */
            public device: string;

            /** SaveModbusRegisterRequest name. */
            public name: string;

            /** SaveModbusRegisterRequest data. */
            public data?: (lebai.modbus.IModbusRegister|null);

            /**
             * Creates a new SaveModbusRegisterRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveModbusRegisterRequest instance
             */
            public static create(properties?: lebai.modbus.ISaveModbusRegisterRequest): lebai.modbus.SaveModbusRegisterRequest;

            /**
             * Encodes the specified SaveModbusRegisterRequest message. Does not implicitly {@link lebai.modbus.SaveModbusRegisterRequest.verify|verify} messages.
             * @param message SaveModbusRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISaveModbusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveModbusRegisterRequest message, length delimited. Does not implicitly {@link lebai.modbus.SaveModbusRegisterRequest.verify|verify} messages.
             * @param message SaveModbusRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISaveModbusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveModbusRegisterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveModbusRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SaveModbusRegisterRequest;

            /**
             * Decodes a SaveModbusRegisterRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveModbusRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SaveModbusRegisterRequest;

            /**
             * Verifies a SaveModbusRegisterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveModbusRegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveModbusRegisterRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SaveModbusRegisterRequest;

            /**
             * Creates a plain object from a SaveModbusRegisterRequest message. Also converts values to other types if specified.
             * @param message SaveModbusRegisterRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SaveModbusRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveModbusRegisterRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadModbusRegisterRequest. */
        interface ILoadModbusRegisterRequest {

            /** LoadModbusRegisterRequest device */
            device?: (string|null);

            /** LoadModbusRegisterRequest name */
            name?: (string|null);
        }

        /** Represents a LoadModbusRegisterRequest. */
        class LoadModbusRegisterRequest implements ILoadModbusRegisterRequest {

            /**
             * Constructs a new LoadModbusRegisterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ILoadModbusRegisterRequest);

            /** LoadModbusRegisterRequest device. */
            public device: string;

            /** LoadModbusRegisterRequest name. */
            public name: string;

            /**
             * Creates a new LoadModbusRegisterRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadModbusRegisterRequest instance
             */
            public static create(properties?: lebai.modbus.ILoadModbusRegisterRequest): lebai.modbus.LoadModbusRegisterRequest;

            /**
             * Encodes the specified LoadModbusRegisterRequest message. Does not implicitly {@link lebai.modbus.LoadModbusRegisterRequest.verify|verify} messages.
             * @param message LoadModbusRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ILoadModbusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadModbusRegisterRequest message, length delimited. Does not implicitly {@link lebai.modbus.LoadModbusRegisterRequest.verify|verify} messages.
             * @param message LoadModbusRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ILoadModbusRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadModbusRegisterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadModbusRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.LoadModbusRegisterRequest;

            /**
             * Decodes a LoadModbusRegisterRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadModbusRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.LoadModbusRegisterRequest;

            /**
             * Verifies a LoadModbusRegisterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadModbusRegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadModbusRegisterRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.LoadModbusRegisterRequest;

            /**
             * Creates a plain object from a LoadModbusRegisterRequest message. Also converts values to other types if specified.
             * @param message LoadModbusRegisterRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.LoadModbusRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadModbusRegisterRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoadModbusRegisterListRequest. */
        interface ILoadModbusRegisterListRequest {

            /** LoadModbusRegisterListRequest device */
            device?: (string|null);
        }

        /** Represents a LoadModbusRegisterListRequest. */
        class LoadModbusRegisterListRequest implements ILoadModbusRegisterListRequest {

            /**
             * Constructs a new LoadModbusRegisterListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ILoadModbusRegisterListRequest);

            /** LoadModbusRegisterListRequest device. */
            public device: string;

            /**
             * Creates a new LoadModbusRegisterListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadModbusRegisterListRequest instance
             */
            public static create(properties?: lebai.modbus.ILoadModbusRegisterListRequest): lebai.modbus.LoadModbusRegisterListRequest;

            /**
             * Encodes the specified LoadModbusRegisterListRequest message. Does not implicitly {@link lebai.modbus.LoadModbusRegisterListRequest.verify|verify} messages.
             * @param message LoadModbusRegisterListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ILoadModbusRegisterListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadModbusRegisterListRequest message, length delimited. Does not implicitly {@link lebai.modbus.LoadModbusRegisterListRequest.verify|verify} messages.
             * @param message LoadModbusRegisterListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ILoadModbusRegisterListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadModbusRegisterListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadModbusRegisterListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.LoadModbusRegisterListRequest;

            /**
             * Decodes a LoadModbusRegisterListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadModbusRegisterListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.LoadModbusRegisterListRequest;

            /**
             * Verifies a LoadModbusRegisterListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadModbusRegisterListRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadModbusRegisterListRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.LoadModbusRegisterListRequest;

            /**
             * Creates a plain object from a LoadModbusRegisterListRequest message. Also converts values to other types if specified.
             * @param message LoadModbusRegisterListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.LoadModbusRegisterListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadModbusRegisterListRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetCoilRequest. */
        interface ISetCoilRequest {

            /** SetCoilRequest device */
            device?: (string|null);

            /** SetCoilRequest pin */
            pin?: (string|null);

            /** SetCoilRequest value */
            value?: (boolean|null);
        }

        /** Represents a SetCoilRequest. */
        class SetCoilRequest implements ISetCoilRequest {

            /**
             * Constructs a new SetCoilRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISetCoilRequest);

            /** SetCoilRequest device. */
            public device: string;

            /** SetCoilRequest pin. */
            public pin: string;

            /** SetCoilRequest value. */
            public value: boolean;

            /**
             * Creates a new SetCoilRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetCoilRequest instance
             */
            public static create(properties?: lebai.modbus.ISetCoilRequest): lebai.modbus.SetCoilRequest;

            /**
             * Encodes the specified SetCoilRequest message. Does not implicitly {@link lebai.modbus.SetCoilRequest.verify|verify} messages.
             * @param message SetCoilRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISetCoilRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetCoilRequest message, length delimited. Does not implicitly {@link lebai.modbus.SetCoilRequest.verify|verify} messages.
             * @param message SetCoilRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISetCoilRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetCoilRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetCoilRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SetCoilRequest;

            /**
             * Decodes a SetCoilRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetCoilRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SetCoilRequest;

            /**
             * Verifies a SetCoilRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetCoilRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetCoilRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SetCoilRequest;

            /**
             * Creates a plain object from a SetCoilRequest message. Also converts values to other types if specified.
             * @param message SetCoilRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SetCoilRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetCoilRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetCoilsRequest. */
        interface ISetCoilsRequest {

            /** SetCoilsRequest device */
            device?: (string|null);

            /** SetCoilsRequest pin */
            pin?: (string|null);

            /** SetCoilsRequest values */
            values?: (boolean[]|null);
        }

        /** Represents a SetCoilsRequest. */
        class SetCoilsRequest implements ISetCoilsRequest {

            /**
             * Constructs a new SetCoilsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISetCoilsRequest);

            /** SetCoilsRequest device. */
            public device: string;

            /** SetCoilsRequest pin. */
            public pin: string;

            /** SetCoilsRequest values. */
            public values: boolean[];

            /**
             * Creates a new SetCoilsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetCoilsRequest instance
             */
            public static create(properties?: lebai.modbus.ISetCoilsRequest): lebai.modbus.SetCoilsRequest;

            /**
             * Encodes the specified SetCoilsRequest message. Does not implicitly {@link lebai.modbus.SetCoilsRequest.verify|verify} messages.
             * @param message SetCoilsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISetCoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetCoilsRequest message, length delimited. Does not implicitly {@link lebai.modbus.SetCoilsRequest.verify|verify} messages.
             * @param message SetCoilsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISetCoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetCoilsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetCoilsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SetCoilsRequest;

            /**
             * Decodes a SetCoilsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetCoilsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SetCoilsRequest;

            /**
             * Verifies a SetCoilsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetCoilsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetCoilsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SetCoilsRequest;

            /**
             * Creates a plain object from a SetCoilsRequest message. Also converts values to other types if specified.
             * @param message SetCoilsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SetCoilsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetCoilsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetCoilRequest. */
        interface IGetCoilRequest {

            /** GetCoilRequest device */
            device?: (string|null);

            /** GetCoilRequest pin */
            pin?: (string|null);
        }

        /** Represents a GetCoilRequest. */
        class GetCoilRequest implements IGetCoilRequest {

            /**
             * Constructs a new GetCoilRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetCoilRequest);

            /** GetCoilRequest device. */
            public device: string;

            /** GetCoilRequest pin. */
            public pin: string;

            /**
             * Creates a new GetCoilRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetCoilRequest instance
             */
            public static create(properties?: lebai.modbus.IGetCoilRequest): lebai.modbus.GetCoilRequest;

            /**
             * Encodes the specified GetCoilRequest message. Does not implicitly {@link lebai.modbus.GetCoilRequest.verify|verify} messages.
             * @param message GetCoilRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetCoilRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetCoilRequest message, length delimited. Does not implicitly {@link lebai.modbus.GetCoilRequest.verify|verify} messages.
             * @param message GetCoilRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetCoilRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetCoilRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetCoilRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetCoilRequest;

            /**
             * Decodes a GetCoilRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetCoilRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetCoilRequest;

            /**
             * Verifies a GetCoilRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetCoilRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetCoilRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetCoilRequest;

            /**
             * Creates a plain object from a GetCoilRequest message. Also converts values to other types if specified.
             * @param message GetCoilRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetCoilRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetCoilRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetCoilResponse. */
        interface IGetCoilResponse {

            /** GetCoilResponse value */
            value?: (boolean|null);
        }

        /** Represents a GetCoilResponse. */
        class GetCoilResponse implements IGetCoilResponse {

            /**
             * Constructs a new GetCoilResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetCoilResponse);

            /** GetCoilResponse value. */
            public value: boolean;

            /**
             * Creates a new GetCoilResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetCoilResponse instance
             */
            public static create(properties?: lebai.modbus.IGetCoilResponse): lebai.modbus.GetCoilResponse;

            /**
             * Encodes the specified GetCoilResponse message. Does not implicitly {@link lebai.modbus.GetCoilResponse.verify|verify} messages.
             * @param message GetCoilResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetCoilResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetCoilResponse message, length delimited. Does not implicitly {@link lebai.modbus.GetCoilResponse.verify|verify} messages.
             * @param message GetCoilResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetCoilResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetCoilResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetCoilResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetCoilResponse;

            /**
             * Decodes a GetCoilResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetCoilResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetCoilResponse;

            /**
             * Verifies a GetCoilResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetCoilResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetCoilResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetCoilResponse;

            /**
             * Creates a plain object from a GetCoilResponse message. Also converts values to other types if specified.
             * @param message GetCoilResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetCoilResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetCoilResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetCoilsRequest. */
        interface IGetCoilsRequest {

            /** GetCoilsRequest device */
            device?: (string|null);

            /** GetCoilsRequest pin */
            pin?: (string|null);

            /** GetCoilsRequest count */
            count?: (number|null);
        }

        /** Represents a GetCoilsRequest. */
        class GetCoilsRequest implements IGetCoilsRequest {

            /**
             * Constructs a new GetCoilsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetCoilsRequest);

            /** GetCoilsRequest device. */
            public device: string;

            /** GetCoilsRequest pin. */
            public pin: string;

            /** GetCoilsRequest count. */
            public count: number;

            /**
             * Creates a new GetCoilsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetCoilsRequest instance
             */
            public static create(properties?: lebai.modbus.IGetCoilsRequest): lebai.modbus.GetCoilsRequest;

            /**
             * Encodes the specified GetCoilsRequest message. Does not implicitly {@link lebai.modbus.GetCoilsRequest.verify|verify} messages.
             * @param message GetCoilsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetCoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetCoilsRequest message, length delimited. Does not implicitly {@link lebai.modbus.GetCoilsRequest.verify|verify} messages.
             * @param message GetCoilsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetCoilsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetCoilsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetCoilsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetCoilsRequest;

            /**
             * Decodes a GetCoilsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetCoilsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetCoilsRequest;

            /**
             * Verifies a GetCoilsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetCoilsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetCoilsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetCoilsRequest;

            /**
             * Creates a plain object from a GetCoilsRequest message. Also converts values to other types if specified.
             * @param message GetCoilsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetCoilsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetCoilsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetCoilsResponse. */
        interface IGetCoilsResponse {

            /** GetCoilsResponse values */
            values?: (boolean[]|null);
        }

        /** Represents a GetCoilsResponse. */
        class GetCoilsResponse implements IGetCoilsResponse {

            /**
             * Constructs a new GetCoilsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetCoilsResponse);

            /** GetCoilsResponse values. */
            public values: boolean[];

            /**
             * Creates a new GetCoilsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetCoilsResponse instance
             */
            public static create(properties?: lebai.modbus.IGetCoilsResponse): lebai.modbus.GetCoilsResponse;

            /**
             * Encodes the specified GetCoilsResponse message. Does not implicitly {@link lebai.modbus.GetCoilsResponse.verify|verify} messages.
             * @param message GetCoilsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetCoilsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetCoilsResponse message, length delimited. Does not implicitly {@link lebai.modbus.GetCoilsResponse.verify|verify} messages.
             * @param message GetCoilsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetCoilsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetCoilsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetCoilsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetCoilsResponse;

            /**
             * Decodes a GetCoilsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetCoilsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetCoilsResponse;

            /**
             * Verifies a GetCoilsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetCoilsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetCoilsResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetCoilsResponse;

            /**
             * Creates a plain object from a GetCoilsResponse message. Also converts values to other types if specified.
             * @param message GetCoilsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetCoilsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetCoilsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetRegisterRequest. */
        interface ISetRegisterRequest {

            /** SetRegisterRequest device */
            device?: (string|null);

            /** SetRegisterRequest pin */
            pin?: (string|null);

            /** SetRegisterRequest value */
            value?: (number|null);
        }

        /** Represents a SetRegisterRequest. */
        class SetRegisterRequest implements ISetRegisterRequest {

            /**
             * Constructs a new SetRegisterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISetRegisterRequest);

            /** SetRegisterRequest device. */
            public device: string;

            /** SetRegisterRequest pin. */
            public pin: string;

            /** SetRegisterRequest value. */
            public value: number;

            /**
             * Creates a new SetRegisterRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRegisterRequest instance
             */
            public static create(properties?: lebai.modbus.ISetRegisterRequest): lebai.modbus.SetRegisterRequest;

            /**
             * Encodes the specified SetRegisterRequest message. Does not implicitly {@link lebai.modbus.SetRegisterRequest.verify|verify} messages.
             * @param message SetRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISetRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRegisterRequest message, length delimited. Does not implicitly {@link lebai.modbus.SetRegisterRequest.verify|verify} messages.
             * @param message SetRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISetRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRegisterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SetRegisterRequest;

            /**
             * Decodes a SetRegisterRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SetRegisterRequest;

            /**
             * Verifies a SetRegisterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRegisterRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SetRegisterRequest;

            /**
             * Creates a plain object from a SetRegisterRequest message. Also converts values to other types if specified.
             * @param message SetRegisterRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SetRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRegisterRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetRegistersRequest. */
        interface ISetRegistersRequest {

            /** SetRegistersRequest device */
            device?: (string|null);

            /** SetRegistersRequest pin */
            pin?: (string|null);

            /** SetRegistersRequest values */
            values?: (number[]|null);
        }

        /** Represents a SetRegistersRequest. */
        class SetRegistersRequest implements ISetRegistersRequest {

            /**
             * Constructs a new SetRegistersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.ISetRegistersRequest);

            /** SetRegistersRequest device. */
            public device: string;

            /** SetRegistersRequest pin. */
            public pin: string;

            /** SetRegistersRequest values. */
            public values: number[];

            /**
             * Creates a new SetRegistersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetRegistersRequest instance
             */
            public static create(properties?: lebai.modbus.ISetRegistersRequest): lebai.modbus.SetRegistersRequest;

            /**
             * Encodes the specified SetRegistersRequest message. Does not implicitly {@link lebai.modbus.SetRegistersRequest.verify|verify} messages.
             * @param message SetRegistersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.ISetRegistersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetRegistersRequest message, length delimited. Does not implicitly {@link lebai.modbus.SetRegistersRequest.verify|verify} messages.
             * @param message SetRegistersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.ISetRegistersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetRegistersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetRegistersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.SetRegistersRequest;

            /**
             * Decodes a SetRegistersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetRegistersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.SetRegistersRequest;

            /**
             * Verifies a SetRegistersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetRegistersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetRegistersRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.SetRegistersRequest;

            /**
             * Creates a plain object from a SetRegistersRequest message. Also converts values to other types if specified.
             * @param message SetRegistersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.SetRegistersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetRegistersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRegisterRequest. */
        interface IGetRegisterRequest {

            /** GetRegisterRequest device */
            device?: (string|null);

            /** GetRegisterRequest pin */
            pin?: (string|null);
        }

        /** Represents a GetRegisterRequest. */
        class GetRegisterRequest implements IGetRegisterRequest {

            /**
             * Constructs a new GetRegisterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetRegisterRequest);

            /** GetRegisterRequest device. */
            public device: string;

            /** GetRegisterRequest pin. */
            public pin: string;

            /**
             * Creates a new GetRegisterRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRegisterRequest instance
             */
            public static create(properties?: lebai.modbus.IGetRegisterRequest): lebai.modbus.GetRegisterRequest;

            /**
             * Encodes the specified GetRegisterRequest message. Does not implicitly {@link lebai.modbus.GetRegisterRequest.verify|verify} messages.
             * @param message GetRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRegisterRequest message, length delimited. Does not implicitly {@link lebai.modbus.GetRegisterRequest.verify|verify} messages.
             * @param message GetRegisterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRegisterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetRegisterRequest;

            /**
             * Decodes a GetRegisterRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetRegisterRequest;

            /**
             * Verifies a GetRegisterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRegisterRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetRegisterRequest;

            /**
             * Creates a plain object from a GetRegisterRequest message. Also converts values to other types if specified.
             * @param message GetRegisterRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRegisterRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRegisterResponse. */
        interface IGetRegisterResponse {

            /** GetRegisterResponse value */
            value?: (number|null);
        }

        /** Represents a GetRegisterResponse. */
        class GetRegisterResponse implements IGetRegisterResponse {

            /**
             * Constructs a new GetRegisterResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetRegisterResponse);

            /** GetRegisterResponse value. */
            public value: number;

            /**
             * Creates a new GetRegisterResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRegisterResponse instance
             */
            public static create(properties?: lebai.modbus.IGetRegisterResponse): lebai.modbus.GetRegisterResponse;

            /**
             * Encodes the specified GetRegisterResponse message. Does not implicitly {@link lebai.modbus.GetRegisterResponse.verify|verify} messages.
             * @param message GetRegisterResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRegisterResponse message, length delimited. Does not implicitly {@link lebai.modbus.GetRegisterResponse.verify|verify} messages.
             * @param message GetRegisterResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRegisterResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetRegisterResponse;

            /**
             * Decodes a GetRegisterResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetRegisterResponse;

            /**
             * Verifies a GetRegisterResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRegisterResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRegisterResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetRegisterResponse;

            /**
             * Creates a plain object from a GetRegisterResponse message. Also converts values to other types if specified.
             * @param message GetRegisterResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetRegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRegisterResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRegistersRequest. */
        interface IGetRegistersRequest {

            /** GetRegistersRequest device */
            device?: (string|null);

            /** GetRegistersRequest pin */
            pin?: (string|null);

            /** GetRegistersRequest count */
            count?: (number|null);
        }

        /** Represents a GetRegistersRequest. */
        class GetRegistersRequest implements IGetRegistersRequest {

            /**
             * Constructs a new GetRegistersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetRegistersRequest);

            /** GetRegistersRequest device. */
            public device: string;

            /** GetRegistersRequest pin. */
            public pin: string;

            /** GetRegistersRequest count. */
            public count: number;

            /**
             * Creates a new GetRegistersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRegistersRequest instance
             */
            public static create(properties?: lebai.modbus.IGetRegistersRequest): lebai.modbus.GetRegistersRequest;

            /**
             * Encodes the specified GetRegistersRequest message. Does not implicitly {@link lebai.modbus.GetRegistersRequest.verify|verify} messages.
             * @param message GetRegistersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetRegistersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRegistersRequest message, length delimited. Does not implicitly {@link lebai.modbus.GetRegistersRequest.verify|verify} messages.
             * @param message GetRegistersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetRegistersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRegistersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRegistersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetRegistersRequest;

            /**
             * Decodes a GetRegistersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRegistersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetRegistersRequest;

            /**
             * Verifies a GetRegistersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRegistersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRegistersRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetRegistersRequest;

            /**
             * Creates a plain object from a GetRegistersRequest message. Also converts values to other types if specified.
             * @param message GetRegistersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetRegistersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRegistersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRegistersResponse. */
        interface IGetRegistersResponse {

            /** GetRegistersResponse values */
            values?: (number[]|null);
        }

        /** Represents a GetRegistersResponse. */
        class GetRegistersResponse implements IGetRegistersResponse {

            /**
             * Constructs a new GetRegistersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.modbus.IGetRegistersResponse);

            /** GetRegistersResponse values. */
            public values: number[];

            /**
             * Creates a new GetRegistersResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRegistersResponse instance
             */
            public static create(properties?: lebai.modbus.IGetRegistersResponse): lebai.modbus.GetRegistersResponse;

            /**
             * Encodes the specified GetRegistersResponse message. Does not implicitly {@link lebai.modbus.GetRegistersResponse.verify|verify} messages.
             * @param message GetRegistersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.modbus.IGetRegistersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRegistersResponse message, length delimited. Does not implicitly {@link lebai.modbus.GetRegistersResponse.verify|verify} messages.
             * @param message GetRegistersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.modbus.IGetRegistersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRegistersResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRegistersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.modbus.GetRegistersResponse;

            /**
             * Decodes a GetRegistersResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRegistersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.modbus.GetRegistersResponse;

            /**
             * Verifies a GetRegistersResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRegistersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRegistersResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.modbus.GetRegistersResponse;

            /**
             * Creates a plain object from a GetRegistersResponse message. Also converts values to other types if specified.
             * @param message GetRegistersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.modbus.GetRegistersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRegistersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a ModbusService */
        class ModbusService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ModbusService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ModbusService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ModbusService;

            /**
             * Calls SaveModbus.
             * @param request SaveModbusRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveModbus(request: lebai.modbus.ISaveModbusRequest, callback: lebai.modbus.ModbusService.SaveModbusCallback): void;

            /**
             * Calls SaveModbus.
             * @param request SaveModbusRequest message or plain object
             * @returns Promise
             */
            public saveModbus(request: lebai.modbus.ISaveModbusRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadModbus.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Modbus
             */
            public loadModbus(request: lebai.db.ILoadRequest, callback: lebai.modbus.ModbusService.LoadModbusCallback): void;

            /**
             * Calls LoadModbus.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadModbus(request: lebai.db.ILoadRequest): Promise<lebai.modbus.Modbus>;

            /**
             * Calls LoadModbusList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadModbusList(request: lebai.db.ILoadListRequest, callback: lebai.modbus.ModbusService.LoadModbusListCallback): void;

            /**
             * Calls LoadModbusList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadModbusList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls SaveModbusRegister.
             * @param request SaveModbusRegisterRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveModbusRegister(request: lebai.modbus.ISaveModbusRegisterRequest, callback: lebai.modbus.ModbusService.SaveModbusRegisterCallback): void;

            /**
             * Calls SaveModbusRegister.
             * @param request SaveModbusRegisterRequest message or plain object
             * @returns Promise
             */
            public saveModbusRegister(request: lebai.modbus.ISaveModbusRegisterRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadModbusRegister.
             * @param request LoadModbusRegisterRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ModbusRegister
             */
            public loadModbusRegister(request: lebai.modbus.ILoadModbusRegisterRequest, callback: lebai.modbus.ModbusService.LoadModbusRegisterCallback): void;

            /**
             * Calls LoadModbusRegister.
             * @param request LoadModbusRegisterRequest message or plain object
             * @returns Promise
             */
            public loadModbusRegister(request: lebai.modbus.ILoadModbusRegisterRequest): Promise<lebai.modbus.ModbusRegister>;

            /**
             * Calls LoadModbusRegisterList.
             * @param request LoadModbusRegisterListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadModbusRegisterList(request: lebai.modbus.ILoadModbusRegisterListRequest, callback: lebai.modbus.ModbusService.LoadModbusRegisterListCallback): void;

            /**
             * Calls LoadModbusRegisterList.
             * @param request LoadModbusRegisterListRequest message or plain object
             * @returns Promise
             */
            public loadModbusRegisterList(request: lebai.modbus.ILoadModbusRegisterListRequest): Promise<lebai.db.LoadListResponse>;

            /**
             * Calls ReadDiscreteInputs.
             * @param request GetCoilsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetCoilsResponse
             */
            public readDiscreteInputs(request: lebai.modbus.IGetCoilsRequest, callback: lebai.modbus.ModbusService.ReadDiscreteInputsCallback): void;

            /**
             * Calls ReadDiscreteInputs.
             * @param request GetCoilsRequest message or plain object
             * @returns Promise
             */
            public readDiscreteInputs(request: lebai.modbus.IGetCoilsRequest): Promise<lebai.modbus.GetCoilsResponse>;

            /**
             * Calls ReadCoils.
             * @param request GetCoilsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetCoilsResponse
             */
            public readCoils(request: lebai.modbus.IGetCoilsRequest, callback: lebai.modbus.ModbusService.ReadCoilsCallback): void;

            /**
             * Calls ReadCoils.
             * @param request GetCoilsRequest message or plain object
             * @returns Promise
             */
            public readCoils(request: lebai.modbus.IGetCoilsRequest): Promise<lebai.modbus.GetCoilsResponse>;

            /**
             * Calls WriteSingleCoil.
             * @param request SetCoilRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public writeSingleCoil(request: lebai.modbus.ISetCoilRequest, callback: lebai.modbus.ModbusService.WriteSingleCoilCallback): void;

            /**
             * Calls WriteSingleCoil.
             * @param request SetCoilRequest message or plain object
             * @returns Promise
             */
            public writeSingleCoil(request: lebai.modbus.ISetCoilRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WriteMultipleCoils.
             * @param request SetCoilsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public writeMultipleCoils(request: lebai.modbus.ISetCoilsRequest, callback: lebai.modbus.ModbusService.WriteMultipleCoilsCallback): void;

            /**
             * Calls WriteMultipleCoils.
             * @param request SetCoilsRequest message or plain object
             * @returns Promise
             */
            public writeMultipleCoils(request: lebai.modbus.ISetCoilsRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls ReadInputRegisters.
             * @param request GetRegistersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetRegistersResponse
             */
            public readInputRegisters(request: lebai.modbus.IGetRegistersRequest, callback: lebai.modbus.ModbusService.ReadInputRegistersCallback): void;

            /**
             * Calls ReadInputRegisters.
             * @param request GetRegistersRequest message or plain object
             * @returns Promise
             */
            public readInputRegisters(request: lebai.modbus.IGetRegistersRequest): Promise<lebai.modbus.GetRegistersResponse>;

            /**
             * Calls ReadHoldingRegisters.
             * @param request GetRegistersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetRegistersResponse
             */
            public readHoldingRegisters(request: lebai.modbus.IGetRegistersRequest, callback: lebai.modbus.ModbusService.ReadHoldingRegistersCallback): void;

            /**
             * Calls ReadHoldingRegisters.
             * @param request GetRegistersRequest message or plain object
             * @returns Promise
             */
            public readHoldingRegisters(request: lebai.modbus.IGetRegistersRequest): Promise<lebai.modbus.GetRegistersResponse>;

            /**
             * Calls WriteSingleRegister.
             * @param request SetRegisterRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public writeSingleRegister(request: lebai.modbus.ISetRegisterRequest, callback: lebai.modbus.ModbusService.WriteSingleRegisterCallback): void;

            /**
             * Calls WriteSingleRegister.
             * @param request SetRegisterRequest message or plain object
             * @returns Promise
             */
            public writeSingleRegister(request: lebai.modbus.ISetRegisterRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WriteMultipleRegisters.
             * @param request SetRegistersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public writeMultipleRegisters(request: lebai.modbus.ISetRegistersRequest, callback: lebai.modbus.ModbusService.WriteMultipleRegistersCallback): void;

            /**
             * Calls WriteMultipleRegisters.
             * @param request SetRegistersRequest message or plain object
             * @returns Promise
             */
            public writeMultipleRegisters(request: lebai.modbus.ISetRegistersRequest): Promise<google.protobuf.Empty>;
        }

        namespace ModbusService {

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#saveModbus}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveModbusCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#loadModbus}.
             * @param error Error, if any
             * @param [response] Modbus
             */
            type LoadModbusCallback = (error: (Error|null), response?: lebai.modbus.Modbus) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#loadModbusList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadModbusListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#saveModbusRegister}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveModbusRegisterCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#loadModbusRegister}.
             * @param error Error, if any
             * @param [response] ModbusRegister
             */
            type LoadModbusRegisterCallback = (error: (Error|null), response?: lebai.modbus.ModbusRegister) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#loadModbusRegisterList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadModbusRegisterListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#readDiscreteInputs}.
             * @param error Error, if any
             * @param [response] GetCoilsResponse
             */
            type ReadDiscreteInputsCallback = (error: (Error|null), response?: lebai.modbus.GetCoilsResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#readCoils}.
             * @param error Error, if any
             * @param [response] GetCoilsResponse
             */
            type ReadCoilsCallback = (error: (Error|null), response?: lebai.modbus.GetCoilsResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#writeSingleCoil}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WriteSingleCoilCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#writeMultipleCoils}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WriteMultipleCoilsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#readInputRegisters}.
             * @param error Error, if any
             * @param [response] GetRegistersResponse
             */
            type ReadInputRegistersCallback = (error: (Error|null), response?: lebai.modbus.GetRegistersResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#readHoldingRegisters}.
             * @param error Error, if any
             * @param [response] GetRegistersResponse
             */
            type ReadHoldingRegistersCallback = (error: (Error|null), response?: lebai.modbus.GetRegistersResponse) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#writeSingleRegister}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WriteSingleRegisterCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.modbus.ModbusService#writeMultipleRegisters}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WriteMultipleRegistersCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace motion. */
    namespace motion {

        /** Properties of a MotionIndex. */
        interface IMotionIndex {

            /** MotionIndex id */
            id?: (number|null);
        }

        /** Represents a MotionIndex. */
        class MotionIndex implements IMotionIndex {

            /**
             * Constructs a new MotionIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IMotionIndex);

            /** MotionIndex id. */
            public id: number;

            /**
             * Creates a new MotionIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MotionIndex instance
             */
            public static create(properties?: lebai.motion.IMotionIndex): lebai.motion.MotionIndex;

            /**
             * Encodes the specified MotionIndex message. Does not implicitly {@link lebai.motion.MotionIndex.verify|verify} messages.
             * @param message MotionIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IMotionIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MotionIndex message, length delimited. Does not implicitly {@link lebai.motion.MotionIndex.verify|verify} messages.
             * @param message MotionIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IMotionIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MotionIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MotionIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.MotionIndex;

            /**
             * Decodes a MotionIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MotionIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.MotionIndex;

            /**
             * Verifies a MotionIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MotionIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MotionIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.MotionIndex;

            /**
             * Creates a plain object from a MotionIndex message. Also converts values to other types if specified.
             * @param message MotionIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.MotionIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MotionIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** MotionState enum. */
        enum MotionState {
            WAIT = 0,
            RUNNING = 1,
            FINISHED = 2
        }

        /** Properties of a GetMotionStateResponse. */
        interface IGetMotionStateResponse {

            /** GetMotionStateResponse state */
            state?: (lebai.motion.MotionState|null);
        }

        /** Represents a GetMotionStateResponse. */
        class GetMotionStateResponse implements IGetMotionStateResponse {

            /**
             * Constructs a new GetMotionStateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IGetMotionStateResponse);

            /** GetMotionStateResponse state. */
            public state: lebai.motion.MotionState;

            /**
             * Creates a new GetMotionStateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetMotionStateResponse instance
             */
            public static create(properties?: lebai.motion.IGetMotionStateResponse): lebai.motion.GetMotionStateResponse;

            /**
             * Encodes the specified GetMotionStateResponse message. Does not implicitly {@link lebai.motion.GetMotionStateResponse.verify|verify} messages.
             * @param message GetMotionStateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IGetMotionStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetMotionStateResponse message, length delimited. Does not implicitly {@link lebai.motion.GetMotionStateResponse.verify|verify} messages.
             * @param message GetMotionStateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IGetMotionStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetMotionStateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetMotionStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.GetMotionStateResponse;

            /**
             * Decodes a GetMotionStateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetMotionStateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.GetMotionStateResponse;

            /**
             * Verifies a GetMotionStateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetMotionStateResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetMotionStateResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.GetMotionStateResponse;

            /**
             * Creates a plain object from a GetMotionStateResponse message. Also converts values to other types if specified.
             * @param message GetMotionStateResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.GetMotionStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetMotionStateResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MoveParam. */
        interface IMoveParam {

            /** MoveParam velocity */
            velocity?: (number|null);

            /** MoveParam acc */
            acc?: (number|null);

            /** MoveParam time */
            time?: (number|null);

            /** MoveParam radius */
            radius?: (number|null);
        }

        /** Represents a MoveParam. */
        class MoveParam implements IMoveParam {

            /**
             * Constructs a new MoveParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IMoveParam);

            /** MoveParam velocity. */
            public velocity: number;

            /** MoveParam acc. */
            public acc: number;

            /** MoveParam time. */
            public time: number;

            /** MoveParam radius. */
            public radius: number;

            /**
             * Creates a new MoveParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveParam instance
             */
            public static create(properties?: lebai.motion.IMoveParam): lebai.motion.MoveParam;

            /**
             * Encodes the specified MoveParam message. Does not implicitly {@link lebai.motion.MoveParam.verify|verify} messages.
             * @param message MoveParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IMoveParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveParam message, length delimited. Does not implicitly {@link lebai.motion.MoveParam.verify|verify} messages.
             * @param message MoveParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IMoveParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.MoveParam;

            /**
             * Decodes a MoveParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MoveParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.MoveParam;

            /**
             * Verifies a MoveParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.MoveParam;

            /**
             * Creates a plain object from a MoveParam message. Also converts values to other types if specified.
             * @param message MoveParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.MoveParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MoveRequest. */
        interface IMoveRequest {

            /** MoveRequest pose */
            pose?: (lebai.posture.IPose|null);

            /** MoveRequest param */
            param?: (lebai.motion.IMoveParam|null);
        }

        /** Represents a MoveRequest. */
        class MoveRequest implements IMoveRequest {

            /**
             * Constructs a new MoveRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IMoveRequest);

            /** MoveRequest pose. */
            public pose?: (lebai.posture.IPose|null);

            /** MoveRequest param. */
            public param?: (lebai.motion.IMoveParam|null);

            /**
             * Creates a new MoveRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveRequest instance
             */
            public static create(properties?: lebai.motion.IMoveRequest): lebai.motion.MoveRequest;

            /**
             * Encodes the specified MoveRequest message. Does not implicitly {@link lebai.motion.MoveRequest.verify|verify} messages.
             * @param message MoveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveRequest message, length delimited. Does not implicitly {@link lebai.motion.MoveRequest.verify|verify} messages.
             * @param message MoveRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.MoveRequest;

            /**
             * Decodes a MoveRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MoveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.MoveRequest;

            /**
             * Verifies a MoveRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.MoveRequest;

            /**
             * Creates a plain object from a MoveRequest message. Also converts values to other types if specified.
             * @param message MoveRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.MoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MovecRequest. */
        interface IMovecRequest {

            /** MovecRequest poseVia */
            poseVia?: (lebai.posture.IPose|null);

            /** MovecRequest pose */
            pose?: (lebai.posture.IPose|null);

            /** MovecRequest rad */
            rad?: (number|null);

            /** MovecRequest param */
            param?: (lebai.motion.IMoveParam|null);
        }

        /** Represents a MovecRequest. */
        class MovecRequest implements IMovecRequest {

            /**
             * Constructs a new MovecRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IMovecRequest);

            /** MovecRequest poseVia. */
            public poseVia?: (lebai.posture.IPose|null);

            /** MovecRequest pose. */
            public pose?: (lebai.posture.IPose|null);

            /** MovecRequest rad. */
            public rad: number;

            /** MovecRequest param. */
            public param?: (lebai.motion.IMoveParam|null);

            /**
             * Creates a new MovecRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MovecRequest instance
             */
            public static create(properties?: lebai.motion.IMovecRequest): lebai.motion.MovecRequest;

            /**
             * Encodes the specified MovecRequest message. Does not implicitly {@link lebai.motion.MovecRequest.verify|verify} messages.
             * @param message MovecRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IMovecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MovecRequest message, length delimited. Does not implicitly {@link lebai.motion.MovecRequest.verify|verify} messages.
             * @param message MovecRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IMovecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MovecRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MovecRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.MovecRequest;

            /**
             * Decodes a MovecRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MovecRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.MovecRequest;

            /**
             * Verifies a MovecRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MovecRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MovecRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.MovecRequest;

            /**
             * Creates a plain object from a MovecRequest message. Also converts values to other types if specified.
             * @param message MovecRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.MovecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MovecRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpeedParam. */
        interface ISpeedParam {

            /** SpeedParam acc */
            acc?: (number|null);

            /** SpeedParam time */
            time?: (number|null);

            /** SpeedParam constrained */
            constrained?: (boolean|null);
        }

        /** Represents a SpeedParam. */
        class SpeedParam implements ISpeedParam {

            /**
             * Constructs a new SpeedParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.ISpeedParam);

            /** SpeedParam acc. */
            public acc: number;

            /** SpeedParam time. */
            public time: number;

            /** SpeedParam constrained. */
            public constrained: boolean;

            /**
             * Creates a new SpeedParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpeedParam instance
             */
            public static create(properties?: lebai.motion.ISpeedParam): lebai.motion.SpeedParam;

            /**
             * Encodes the specified SpeedParam message. Does not implicitly {@link lebai.motion.SpeedParam.verify|verify} messages.
             * @param message SpeedParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.ISpeedParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpeedParam message, length delimited. Does not implicitly {@link lebai.motion.SpeedParam.verify|verify} messages.
             * @param message SpeedParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.ISpeedParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpeedParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpeedParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.SpeedParam;

            /**
             * Decodes a SpeedParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpeedParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.SpeedParam;

            /**
             * Verifies a SpeedParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpeedParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpeedParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.SpeedParam;

            /**
             * Creates a plain object from a SpeedParam message. Also converts values to other types if specified.
             * @param message SpeedParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.SpeedParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpeedParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpeedJRequest. */
        interface ISpeedJRequest {

            /** SpeedJRequest speed */
            speed?: (lebai.posture.IJointPose|null);

            /** SpeedJRequest param */
            param?: (lebai.motion.ISpeedParam|null);
        }

        /** Represents a SpeedJRequest. */
        class SpeedJRequest implements ISpeedJRequest {

            /**
             * Constructs a new SpeedJRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.ISpeedJRequest);

            /** SpeedJRequest speed. */
            public speed?: (lebai.posture.IJointPose|null);

            /** SpeedJRequest param. */
            public param?: (lebai.motion.ISpeedParam|null);

            /**
             * Creates a new SpeedJRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpeedJRequest instance
             */
            public static create(properties?: lebai.motion.ISpeedJRequest): lebai.motion.SpeedJRequest;

            /**
             * Encodes the specified SpeedJRequest message. Does not implicitly {@link lebai.motion.SpeedJRequest.verify|verify} messages.
             * @param message SpeedJRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.ISpeedJRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpeedJRequest message, length delimited. Does not implicitly {@link lebai.motion.SpeedJRequest.verify|verify} messages.
             * @param message SpeedJRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.ISpeedJRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpeedJRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpeedJRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.SpeedJRequest;

            /**
             * Decodes a SpeedJRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpeedJRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.SpeedJRequest;

            /**
             * Verifies a SpeedJRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpeedJRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpeedJRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.SpeedJRequest;

            /**
             * Creates a plain object from a SpeedJRequest message. Also converts values to other types if specified.
             * @param message SpeedJRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.SpeedJRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpeedJRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SpeedLRequest. */
        interface ISpeedLRequest {

            /** SpeedLRequest speed */
            speed?: (lebai.posture.ICartesianPose|null);

            /** SpeedLRequest param */
            param?: (lebai.motion.ISpeedParam|null);

            /** SpeedLRequest frame */
            frame?: (lebai.posture.ICartesianFrame|null);
        }

        /** Represents a SpeedLRequest. */
        class SpeedLRequest implements ISpeedLRequest {

            /**
             * Constructs a new SpeedLRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.ISpeedLRequest);

            /** SpeedLRequest speed. */
            public speed?: (lebai.posture.ICartesianPose|null);

            /** SpeedLRequest param. */
            public param?: (lebai.motion.ISpeedParam|null);

            /** SpeedLRequest frame. */
            public frame?: (lebai.posture.ICartesianFrame|null);

            /**
             * Creates a new SpeedLRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpeedLRequest instance
             */
            public static create(properties?: lebai.motion.ISpeedLRequest): lebai.motion.SpeedLRequest;

            /**
             * Encodes the specified SpeedLRequest message. Does not implicitly {@link lebai.motion.SpeedLRequest.verify|verify} messages.
             * @param message SpeedLRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.ISpeedLRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpeedLRequest message, length delimited. Does not implicitly {@link lebai.motion.SpeedLRequest.verify|verify} messages.
             * @param message SpeedLRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.ISpeedLRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpeedLRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpeedLRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.SpeedLRequest;

            /**
             * Decodes a SpeedLRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpeedLRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.SpeedLRequest;

            /**
             * Verifies a SpeedLRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpeedLRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpeedLRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.SpeedLRequest;

            /**
             * Creates a plain object from a SpeedLRequest message. Also converts values to other types if specified.
             * @param message SpeedLRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.SpeedLRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpeedLRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JointMove. */
        interface IJointMove {

            /** JointMove pose */
            pose?: (number|null);

            /** JointMove velocity */
            velocity?: (number|null);

            /** JointMove acc */
            acc?: (number|null);
        }

        /** Represents a JointMove. */
        class JointMove implements IJointMove {

            /**
             * Constructs a new JointMove.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IJointMove);

            /** JointMove pose. */
            public pose: number;

            /** JointMove velocity. */
            public velocity: number;

            /** JointMove acc. */
            public acc: number;

            /**
             * Creates a new JointMove instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointMove instance
             */
            public static create(properties?: lebai.motion.IJointMove): lebai.motion.JointMove;

            /**
             * Encodes the specified JointMove message. Does not implicitly {@link lebai.motion.JointMove.verify|verify} messages.
             * @param message JointMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IJointMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointMove message, length delimited. Does not implicitly {@link lebai.motion.JointMove.verify|verify} messages.
             * @param message JointMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IJointMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointMove message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.JointMove;

            /**
             * Decodes a JointMove message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.JointMove;

            /**
             * Verifies a JointMove message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointMove message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointMove
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.JointMove;

            /**
             * Creates a plain object from a JointMove message. Also converts values to other types if specified.
             * @param message JointMove
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.JointMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointMove to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MovePvatRequest. */
        interface IMovePvatRequest {

            /** MovePvatRequest duration */
            duration?: (number|null);

            /** MovePvatRequest joints */
            joints?: (lebai.motion.IJointMove[]|null);
        }

        /** Represents a MovePvatRequest. */
        class MovePvatRequest implements IMovePvatRequest {

            /**
             * Constructs a new MovePvatRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IMovePvatRequest);

            /** MovePvatRequest duration. */
            public duration: number;

            /** MovePvatRequest joints. */
            public joints: lebai.motion.IJointMove[];

            /**
             * Creates a new MovePvatRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MovePvatRequest instance
             */
            public static create(properties?: lebai.motion.IMovePvatRequest): lebai.motion.MovePvatRequest;

            /**
             * Encodes the specified MovePvatRequest message. Does not implicitly {@link lebai.motion.MovePvatRequest.verify|verify} messages.
             * @param message MovePvatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IMovePvatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MovePvatRequest message, length delimited. Does not implicitly {@link lebai.motion.MovePvatRequest.verify|verify} messages.
             * @param message MovePvatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IMovePvatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MovePvatRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MovePvatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.MovePvatRequest;

            /**
             * Decodes a MovePvatRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MovePvatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.MovePvatRequest;

            /**
             * Verifies a MovePvatRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MovePvatRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MovePvatRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.MovePvatRequest;

            /**
             * Creates a plain object from a MovePvatRequest message. Also converts values to other types if specified.
             * @param message MovePvatRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.MovePvatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MovePvatRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Wrench. */
        interface IWrench {

            /** Wrench force */
            force?: (lebai.posture.IPosition|null);

            /** Wrench torque */
            torque?: (lebai.posture.IPosition|null);
        }

        /** Represents a Wrench. */
        class Wrench implements IWrench {

            /**
             * Constructs a new Wrench.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IWrench);

            /** Wrench force. */
            public force?: (lebai.posture.IPosition|null);

            /** Wrench torque. */
            public torque?: (lebai.posture.IPosition|null);

            /**
             * Creates a new Wrench instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Wrench instance
             */
            public static create(properties?: lebai.motion.IWrench): lebai.motion.Wrench;

            /**
             * Encodes the specified Wrench message. Does not implicitly {@link lebai.motion.Wrench.verify|verify} messages.
             * @param message Wrench message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IWrench, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Wrench message, length delimited. Does not implicitly {@link lebai.motion.Wrench.verify|verify} messages.
             * @param message Wrench message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IWrench, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Wrench message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Wrench
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.Wrench;

            /**
             * Decodes a Wrench message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Wrench
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.Wrench;

            /**
             * Verifies a Wrench message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Wrench message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Wrench
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.Wrench;

            /**
             * Creates a plain object from a Wrench message. Also converts values to other types if specified.
             * @param message Wrench
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.Wrench, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Wrench to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ForceSensor enum. */
        enum ForceSensor {
            DISABLE = 0,
            INSTANTANEOUS = 1,
            CONTINUOUS = 2,
            WEIGHT1 = 11
        }

        /** Properties of a SetForceSensorRequest. */
        interface ISetForceSensorRequest {

            /** SetForceSensorRequest sensor */
            sensor?: (lebai.motion.ForceSensor|null);
        }

        /** Represents a SetForceSensorRequest. */
        class SetForceSensorRequest implements ISetForceSensorRequest {

            /**
             * Constructs a new SetForceSensorRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.ISetForceSensorRequest);

            /** SetForceSensorRequest sensor. */
            public sensor: lebai.motion.ForceSensor;

            /**
             * Creates a new SetForceSensorRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetForceSensorRequest instance
             */
            public static create(properties?: lebai.motion.ISetForceSensorRequest): lebai.motion.SetForceSensorRequest;

            /**
             * Encodes the specified SetForceSensorRequest message. Does not implicitly {@link lebai.motion.SetForceSensorRequest.verify|verify} messages.
             * @param message SetForceSensorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.ISetForceSensorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetForceSensorRequest message, length delimited. Does not implicitly {@link lebai.motion.SetForceSensorRequest.verify|verify} messages.
             * @param message SetForceSensorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.ISetForceSensorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetForceSensorRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetForceSensorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.SetForceSensorRequest;

            /**
             * Decodes a SetForceSensorRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetForceSensorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.SetForceSensorRequest;

            /**
             * Verifies a SetForceSensorRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetForceSensorRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetForceSensorRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.SetForceSensorRequest;

            /**
             * Creates a plain object from a SetForceSensorRequest message. Also converts values to other types if specified.
             * @param message SetForceSensorRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.SetForceSensorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetForceSensorRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartForceModeRequest. */
        interface IStartForceModeRequest {

            /** StartForceModeRequest limit */
            limit?: (lebai.posture.ICartesianPose|null);

            /** StartForceModeRequest wrench */
            wrench?: (lebai.motion.IWrench|null);
        }

        /** Represents a StartForceModeRequest. */
        class StartForceModeRequest implements IStartForceModeRequest {

            /**
             * Constructs a new StartForceModeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IStartForceModeRequest);

            /** StartForceModeRequest limit. */
            public limit?: (lebai.posture.ICartesianPose|null);

            /** StartForceModeRequest wrench. */
            public wrench?: (lebai.motion.IWrench|null);

            /**
             * Creates a new StartForceModeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartForceModeRequest instance
             */
            public static create(properties?: lebai.motion.IStartForceModeRequest): lebai.motion.StartForceModeRequest;

            /**
             * Encodes the specified StartForceModeRequest message. Does not implicitly {@link lebai.motion.StartForceModeRequest.verify|verify} messages.
             * @param message StartForceModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IStartForceModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartForceModeRequest message, length delimited. Does not implicitly {@link lebai.motion.StartForceModeRequest.verify|verify} messages.
             * @param message StartForceModeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IStartForceModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartForceModeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartForceModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.StartForceModeRequest;

            /**
             * Decodes a StartForceModeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartForceModeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.StartForceModeRequest;

            /**
             * Verifies a StartForceModeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartForceModeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartForceModeRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.StartForceModeRequest;

            /**
             * Creates a plain object from a StartForceModeRequest message. Also converts values to other types if specified.
             * @param message StartForceModeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.StartForceModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartForceModeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForceModeParam. */
        interface IForceModeParam {

            /** ForceModeParam threshold */
            threshold?: (number|null);

            /** ForceModeParam damping */
            damping?: (number|null);

            /** ForceModeParam mass */
            mass?: (number|null);
        }

        /** Represents a ForceModeParam. */
        class ForceModeParam implements IForceModeParam {

            /**
             * Constructs a new ForceModeParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.IForceModeParam);

            /** ForceModeParam threshold. */
            public threshold: number;

            /** ForceModeParam damping. */
            public damping: number;

            /** ForceModeParam mass. */
            public mass: number;

            /**
             * Creates a new ForceModeParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForceModeParam instance
             */
            public static create(properties?: lebai.motion.IForceModeParam): lebai.motion.ForceModeParam;

            /**
             * Encodes the specified ForceModeParam message. Does not implicitly {@link lebai.motion.ForceModeParam.verify|verify} messages.
             * @param message ForceModeParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.IForceModeParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForceModeParam message, length delimited. Does not implicitly {@link lebai.motion.ForceModeParam.verify|verify} messages.
             * @param message ForceModeParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.IForceModeParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForceModeParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForceModeParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.ForceModeParam;

            /**
             * Decodes a ForceModeParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForceModeParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.ForceModeParam;

            /**
             * Verifies a ForceModeParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForceModeParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForceModeParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.ForceModeParam;

            /**
             * Creates a plain object from a ForceModeParam message. Also converts values to other types if specified.
             * @param message ForceModeParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.ForceModeParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForceModeParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetForceModeParamRequest. */
        interface ISetForceModeParamRequest {

            /** SetForceModeParamRequest threshold */
            threshold?: (google.protobuf.IDoubleValue|null);

            /** SetForceModeParamRequest damping */
            damping?: (google.protobuf.IDoubleValue|null);

            /** SetForceModeParamRequest mass */
            mass?: (google.protobuf.IDoubleValue|null);
        }

        /** Represents a SetForceModeParamRequest. */
        class SetForceModeParamRequest implements ISetForceModeParamRequest {

            /**
             * Constructs a new SetForceModeParamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motion.ISetForceModeParamRequest);

            /** SetForceModeParamRequest threshold. */
            public threshold?: (google.protobuf.IDoubleValue|null);

            /** SetForceModeParamRequest damping. */
            public damping?: (google.protobuf.IDoubleValue|null);

            /** SetForceModeParamRequest mass. */
            public mass?: (google.protobuf.IDoubleValue|null);

            /**
             * Creates a new SetForceModeParamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetForceModeParamRequest instance
             */
            public static create(properties?: lebai.motion.ISetForceModeParamRequest): lebai.motion.SetForceModeParamRequest;

            /**
             * Encodes the specified SetForceModeParamRequest message. Does not implicitly {@link lebai.motion.SetForceModeParamRequest.verify|verify} messages.
             * @param message SetForceModeParamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motion.ISetForceModeParamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetForceModeParamRequest message, length delimited. Does not implicitly {@link lebai.motion.SetForceModeParamRequest.verify|verify} messages.
             * @param message SetForceModeParamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motion.ISetForceModeParamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetForceModeParamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetForceModeParamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motion.SetForceModeParamRequest;

            /**
             * Decodes a SetForceModeParamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetForceModeParamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motion.SetForceModeParamRequest;

            /**
             * Verifies a SetForceModeParamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetForceModeParamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetForceModeParamRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motion.SetForceModeParamRequest;

            /**
             * Creates a plain object from a SetForceModeParamRequest message. Also converts values to other types if specified.
             * @param message SetForceModeParamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motion.SetForceModeParamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetForceModeParamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a MotionService */
        class MotionService extends $protobuf.rpc.Service {

            /**
             * Constructs a new MotionService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new MotionService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MotionService;

            /**
             * Calls StopMove.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public stopMove(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.StopMoveCallback): void;

            /**
             * Calls StopMove.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public stopMove(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls SkipMove.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public skipMove(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.SkipMoveCallback): void;

            /**
             * Calls SkipMove.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public skipMove(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitMove.
             * @param request MotionIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public waitMove(request: lebai.motion.IMotionIndex, callback: lebai.motion.MotionService.WaitMoveCallback): void;

            /**
             * Calls WaitMove.
             * @param request MotionIndex message or plain object
             * @returns Promise
             */
            public waitMove(request: lebai.motion.IMotionIndex): Promise<google.protobuf.Empty>;

            /**
             * Calls GetRunningMotion.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and MotionIndex
             */
            public getRunningMotion(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.GetRunningMotionCallback): void;

            /**
             * Calls GetRunningMotion.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getRunningMotion(request: google.protobuf.IEmpty): Promise<lebai.motion.MotionIndex>;

            /**
             * Calls GetMotionState.
             * @param request MotionIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and GetMotionStateResponse
             */
            public getMotionState(request: lebai.motion.IMotionIndex, callback: lebai.motion.MotionService.GetMotionStateCallback): void;

            /**
             * Calls GetMotionState.
             * @param request MotionIndex message or plain object
             * @returns Promise
             */
            public getMotionState(request: lebai.motion.IMotionIndex): Promise<lebai.motion.GetMotionStateResponse>;

            /**
             * Calls TowardJoint.
             * @param request MoveRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and MotionIndex
             */
            public towardJoint(request: lebai.motion.IMoveRequest, callback: lebai.motion.MotionService.TowardJointCallback): void;

            /**
             * Calls TowardJoint.
             * @param request MoveRequest message or plain object
             * @returns Promise
             */
            public towardJoint(request: lebai.motion.IMoveRequest): Promise<lebai.motion.MotionIndex>;

            /**
             * Calls MoveJoint.
             * @param request MoveRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and MotionIndex
             */
            public moveJoint(request: lebai.motion.IMoveRequest, callback: lebai.motion.MotionService.MoveJointCallback): void;

            /**
             * Calls MoveJoint.
             * @param request MoveRequest message or plain object
             * @returns Promise
             */
            public moveJoint(request: lebai.motion.IMoveRequest): Promise<lebai.motion.MotionIndex>;

            /**
             * Calls MoveLinear.
             * @param request MoveRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and MotionIndex
             */
            public moveLinear(request: lebai.motion.IMoveRequest, callback: lebai.motion.MotionService.MoveLinearCallback): void;

            /**
             * Calls MoveLinear.
             * @param request MoveRequest message or plain object
             * @returns Promise
             */
            public moveLinear(request: lebai.motion.IMoveRequest): Promise<lebai.motion.MotionIndex>;

            /**
             * Calls MoveCircular.
             * @param request MovecRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and MotionIndex
             */
            public moveCircular(request: lebai.motion.IMovecRequest, callback: lebai.motion.MotionService.MoveCircularCallback): void;

            /**
             * Calls MoveCircular.
             * @param request MovecRequest message or plain object
             * @returns Promise
             */
            public moveCircular(request: lebai.motion.IMovecRequest): Promise<lebai.motion.MotionIndex>;

            /**
             * Calls MovePvat.
             * @param request MovePvatRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public movePvat(request: lebai.motion.IMovePvatRequest, callback: lebai.motion.MotionService.MovePvatCallback): void;

            /**
             * Calls MovePvat.
             * @param request MovePvatRequest message or plain object
             * @returns Promise
             */
            public movePvat(request: lebai.motion.IMovePvatRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SpeedJoint.
             * @param request SpeedJRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public speedJoint(request: lebai.motion.ISpeedJRequest, callback: lebai.motion.MotionService.SpeedJointCallback): void;

            /**
             * Calls SpeedJoint.
             * @param request SpeedJRequest message or plain object
             * @returns Promise
             */
            public speedJoint(request: lebai.motion.ISpeedJRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SpeedLinear.
             * @param request SpeedLRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public speedLinear(request: lebai.motion.ISpeedLRequest, callback: lebai.motion.MotionService.SpeedLinearCallback): void;

            /**
             * Calls SpeedLinear.
             * @param request SpeedLRequest message or plain object
             * @returns Promise
             */
            public speedLinear(request: lebai.motion.ISpeedLRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls StartTeachMode.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public startTeachMode(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.StartTeachModeCallback): void;

            /**
             * Calls StartTeachMode.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public startTeachMode(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls EndTeachMode.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public endTeachMode(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.EndTeachModeCallback): void;

            /**
             * Calls EndTeachMode.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public endTeachMode(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls SetTcpForce.
             * @param request Wrench message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setTcpForce(request: lebai.motion.IWrench, callback: lebai.motion.MotionService.SetTcpForceCallback): void;

            /**
             * Calls SetTcpForce.
             * @param request Wrench message or plain object
             * @returns Promise
             */
            public setTcpForce(request: lebai.motion.IWrench): Promise<google.protobuf.Empty>;

            /**
             * Calls GetTcpForce.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Wrench
             */
            public getTcpForce(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.GetTcpForceCallback): void;

            /**
             * Calls GetTcpForce.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getTcpForce(request: google.protobuf.IEmpty): Promise<lebai.motion.Wrench>;

            /**
             * Calls SetForceModeSensor.
             * @param request SetForceSensorRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setForceModeSensor(request: lebai.motion.ISetForceSensorRequest, callback: lebai.motion.MotionService.SetForceModeSensorCallback): void;

            /**
             * Calls SetForceModeSensor.
             * @param request SetForceSensorRequest message or plain object
             * @returns Promise
             */
            public setForceModeSensor(request: lebai.motion.ISetForceSensorRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetForceModeParam.
             * @param request SetForceModeParamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setForceModeParam(request: lebai.motion.ISetForceModeParamRequest, callback: lebai.motion.MotionService.SetForceModeParamCallback): void;

            /**
             * Calls SetForceModeParam.
             * @param request SetForceModeParamRequest message or plain object
             * @returns Promise
             */
            public setForceModeParam(request: lebai.motion.ISetForceModeParamRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls StartForceMode.
             * @param request StartForceModeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public startForceMode(request: lebai.motion.IStartForceModeRequest, callback: lebai.motion.MotionService.StartForceModeCallback): void;

            /**
             * Calls StartForceMode.
             * @param request StartForceModeRequest message or plain object
             * @returns Promise
             */
            public startForceMode(request: lebai.motion.IStartForceModeRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls EndForceMode.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public endForceMode(request: google.protobuf.IEmpty, callback: lebai.motion.MotionService.EndForceModeCallback): void;

            /**
             * Calls EndForceMode.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public endForceMode(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;
        }

        namespace MotionService {

            /**
             * Callback as used by {@link lebai.motion.MotionService#stopMove}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StopMoveCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#skipMove}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SkipMoveCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#waitMove}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WaitMoveCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#getRunningMotion}.
             * @param error Error, if any
             * @param [response] MotionIndex
             */
            type GetRunningMotionCallback = (error: (Error|null), response?: lebai.motion.MotionIndex) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#getMotionState}.
             * @param error Error, if any
             * @param [response] GetMotionStateResponse
             */
            type GetMotionStateCallback = (error: (Error|null), response?: lebai.motion.GetMotionStateResponse) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#towardJoint}.
             * @param error Error, if any
             * @param [response] MotionIndex
             */
            type TowardJointCallback = (error: (Error|null), response?: lebai.motion.MotionIndex) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#moveJoint}.
             * @param error Error, if any
             * @param [response] MotionIndex
             */
            type MoveJointCallback = (error: (Error|null), response?: lebai.motion.MotionIndex) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#moveLinear}.
             * @param error Error, if any
             * @param [response] MotionIndex
             */
            type MoveLinearCallback = (error: (Error|null), response?: lebai.motion.MotionIndex) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#moveCircular}.
             * @param error Error, if any
             * @param [response] MotionIndex
             */
            type MoveCircularCallback = (error: (Error|null), response?: lebai.motion.MotionIndex) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#movePvat}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type MovePvatCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#speedJoint}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SpeedJointCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#speedLinear}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SpeedLinearCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#startTeachMode}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StartTeachModeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#endTeachMode}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EndTeachModeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#setTcpForce}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetTcpForceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#getTcpForce}.
             * @param error Error, if any
             * @param [response] Wrench
             */
            type GetTcpForceCallback = (error: (Error|null), response?: lebai.motion.Wrench) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#setForceModeSensor}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetForceModeSensorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#setForceModeParam}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetForceModeParamCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#startForceMode}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type StartForceModeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motion.MotionService#endForceMode}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EndForceModeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace motor. */
    namespace motor {

        /** MotorMode enum. */
        enum MotorMode {
            Position = 0,
            Torque = 1,
            Speed = 2
        }

        /** Properties of a ServoParam. */
        interface IServoParam {

            /** ServoParam positionKp */
            positionKp?: (number|null);

            /** ServoParam speedKp */
            speedKp?: (number|null);

            /** ServoParam speedIt */
            speedIt?: (number|null);

            /** ServoParam torqueCmdFilter */
            torqueCmdFilter?: (number|null);
        }

        /** Represents a ServoParam. */
        class ServoParam implements IServoParam {

            /**
             * Constructs a new ServoParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.IServoParam);

            /** ServoParam positionKp. */
            public positionKp: number;

            /** ServoParam speedKp. */
            public speedKp: number;

            /** ServoParam speedIt. */
            public speedIt: number;

            /** ServoParam torqueCmdFilter. */
            public torqueCmdFilter: number;

            /**
             * Creates a new ServoParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServoParam instance
             */
            public static create(properties?: lebai.motor.IServoParam): lebai.motor.ServoParam;

            /**
             * Encodes the specified ServoParam message. Does not implicitly {@link lebai.motor.ServoParam.verify|verify} messages.
             * @param message ServoParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.IServoParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServoParam message, length delimited. Does not implicitly {@link lebai.motor.ServoParam.verify|verify} messages.
             * @param message ServoParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.IServoParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServoParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServoParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.ServoParam;

            /**
             * Decodes a ServoParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServoParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.ServoParam;

            /**
             * Verifies a ServoParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServoParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServoParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.ServoParam;

            /**
             * Creates a plain object from a ServoParam message. Also converts values to other types if specified.
             * @param message ServoParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.ServoParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServoParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServoParams. */
        interface IServoParams {

            /** ServoParams params */
            params?: (lebai.motor.IServoParam[]|null);
        }

        /** Represents a ServoParams. */
        class ServoParams implements IServoParams {

            /**
             * Constructs a new ServoParams.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.IServoParams);

            /** ServoParams params. */
            public params: lebai.motor.IServoParam[];

            /**
             * Creates a new ServoParams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServoParams instance
             */
            public static create(properties?: lebai.motor.IServoParams): lebai.motor.ServoParams;

            /**
             * Encodes the specified ServoParams message. Does not implicitly {@link lebai.motor.ServoParams.verify|verify} messages.
             * @param message ServoParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.IServoParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServoParams message, length delimited. Does not implicitly {@link lebai.motor.ServoParams.verify|verify} messages.
             * @param message ServoParams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.IServoParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServoParams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServoParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.ServoParams;

            /**
             * Decodes a ServoParams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServoParams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.ServoParams;

            /**
             * Verifies a ServoParams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServoParams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServoParams
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.ServoParams;

            /**
             * Creates a plain object from a ServoParams message. Also converts values to other types if specified.
             * @param message ServoParams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.ServoParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServoParams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetZeroRequest. */
        interface ISetZeroRequest {

            /** SetZeroRequest pose */
            pose?: (number[]|null);

            /** SetZeroRequest valids */
            valids?: (boolean[]|null);
        }

        /** Represents a SetZeroRequest. */
        class SetZeroRequest implements ISetZeroRequest {

            /**
             * Constructs a new SetZeroRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.ISetZeroRequest);

            /** SetZeroRequest pose. */
            public pose: number[];

            /** SetZeroRequest valids. */
            public valids: boolean[];

            /**
             * Creates a new SetZeroRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetZeroRequest instance
             */
            public static create(properties?: lebai.motor.ISetZeroRequest): lebai.motor.SetZeroRequest;

            /**
             * Encodes the specified SetZeroRequest message. Does not implicitly {@link lebai.motor.SetZeroRequest.verify|verify} messages.
             * @param message SetZeroRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.ISetZeroRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetZeroRequest message, length delimited. Does not implicitly {@link lebai.motor.SetZeroRequest.verify|verify} messages.
             * @param message SetZeroRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.ISetZeroRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetZeroRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetZeroRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.SetZeroRequest;

            /**
             * Decodes a SetZeroRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetZeroRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.SetZeroRequest;

            /**
             * Verifies a SetZeroRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetZeroRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetZeroRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.SetZeroRequest;

            /**
             * Creates a plain object from a SetZeroRequest message. Also converts values to other types if specified.
             * @param message SetZeroRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.SetZeroRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetZeroRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ExtraServoParam. */
        interface IExtraServoParam {

            /** ExtraServoParam accPositionKp */
            accPositionKp?: (number|null);

            /** ExtraServoParam accSpeedKp */
            accSpeedKp?: (number|null);

            /** ExtraServoParam accSpeedIt */
            accSpeedIt?: (number|null);

            /** ExtraServoParam uniPositionKp */
            uniPositionKp?: (number|null);

            /** ExtraServoParam uniSpeedKp */
            uniSpeedKp?: (number|null);

            /** ExtraServoParam uniSpeedIt */
            uniSpeedIt?: (number|null);

            /** ExtraServoParam decPositionKp */
            decPositionKp?: (number|null);

            /** ExtraServoParam decSpeedKp */
            decSpeedKp?: (number|null);

            /** ExtraServoParam decSpeedIt */
            decSpeedIt?: (number|null);
        }

        /** Represents an ExtraServoParam. */
        class ExtraServoParam implements IExtraServoParam {

            /**
             * Constructs a new ExtraServoParam.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.IExtraServoParam);

            /** ExtraServoParam accPositionKp. */
            public accPositionKp: number;

            /** ExtraServoParam accSpeedKp. */
            public accSpeedKp: number;

            /** ExtraServoParam accSpeedIt. */
            public accSpeedIt: number;

            /** ExtraServoParam uniPositionKp. */
            public uniPositionKp: number;

            /** ExtraServoParam uniSpeedKp. */
            public uniSpeedKp: number;

            /** ExtraServoParam uniSpeedIt. */
            public uniSpeedIt: number;

            /** ExtraServoParam decPositionKp. */
            public decPositionKp: number;

            /** ExtraServoParam decSpeedKp. */
            public decSpeedKp: number;

            /** ExtraServoParam decSpeedIt. */
            public decSpeedIt: number;

            /**
             * Creates a new ExtraServoParam instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtraServoParam instance
             */
            public static create(properties?: lebai.motor.IExtraServoParam): lebai.motor.ExtraServoParam;

            /**
             * Encodes the specified ExtraServoParam message. Does not implicitly {@link lebai.motor.ExtraServoParam.verify|verify} messages.
             * @param message ExtraServoParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.IExtraServoParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtraServoParam message, length delimited. Does not implicitly {@link lebai.motor.ExtraServoParam.verify|verify} messages.
             * @param message ExtraServoParam message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.IExtraServoParam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtraServoParam message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtraServoParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.ExtraServoParam;

            /**
             * Decodes an ExtraServoParam message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtraServoParam
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.ExtraServoParam;

            /**
             * Verifies an ExtraServoParam message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtraServoParam message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtraServoParam
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.ExtraServoParam;

            /**
             * Creates a plain object from an ExtraServoParam message. Also converts values to other types if specified.
             * @param message ExtraServoParam
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.ExtraServoParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtraServoParam to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SetExtraServoParamsRequest. */
        interface ISetExtraServoParamsRequest {

            /** SetExtraServoParamsRequest params */
            params?: (lebai.motor.IExtraServoParam[]|null);

            /** SetExtraServoParamsRequest valids */
            valids?: (boolean[]|null);
        }

        /** Represents a SetExtraServoParamsRequest. */
        class SetExtraServoParamsRequest implements ISetExtraServoParamsRequest {

            /**
             * Constructs a new SetExtraServoParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.ISetExtraServoParamsRequest);

            /** SetExtraServoParamsRequest params. */
            public params: lebai.motor.IExtraServoParam[];

            /** SetExtraServoParamsRequest valids. */
            public valids: boolean[];

            /**
             * Creates a new SetExtraServoParamsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetExtraServoParamsRequest instance
             */
            public static create(properties?: lebai.motor.ISetExtraServoParamsRequest): lebai.motor.SetExtraServoParamsRequest;

            /**
             * Encodes the specified SetExtraServoParamsRequest message. Does not implicitly {@link lebai.motor.SetExtraServoParamsRequest.verify|verify} messages.
             * @param message SetExtraServoParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.ISetExtraServoParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetExtraServoParamsRequest message, length delimited. Does not implicitly {@link lebai.motor.SetExtraServoParamsRequest.verify|verify} messages.
             * @param message SetExtraServoParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.ISetExtraServoParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetExtraServoParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetExtraServoParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.SetExtraServoParamsRequest;

            /**
             * Decodes a SetExtraServoParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetExtraServoParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.SetExtraServoParamsRequest;

            /**
             * Verifies a SetExtraServoParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetExtraServoParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetExtraServoParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.SetExtraServoParamsRequest;

            /**
             * Creates a plain object from a SetExtraServoParamsRequest message. Also converts values to other types if specified.
             * @param message SetExtraServoParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.SetExtraServoParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetExtraServoParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResetExtraServoParamsRequest. */
        interface IResetExtraServoParamsRequest {

            /** ResetExtraServoParamsRequest valids */
            valids?: (boolean[]|null);
        }

        /** Represents a ResetExtraServoParamsRequest. */
        class ResetExtraServoParamsRequest implements IResetExtraServoParamsRequest {

            /**
             * Constructs a new ResetExtraServoParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.motor.IResetExtraServoParamsRequest);

            /** ResetExtraServoParamsRequest valids. */
            public valids: boolean[];

            /**
             * Creates a new ResetExtraServoParamsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResetExtraServoParamsRequest instance
             */
            public static create(properties?: lebai.motor.IResetExtraServoParamsRequest): lebai.motor.ResetExtraServoParamsRequest;

            /**
             * Encodes the specified ResetExtraServoParamsRequest message. Does not implicitly {@link lebai.motor.ResetExtraServoParamsRequest.verify|verify} messages.
             * @param message ResetExtraServoParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.motor.IResetExtraServoParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResetExtraServoParamsRequest message, length delimited. Does not implicitly {@link lebai.motor.ResetExtraServoParamsRequest.verify|verify} messages.
             * @param message ResetExtraServoParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.motor.IResetExtraServoParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResetExtraServoParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResetExtraServoParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.motor.ResetExtraServoParamsRequest;

            /**
             * Decodes a ResetExtraServoParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResetExtraServoParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.motor.ResetExtraServoParamsRequest;

            /**
             * Verifies a ResetExtraServoParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResetExtraServoParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResetExtraServoParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.motor.ResetExtraServoParamsRequest;

            /**
             * Creates a plain object from a ResetExtraServoParamsRequest message. Also converts values to other types if specified.
             * @param message ResetExtraServoParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.motor.ResetExtraServoParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResetExtraServoParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a MotorService */
        class MotorService extends $protobuf.rpc.Service {

            /**
             * Constructs a new MotorService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new MotorService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MotorService;

            /**
             * Calls SetServoParams.
             * @param request ServoParams message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setServoParams(request: lebai.motor.IServoParams, callback: lebai.motor.MotorService.SetServoParamsCallback): void;

            /**
             * Calls SetServoParams.
             * @param request ServoParams message or plain object
             * @returns Promise
             */
            public setServoParams(request: lebai.motor.IServoParams): Promise<google.protobuf.Empty>;

            /**
             * Calls GetServoParams.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and ServoParams
             */
            public getServoParams(request: google.protobuf.IEmpty, callback: lebai.motor.MotorService.GetServoParamsCallback): void;

            /**
             * Calls GetServoParams.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getServoParams(request: google.protobuf.IEmpty): Promise<lebai.motor.ServoParams>;

            /**
             * Calls SetZero.
             * @param request SetZeroRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setZero(request: lebai.motor.ISetZeroRequest, callback: lebai.motor.MotorService.SetZeroCallback): void;

            /**
             * Calls SetZero.
             * @param request SetZeroRequest message or plain object
             * @returns Promise
             */
            public setZero(request: lebai.motor.ISetZeroRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls SetExtraServoParams.
             * @param request SetExtraServoParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setExtraServoParams(request: lebai.motor.ISetExtraServoParamsRequest, callback: lebai.motor.MotorService.SetExtraServoParamsCallback): void;

            /**
             * Calls SetExtraServoParams.
             * @param request SetExtraServoParamsRequest message or plain object
             * @returns Promise
             */
            public setExtraServoParams(request: lebai.motor.ISetExtraServoParamsRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls ResetExtraServoParams.
             * @param request ResetExtraServoParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public resetExtraServoParams(request: lebai.motor.IResetExtraServoParamsRequest, callback: lebai.motor.MotorService.ResetExtraServoParamsCallback): void;

            /**
             * Calls ResetExtraServoParams.
             * @param request ResetExtraServoParamsRequest message or plain object
             * @returns Promise
             */
            public resetExtraServoParams(request: lebai.motor.IResetExtraServoParamsRequest): Promise<google.protobuf.Empty>;
        }

        namespace MotorService {

            /**
             * Callback as used by {@link lebai.motor.MotorService#setServoParams}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetServoParamsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motor.MotorService#getServoParams}.
             * @param error Error, if any
             * @param [response] ServoParams
             */
            type GetServoParamsCallback = (error: (Error|null), response?: lebai.motor.ServoParams) => void;

            /**
             * Callback as used by {@link lebai.motor.MotorService#setZero}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetZeroCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motor.MotorService#setExtraServoParams}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetExtraServoParamsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.motor.MotorService#resetExtraServoParams}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ResetExtraServoParamsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace multi_devices. */
    namespace multi_devices {

        /** Properties of a DeviceInfo. */
        interface IDeviceInfo {

            /** DeviceInfo name */
            name?: (string|null);

            /** DeviceInfo mac */
            mac?: (string|null);

            /** DeviceInfo ip */
            ip?: (string|null);

            /** DeviceInfo online */
            online?: (boolean|null);
        }

        /** Represents a DeviceInfo. */
        class DeviceInfo implements IDeviceInfo {

            /**
             * Constructs a new DeviceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.multi_devices.IDeviceInfo);

            /** DeviceInfo name. */
            public name: string;

            /** DeviceInfo mac. */
            public mac: string;

            /** DeviceInfo ip. */
            public ip: string;

            /** DeviceInfo online. */
            public online: boolean;

            /**
             * Creates a new DeviceInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceInfo instance
             */
            public static create(properties?: lebai.multi_devices.IDeviceInfo): lebai.multi_devices.DeviceInfo;

            /**
             * Encodes the specified DeviceInfo message. Does not implicitly {@link lebai.multi_devices.DeviceInfo.verify|verify} messages.
             * @param message DeviceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.multi_devices.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link lebai.multi_devices.DeviceInfo.verify|verify} messages.
             * @param message DeviceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.multi_devices.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.multi_devices.DeviceInfo;

            /**
             * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.multi_devices.DeviceInfo;

            /**
             * Verifies a DeviceInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.multi_devices.DeviceInfo;

            /**
             * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
             * @param message DeviceInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.multi_devices.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiscoverRobotsResponse. */
        interface IDiscoverRobotsResponse {

            /** DiscoverRobotsResponse devices */
            devices?: (lebai.multi_devices.IDeviceInfo[]|null);
        }

        /** Represents a DiscoverRobotsResponse. */
        class DiscoverRobotsResponse implements IDiscoverRobotsResponse {

            /**
             * Constructs a new DiscoverRobotsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.multi_devices.IDiscoverRobotsResponse);

            /** DiscoverRobotsResponse devices. */
            public devices: lebai.multi_devices.IDeviceInfo[];

            /**
             * Creates a new DiscoverRobotsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscoverRobotsResponse instance
             */
            public static create(properties?: lebai.multi_devices.IDiscoverRobotsResponse): lebai.multi_devices.DiscoverRobotsResponse;

            /**
             * Encodes the specified DiscoverRobotsResponse message. Does not implicitly {@link lebai.multi_devices.DiscoverRobotsResponse.verify|verify} messages.
             * @param message DiscoverRobotsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.multi_devices.IDiscoverRobotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscoverRobotsResponse message, length delimited. Does not implicitly {@link lebai.multi_devices.DiscoverRobotsResponse.verify|verify} messages.
             * @param message DiscoverRobotsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.multi_devices.IDiscoverRobotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscoverRobotsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscoverRobotsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.multi_devices.DiscoverRobotsResponse;

            /**
             * Decodes a DiscoverRobotsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscoverRobotsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.multi_devices.DiscoverRobotsResponse;

            /**
             * Verifies a DiscoverRobotsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscoverRobotsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscoverRobotsResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.multi_devices.DiscoverRobotsResponse;

            /**
             * Creates a plain object from a DiscoverRobotsResponse message. Also converts values to other types if specified.
             * @param message DiscoverRobotsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.multi_devices.DiscoverRobotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscoverRobotsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a MultiDevicesService */
        class MultiDevicesService extends $protobuf.rpc.Service {

            /**
             * Constructs a new MultiDevicesService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new MultiDevicesService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MultiDevicesService;

            /**
             * Calls DiscoverRobots.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and DiscoverRobotsResponse
             */
            public discoverRobots(request: google.protobuf.IEmpty, callback: lebai.multi_devices.MultiDevicesService.DiscoverRobotsCallback): void;

            /**
             * Calls DiscoverRobots.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public discoverRobots(request: google.protobuf.IEmpty): Promise<lebai.multi_devices.DiscoverRobotsResponse>;
        }

        namespace MultiDevicesService {

            /**
             * Callback as used by {@link lebai.multi_devices.MultiDevicesService#discoverRobots}.
             * @param error Error, if any
             * @param [response] DiscoverRobotsResponse
             */
            type DiscoverRobotsCallback = (error: (Error|null), response?: lebai.multi_devices.DiscoverRobotsResponse) => void;
        }
    }

    /** Namespace plugin. */
    namespace plugin {

        /** Properties of a PluginInfo. */
        interface IPluginInfo {

            /** PluginInfo id */
            id?: (string|null);

            /** PluginInfo version */
            version?: (string|null);

            /** PluginInfo name */
            name?: (string|null);

            /** PluginInfo detail */
            detail?: (string|null);
        }

        /** Represents a PluginInfo. */
        class PluginInfo implements IPluginInfo {

            /**
             * Constructs a new PluginInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.plugin.IPluginInfo);

            /** PluginInfo id. */
            public id: string;

            /** PluginInfo version. */
            public version: string;

            /** PluginInfo name. */
            public name: string;

            /** PluginInfo detail. */
            public detail: string;

            /**
             * Creates a new PluginInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PluginInfo instance
             */
            public static create(properties?: lebai.plugin.IPluginInfo): lebai.plugin.PluginInfo;

            /**
             * Encodes the specified PluginInfo message. Does not implicitly {@link lebai.plugin.PluginInfo.verify|verify} messages.
             * @param message PluginInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.plugin.IPluginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PluginInfo message, length delimited. Does not implicitly {@link lebai.plugin.PluginInfo.verify|verify} messages.
             * @param message PluginInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.plugin.IPluginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PluginInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PluginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.plugin.PluginInfo;

            /**
             * Decodes a PluginInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PluginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.plugin.PluginInfo;

            /**
             * Verifies a PluginInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PluginInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PluginInfo
             */
            public static fromObject(object: { [k: string]: any }): lebai.plugin.PluginInfo;

            /**
             * Creates a plain object from a PluginInfo message. Also converts values to other types if specified.
             * @param message PluginInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.plugin.PluginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PluginInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PluginIndex. */
        interface IPluginIndex {

            /** PluginIndex id */
            id?: (string|null);

            /** PluginIndex version */
            version?: (string|null);
        }

        /** Represents a PluginIndex. */
        class PluginIndex implements IPluginIndex {

            /**
             * Constructs a new PluginIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.plugin.IPluginIndex);

            /** PluginIndex id. */
            public id: string;

            /** PluginIndex version. */
            public version: string;

            /**
             * Creates a new PluginIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PluginIndex instance
             */
            public static create(properties?: lebai.plugin.IPluginIndex): lebai.plugin.PluginIndex;

            /**
             * Encodes the specified PluginIndex message. Does not implicitly {@link lebai.plugin.PluginIndex.verify|verify} messages.
             * @param message PluginIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.plugin.IPluginIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PluginIndex message, length delimited. Does not implicitly {@link lebai.plugin.PluginIndex.verify|verify} messages.
             * @param message PluginIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.plugin.IPluginIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PluginIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PluginIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.plugin.PluginIndex;

            /**
             * Decodes a PluginIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PluginIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.plugin.PluginIndex;

            /**
             * Verifies a PluginIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PluginIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PluginIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.plugin.PluginIndex;

            /**
             * Creates a plain object from a PluginIndex message. Also converts values to other types if specified.
             * @param message PluginIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.plugin.PluginIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PluginIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Plugins. */
        interface IPlugins {

            /** Plugins plugins */
            plugins?: (lebai.plugin.IPluginInfo[]|null);
        }

        /** Represents a Plugins. */
        class Plugins implements IPlugins {

            /**
             * Constructs a new Plugins.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.plugin.IPlugins);

            /** Plugins plugins. */
            public plugins: lebai.plugin.IPluginInfo[];

            /**
             * Creates a new Plugins instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Plugins instance
             */
            public static create(properties?: lebai.plugin.IPlugins): lebai.plugin.Plugins;

            /**
             * Encodes the specified Plugins message. Does not implicitly {@link lebai.plugin.Plugins.verify|verify} messages.
             * @param message Plugins message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.plugin.IPlugins, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Plugins message, length delimited. Does not implicitly {@link lebai.plugin.Plugins.verify|verify} messages.
             * @param message Plugins message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.plugin.IPlugins, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Plugins message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Plugins
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.plugin.Plugins;

            /**
             * Decodes a Plugins message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Plugins
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.plugin.Plugins;

            /**
             * Verifies a Plugins message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Plugins message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Plugins
             */
            public static fromObject(object: { [k: string]: any }): lebai.plugin.Plugins;

            /**
             * Creates a plain object from a Plugins message. Also converts values to other types if specified.
             * @param message Plugins
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.plugin.Plugins, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Plugins to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a PluginService */
        class PluginService extends $protobuf.rpc.Service {

            /**
             * Constructs a new PluginService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new PluginService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PluginService;

            /**
             * Calls LoadPlugin.
             * @param request PluginIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and PluginInfo
             */
            public loadPlugin(request: lebai.plugin.IPluginIndex, callback: lebai.plugin.PluginService.LoadPluginCallback): void;

            /**
             * Calls LoadPlugin.
             * @param request PluginIndex message or plain object
             * @returns Promise
             */
            public loadPlugin(request: lebai.plugin.IPluginIndex): Promise<lebai.plugin.PluginInfo>;

            /**
             * Calls LoadPluginList.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Plugins
             */
            public loadPluginList(request: google.protobuf.IEmpty, callback: lebai.plugin.PluginService.LoadPluginListCallback): void;

            /**
             * Calls LoadPluginList.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public loadPluginList(request: google.protobuf.IEmpty): Promise<lebai.plugin.Plugins>;

            /**
             * Calls InstallPlugin.
             * @param request PluginIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public installPlugin(request: lebai.plugin.IPluginIndex, callback: lebai.plugin.PluginService.InstallPluginCallback): void;

            /**
             * Calls InstallPlugin.
             * @param request PluginIndex message or plain object
             * @returns Promise
             */
            public installPlugin(request: lebai.plugin.IPluginIndex): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadInstalledPlugins.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Plugins
             */
            public loadInstalledPlugins(request: google.protobuf.IEmpty, callback: lebai.plugin.PluginService.LoadInstalledPluginsCallback): void;

            /**
             * Calls LoadInstalledPlugins.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public loadInstalledPlugins(request: google.protobuf.IEmpty): Promise<lebai.plugin.Plugins>;
        }

        namespace PluginService {

            /**
             * Callback as used by {@link lebai.plugin.PluginService#loadPlugin}.
             * @param error Error, if any
             * @param [response] PluginInfo
             */
            type LoadPluginCallback = (error: (Error|null), response?: lebai.plugin.PluginInfo) => void;

            /**
             * Callback as used by {@link lebai.plugin.PluginService#loadPluginList}.
             * @param error Error, if any
             * @param [response] Plugins
             */
            type LoadPluginListCallback = (error: (Error|null), response?: lebai.plugin.Plugins) => void;

            /**
             * Callback as used by {@link lebai.plugin.PluginService#installPlugin}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type InstallPluginCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.plugin.PluginService#loadInstalledPlugins}.
             * @param error Error, if any
             * @param [response] Plugins
             */
            type LoadInstalledPluginsCallback = (error: (Error|null), response?: lebai.plugin.Plugins) => void;
        }
    }

    /** Namespace safety. */
    namespace safety {

        /** Properties of a CollisionTorqueDiff. */
        interface ICollisionTorqueDiff {

            /** CollisionTorqueDiff diffs */
            diffs?: (number[]|null);
        }

        /** Represents a CollisionTorqueDiff. */
        class CollisionTorqueDiff implements ICollisionTorqueDiff {

            /**
             * Constructs a new CollisionTorqueDiff.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.safety.ICollisionTorqueDiff);

            /** CollisionTorqueDiff diffs. */
            public diffs: number[];

            /**
             * Creates a new CollisionTorqueDiff instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CollisionTorqueDiff instance
             */
            public static create(properties?: lebai.safety.ICollisionTorqueDiff): lebai.safety.CollisionTorqueDiff;

            /**
             * Encodes the specified CollisionTorqueDiff message. Does not implicitly {@link lebai.safety.CollisionTorqueDiff.verify|verify} messages.
             * @param message CollisionTorqueDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.safety.ICollisionTorqueDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CollisionTorqueDiff message, length delimited. Does not implicitly {@link lebai.safety.CollisionTorqueDiff.verify|verify} messages.
             * @param message CollisionTorqueDiff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.safety.ICollisionTorqueDiff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollisionTorqueDiff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CollisionTorqueDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.safety.CollisionTorqueDiff;

            /**
             * Decodes a CollisionTorqueDiff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CollisionTorqueDiff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.safety.CollisionTorqueDiff;

            /**
             * Verifies a CollisionTorqueDiff message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CollisionTorqueDiff message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CollisionTorqueDiff
             */
            public static fromObject(object: { [k: string]: any }): lebai.safety.CollisionTorqueDiff;

            /**
             * Creates a plain object from a CollisionTorqueDiff message. Also converts values to other types if specified.
             * @param message CollisionTorqueDiff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.safety.CollisionTorqueDiff, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CollisionTorqueDiff to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CollisionDetectorAction enum. */
        enum CollisionDetectorAction {
            ESTOP = 0,
            PAUSE = 1,
            NONE = 2
        }

        /** Properties of a CollisionDetector. */
        interface ICollisionDetector {

            /** CollisionDetector action */
            action?: (lebai.safety.CollisionDetectorAction|null);

            /** CollisionDetector pauseTime */
            pauseTime?: (number|null);

            /** CollisionDetector sensitivity */
            sensitivity?: (number|null);
        }

        /** Represents a CollisionDetector. */
        class CollisionDetector implements ICollisionDetector {

            /**
             * Constructs a new CollisionDetector.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.safety.ICollisionDetector);

            /** CollisionDetector action. */
            public action: lebai.safety.CollisionDetectorAction;

            /** CollisionDetector pauseTime. */
            public pauseTime: number;

            /** CollisionDetector sensitivity. */
            public sensitivity: number;

            /**
             * Creates a new CollisionDetector instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CollisionDetector instance
             */
            public static create(properties?: lebai.safety.ICollisionDetector): lebai.safety.CollisionDetector;

            /**
             * Encodes the specified CollisionDetector message. Does not implicitly {@link lebai.safety.CollisionDetector.verify|verify} messages.
             * @param message CollisionDetector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.safety.ICollisionDetector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CollisionDetector message, length delimited. Does not implicitly {@link lebai.safety.CollisionDetector.verify|verify} messages.
             * @param message CollisionDetector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.safety.ICollisionDetector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollisionDetector message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CollisionDetector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.safety.CollisionDetector;

            /**
             * Decodes a CollisionDetector message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CollisionDetector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.safety.CollisionDetector;

            /**
             * Verifies a CollisionDetector message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CollisionDetector message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CollisionDetector
             */
            public static fromObject(object: { [k: string]: any }): lebai.safety.CollisionDetector;

            /**
             * Creates a plain object from a CollisionDetector message. Also converts values to other types if specified.
             * @param message CollisionDetector
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.safety.CollisionDetector, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CollisionDetector to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JointLimit. */
        interface IJointLimit {

            /** JointLimit minPosition */
            minPosition?: (number|null);

            /** JointLimit maxPosition */
            maxPosition?: (number|null);

            /** JointLimit maxA */
            maxA?: (number|null);

            /** JointLimit maxV */
            maxV?: (number|null);
        }

        /** Represents a JointLimit. */
        class JointLimit implements IJointLimit {

            /**
             * Constructs a new JointLimit.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.safety.IJointLimit);

            /** JointLimit minPosition. */
            public minPosition: number;

            /** JointLimit maxPosition. */
            public maxPosition: number;

            /** JointLimit maxA. */
            public maxA: number;

            /** JointLimit maxV. */
            public maxV: number;

            /**
             * Creates a new JointLimit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointLimit instance
             */
            public static create(properties?: lebai.safety.IJointLimit): lebai.safety.JointLimit;

            /**
             * Encodes the specified JointLimit message. Does not implicitly {@link lebai.safety.JointLimit.verify|verify} messages.
             * @param message JointLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.safety.IJointLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointLimit message, length delimited. Does not implicitly {@link lebai.safety.JointLimit.verify|verify} messages.
             * @param message JointLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.safety.IJointLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointLimit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.safety.JointLimit;

            /**
             * Decodes a JointLimit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.safety.JointLimit;

            /**
             * Verifies a JointLimit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointLimit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointLimit
             */
            public static fromObject(object: { [k: string]: any }): lebai.safety.JointLimit;

            /**
             * Creates a plain object from a JointLimit message. Also converts values to other types if specified.
             * @param message JointLimit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.safety.JointLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointLimit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JointsLimit. */
        interface IJointsLimit {

            /** JointsLimit joints */
            joints?: (lebai.safety.IJointLimit[]|null);
        }

        /** Represents a JointsLimit. */
        class JointsLimit implements IJointsLimit {

            /**
             * Constructs a new JointsLimit.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.safety.IJointsLimit);

            /** JointsLimit joints. */
            public joints: lebai.safety.IJointLimit[];

            /**
             * Creates a new JointsLimit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JointsLimit instance
             */
            public static create(properties?: lebai.safety.IJointsLimit): lebai.safety.JointsLimit;

            /**
             * Encodes the specified JointsLimit message. Does not implicitly {@link lebai.safety.JointsLimit.verify|verify} messages.
             * @param message JointsLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.safety.IJointsLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JointsLimit message, length delimited. Does not implicitly {@link lebai.safety.JointsLimit.verify|verify} messages.
             * @param message JointsLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.safety.IJointsLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JointsLimit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JointsLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.safety.JointsLimit;

            /**
             * Decodes a JointsLimit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JointsLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.safety.JointsLimit;

            /**
             * Verifies a JointsLimit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JointsLimit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JointsLimit
             */
            public static fromObject(object: { [k: string]: any }): lebai.safety.JointsLimit;

            /**
             * Creates a plain object from a JointsLimit message. Also converts values to other types if specified.
             * @param message JointsLimit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.safety.JointsLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JointsLimit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CartesianLimit. */
        interface ICartesianLimit {

            /** CartesianLimit maxA */
            maxA?: (number|null);

            /** CartesianLimit maxV */
            maxV?: (number|null);

            /** CartesianLimit eqRadius */
            eqRadius?: (number|null);
        }

        /** Represents a CartesianLimit. */
        class CartesianLimit implements ICartesianLimit {

            /**
             * Constructs a new CartesianLimit.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.safety.ICartesianLimit);

            /** CartesianLimit maxA. */
            public maxA: number;

            /** CartesianLimit maxV. */
            public maxV: number;

            /** CartesianLimit eqRadius. */
            public eqRadius: number;

            /**
             * Creates a new CartesianLimit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CartesianLimit instance
             */
            public static create(properties?: lebai.safety.ICartesianLimit): lebai.safety.CartesianLimit;

            /**
             * Encodes the specified CartesianLimit message. Does not implicitly {@link lebai.safety.CartesianLimit.verify|verify} messages.
             * @param message CartesianLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.safety.ICartesianLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CartesianLimit message, length delimited. Does not implicitly {@link lebai.safety.CartesianLimit.verify|verify} messages.
             * @param message CartesianLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.safety.ICartesianLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CartesianLimit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CartesianLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.safety.CartesianLimit;

            /**
             * Decodes a CartesianLimit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CartesianLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.safety.CartesianLimit;

            /**
             * Verifies a CartesianLimit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CartesianLimit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CartesianLimit
             */
            public static fromObject(object: { [k: string]: any }): lebai.safety.CartesianLimit;

            /**
             * Creates a plain object from a CartesianLimit message. Also converts values to other types if specified.
             * @param message CartesianLimit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.safety.CartesianLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CartesianLimit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a SafetyService */
        class SafetyService extends $protobuf.rpc.Service {

            /**
             * Constructs a new SafetyService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new SafetyService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SafetyService;

            /**
             * Calls EnableCollisionDetector.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public enableCollisionDetector(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.EnableCollisionDetectorCallback): void;

            /**
             * Calls EnableCollisionDetector.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public enableCollisionDetector(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls DisableCollisionDetector.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public disableCollisionDetector(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.DisableCollisionDetectorCallback): void;

            /**
             * Calls DisableCollisionDetector.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public disableCollisionDetector(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls SetCollisionTorqueDiff.
             * @param request CollisionTorqueDiff message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setCollisionTorqueDiff(request: lebai.safety.ICollisionTorqueDiff, callback: lebai.safety.SafetyService.SetCollisionTorqueDiffCallback): void;

            /**
             * Calls SetCollisionTorqueDiff.
             * @param request CollisionTorqueDiff message or plain object
             * @returns Promise
             */
            public setCollisionTorqueDiff(request: lebai.safety.ICollisionTorqueDiff): Promise<google.protobuf.Empty>;

            /**
             * Calls GetCollisionTorqueDiff.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and CollisionTorqueDiff
             */
            public getCollisionTorqueDiff(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.GetCollisionTorqueDiffCallback): void;

            /**
             * Calls GetCollisionTorqueDiff.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getCollisionTorqueDiff(request: google.protobuf.IEmpty): Promise<lebai.safety.CollisionTorqueDiff>;

            /**
             * Calls SetCollisionDetector.
             * @param request CollisionDetector message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setCollisionDetector(request: lebai.safety.ICollisionDetector, callback: lebai.safety.SafetyService.SetCollisionDetectorCallback): void;

            /**
             * Calls SetCollisionDetector.
             * @param request CollisionDetector message or plain object
             * @returns Promise
             */
            public setCollisionDetector(request: lebai.safety.ICollisionDetector): Promise<google.protobuf.Empty>;

            /**
             * Calls GetCollisionDetector.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and CollisionDetector
             */
            public getCollisionDetector(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.GetCollisionDetectorCallback): void;

            /**
             * Calls GetCollisionDetector.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getCollisionDetector(request: google.protobuf.IEmpty): Promise<lebai.safety.CollisionDetector>;

            /**
             * Calls EnableLimit.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public enableLimit(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.EnableLimitCallback): void;

            /**
             * Calls EnableLimit.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public enableLimit(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls DisableLimit.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public disableLimit(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.DisableLimitCallback): void;

            /**
             * Calls DisableLimit.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public disableLimit(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls SetJointsLimit.
             * @param request JointsLimit message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setJointsLimit(request: lebai.safety.IJointsLimit, callback: lebai.safety.SafetyService.SetJointsLimitCallback): void;

            /**
             * Calls SetJointsLimit.
             * @param request JointsLimit message or plain object
             * @returns Promise
             */
            public setJointsLimit(request: lebai.safety.IJointsLimit): Promise<google.protobuf.Empty>;

            /**
             * Calls GetJointsLimit.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and JointsLimit
             */
            public getJointsLimit(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.GetJointsLimitCallback): void;

            /**
             * Calls GetJointsLimit.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getJointsLimit(request: google.protobuf.IEmpty): Promise<lebai.safety.JointsLimit>;

            /**
             * Calls SetCartLimit.
             * @param request CartesianLimit message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setCartLimit(request: lebai.safety.ICartesianLimit, callback: lebai.safety.SafetyService.SetCartLimitCallback): void;

            /**
             * Calls SetCartLimit.
             * @param request CartesianLimit message or plain object
             * @returns Promise
             */
            public setCartLimit(request: lebai.safety.ICartesianLimit): Promise<google.protobuf.Empty>;

            /**
             * Calls GetCartLimit.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and CartesianLimit
             */
            public getCartLimit(request: google.protobuf.IEmpty, callback: lebai.safety.SafetyService.GetCartLimitCallback): void;

            /**
             * Calls GetCartLimit.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getCartLimit(request: google.protobuf.IEmpty): Promise<lebai.safety.CartesianLimit>;
        }

        namespace SafetyService {

            /**
             * Callback as used by {@link lebai.safety.SafetyService#enableCollisionDetector}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EnableCollisionDetectorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#disableCollisionDetector}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DisableCollisionDetectorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#setCollisionTorqueDiff}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetCollisionTorqueDiffCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#getCollisionTorqueDiff}.
             * @param error Error, if any
             * @param [response] CollisionTorqueDiff
             */
            type GetCollisionTorqueDiffCallback = (error: (Error|null), response?: lebai.safety.CollisionTorqueDiff) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#setCollisionDetector}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetCollisionDetectorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#getCollisionDetector}.
             * @param error Error, if any
             * @param [response] CollisionDetector
             */
            type GetCollisionDetectorCallback = (error: (Error|null), response?: lebai.safety.CollisionDetector) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#enableLimit}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type EnableLimitCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#disableLimit}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DisableLimitCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#setJointsLimit}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetJointsLimitCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#getJointsLimit}.
             * @param error Error, if any
             * @param [response] JointsLimit
             */
            type GetJointsLimitCallback = (error: (Error|null), response?: lebai.safety.JointsLimit) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#setCartLimit}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetCartLimitCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.safety.SafetyService#getCartLimit}.
             * @param error Error, if any
             * @param [response] CartesianLimit
             */
            type GetCartLimitCallback = (error: (Error|null), response?: lebai.safety.CartesianLimit) => void;
        }
    }

    /** Namespace signal. */
    namespace signal {

        /** Properties of a SetSignalRequest. */
        interface ISetSignalRequest {

            /** SetSignalRequest key */
            key?: (number|null);

            /** SetSignalRequest value */
            value?: (number|null);
        }

        /** Represents a SetSignalRequest. */
        class SetSignalRequest implements ISetSignalRequest {

            /**
             * Constructs a new SetSignalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.signal.ISetSignalRequest);

            /** SetSignalRequest key. */
            public key: number;

            /** SetSignalRequest value. */
            public value: number;

            /**
             * Creates a new SetSignalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetSignalRequest instance
             */
            public static create(properties?: lebai.signal.ISetSignalRequest): lebai.signal.SetSignalRequest;

            /**
             * Encodes the specified SetSignalRequest message. Does not implicitly {@link lebai.signal.SetSignalRequest.verify|verify} messages.
             * @param message SetSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.signal.ISetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetSignalRequest message, length delimited. Does not implicitly {@link lebai.signal.SetSignalRequest.verify|verify} messages.
             * @param message SetSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.signal.ISetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetSignalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.signal.SetSignalRequest;

            /**
             * Decodes a SetSignalRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.signal.SetSignalRequest;

            /**
             * Verifies a SetSignalRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetSignalRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetSignalRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.signal.SetSignalRequest;

            /**
             * Creates a plain object from a SetSignalRequest message. Also converts values to other types if specified.
             * @param message SetSignalRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.signal.SetSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetSignalRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitSignalRequest. */
        interface IWaitSignalRequest {

            /** WaitSignalRequest key */
            key?: (number|null);

            /** WaitSignalRequest value */
            value?: (number|null);

            /** WaitSignalRequest relation */
            relation?: (lebai.cmp.Relation|null);
        }

        /** Represents a WaitSignalRequest. */
        class WaitSignalRequest implements IWaitSignalRequest {

            /**
             * Constructs a new WaitSignalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.signal.IWaitSignalRequest);

            /** WaitSignalRequest key. */
            public key: number;

            /** WaitSignalRequest value. */
            public value: number;

            /** WaitSignalRequest relation. */
            public relation: lebai.cmp.Relation;

            /**
             * Creates a new WaitSignalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitSignalRequest instance
             */
            public static create(properties?: lebai.signal.IWaitSignalRequest): lebai.signal.WaitSignalRequest;

            /**
             * Encodes the specified WaitSignalRequest message. Does not implicitly {@link lebai.signal.WaitSignalRequest.verify|verify} messages.
             * @param message WaitSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.signal.IWaitSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitSignalRequest message, length delimited. Does not implicitly {@link lebai.signal.WaitSignalRequest.verify|verify} messages.
             * @param message WaitSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.signal.IWaitSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitSignalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.signal.WaitSignalRequest;

            /**
             * Decodes a WaitSignalRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.signal.WaitSignalRequest;

            /**
             * Verifies a WaitSignalRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitSignalRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitSignalRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.signal.WaitSignalRequest;

            /**
             * Creates a plain object from a WaitSignalRequest message. Also converts values to other types if specified.
             * @param message WaitSignalRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.signal.WaitSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitSignalRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetSignalRequest. */
        interface IGetSignalRequest {

            /** GetSignalRequest key */
            key?: (number|null);
        }

        /** Represents a GetSignalRequest. */
        class GetSignalRequest implements IGetSignalRequest {

            /**
             * Constructs a new GetSignalRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.signal.IGetSignalRequest);

            /** GetSignalRequest key. */
            public key: number;

            /**
             * Creates a new GetSignalRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSignalRequest instance
             */
            public static create(properties?: lebai.signal.IGetSignalRequest): lebai.signal.GetSignalRequest;

            /**
             * Encodes the specified GetSignalRequest message. Does not implicitly {@link lebai.signal.GetSignalRequest.verify|verify} messages.
             * @param message GetSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.signal.IGetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetSignalRequest message, length delimited. Does not implicitly {@link lebai.signal.GetSignalRequest.verify|verify} messages.
             * @param message GetSignalRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.signal.IGetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSignalRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.signal.GetSignalRequest;

            /**
             * Decodes a GetSignalRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetSignalRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.signal.GetSignalRequest;

            /**
             * Verifies a GetSignalRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetSignalRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetSignalRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.signal.GetSignalRequest;

            /**
             * Creates a plain object from a GetSignalRequest message. Also converts values to other types if specified.
             * @param message GetSignalRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.signal.GetSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetSignalRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetSignalResponse. */
        interface IGetSignalResponse {

            /** GetSignalResponse value */
            value?: (number|null);
        }

        /** Represents a GetSignalResponse. */
        class GetSignalResponse implements IGetSignalResponse {

            /**
             * Constructs a new GetSignalResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.signal.IGetSignalResponse);

            /** GetSignalResponse value. */
            public value: number;

            /**
             * Creates a new GetSignalResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetSignalResponse instance
             */
            public static create(properties?: lebai.signal.IGetSignalResponse): lebai.signal.GetSignalResponse;

            /**
             * Encodes the specified GetSignalResponse message. Does not implicitly {@link lebai.signal.GetSignalResponse.verify|verify} messages.
             * @param message GetSignalResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.signal.IGetSignalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetSignalResponse message, length delimited. Does not implicitly {@link lebai.signal.GetSignalResponse.verify|verify} messages.
             * @param message GetSignalResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.signal.IGetSignalResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetSignalResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetSignalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.signal.GetSignalResponse;

            /**
             * Decodes a GetSignalResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetSignalResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.signal.GetSignalResponse;

            /**
             * Verifies a GetSignalResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetSignalResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetSignalResponse
             */
            public static fromObject(object: { [k: string]: any }): lebai.signal.GetSignalResponse;

            /**
             * Creates a plain object from a GetSignalResponse message. Also converts values to other types if specified.
             * @param message GetSignalResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.signal.GetSignalResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetSignalResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a SignalService */
        class SignalService extends $protobuf.rpc.Service {

            /**
             * Constructs a new SignalService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new SignalService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SignalService;

            /**
             * Calls SetSignal.
             * @param request SetSignalRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setSignal(request: lebai.signal.ISetSignalRequest, callback: lebai.signal.SignalService.SetSignalCallback): void;

            /**
             * Calls SetSignal.
             * @param request SetSignalRequest message or plain object
             * @returns Promise
             */
            public setSignal(request: lebai.signal.ISetSignalRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls GetSignal.
             * @param request GetSignalRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetSignalResponse
             */
            public getSignal(request: lebai.signal.IGetSignalRequest, callback: lebai.signal.SignalService.GetSignalCallback): void;

            /**
             * Calls GetSignal.
             * @param request GetSignalRequest message or plain object
             * @returns Promise
             */
            public getSignal(request: lebai.signal.IGetSignalRequest): Promise<lebai.signal.GetSignalResponse>;

            /**
             * Calls WaitSignal.
             * @param request WaitSignalRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public waitSignal(request: lebai.signal.IWaitSignalRequest, callback: lebai.signal.SignalService.WaitSignalCallback): void;

            /**
             * Calls WaitSignal.
             * @param request WaitSignalRequest message or plain object
             * @returns Promise
             */
            public waitSignal(request: lebai.signal.IWaitSignalRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls AddSignal.
             * @param request SetSignalRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public addSignal(request: lebai.signal.ISetSignalRequest, callback: lebai.signal.SignalService.AddSignalCallback): void;

            /**
             * Calls AddSignal.
             * @param request SetSignalRequest message or plain object
             * @returns Promise
             */
            public addSignal(request: lebai.signal.ISetSignalRequest): Promise<google.protobuf.Empty>;
        }

        namespace SignalService {

            /**
             * Callback as used by {@link lebai.signal.SignalService#setSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.signal.SignalService#getSignal}.
             * @param error Error, if any
             * @param [response] GetSignalResponse
             */
            type GetSignalCallback = (error: (Error|null), response?: lebai.signal.GetSignalResponse) => void;

            /**
             * Callback as used by {@link lebai.signal.SignalService#waitSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type WaitSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.signal.SignalService#addSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type AddSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace storage. */
    namespace storage {

        /** Properties of an ItemIndex. */
        interface IItemIndex {

            /** ItemIndex key */
            key?: (string|null);
        }

        /** Represents an ItemIndex. */
        class ItemIndex implements IItemIndex {

            /**
             * Constructs a new ItemIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.storage.IItemIndex);

            /** ItemIndex key. */
            public key: string;

            /**
             * Creates a new ItemIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ItemIndex instance
             */
            public static create(properties?: lebai.storage.IItemIndex): lebai.storage.ItemIndex;

            /**
             * Encodes the specified ItemIndex message. Does not implicitly {@link lebai.storage.ItemIndex.verify|verify} messages.
             * @param message ItemIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.storage.IItemIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ItemIndex message, length delimited. Does not implicitly {@link lebai.storage.ItemIndex.verify|verify} messages.
             * @param message ItemIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.storage.IItemIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ItemIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.storage.ItemIndex;

            /**
             * Decodes an ItemIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ItemIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.storage.ItemIndex;

            /**
             * Verifies an ItemIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ItemIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ItemIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.storage.ItemIndex;

            /**
             * Creates a plain object from an ItemIndex message. Also converts values to other types if specified.
             * @param message ItemIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.storage.ItemIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ItemIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Item. */
        interface IItem {

            /** Item key */
            key?: (string|null);

            /** Item value */
            value?: (string|null);
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.storage.IItem);

            /** Item key. */
            public key: string;

            /** Item value. */
            public value: string;

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: lebai.storage.IItem): lebai.storage.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link lebai.storage.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.storage.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link lebai.storage.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.storage.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.storage.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.storage.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): lebai.storage.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.storage.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetItemsRequest. */
        interface IGetItemsRequest {

            /** GetItemsRequest prefix */
            prefix?: (string|null);
        }

        /** Represents a GetItemsRequest. */
        class GetItemsRequest implements IGetItemsRequest {

            /**
             * Constructs a new GetItemsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.storage.IGetItemsRequest);

            /** GetItemsRequest prefix. */
            public prefix: string;

            /**
             * Creates a new GetItemsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetItemsRequest instance
             */
            public static create(properties?: lebai.storage.IGetItemsRequest): lebai.storage.GetItemsRequest;

            /**
             * Encodes the specified GetItemsRequest message. Does not implicitly {@link lebai.storage.GetItemsRequest.verify|verify} messages.
             * @param message GetItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.storage.IGetItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetItemsRequest message, length delimited. Does not implicitly {@link lebai.storage.GetItemsRequest.verify|verify} messages.
             * @param message GetItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.storage.IGetItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetItemsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.storage.GetItemsRequest;

            /**
             * Decodes a GetItemsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.storage.GetItemsRequest;

            /**
             * Verifies a GetItemsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetItemsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetItemsRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.storage.GetItemsRequest;

            /**
             * Creates a plain object from a GetItemsRequest message. Also converts values to other types if specified.
             * @param message GetItemsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.storage.GetItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetItemsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Items. */
        interface IItems {

            /** Items items */
            items?: (lebai.storage.IItem[]|null);
        }

        /** Represents an Items. */
        class Items implements IItems {

            /**
             * Constructs a new Items.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.storage.IItems);

            /** Items items. */
            public items: lebai.storage.IItem[];

            /**
             * Creates a new Items instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Items instance
             */
            public static create(properties?: lebai.storage.IItems): lebai.storage.Items;

            /**
             * Encodes the specified Items message. Does not implicitly {@link lebai.storage.Items.verify|verify} messages.
             * @param message Items message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.storage.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Items message, length delimited. Does not implicitly {@link lebai.storage.Items.verify|verify} messages.
             * @param message Items message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.storage.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Items message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Items
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.storage.Items;

            /**
             * Decodes an Items message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Items
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.storage.Items;

            /**
             * Verifies an Items message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Items message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Items
             */
            public static fromObject(object: { [k: string]: any }): lebai.storage.Items;

            /**
             * Creates a plain object from an Items message. Also converts values to other types if specified.
             * @param message Items
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.storage.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Items to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a StorageService */
        class StorageService extends $protobuf.rpc.Service {

            /**
             * Constructs a new StorageService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new StorageService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StorageService;

            /**
             * Calls SetItem.
             * @param request Item message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setItem(request: lebai.storage.IItem, callback: lebai.storage.StorageService.SetItemCallback): void;

            /**
             * Calls SetItem.
             * @param request Item message or plain object
             * @returns Promise
             */
            public setItem(request: lebai.storage.IItem): Promise<google.protobuf.Empty>;

            /**
             * Calls GetItem.
             * @param request ItemIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Item
             */
            public getItem(request: lebai.storage.IItemIndex, callback: lebai.storage.StorageService.GetItemCallback): void;

            /**
             * Calls GetItem.
             * @param request ItemIndex message or plain object
             * @returns Promise
             */
            public getItem(request: lebai.storage.IItemIndex): Promise<lebai.storage.Item>;

            /**
             * Calls GetItems.
             * @param request GetItemsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Items
             */
            public getItems(request: lebai.storage.IGetItemsRequest, callback: lebai.storage.StorageService.GetItemsCallback): void;

            /**
             * Calls GetItems.
             * @param request GetItemsRequest message or plain object
             * @returns Promise
             */
            public getItems(request: lebai.storage.IGetItemsRequest): Promise<lebai.storage.Items>;
        }

        namespace StorageService {

            /**
             * Callback as used by {@link lebai.storage.StorageService#setItem}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetItemCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.storage.StorageService#getItem}.
             * @param error Error, if any
             * @param [response] Item
             */
            type GetItemCallback = (error: (Error|null), response?: lebai.storage.Item) => void;

            /**
             * Callback as used by {@link lebai.storage.StorageService#getItems}.
             * @param error Error, if any
             * @param [response] Items
             */
            type GetItemsCallback = (error: (Error|null), response?: lebai.storage.Items) => void;
        }
    }

    /** Namespace structure. */
    namespace structure {

        /** Properties of a Structure. */
        interface IStructure {

            /** Structure active */
            active?: (boolean|null);

            /** Structure name */
            name?: (string|null);

            /** Structure kind */
            kind?: (lebai.system.RobotModel|null);

            /** Structure dof */
            dof?: (number|null);

            /** Structure dh */
            dh?: (string|null);

            /** Structure dyn */
            dyn?: (string|null);

            /** Structure servo */
            servo?: (string|null);
        }

        /** Represents a Structure. */
        class Structure implements IStructure {

            /**
             * Constructs a new Structure.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.structure.IStructure);

            /** Structure active. */
            public active: boolean;

            /** Structure name. */
            public name: string;

            /** Structure kind. */
            public kind: lebai.system.RobotModel;

            /** Structure dof. */
            public dof: number;

            /** Structure dh. */
            public dh: string;

            /** Structure dyn. */
            public dyn: string;

            /** Structure servo. */
            public servo: string;

            /**
             * Creates a new Structure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Structure instance
             */
            public static create(properties?: lebai.structure.IStructure): lebai.structure.Structure;

            /**
             * Encodes the specified Structure message. Does not implicitly {@link lebai.structure.Structure.verify|verify} messages.
             * @param message Structure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.structure.IStructure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Structure message, length delimited. Does not implicitly {@link lebai.structure.Structure.verify|verify} messages.
             * @param message Structure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.structure.IStructure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Structure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Structure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.structure.Structure;

            /**
             * Decodes a Structure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Structure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.structure.Structure;

            /**
             * Verifies a Structure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Structure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Structure
             */
            public static fromObject(object: { [k: string]: any }): lebai.structure.Structure;

            /**
             * Creates a plain object from a Structure message. Also converts values to other types if specified.
             * @param message Structure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.structure.Structure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Structure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SaveStructureRequest. */
        interface ISaveStructureRequest {

            /** SaveStructureRequest name */
            name?: (string|null);

            /** SaveStructureRequest data */
            data?: (lebai.structure.IStructure|null);

            /** SaveStructureRequest dir */
            dir?: (string|null);
        }

        /** Represents a SaveStructureRequest. */
        class SaveStructureRequest implements ISaveStructureRequest {

            /**
             * Constructs a new SaveStructureRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.structure.ISaveStructureRequest);

            /** SaveStructureRequest name. */
            public name: string;

            /** SaveStructureRequest data. */
            public data?: (lebai.structure.IStructure|null);

            /** SaveStructureRequest dir. */
            public dir: string;

            /**
             * Creates a new SaveStructureRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveStructureRequest instance
             */
            public static create(properties?: lebai.structure.ISaveStructureRequest): lebai.structure.SaveStructureRequest;

            /**
             * Encodes the specified SaveStructureRequest message. Does not implicitly {@link lebai.structure.SaveStructureRequest.verify|verify} messages.
             * @param message SaveStructureRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.structure.ISaveStructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveStructureRequest message, length delimited. Does not implicitly {@link lebai.structure.SaveStructureRequest.verify|verify} messages.
             * @param message SaveStructureRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.structure.ISaveStructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveStructureRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveStructureRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.structure.SaveStructureRequest;

            /**
             * Decodes a SaveStructureRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveStructureRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.structure.SaveStructureRequest;

            /**
             * Verifies a SaveStructureRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveStructureRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveStructureRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.structure.SaveStructureRequest;

            /**
             * Creates a plain object from a SaveStructureRequest message. Also converts values to other types if specified.
             * @param message SaveStructureRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.structure.SaveStructureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveStructureRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a StructureService */
        class StructureService extends $protobuf.rpc.Service {

            /**
             * Constructs a new StructureService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new StructureService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StructureService;

            /**
             * Calls SaveStructure.
             * @param request SaveStructureRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public saveStructure(request: lebai.structure.ISaveStructureRequest, callback: lebai.structure.StructureService.SaveStructureCallback): void;

            /**
             * Calls SaveStructure.
             * @param request SaveStructureRequest message or plain object
             * @returns Promise
             */
            public saveStructure(request: lebai.structure.ISaveStructureRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls LoadStructure.
             * @param request LoadRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Structure
             */
            public loadStructure(request: lebai.db.ILoadRequest, callback: lebai.structure.StructureService.LoadStructureCallback): void;

            /**
             * Calls LoadStructure.
             * @param request LoadRequest message or plain object
             * @returns Promise
             */
            public loadStructure(request: lebai.db.ILoadRequest): Promise<lebai.structure.Structure>;

            /**
             * Calls LoadStructureList.
             * @param request LoadListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadListResponse
             */
            public loadStructureList(request: lebai.db.ILoadListRequest, callback: lebai.structure.StructureService.LoadStructureListCallback): void;

            /**
             * Calls LoadStructureList.
             * @param request LoadListRequest message or plain object
             * @returns Promise
             */
            public loadStructureList(request: lebai.db.ILoadListRequest): Promise<lebai.db.LoadListResponse>;
        }

        namespace StructureService {

            /**
             * Callback as used by {@link lebai.structure.StructureService#saveStructure}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SaveStructureCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.structure.StructureService#loadStructure}.
             * @param error Error, if any
             * @param [response] Structure
             */
            type LoadStructureCallback = (error: (Error|null), response?: lebai.structure.Structure) => void;

            /**
             * Callback as used by {@link lebai.structure.StructureService#loadStructureList}.
             * @param error Error, if any
             * @param [response] LoadListResponse
             */
            type LoadStructureListCallback = (error: (Error|null), response?: lebai.db.LoadListResponse) => void;
        }
    }

    /** Namespace task. */
    namespace task {

        /** TaskKind enum. */
        enum TaskKind {
            LUA = 0,
            APP = 10
        }

        /** TaskState enum. */
        enum TaskState {
            WAIT = 0,
            RUNNING = 1,
            PAUSE = 2,
            SUCCESS = 3,
            INTERRUPT = 4,
            FAIL = 5,
            BEGIN = 11,
            INTERRUPTING = 14
        }

        /** Properties of a TaskIndex. */
        interface ITaskIndex {

            /** TaskIndex id */
            id?: (number|null);
        }

        /** Represents a TaskIndex. */
        class TaskIndex implements ITaskIndex {

            /**
             * Constructs a new TaskIndex.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.ITaskIndex);

            /** TaskIndex id. */
            public id: number;

            /**
             * Creates a new TaskIndex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskIndex instance
             */
            public static create(properties?: lebai.task.ITaskIndex): lebai.task.TaskIndex;

            /**
             * Encodes the specified TaskIndex message. Does not implicitly {@link lebai.task.TaskIndex.verify|verify} messages.
             * @param message TaskIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.ITaskIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TaskIndex message, length delimited. Does not implicitly {@link lebai.task.TaskIndex.verify|verify} messages.
             * @param message TaskIndex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.ITaskIndex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskIndex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.TaskIndex;

            /**
             * Decodes a TaskIndex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TaskIndex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.TaskIndex;

            /**
             * Verifies a TaskIndex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TaskIndex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TaskIndex
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.TaskIndex;

            /**
             * Creates a plain object from a TaskIndex message. Also converts values to other types if specified.
             * @param message TaskIndex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.TaskIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TaskIndex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Task. */
        interface ITask {

            /** Task id */
            id?: (number|null);

            /** Task blockId */
            blockId?: (string|null);

            /** Task eventId */
            eventId?: (number|null);

            /** Task state */
            state?: (lebai.task.TaskState|null);

            /** Task loopCount */
            loopCount?: (number|null);

            /** Task loopTo */
            loopTo?: (number|null);

            /** Task isParallel */
            isParallel?: (boolean|null);

            /** Task isSimu */
            isSimu?: (boolean|null);

            /** Task stdout */
            stdout?: (string|null);

            /** Task startedAt */
            startedAt?: (google.protobuf.ITimestamp|null);

            /** Task endedAt */
            endedAt?: (google.protobuf.ITimestamp|null);

            /** Task pauseAt */
            pauseAt?: (google.protobuf.ITimestamp|null);

            /** Task prePause */
            prePause?: (number|null);

            /** Task kind */
            kind?: (lebai.task.TaskKind|null);

            /** Task dir */
            dir?: (string|null);

            /** Task name */
            name?: (string|null);

            /** Task params */
            params?: (string[]|null);
        }

        /** Represents a Task. */
        class Task implements ITask {

            /**
             * Constructs a new Task.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.ITask);

            /** Task id. */
            public id: number;

            /** Task blockId. */
            public blockId: string;

            /** Task eventId. */
            public eventId: number;

            /** Task state. */
            public state: lebai.task.TaskState;

            /** Task loopCount. */
            public loopCount: number;

            /** Task loopTo. */
            public loopTo: number;

            /** Task isParallel. */
            public isParallel: boolean;

            /** Task isSimu. */
            public isSimu: boolean;

            /** Task stdout. */
            public stdout: string;

            /** Task startedAt. */
            public startedAt?: (google.protobuf.ITimestamp|null);

            /** Task endedAt. */
            public endedAt?: (google.protobuf.ITimestamp|null);

            /** Task pauseAt. */
            public pauseAt?: (google.protobuf.ITimestamp|null);

            /** Task prePause. */
            public prePause: number;

            /** Task kind. */
            public kind: lebai.task.TaskKind;

            /** Task dir. */
            public dir: string;

            /** Task name. */
            public name: string;

            /** Task params. */
            public params: string[];

            /**
             * Creates a new Task instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Task instance
             */
            public static create(properties?: lebai.task.ITask): lebai.task.Task;

            /**
             * Encodes the specified Task message. Does not implicitly {@link lebai.task.Task.verify|verify} messages.
             * @param message Task message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Task message, length delimited. Does not implicitly {@link lebai.task.Task.verify|verify} messages.
             * @param message Task message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Task message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.Task;

            /**
             * Decodes a Task message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.Task;

            /**
             * Verifies a Task message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Task message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Task
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.Task;

            /**
             * Creates a plain object from a Task message. Also converts values to other types if specified.
             * @param message Task
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Task to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TaskIds. */
        interface ITaskIds {

            /** TaskIds ids */
            ids?: (number[]|null);
        }

        /** Represents a TaskIds. */
        class TaskIds implements ITaskIds {

            /**
             * Constructs a new TaskIds.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.ITaskIds);

            /** TaskIds ids. */
            public ids: number[];

            /**
             * Creates a new TaskIds instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskIds instance
             */
            public static create(properties?: lebai.task.ITaskIds): lebai.task.TaskIds;

            /**
             * Encodes the specified TaskIds message. Does not implicitly {@link lebai.task.TaskIds.verify|verify} messages.
             * @param message TaskIds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.ITaskIds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TaskIds message, length delimited. Does not implicitly {@link lebai.task.TaskIds.verify|verify} messages.
             * @param message TaskIds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.ITaskIds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskIds message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskIds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.TaskIds;

            /**
             * Decodes a TaskIds message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TaskIds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.TaskIds;

            /**
             * Verifies a TaskIds message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TaskIds message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TaskIds
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.TaskIds;

            /**
             * Creates a plain object from a TaskIds message. Also converts values to other types if specified.
             * @param message TaskIds
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.TaskIds, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TaskIds to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Tasks. */
        interface ITasks {

            /** Tasks tasks */
            tasks?: (lebai.task.ITask[]|null);
        }

        /** Represents a Tasks. */
        class Tasks implements ITasks {

            /**
             * Constructs a new Tasks.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.ITasks);

            /** Tasks tasks. */
            public tasks: lebai.task.ITask[];

            /**
             * Creates a new Tasks instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tasks instance
             */
            public static create(properties?: lebai.task.ITasks): lebai.task.Tasks;

            /**
             * Encodes the specified Tasks message. Does not implicitly {@link lebai.task.Tasks.verify|verify} messages.
             * @param message Tasks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.ITasks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tasks message, length delimited. Does not implicitly {@link lebai.task.Tasks.verify|verify} messages.
             * @param message Tasks message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.ITasks, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tasks message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tasks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.Tasks;

            /**
             * Decodes a Tasks message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tasks
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.Tasks;

            /**
             * Verifies a Tasks message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tasks message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tasks
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.Tasks;

            /**
             * Creates a plain object from a Tasks message. Also converts values to other types if specified.
             * @param message Tasks
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.Tasks, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tasks to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TaskStdout. */
        interface ITaskStdout {

            /** TaskStdout done */
            done?: (boolean|null);

            /** TaskStdout stdout */
            stdout?: (string|null);
        }

        /** Represents a TaskStdout. */
        class TaskStdout implements ITaskStdout {

            /**
             * Constructs a new TaskStdout.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.ITaskStdout);

            /** TaskStdout done. */
            public done: boolean;

            /** TaskStdout stdout. */
            public stdout: string;

            /**
             * Creates a new TaskStdout instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskStdout instance
             */
            public static create(properties?: lebai.task.ITaskStdout): lebai.task.TaskStdout;

            /**
             * Encodes the specified TaskStdout message. Does not implicitly {@link lebai.task.TaskStdout.verify|verify} messages.
             * @param message TaskStdout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.ITaskStdout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TaskStdout message, length delimited. Does not implicitly {@link lebai.task.TaskStdout.verify|verify} messages.
             * @param message TaskStdout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.ITaskStdout, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskStdout message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskStdout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.TaskStdout;

            /**
             * Decodes a TaskStdout message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TaskStdout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.TaskStdout;

            /**
             * Verifies a TaskStdout message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TaskStdout message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TaskStdout
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.TaskStdout;

            /**
             * Creates a plain object from a TaskStdout message. Also converts values to other types if specified.
             * @param message TaskStdout
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.TaskStdout, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TaskStdout to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartTaskRequest. */
        interface IStartTaskRequest {

            /** StartTaskRequest name */
            name?: (string|null);

            /** StartTaskRequest isParallel */
            isParallel?: (boolean|null);

            /** StartTaskRequest loopTo */
            loopTo?: (number|null);

            /** StartTaskRequest dir */
            dir?: (string|null);

            /** StartTaskRequest kind */
            kind?: (lebai.task.TaskKind|null);

            /** StartTaskRequest params */
            params?: (string[]|null);
        }

        /** Represents a StartTaskRequest. */
        class StartTaskRequest implements IStartTaskRequest {

            /**
             * Constructs a new StartTaskRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.IStartTaskRequest);

            /** StartTaskRequest name. */
            public name: string;

            /** StartTaskRequest isParallel. */
            public isParallel: boolean;

            /** StartTaskRequest loopTo. */
            public loopTo: number;

            /** StartTaskRequest dir. */
            public dir: string;

            /** StartTaskRequest kind. */
            public kind: lebai.task.TaskKind;

            /** StartTaskRequest params. */
            public params: string[];

            /**
             * Creates a new StartTaskRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartTaskRequest instance
             */
            public static create(properties?: lebai.task.IStartTaskRequest): lebai.task.StartTaskRequest;

            /**
             * Encodes the specified StartTaskRequest message. Does not implicitly {@link lebai.task.StartTaskRequest.verify|verify} messages.
             * @param message StartTaskRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.IStartTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartTaskRequest message, length delimited. Does not implicitly {@link lebai.task.StartTaskRequest.verify|verify} messages.
             * @param message StartTaskRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.IStartTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartTaskRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartTaskRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.StartTaskRequest;

            /**
             * Decodes a StartTaskRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartTaskRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.StartTaskRequest;

            /**
             * Verifies a StartTaskRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartTaskRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartTaskRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.StartTaskRequest;

            /**
             * Creates a plain object from a StartTaskRequest message. Also converts values to other types if specified.
             * @param message StartTaskRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.StartTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartTaskRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PauseRequest. */
        interface IPauseRequest {

            /** PauseRequest id */
            id?: (number|null);

            /** PauseRequest time */
            time?: (number|Long|null);

            /** PauseRequest wait */
            wait?: (boolean|null);
        }

        /** Represents a PauseRequest. */
        class PauseRequest implements IPauseRequest {

            /**
             * Constructs a new PauseRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.task.IPauseRequest);

            /** PauseRequest id. */
            public id: number;

            /** PauseRequest time. */
            public time: (number|Long);

            /** PauseRequest wait. */
            public wait: boolean;

            /**
             * Creates a new PauseRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PauseRequest instance
             */
            public static create(properties?: lebai.task.IPauseRequest): lebai.task.PauseRequest;

            /**
             * Encodes the specified PauseRequest message. Does not implicitly {@link lebai.task.PauseRequest.verify|verify} messages.
             * @param message PauseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.task.IPauseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PauseRequest message, length delimited. Does not implicitly {@link lebai.task.PauseRequest.verify|verify} messages.
             * @param message PauseRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.task.IPauseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PauseRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PauseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.task.PauseRequest;

            /**
             * Decodes a PauseRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PauseRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.task.PauseRequest;

            /**
             * Verifies a PauseRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PauseRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PauseRequest
             */
            public static fromObject(object: { [k: string]: any }): lebai.task.PauseRequest;

            /**
             * Creates a plain object from a PauseRequest message. Also converts values to other types if specified.
             * @param message PauseRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.task.PauseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PauseRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a TaskService */
        class TaskService extends $protobuf.rpc.Service {

            /**
             * Constructs a new TaskService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new TaskService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TaskService;

            /**
             * Calls LoadTask.
             * @param request TaskIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Task
             */
            public loadTask(request: lebai.task.ITaskIndex, callback: lebai.task.TaskService.LoadTaskCallback): void;

            /**
             * Calls LoadTask.
             * @param request TaskIndex message or plain object
             * @returns Promise
             */
            public loadTask(request: lebai.task.ITaskIndex): Promise<lebai.task.Task>;

            /**
             * Calls LoadTaskList.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskIds
             */
            public loadTaskList(request: google.protobuf.IEmpty, callback: lebai.task.TaskService.LoadTaskListCallback): void;

            /**
             * Calls LoadTaskList.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public loadTaskList(request: google.protobuf.IEmpty): Promise<lebai.task.TaskIds>;

            /**
             * Calls LoadRunningTasks.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Tasks
             */
            public loadRunningTasks(request: google.protobuf.IEmpty, callback: lebai.task.TaskService.LoadRunningTasksCallback): void;

            /**
             * Calls LoadRunningTasks.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public loadRunningTasks(request: google.protobuf.IEmpty): Promise<lebai.task.Tasks>;

            /**
             * Calls StartTask.
             * @param request StartTaskRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskIndex
             */
            public startTask(request: lebai.task.IStartTaskRequest, callback: lebai.task.TaskService.StartTaskCallback): void;

            /**
             * Calls StartTask.
             * @param request StartTaskRequest message or plain object
             * @returns Promise
             */
            public startTask(request: lebai.task.IStartTaskRequest): Promise<lebai.task.TaskIndex>;

            /**
             * Calls GetTaskStdout.
             * @param request TaskIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskStdout
             */
            public getTaskStdout(request: lebai.task.ITaskIndex, callback: lebai.task.TaskService.GetTaskStdoutCallback): void;

            /**
             * Calls GetTaskStdout.
             * @param request TaskIndex message or plain object
             * @returns Promise
             */
            public getTaskStdout(request: lebai.task.ITaskIndex): Promise<lebai.task.TaskStdout>;

            /**
             * Calls SubTaskStdout.
             * @param request TaskIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskStdout
             */
            public subTaskStdout(request: lebai.task.ITaskIndex, callback: lebai.task.TaskService.SubTaskStdoutCallback): void;

            /**
             * Calls SubTaskStdout.
             * @param request TaskIndex message or plain object
             * @returns Promise
             */
            public subTaskStdout(request: lebai.task.ITaskIndex): Promise<lebai.task.TaskStdout>;

            /**
             * Calls PauseTask.
             * @param request PauseRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public pauseTask(request: lebai.task.IPauseRequest, callback: lebai.task.TaskService.PauseTaskCallback): void;

            /**
             * Calls PauseTask.
             * @param request PauseRequest message or plain object
             * @returns Promise
             */
            public pauseTask(request: lebai.task.IPauseRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls ResumeTask.
             * @param request TaskIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public resumeTask(request: lebai.task.ITaskIndex, callback: lebai.task.TaskService.ResumeTaskCallback): void;

            /**
             * Calls ResumeTask.
             * @param request TaskIndex message or plain object
             * @returns Promise
             */
            public resumeTask(request: lebai.task.ITaskIndex): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelTask.
             * @param request TaskIndex message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelTask(request: lebai.task.ITaskIndex, callback: lebai.task.TaskService.CancelTaskCallback): void;

            /**
             * Calls CancelTask.
             * @param request TaskIndex message or plain object
             * @returns Promise
             */
            public cancelTask(request: lebai.task.ITaskIndex): Promise<google.protobuf.Empty>;
        }

        namespace TaskService {

            /**
             * Callback as used by {@link lebai.task.TaskService#loadTask}.
             * @param error Error, if any
             * @param [response] Task
             */
            type LoadTaskCallback = (error: (Error|null), response?: lebai.task.Task) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#loadTaskList}.
             * @param error Error, if any
             * @param [response] TaskIds
             */
            type LoadTaskListCallback = (error: (Error|null), response?: lebai.task.TaskIds) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#loadRunningTasks}.
             * @param error Error, if any
             * @param [response] Tasks
             */
            type LoadRunningTasksCallback = (error: (Error|null), response?: lebai.task.Tasks) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#startTask}.
             * @param error Error, if any
             * @param [response] TaskIndex
             */
            type StartTaskCallback = (error: (Error|null), response?: lebai.task.TaskIndex) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#getTaskStdout}.
             * @param error Error, if any
             * @param [response] TaskStdout
             */
            type GetTaskStdoutCallback = (error: (Error|null), response?: lebai.task.TaskStdout) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#subTaskStdout}.
             * @param error Error, if any
             * @param [response] TaskStdout
             */
            type SubTaskStdoutCallback = (error: (Error|null), response?: lebai.task.TaskStdout) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#pauseTask}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type PauseTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#resumeTask}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ResumeTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.task.TaskService#cancelTask}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace trigger. */
    namespace trigger {

        /** Properties of a Condition. */
        interface ICondition {

            /** Condition pressed */
            pressed?: (lebai.io.IButtonIndex[]|null);

            /** Condition button */
            button?: (lebai.io.IButtonIndex|null);

            /** Condition status */
            status?: (lebai.io.IButtonStatus|null);

            /** Condition startup */
            startup?: (boolean|null);
        }

        /** Represents a Condition. */
        class Condition implements ICondition {

            /**
             * Constructs a new Condition.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.trigger.ICondition);

            /** Condition pressed. */
            public pressed: lebai.io.IButtonIndex[];

            /** Condition button. */
            public button?: (lebai.io.IButtonIndex|null);

            /** Condition status. */
            public status?: (lebai.io.IButtonStatus|null);

            /** Condition startup. */
            public startup: boolean;

            /**
             * Creates a new Condition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Condition instance
             */
            public static create(properties?: lebai.trigger.ICondition): lebai.trigger.Condition;

            /**
             * Encodes the specified Condition message. Does not implicitly {@link lebai.trigger.Condition.verify|verify} messages.
             * @param message Condition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.trigger.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Condition message, length delimited. Does not implicitly {@link lebai.trigger.Condition.verify|verify} messages.
             * @param message Condition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.trigger.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Condition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Condition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.trigger.Condition;

            /**
             * Decodes a Condition message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Condition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.trigger.Condition;

            /**
             * Verifies a Condition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Condition message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Condition
             */
            public static fromObject(object: { [k: string]: any }): lebai.trigger.Condition;

            /**
             * Creates a plain object from a Condition message. Also converts values to other types if specified.
             * @param message Condition
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.trigger.Condition, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Condition to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Function enum. */
        enum Function {
            NONE = 0,
            START_TEACH_MODE = 1,
            END_TEACH_MODE = 2,
            SET_ZERO = 3,
            CHANGE_POWER = 4
        }

        /** Properties of a Trigger. */
        interface ITrigger {

            /** Trigger condition */
            condition?: (lebai.trigger.ICondition|null);

            /** Trigger function */
            "function"?: (lebai.trigger.Function|null);
        }

        /** Represents a Trigger. */
        class Trigger implements ITrigger {

            /**
             * Constructs a new Trigger.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.trigger.ITrigger);

            /** Trigger condition. */
            public condition?: (lebai.trigger.ICondition|null);

            /** Trigger function. */
            public function: lebai.trigger.Function;

            /**
             * Creates a new Trigger instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Trigger instance
             */
            public static create(properties?: lebai.trigger.ITrigger): lebai.trigger.Trigger;

            /**
             * Encodes the specified Trigger message. Does not implicitly {@link lebai.trigger.Trigger.verify|verify} messages.
             * @param message Trigger message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.trigger.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Trigger message, length delimited. Does not implicitly {@link lebai.trigger.Trigger.verify|verify} messages.
             * @param message Trigger message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.trigger.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Trigger message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Trigger
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.trigger.Trigger;

            /**
             * Decodes a Trigger message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Trigger
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.trigger.Trigger;

            /**
             * Verifies a Trigger message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Trigger message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Trigger
             */
            public static fromObject(object: { [k: string]: any }): lebai.trigger.Trigger;

            /**
             * Creates a plain object from a Trigger message. Also converts values to other types if specified.
             * @param message Trigger
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.trigger.Trigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Trigger to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Triggers. */
        interface ITriggers {

            /** Triggers triggers */
            triggers?: (lebai.trigger.ITrigger[]|null);
        }

        /** Represents a Triggers. */
        class Triggers implements ITriggers {

            /**
             * Constructs a new Triggers.
             * @param [properties] Properties to set
             */
            constructor(properties?: lebai.trigger.ITriggers);

            /** Triggers triggers. */
            public triggers: lebai.trigger.ITrigger[];

            /**
             * Creates a new Triggers instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Triggers instance
             */
            public static create(properties?: lebai.trigger.ITriggers): lebai.trigger.Triggers;

            /**
             * Encodes the specified Triggers message. Does not implicitly {@link lebai.trigger.Triggers.verify|verify} messages.
             * @param message Triggers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lebai.trigger.ITriggers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Triggers message, length delimited. Does not implicitly {@link lebai.trigger.Triggers.verify|verify} messages.
             * @param message Triggers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lebai.trigger.ITriggers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Triggers message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Triggers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lebai.trigger.Triggers;

            /**
             * Decodes a Triggers message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Triggers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lebai.trigger.Triggers;

            /**
             * Verifies a Triggers message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Triggers message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Triggers
             */
            public static fromObject(object: { [k: string]: any }): lebai.trigger.Triggers;

            /**
             * Creates a plain object from a Triggers message. Also converts values to other types if specified.
             * @param message Triggers
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lebai.trigger.Triggers, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Triggers to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a TriggerService */
        class TriggerService extends $protobuf.rpc.Service {

            /**
             * Constructs a new TriggerService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new TriggerService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TriggerService;

            /**
             * Calls SetTrigger.
             * @param request Trigger message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public setTrigger(request: lebai.trigger.ITrigger, callback: lebai.trigger.TriggerService.SetTriggerCallback): void;

            /**
             * Calls SetTrigger.
             * @param request Trigger message or plain object
             * @returns Promise
             */
            public setTrigger(request: lebai.trigger.ITrigger): Promise<google.protobuf.Empty>;

            /**
             * Calls GetTriggers.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Triggers
             */
            public getTriggers(request: google.protobuf.IEmpty, callback: lebai.trigger.TriggerService.GetTriggersCallback): void;

            /**
             * Calls GetTriggers.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public getTriggers(request: google.protobuf.IEmpty): Promise<lebai.trigger.Triggers>;
        }

        namespace TriggerService {

            /**
             * Callback as used by {@link lebai.trigger.TriggerService#setTrigger}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type SetTriggerCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link lebai.trigger.TriggerService#getTriggers}.
             * @param error Error, if any
             * @param [response] Triggers
             */
            type GetTriggersCallback = (error: (Error|null), response?: lebai.trigger.Triggers) => void;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
