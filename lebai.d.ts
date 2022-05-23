import * as $protobuf from "protobufjs";
/** Namespace lebai. */
export namespace lebai {
  /** Namespace scene. */
  namespace scene {
    /** SceneKind enum. */
    enum SceneKind {
      UNSPECIFIED = 0,
      TIME_LINE = 1,
      BLOCKLY = 2,
      LUA = 3,
      TREE = 4,
      PYTHON = 5,
    }

    /** Properties of a SceneModel. */
    interface ISceneModel {
      /** SceneModel id */
      id?: number | null;

      /** SceneModel status */
      status?: lebai.sql.DataStatus | null;

      /** SceneModel top */
      top?: number | null;

      /** SceneModel userId */
      userId?: number | null;

      /** SceneModel createdAt */
      createdAt?: google.protobuf.ITimestamp | null;

      /** SceneModel updatedAt */
      updatedAt?: google.protobuf.ITimestamp | null;

      /** SceneModel name */
      name?: string | null;

      /** SceneModel kind */
      kind?: lebai.scene.SceneKind | null;

      /** SceneModel source */
      source?: string | null;

      /** SceneModel code */
      code?: string | null;

      /** SceneModel checkFirst */
      checkFirst?: boolean | null;

      /** SceneModel first */
      first?: string | null;

      /** SceneModel loopTo */
      loopTo?: number | null;

      /** SceneModel debug */
      debug?: string | null;
    }

    /** Represents a SceneModel. */
    class SceneModel implements ISceneModel {
      /**
       * Constructs a new SceneModel.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneModel);

      /** SceneModel id. */
      public id: number;

      /** SceneModel status. */
      public status: lebai.sql.DataStatus;

      /** SceneModel top. */
      public top: number;

      /** SceneModel userId. */
      public userId: number;

      /** SceneModel createdAt. */
      public createdAt?: google.protobuf.ITimestamp | null;

      /** SceneModel updatedAt. */
      public updatedAt?: google.protobuf.ITimestamp | null;

      /** SceneModel name. */
      public name: string;

      /** SceneModel kind. */
      public kind: lebai.scene.SceneKind;

      /** SceneModel source. */
      public source: string;

      /** SceneModel code. */
      public code: string;

      /** SceneModel checkFirst. */
      public checkFirst: boolean;

      /** SceneModel first. */
      public first: string;

      /** SceneModel loopTo. */
      public loopTo: number;

      /** SceneModel debug. */
      public debug: string;

      /**
       * Creates a new SceneModel instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneModel instance
       */
      public static create(
        properties?: lebai.scene.ISceneModel
      ): lebai.scene.SceneModel;

      /**
       * Encodes the specified SceneModel message. Does not implicitly {@link lebai.scene.SceneModel.verify|verify} messages.
       * @param message SceneModel message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneModel,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneModel message, length delimited. Does not implicitly {@link lebai.scene.SceneModel.verify|verify} messages.
       * @param message SceneModel message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneModel,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneModel message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneModel
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneModel;

      /**
       * Decodes a SceneModel message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneModel
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneModel;

      /**
       * Verifies a SceneModel message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneModel message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneModel
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneModel;

      /**
       * Creates a plain object from a SceneModel message. Also converts values to other types if specified.
       * @param message SceneModel
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneModel,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneModel to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneModelField. */
    interface ISceneModelField {
      /** SceneModelField id */
      id?: number | null;

      /** SceneModelField status */
      status?: lebai.sql.DataStatus | null;

      /** SceneModelField top */
      top?: number | null;

      /** SceneModelField userId */
      userId?: number | null;

      /** SceneModelField createdAt */
      createdAt?: google.protobuf.ITimestamp | null;

      /** SceneModelField updatedAt */
      updatedAt?: google.protobuf.ITimestamp | null;

      /** SceneModelField name */
      name?: string | null;

      /** SceneModelField kind */
      kind?: lebai.scene.SceneKind | null;

      /** SceneModelField source */
      source?: string | null;

      /** SceneModelField code */
      code?: string | null;

      /** SceneModelField checkFirst */
      checkFirst?: boolean | null;

      /** SceneModelField first */
      first?: string | null;

      /** SceneModelField loopTo */
      loopTo?: number | null;

      /** SceneModelField debug */
      debug?: string | null;
    }

    /** Represents a SceneModelField. */
    class SceneModelField implements ISceneModelField {
      /**
       * Constructs a new SceneModelField.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneModelField);

      /** SceneModelField id. */
      public id?: number | null;

      /** SceneModelField status. */
      public status?: lebai.sql.DataStatus | null;

      /** SceneModelField top. */
      public top?: number | null;

      /** SceneModelField userId. */
      public userId?: number | null;

      /** SceneModelField createdAt. */
      public createdAt?: google.protobuf.ITimestamp | null;

      /** SceneModelField updatedAt. */
      public updatedAt?: google.protobuf.ITimestamp | null;

      /** SceneModelField name. */
      public name?: string | null;

      /** SceneModelField kind. */
      public kind?: lebai.scene.SceneKind | null;

      /** SceneModelField source. */
      public source?: string | null;

      /** SceneModelField code. */
      public code?: string | null;

      /** SceneModelField checkFirst. */
      public checkFirst?: boolean | null;

      /** SceneModelField first. */
      public first?: string | null;

      /** SceneModelField loopTo. */
      public loopTo?: number | null;

      /** SceneModelField debug. */
      public debug?: string | null;

      /** SceneModelField field. */
      public field?:
        | "id"
        | "status"
        | "top"
        | "userId"
        | "createdAt"
        | "updatedAt"
        | "name"
        | "kind"
        | "source"
        | "code"
        | "checkFirst"
        | "first"
        | "loopTo"
        | "debug";

      /**
       * Creates a new SceneModelField instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneModelField instance
       */
      public static create(
        properties?: lebai.scene.ISceneModelField
      ): lebai.scene.SceneModelField;

      /**
       * Encodes the specified SceneModelField message. Does not implicitly {@link lebai.scene.SceneModelField.verify|verify} messages.
       * @param message SceneModelField message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneModelField,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneModelField message, length delimited. Does not implicitly {@link lebai.scene.SceneModelField.verify|verify} messages.
       * @param message SceneModelField message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneModelField,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneModelField message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneModelField
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneModelField;

      /**
       * Decodes a SceneModelField message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneModelField
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneModelField;

      /**
       * Verifies a SceneModelField message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneModelField message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneModelField
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneModelField;

      /**
       * Creates a plain object from a SceneModelField message. Also converts values to other types if specified.
       * @param message SceneModelField
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneModelField,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneModelField to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneSaveRequest. */
    interface ISceneSaveRequest {
      /** SceneSaveRequest ids */
      ids?: lebai.sql.IIds | null;

      /** SceneSaveRequest fields */
      fields?: lebai.scene.ISceneModelField[] | null;
    }

    /** Represents a SceneSaveRequest. */
    class SceneSaveRequest implements ISceneSaveRequest {
      /**
       * Constructs a new SceneSaveRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneSaveRequest);

      /** SceneSaveRequest ids. */
      public ids?: lebai.sql.IIds | null;

      /** SceneSaveRequest fields. */
      public fields: lebai.scene.ISceneModelField[];

      /**
       * Creates a new SceneSaveRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneSaveRequest instance
       */
      public static create(
        properties?: lebai.scene.ISceneSaveRequest
      ): lebai.scene.SceneSaveRequest;

      /**
       * Encodes the specified SceneSaveRequest message. Does not implicitly {@link lebai.scene.SceneSaveRequest.verify|verify} messages.
       * @param message SceneSaveRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneSaveRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneSaveRequest message, length delimited. Does not implicitly {@link lebai.scene.SceneSaveRequest.verify|verify} messages.
       * @param message SceneSaveRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneSaveRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneSaveRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneSaveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneSaveRequest;

      /**
       * Decodes a SceneSaveRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneSaveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneSaveRequest;

      /**
       * Verifies a SceneSaveRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneSaveRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneSaveRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneSaveRequest;

      /**
       * Creates a plain object from a SceneSaveRequest message. Also converts values to other types if specified.
       * @param message SceneSaveRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneSaveRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneSaveRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneListRequest. */
    interface ISceneListRequest {
      /** SceneListRequest filter */
      filter?: lebai.sql.IListFilter | null;

      /** SceneListRequest exact */
      exact?: lebai.scene.ISceneModelField[] | null;
    }

    /** Represents a SceneListRequest. */
    class SceneListRequest implements ISceneListRequest {
      /**
       * Constructs a new SceneListRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneListRequest);

      /** SceneListRequest filter. */
      public filter?: lebai.sql.IListFilter | null;

      /** SceneListRequest exact. */
      public exact: lebai.scene.ISceneModelField[];

      /**
       * Creates a new SceneListRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneListRequest instance
       */
      public static create(
        properties?: lebai.scene.ISceneListRequest
      ): lebai.scene.SceneListRequest;

      /**
       * Encodes the specified SceneListRequest message. Does not implicitly {@link lebai.scene.SceneListRequest.verify|verify} messages.
       * @param message SceneListRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneListRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneListRequest message, length delimited. Does not implicitly {@link lebai.scene.SceneListRequest.verify|verify} messages.
       * @param message SceneListRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneListRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneListRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneListRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneListRequest;

      /**
       * Decodes a SceneListRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneListRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneListRequest;

      /**
       * Verifies a SceneListRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneListRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneListRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneListRequest;

      /**
       * Creates a plain object from a SceneListRequest message. Also converts values to other types if specified.
       * @param message SceneListRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneListRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneListRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneListResponse. */
    interface ISceneListResponse {
      /** SceneListResponse list */
      list?: lebai.scene.ISceneModel[] | null;

      /** SceneListResponse pager */
      pager?: lebai.sql.IPagination | null;
    }

    /** Represents a SceneListResponse. */
    class SceneListResponse implements ISceneListResponse {
      /**
       * Constructs a new SceneListResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneListResponse);

      /** SceneListResponse list. */
      public list: lebai.scene.ISceneModel[];

      /** SceneListResponse pager. */
      public pager?: lebai.sql.IPagination | null;

      /**
       * Creates a new SceneListResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneListResponse instance
       */
      public static create(
        properties?: lebai.scene.ISceneListResponse
      ): lebai.scene.SceneListResponse;

      /**
       * Encodes the specified SceneListResponse message. Does not implicitly {@link lebai.scene.SceneListResponse.verify|verify} messages.
       * @param message SceneListResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneListResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneListResponse message, length delimited. Does not implicitly {@link lebai.scene.SceneListResponse.verify|verify} messages.
       * @param message SceneListResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneListResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneListResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneListResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneListResponse;

      /**
       * Decodes a SceneListResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneListResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneListResponse;

      /**
       * Verifies a SceneListResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneListResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneListResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneListResponse;

      /**
       * Creates a plain object from a SceneListResponse message. Also converts values to other types if specified.
       * @param message SceneListResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneListResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneListResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneRunRequest. */
    interface ISceneRunRequest {
      /** SceneRunRequest id */
      id?: lebai.sql.IIdOrKey | null;

      /** SceneRunRequest isMain */
      isMain?: boolean | null;
    }

    /** Represents a SceneRunRequest. */
    class SceneRunRequest implements ISceneRunRequest {
      /**
       * Constructs a new SceneRunRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneRunRequest);

      /** SceneRunRequest id. */
      public id?: lebai.sql.IIdOrKey | null;

      /** SceneRunRequest isMain. */
      public isMain: boolean;

      /**
       * Creates a new SceneRunRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneRunRequest instance
       */
      public static create(
        properties?: lebai.scene.ISceneRunRequest
      ): lebai.scene.SceneRunRequest;

      /**
       * Encodes the specified SceneRunRequest message. Does not implicitly {@link lebai.scene.SceneRunRequest.verify|verify} messages.
       * @param message SceneRunRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneRunRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneRunRequest message, length delimited. Does not implicitly {@link lebai.scene.SceneRunRequest.verify|verify} messages.
       * @param message SceneRunRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneRunRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneRunRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneRunRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneRunRequest;

      /**
       * Decodes a SceneRunRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneRunRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneRunRequest;

      /**
       * Verifies a SceneRunRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneRunRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneRunRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneRunRequest;

      /**
       * Creates a plain object from a SceneRunRequest message. Also converts values to other types if specified.
       * @param message SceneRunRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneRunRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneRunRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a SceneRunResponse. */
    interface ISceneRunResponse {
      /** SceneRunResponse task */
      task?: number | null;
    }

    /** Represents a SceneRunResponse. */
    class SceneRunResponse implements ISceneRunResponse {
      /**
       * Constructs a new SceneRunResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.scene.ISceneRunResponse);

      /** SceneRunResponse task. */
      public task: number;

      /**
       * Creates a new SceneRunResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SceneRunResponse instance
       */
      public static create(
        properties?: lebai.scene.ISceneRunResponse
      ): lebai.scene.SceneRunResponse;

      /**
       * Encodes the specified SceneRunResponse message. Does not implicitly {@link lebai.scene.SceneRunResponse.verify|verify} messages.
       * @param message SceneRunResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.scene.ISceneRunResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SceneRunResponse message, length delimited. Does not implicitly {@link lebai.scene.SceneRunResponse.verify|verify} messages.
       * @param message SceneRunResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.scene.ISceneRunResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SceneRunResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SceneRunResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.scene.SceneRunResponse;

      /**
       * Decodes a SceneRunResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SceneRunResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.scene.SceneRunResponse;

      /**
       * Verifies a SceneRunResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SceneRunResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SceneRunResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.scene.SceneRunResponse;

      /**
       * Creates a plain object from a SceneRunResponse message. Also converts values to other types if specified.
       * @param message SceneRunResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.scene.SceneRunResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SceneRunResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** 任务相关服务 */
    class SceneService extends $protobuf.rpc.Service {
      /**
       * Constructs a new SceneService service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      );

      /**
       * Creates new SceneService service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      ): SceneService;

      /**
       * Calls SaveScene.
       * @param request SceneSaveRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and SceneModel
       */
      public saveScene(
        request: lebai.scene.ISceneSaveRequest,
        callback: lebai.scene.SceneService.SaveSceneCallback
      ): void;

      /**
       * Calls SaveScene.
       * @param request SceneSaveRequest message or plain object
       * @returns Promise
       */
      public saveScene(
        request: lebai.scene.ISceneSaveRequest
      ): Promise<lebai.scene.SceneModel>;

      /**
       * Calls LoadScene.
       * @param request IndexRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and SceneModel
       */
      public loadScene(
        request: lebai.sql.IIndexRequest,
        callback: lebai.scene.SceneService.LoadSceneCallback
      ): void;

      /**
       * Calls LoadScene.
       * @param request IndexRequest message or plain object
       * @returns Promise
       */
      public loadScene(
        request: lebai.sql.IIndexRequest
      ): Promise<lebai.scene.SceneModel>;

      /**
       * Calls LoadSceneList.
       * @param request SceneListRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and SceneListResponse
       */
      public loadSceneList(
        request: lebai.scene.ISceneListRequest,
        callback: lebai.scene.SceneService.LoadSceneListCallback
      ): void;

      /**
       * Calls LoadSceneList.
       * @param request SceneListRequest message or plain object
       * @returns Promise
       */
      public loadSceneList(
        request: lebai.scene.ISceneListRequest
      ): Promise<lebai.scene.SceneListResponse>;

      /**
       * Calls Scene.
       * @param request SceneRunRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and SceneRunResponse
       */
      public scene(
        request: lebai.scene.ISceneRunRequest,
        callback: lebai.scene.SceneService.SceneCallback
      ): void;

      /**
       * Calls Scene.
       * @param request SceneRunRequest message or plain object
       * @returns Promise
       */
      public scene(
        request: lebai.scene.ISceneRunRequest
      ): Promise<lebai.scene.SceneRunResponse>;
    }

    namespace SceneService {
      /**
       * Callback as used by {@link lebai.scene.SceneService#saveScene}.
       * @param error Error, if any
       * @param [response] SceneModel
       */
      type SaveSceneCallback = (
        error: Error | null,
        response?: lebai.scene.SceneModel
      ) => void;

      /**
       * Callback as used by {@link lebai.scene.SceneService#loadScene}.
       * @param error Error, if any
       * @param [response] SceneModel
       */
      type LoadSceneCallback = (
        error: Error | null,
        response?: lebai.scene.SceneModel
      ) => void;

      /**
       * Callback as used by {@link lebai.scene.SceneService#loadSceneList}.
       * @param error Error, if any
       * @param [response] SceneListResponse
       */
      type LoadSceneListCallback = (
        error: Error | null,
        response?: lebai.scene.SceneListResponse
      ) => void;

      /**
       * Callback as used by {@link lebai.scene.SceneService#scene}.
       * @param error Error, if any
       * @param [response] SceneRunResponse
       */
      type SceneCallback = (
        error: Error | null,
        response?: lebai.scene.SceneRunResponse
      ) => void;
    }
  }

  /** Namespace sql. */
  namespace sql {
    /** Properties of an IdOrKey. */
    interface IIdOrKey {
      /** IdOrKey id */
      id?: number | null;

      /** IdOrKey key */
      key?: string | null;
    }

    /** ID/Name 索引 */
    class IdOrKey implements IIdOrKey {
      /**
       * Constructs a new IdOrKey.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IIdOrKey);

      /** IdOrKey id. */
      public id?: number | null;

      /** IdOrKey key. */
      public key?: string | null;

      /** IdOrKey index. */
      public index?: "id" | "key";

      /**
       * Creates a new IdOrKey instance using the specified properties.
       * @param [properties] Properties to set
       * @returns IdOrKey instance
       */
      public static create(properties?: lebai.sql.IIdOrKey): lebai.sql.IdOrKey;

      /**
       * Encodes the specified IdOrKey message. Does not implicitly {@link lebai.sql.IdOrKey.verify|verify} messages.
       * @param message IdOrKey message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IIdOrKey,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified IdOrKey message, length delimited. Does not implicitly {@link lebai.sql.IdOrKey.verify|verify} messages.
       * @param message IdOrKey message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IIdOrKey,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an IdOrKey message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns IdOrKey
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.IdOrKey;

      /**
       * Decodes an IdOrKey message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns IdOrKey
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.IdOrKey;

      /**
       * Verifies an IdOrKey message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an IdOrKey message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns IdOrKey
       */
      public static fromObject(object: { [k: string]: any }): lebai.sql.IdOrKey;

      /**
       * Creates a plain object from an IdOrKey message. Also converts values to other types if specified.
       * @param message IdOrKey
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.IdOrKey,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this IdOrKey to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an Ids. */
    interface IIds {
      /** Ids id */
      id?: number | null;

      /** Ids ids */
      ids?: number[] | null;
    }

    /** ID 多索引 */
    class Ids implements IIds {
      /**
       * Constructs a new Ids.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IIds);

      /** Ids id. */
      public id: number;

      /** Ids ids. */
      public ids: number[];

      /**
       * Creates a new Ids instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Ids instance
       */
      public static create(properties?: lebai.sql.IIds): lebai.sql.Ids;

      /**
       * Encodes the specified Ids message. Does not implicitly {@link lebai.sql.Ids.verify|verify} messages.
       * @param message Ids message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IIds,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Ids message, length delimited. Does not implicitly {@link lebai.sql.Ids.verify|verify} messages.
       * @param message Ids message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IIds,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Ids message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Ids
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.Ids;

      /**
       * Decodes an Ids message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Ids
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.Ids;

      /**
       * Verifies an Ids message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an Ids message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Ids
       */
      public static fromObject(object: { [k: string]: any }): lebai.sql.Ids;

      /**
       * Creates a plain object from an Ids message. Also converts values to other types if specified.
       * @param message Ids
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.Ids,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Ids to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a DateFilter. */
    interface IDateFilter {
      /** DateFilter start */
      start?: google.protobuf.ITimestamp | null;

      /** DateFilter end */
      end?: google.protobuf.ITimestamp | null;
    }

    /** 日期取值范围 */
    class DateFilter implements IDateFilter {
      /**
       * Constructs a new DateFilter.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IDateFilter);

      /** DateFilter start. */
      public start?: google.protobuf.ITimestamp | null;

      /** DateFilter end. */
      public end?: google.protobuf.ITimestamp | null;

      /**
       * Creates a new DateFilter instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DateFilter instance
       */
      public static create(
        properties?: lebai.sql.IDateFilter
      ): lebai.sql.DateFilter;

      /**
       * Encodes the specified DateFilter message. Does not implicitly {@link lebai.sql.DateFilter.verify|verify} messages.
       * @param message DateFilter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IDateFilter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified DateFilter message, length delimited. Does not implicitly {@link lebai.sql.DateFilter.verify|verify} messages.
       * @param message DateFilter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IDateFilter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a DateFilter message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DateFilter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.DateFilter;

      /**
       * Decodes a DateFilter message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DateFilter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.DateFilter;

      /**
       * Verifies a DateFilter message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DateFilter message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DateFilter
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.sql.DateFilter;

      /**
       * Creates a plain object from a DateFilter message. Also converts values to other types if specified.
       * @param message DateFilter
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.DateFilter,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this DateFilter to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pagination. */
    interface IPagination {
      /** Pagination page */
      page?: number | null;

      /** Pagination size */
      size?: number | null;

      /** Pagination total */
      total?: number | null;
    }

    /** 分页器 */
    class Pagination implements IPagination {
      /**
       * Constructs a new Pagination.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IPagination);

      /** Pagination page. */
      public page: number;

      /** Pagination size. */
      public size: number;

      /** Pagination total. */
      public total: number;

      /**
       * Creates a new Pagination instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Pagination instance
       */
      public static create(
        properties?: lebai.sql.IPagination
      ): lebai.sql.Pagination;

      /**
       * Encodes the specified Pagination message. Does not implicitly {@link lebai.sql.Pagination.verify|verify} messages.
       * @param message Pagination message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IPagination,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Pagination message, length delimited. Does not implicitly {@link lebai.sql.Pagination.verify|verify} messages.
       * @param message Pagination message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IPagination,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Pagination message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Pagination
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.Pagination;

      /**
       * Decodes a Pagination message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Pagination
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.Pagination;

      /**
       * Verifies a Pagination message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Pagination message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Pagination
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.sql.Pagination;

      /**
       * Creates a plain object from a Pagination message. Also converts values to other types if specified.
       * @param message Pagination
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.Pagination,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Pagination to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListFilter. */
    interface IListFilter {
      /** where {exact} */
      exact?: string[] | null;

      /** `id` in {ids} */
      ids?: number[] | null;

      /** `name` like {keyword}, 如果需要模糊查询，手动添加% */
      keyword?: string | null;

      /** `created_at` between {created} */
      created?: lebai.sql.IDateFilter | null;

      /** `updated_at` between {updated} */
      updated?: lebai.sql.IDateFilter | null;

      /** order by {order} */
      order?: string | null;

      /** ListFilter asc */
      asc?: boolean | null;

      /** 分页 */
      pager?: lebai.sql.IPagination | null;
    }

    /** 列表查询过滤条件 */
    class ListFilter implements IListFilter {
      /**
       * Constructs a new ListFilter.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IListFilter);

      /** where {exact} */
      public exact: string[];

      /** `id` in {ids} */
      public ids: number[];

      /** `name` like {keyword}, 如果需要模糊查询，手动添加% */
      public keyword: string;

      /** `created_at` between {created} */
      public created?: lebai.sql.IDateFilter | null;

      /** `updated_at` between {updated} */
      public updated?: lebai.sql.IDateFilter | null;

      /** order by {order} */
      public order: string;

      /** ListFilter asc. */
      public asc: boolean;

      /** 分页 */
      public pager?: lebai.sql.IPagination | null;

      /**
       * Creates a new ListFilter instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ListFilter instance
       */
      public static create(
        properties?: lebai.sql.IListFilter
      ): lebai.sql.ListFilter;

      /**
       * Encodes the specified ListFilter message. Does not implicitly {@link lebai.sql.ListFilter.verify|verify} messages.
       * @param message ListFilter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IListFilter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ListFilter message, length delimited. Does not implicitly {@link lebai.sql.ListFilter.verify|verify} messages.
       * @param message ListFilter message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IListFilter,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ListFilter message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ListFilter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.ListFilter;

      /**
       * Decodes a ListFilter message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ListFilter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.ListFilter;

      /**
       * Verifies a ListFilter message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ListFilter message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ListFilter
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.sql.ListFilter;

      /**
       * Creates a plain object from a ListFilter message. Also converts values to other types if specified.
       * @param message ListFilter
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.ListFilter,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ListFilter to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** 数据状态 */
    enum DataStatus {
      NORMAL = 0,
      READ_ONLY = 1,
      HIDDEN = 2,
      DELETED = 3,
    }

    /** Properties of an IndexRequest. */
    interface IIndexRequest {
      /** IndexRequest id */
      id?: lebai.sql.IIdOrKey | null;
    }

    /** Represents an IndexRequest. */
    class IndexRequest implements IIndexRequest {
      /**
       * Constructs a new IndexRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IIndexRequest);

      /** IndexRequest id. */
      public id?: lebai.sql.IIdOrKey | null;

      /**
       * Creates a new IndexRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns IndexRequest instance
       */
      public static create(
        properties?: lebai.sql.IIndexRequest
      ): lebai.sql.IndexRequest;

      /**
       * Encodes the specified IndexRequest message. Does not implicitly {@link lebai.sql.IndexRequest.verify|verify} messages.
       * @param message IndexRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IIndexRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified IndexRequest message, length delimited. Does not implicitly {@link lebai.sql.IndexRequest.verify|verify} messages.
       * @param message IndexRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IIndexRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an IndexRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns IndexRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.IndexRequest;

      /**
       * Decodes an IndexRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns IndexRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.IndexRequest;

      /**
       * Verifies an IndexRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an IndexRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns IndexRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.sql.IndexRequest;

      /**
       * Creates a plain object from an IndexRequest message. Also converts values to other types if specified.
       * @param message IndexRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.IndexRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this IndexRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an IdRequest. */
    interface IIdRequest {
      /** IdRequest id */
      id?: number | null;
    }

    /** Represents an IdRequest. */
    class IdRequest implements IIdRequest {
      /**
       * Constructs a new IdRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: lebai.sql.IIdRequest);

      /** IdRequest id. */
      public id: number;

      /**
       * Creates a new IdRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns IdRequest instance
       */
      public static create(
        properties?: lebai.sql.IIdRequest
      ): lebai.sql.IdRequest;

      /**
       * Encodes the specified IdRequest message. Does not implicitly {@link lebai.sql.IdRequest.verify|verify} messages.
       * @param message IdRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: lebai.sql.IIdRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified IdRequest message, length delimited. Does not implicitly {@link lebai.sql.IdRequest.verify|verify} messages.
       * @param message IdRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: lebai.sql.IIdRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an IdRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns IdRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): lebai.sql.IdRequest;

      /**
       * Decodes an IdRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns IdRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): lebai.sql.IdRequest;

      /**
       * Verifies an IdRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an IdRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns IdRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): lebai.sql.IdRequest;

      /**
       * Creates a plain object from an IdRequest message. Also converts values to other types if specified.
       * @param message IdRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: lebai.sql.IdRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this IdRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: number | Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: number | Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ITimestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ITimestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Timestamp;

      /**
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Timestamp;

      /**
       * Verifies a Timestamp message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Timestamp
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param message Timestamp
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Timestamp,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}
