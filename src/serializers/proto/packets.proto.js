/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins, indent */
"use strict";

let $protobuf = require("protobufjs/minimal");

// Common aliases
let $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
let $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/* istanbul ignore next */
$root.packets = (function() {

    /**
     * Namespace packets.
     * @exports packets
     * @namespace
     */
    let packets = {};

    packets.PacketEvent = (function() {

        /**
         * Properties of a PacketEvent.
         * @memberof packets
         * @interface IPacketEvent
         * @property {string} ver PacketEvent ver
         * @property {string} sender PacketEvent sender
         * @property {string} event PacketEvent event
         * @property {string} data PacketEvent data
         * @property {Array.<string>} [groups] PacketEvent groups
         */

        /**
         * Constructs a new PacketEvent.
         * @memberof packets
         * @classdesc Represents a PacketEvent.
         * @constructor
         * @param {packets.IPacketEvent=} [properties] Properties to set
         */
        function PacketEvent(properties) {
            this.groups = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketEvent ver.
         * @member {string}ver
         * @memberof packets.PacketEvent
         * @instance
         */
        PacketEvent.prototype.ver = "";

        /**
         * PacketEvent sender.
         * @member {string}sender
         * @memberof packets.PacketEvent
         * @instance
         */
        PacketEvent.prototype.sender = "";

        /**
         * PacketEvent event.
         * @member {string}event
         * @memberof packets.PacketEvent
         * @instance
         */
        PacketEvent.prototype.event = "";

        /**
         * PacketEvent data.
         * @member {string}data
         * @memberof packets.PacketEvent
         * @instance
         */
        PacketEvent.prototype.data = "";

        /**
         * PacketEvent groups.
         * @member {Array.<string>}groups
         * @memberof packets.PacketEvent
         * @instance
         */
        PacketEvent.prototype.groups = $util.emptyArray;

        /**
         * Creates a new PacketEvent instance using the specified properties.
         * @function create
         * @memberof packets.PacketEvent
         * @static
         * @param {packets.IPacketEvent=} [properties] Properties to set
         * @returns {packets.PacketEvent} PacketEvent instance
         */
        PacketEvent.create = function create(properties) {
            return new PacketEvent(properties);
        };

        /**
         * Encodes the specified PacketEvent message. Does not implicitly {@link packets.PacketEvent.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketEvent
         * @static
         * @param {packets.IPacketEvent} message PacketEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.event);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.data);
            if (message.groups != null && message.groups.length)
                for (let i = 0; i < message.groups.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.groups[i]);
            return writer;
        };

        /**
         * Encodes the specified PacketEvent message, length delimited. Does not implicitly {@link packets.PacketEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketEvent
         * @static
         * @param {packets.IPacketEvent} message PacketEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketEvent message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketEvent} PacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.event = reader.string();
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    if (!(message.groups && message.groups.length))
                        message.groups = [];
                    message.groups.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("event"))
                throw $util.ProtocolError("missing required 'event'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketEvent} PacketEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketEvent message.
         * @function verify
         * @memberof packets.PacketEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isString(message.event))
                return "event: string expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (let i = 0; i < message.groups.length; ++i)
                    if (!$util.isString(message.groups[i]))
                        return "groups: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PacketEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketEvent} PacketEvent
         */
        PacketEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketEvent)
                return object;
            let message = new $root.packets.PacketEvent();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.event != null)
                message.event = String(object.event);
            if (object.data != null)
                message.data = String(object.data);
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".packets.PacketEvent.groups: array expected");
                message.groups = [];
                for (let i = 0; i < object.groups.length; ++i)
                    message.groups[i] = String(object.groups[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketEvent
         * @static
         * @param {packets.PacketEvent} message PacketEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.groups = [];
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                object.event = "";
                object.data = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (let j = 0; j < message.groups.length; ++j)
                    object.groups[j] = message.groups[j];
            }
            return object;
        };

        /**
         * Converts this PacketEvent to JSON.
         * @function toJSON
         * @memberof packets.PacketEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketEvent;
    })();

    packets.PacketRequest = (function() {

        /**
         * Properties of a PacketRequest.
         * @memberof packets
         * @interface IPacketRequest
         * @property {string} ver PacketRequest ver
         * @property {string} sender PacketRequest sender
         * @property {string} id PacketRequest id
         * @property {string} action PacketRequest action
         * @property {string} params PacketRequest params
         * @property {string} meta PacketRequest meta
         * @property {number} timeout PacketRequest timeout
         * @property {number} level PacketRequest level
         * @property {boolean} metrics PacketRequest metrics
         * @property {string} [parentID] PacketRequest parentID
         * @property {string} [requestID] PacketRequest requestID
         */

        /**
         * Constructs a new PacketRequest.
         * @memberof packets
         * @classdesc Represents a PacketRequest.
         * @constructor
         * @param {packets.IPacketRequest=} [properties] Properties to set
         */
        function PacketRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketRequest ver.
         * @member {string}ver
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.ver = "";

        /**
         * PacketRequest sender.
         * @member {string}sender
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.sender = "";

        /**
         * PacketRequest id.
         * @member {string}id
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.id = "";

        /**
         * PacketRequest action.
         * @member {string}action
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.action = "";

        /**
         * PacketRequest params.
         * @member {string}params
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.params = "";

        /**
         * PacketRequest meta.
         * @member {string}meta
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.meta = "";

        /**
         * PacketRequest timeout.
         * @member {number}timeout
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.timeout = 0;

        /**
         * PacketRequest level.
         * @member {number}level
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.level = 0;

        /**
         * PacketRequest metrics.
         * @member {boolean}metrics
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.metrics = false;

        /**
         * PacketRequest parentID.
         * @member {string}parentID
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.parentID = "";

        /**
         * PacketRequest requestID.
         * @member {string}requestID
         * @memberof packets.PacketRequest
         * @instance
         */
        PacketRequest.prototype.requestID = "";

        /**
         * Creates a new PacketRequest instance using the specified properties.
         * @function create
         * @memberof packets.PacketRequest
         * @static
         * @param {packets.IPacketRequest=} [properties] Properties to set
         * @returns {packets.PacketRequest} PacketRequest instance
         */
        PacketRequest.create = function create(properties) {
            return new PacketRequest(properties);
        };

        /**
         * Encodes the specified PacketRequest message. Does not implicitly {@link packets.PacketRequest.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketRequest
         * @static
         * @param {packets.IPacketRequest} message PacketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.action);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.params);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.meta);
            writer.uint32(/* id 7, wireType 1 =*/57).double(message.timeout);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.level);
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.metrics);
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.parentID);
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.requestID);
            return writer;
        };

        /**
         * Encodes the specified PacketRequest message, length delimited. Does not implicitly {@link packets.PacketRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketRequest
         * @static
         * @param {packets.IPacketRequest} message PacketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketRequest message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketRequest} PacketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.action = reader.string();
                    break;
                case 5:
                    message.params = reader.string();
                    break;
                case 6:
                    message.meta = reader.string();
                    break;
                case 7:
                    message.timeout = reader.double();
                    break;
                case 8:
                    message.level = reader.int32();
                    break;
                case 9:
                    message.metrics = reader.bool();
                    break;
                case 10:
                    message.parentID = reader.string();
                    break;
                case 11:
                    message.requestID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("action"))
                throw $util.ProtocolError("missing required 'action'", { instance: message });
            if (!message.hasOwnProperty("params"))
                throw $util.ProtocolError("missing required 'params'", { instance: message });
            if (!message.hasOwnProperty("meta"))
                throw $util.ProtocolError("missing required 'meta'", { instance: message });
            if (!message.hasOwnProperty("timeout"))
                throw $util.ProtocolError("missing required 'timeout'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("metrics"))
                throw $util.ProtocolError("missing required 'metrics'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketRequest} PacketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketRequest message.
         * @function verify
         * @memberof packets.PacketRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.action))
                return "action: string expected";
            if (!$util.isString(message.params))
                return "params: string expected";
            if (!$util.isString(message.meta))
                return "meta: string expected";
            if (typeof message.timeout !== "number")
                return "timeout: number expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (typeof message.metrics !== "boolean")
                return "metrics: boolean expected";
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                if (!$util.isString(message.parentID))
                    return "parentID: string expected";
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                if (!$util.isString(message.requestID))
                    return "requestID: string expected";
            return null;
        };

        /**
         * Creates a PacketRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketRequest} PacketRequest
         */
        PacketRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketRequest)
                return object;
            let message = new $root.packets.PacketRequest();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.id != null)
                message.id = String(object.id);
            if (object.action != null)
                message.action = String(object.action);
            if (object.params != null)
                message.params = String(object.params);
            if (object.meta != null)
                message.meta = String(object.meta);
            if (object.timeout != null)
                message.timeout = Number(object.timeout);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.metrics != null)
                message.metrics = Boolean(object.metrics);
            if (object.parentID != null)
                message.parentID = String(object.parentID);
            if (object.requestID != null)
                message.requestID = String(object.requestID);
            return message;
        };

        /**
         * Creates a plain object from a PacketRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketRequest
         * @static
         * @param {packets.PacketRequest} message PacketRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                object.id = "";
                object.action = "";
                object.params = "";
                object.meta = "";
                object.timeout = 0;
                object.level = 0;
                object.metrics = false;
                object.parentID = "";
                object.requestID = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.params != null && message.hasOwnProperty("params"))
                object.params = message.params;
            if (message.meta != null && message.hasOwnProperty("meta"))
                object.meta = message.meta;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = options.json && !isFinite(message.timeout) ? String(message.timeout) : message.timeout;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.metrics != null && message.hasOwnProperty("metrics"))
                object.metrics = message.metrics;
            if (message.parentID != null && message.hasOwnProperty("parentID"))
                object.parentID = message.parentID;
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                object.requestID = message.requestID;
            return object;
        };

        /**
         * Converts this PacketRequest to JSON.
         * @function toJSON
         * @memberof packets.PacketRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketRequest;
    })();

    packets.PacketResponse = (function() {

        /**
         * Properties of a PacketResponse.
         * @memberof packets
         * @interface IPacketResponse
         * @property {string} ver PacketResponse ver
         * @property {string} sender PacketResponse sender
         * @property {string} id PacketResponse id
         * @property {boolean} success PacketResponse success
         * @property {string} [data] PacketResponse data
         * @property {string} [error] PacketResponse error
         */

        /**
         * Constructs a new PacketResponse.
         * @memberof packets
         * @classdesc Represents a PacketResponse.
         * @constructor
         * @param {packets.IPacketResponse=} [properties] Properties to set
         */
        function PacketResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketResponse ver.
         * @member {string}ver
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.ver = "";

        /**
         * PacketResponse sender.
         * @member {string}sender
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.sender = "";

        /**
         * PacketResponse id.
         * @member {string}id
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.id = "";

        /**
         * PacketResponse success.
         * @member {boolean}success
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.success = false;

        /**
         * PacketResponse data.
         * @member {string}data
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.data = "";

        /**
         * PacketResponse error.
         * @member {string}error
         * @memberof packets.PacketResponse
         * @instance
         */
        PacketResponse.prototype.error = "";

        /**
         * Creates a new PacketResponse instance using the specified properties.
         * @function create
         * @memberof packets.PacketResponse
         * @static
         * @param {packets.IPacketResponse=} [properties] Properties to set
         * @returns {packets.PacketResponse} PacketResponse instance
         */
        PacketResponse.create = function create(properties) {
            return new PacketResponse(properties);
        };

        /**
         * Encodes the specified PacketResponse message. Does not implicitly {@link packets.PacketResponse.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketResponse
         * @static
         * @param {packets.IPacketResponse} message PacketResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.success);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.data);
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.error);
            return writer;
        };

        /**
         * Encodes the specified PacketResponse message, length delimited. Does not implicitly {@link packets.PacketResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketResponse
         * @static
         * @param {packets.IPacketResponse} message PacketResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketResponse message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketResponse} PacketResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.success = reader.bool();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("success"))
                throw $util.ProtocolError("missing required 'success'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketResponse} PacketResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketResponse message.
         * @function verify
         * @memberof packets.PacketResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            return null;
        };

        /**
         * Creates a PacketResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketResponse} PacketResponse
         */
        PacketResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketResponse)
                return object;
            let message = new $root.packets.PacketResponse();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.id != null)
                message.id = String(object.id);
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.data != null)
                message.data = String(object.data);
            if (object.error != null)
                message.error = String(object.error);
            return message;
        };

        /**
         * Creates a plain object from a PacketResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketResponse
         * @static
         * @param {packets.PacketResponse} message PacketResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                object.id = "";
                object.success = false;
                object.data = "";
                object.error = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            return object;
        };

        /**
         * Converts this PacketResponse to JSON.
         * @function toJSON
         * @memberof packets.PacketResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketResponse;
    })();

    packets.PacketDiscover = (function() {

        /**
         * Properties of a PacketDiscover.
         * @memberof packets
         * @interface IPacketDiscover
         * @property {string} ver PacketDiscover ver
         * @property {string} sender PacketDiscover sender
         */

        /**
         * Constructs a new PacketDiscover.
         * @memberof packets
         * @classdesc Represents a PacketDiscover.
         * @constructor
         * @param {packets.IPacketDiscover=} [properties] Properties to set
         */
        function PacketDiscover(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketDiscover ver.
         * @member {string}ver
         * @memberof packets.PacketDiscover
         * @instance
         */
        PacketDiscover.prototype.ver = "";

        /**
         * PacketDiscover sender.
         * @member {string}sender
         * @memberof packets.PacketDiscover
         * @instance
         */
        PacketDiscover.prototype.sender = "";

        /**
         * Creates a new PacketDiscover instance using the specified properties.
         * @function create
         * @memberof packets.PacketDiscover
         * @static
         * @param {packets.IPacketDiscover=} [properties] Properties to set
         * @returns {packets.PacketDiscover} PacketDiscover instance
         */
        PacketDiscover.create = function create(properties) {
            return new PacketDiscover(properties);
        };

        /**
         * Encodes the specified PacketDiscover message. Does not implicitly {@link packets.PacketDiscover.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketDiscover
         * @static
         * @param {packets.IPacketDiscover} message PacketDiscover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketDiscover.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            return writer;
        };

        /**
         * Encodes the specified PacketDiscover message, length delimited. Does not implicitly {@link packets.PacketDiscover.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketDiscover
         * @static
         * @param {packets.IPacketDiscover} message PacketDiscover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketDiscover.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketDiscover message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketDiscover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketDiscover} PacketDiscover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketDiscover.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketDiscover();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketDiscover message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketDiscover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketDiscover} PacketDiscover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketDiscover.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketDiscover message.
         * @function verify
         * @memberof packets.PacketDiscover
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketDiscover.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            return null;
        };

        /**
         * Creates a PacketDiscover message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketDiscover
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketDiscover} PacketDiscover
         */
        PacketDiscover.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketDiscover)
                return object;
            let message = new $root.packets.PacketDiscover();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            return message;
        };

        /**
         * Creates a plain object from a PacketDiscover message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketDiscover
         * @static
         * @param {packets.PacketDiscover} message PacketDiscover
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketDiscover.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            return object;
        };

        /**
         * Converts this PacketDiscover to JSON.
         * @function toJSON
         * @memberof packets.PacketDiscover
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketDiscover.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketDiscover;
    })();

    packets.PacketInfo = (function() {

        /**
         * Properties of a PacketInfo.
         * @memberof packets
         * @interface IPacketInfo
         * @property {string} ver PacketInfo ver
         * @property {string} sender PacketInfo sender
         * @property {string} services PacketInfo services
         * @property {string} config PacketInfo config
         * @property {Array.<string>} [ipList] PacketInfo ipList
         * @property {number} [port] PacketInfo port
         * @property {packets.PacketInfo.IClient} client PacketInfo client
         */

        /**
         * Constructs a new PacketInfo.
         * @memberof packets
         * @classdesc Represents a PacketInfo.
         * @constructor
         * @param {packets.IPacketInfo=} [properties] Properties to set
         */
        function PacketInfo(properties) {
            this.ipList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketInfo ver.
         * @member {string}ver
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.ver = "";

        /**
         * PacketInfo sender.
         * @member {string}sender
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.sender = "";

        /**
         * PacketInfo services.
         * @member {string}services
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.services = "";

        /**
         * PacketInfo config.
         * @member {string}config
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.config = "";

        /**
         * PacketInfo ipList.
         * @member {Array.<string>}ipList
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.ipList = $util.emptyArray;

        /**
         * PacketInfo port.
         * @member {number}port
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.port = 0;

        /**
         * PacketInfo client.
         * @member {packets.PacketInfo.IClient}client
         * @memberof packets.PacketInfo
         * @instance
         */
        PacketInfo.prototype.client = null;

        /**
         * Creates a new PacketInfo instance using the specified properties.
         * @function create
         * @memberof packets.PacketInfo
         * @static
         * @param {packets.IPacketInfo=} [properties] Properties to set
         * @returns {packets.PacketInfo} PacketInfo instance
         */
        PacketInfo.create = function create(properties) {
            return new PacketInfo(properties);
        };

        /**
         * Encodes the specified PacketInfo message. Does not implicitly {@link packets.PacketInfo.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketInfo
         * @static
         * @param {packets.IPacketInfo} message PacketInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.services);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.config);
            if (message.ipList != null && message.ipList.length)
                for (let i = 0; i < message.ipList.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.ipList[i]);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.port);
            $root.packets.PacketInfo.Client.encode(message.client, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PacketInfo message, length delimited. Does not implicitly {@link packets.PacketInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketInfo
         * @static
         * @param {packets.IPacketInfo} message PacketInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketInfo message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketInfo} PacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.services = reader.string();
                    break;
                case 4:
                    message.config = reader.string();
                    break;
                case 5:
                    if (!(message.ipList && message.ipList.length))
                        message.ipList = [];
                    message.ipList.push(reader.string());
                    break;
                case 6:
                    message.port = reader.int32();
                    break;
                case 7:
                    message.client = $root.packets.PacketInfo.Client.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("services"))
                throw $util.ProtocolError("missing required 'services'", { instance: message });
            if (!message.hasOwnProperty("config"))
                throw $util.ProtocolError("missing required 'config'", { instance: message });
            if (!message.hasOwnProperty("client"))
                throw $util.ProtocolError("missing required 'client'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketInfo} PacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketInfo message.
         * @function verify
         * @memberof packets.PacketInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isString(message.services))
                return "services: string expected";
            if (!$util.isString(message.config))
                return "config: string expected";
            if (message.ipList != null && message.hasOwnProperty("ipList")) {
                if (!Array.isArray(message.ipList))
                    return "ipList: array expected";
                for (let i = 0; i < message.ipList.length; ++i)
                    if (!$util.isString(message.ipList[i]))
                        return "ipList: string[] expected";
            }
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            let error = $root.packets.PacketInfo.Client.verify(message.client);
            if (error)
                return "client." + error;
            return null;
        };

        /**
         * Creates a PacketInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketInfo} PacketInfo
         */
        PacketInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketInfo)
                return object;
            let message = new $root.packets.PacketInfo();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.services != null)
                message.services = String(object.services);
            if (object.config != null)
                message.config = String(object.config);
            if (object.ipList) {
                if (!Array.isArray(object.ipList))
                    throw TypeError(".packets.PacketInfo.ipList: array expected");
                message.ipList = [];
                for (let i = 0; i < object.ipList.length; ++i)
                    message.ipList[i] = String(object.ipList[i]);
            }
            if (object.port != null)
                message.port = object.port | 0;
            if (object.client != null) {
                if (typeof object.client !== "object")
                    throw TypeError(".packets.PacketInfo.client: object expected");
                message.client = $root.packets.PacketInfo.Client.fromObject(object.client);
            }
            return message;
        };

        /**
         * Creates a plain object from a PacketInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketInfo
         * @static
         * @param {packets.PacketInfo} message PacketInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.ipList = [];
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                object.services = "";
                object.config = "";
                object.port = 0;
                object.client = null;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.services != null && message.hasOwnProperty("services"))
                object.services = message.services;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = message.config;
            if (message.ipList && message.ipList.length) {
                object.ipList = [];
                for (let j = 0; j < message.ipList.length; ++j)
                    object.ipList[j] = message.ipList[j];
            }
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.client != null && message.hasOwnProperty("client"))
                object.client = $root.packets.PacketInfo.Client.toObject(message.client, options);
            return object;
        };

        /**
         * Converts this PacketInfo to JSON.
         * @function toJSON
         * @memberof packets.PacketInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PacketInfo.Client = (function() {

            /**
             * Properties of a Client.
             * @memberof packets.PacketInfo
             * @interface IClient
             * @property {string} type Client type
             * @property {string} version Client version
             * @property {string} langVersion Client langVersion
             */

            /**
             * Constructs a new Client.
             * @memberof packets.PacketInfo
             * @classdesc Represents a Client.
             * @constructor
             * @param {packets.PacketInfo.IClient=} [properties] Properties to set
             */
            function Client(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Client type.
             * @member {string}type
             * @memberof packets.PacketInfo.Client
             * @instance
             */
            Client.prototype.type = "";

            /**
             * Client version.
             * @member {string}version
             * @memberof packets.PacketInfo.Client
             * @instance
             */
            Client.prototype.version = "";

            /**
             * Client langVersion.
             * @member {string}langVersion
             * @memberof packets.PacketInfo.Client
             * @instance
             */
            Client.prototype.langVersion = "";

            /**
             * Creates a new Client instance using the specified properties.
             * @function create
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {packets.PacketInfo.IClient=} [properties] Properties to set
             * @returns {packets.PacketInfo.Client} Client instance
             */
            Client.create = function create(properties) {
                return new Client(properties);
            };

            /**
             * Encodes the specified Client message. Does not implicitly {@link packets.PacketInfo.Client.verify|verify} messages.
             * @function encode
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {packets.PacketInfo.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.langVersion);
                return writer;
            };

            /**
             * Encodes the specified Client message, length delimited. Does not implicitly {@link packets.PacketInfo.Client.verify|verify} messages.
             * @function encodeDelimited
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {packets.PacketInfo.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Client message from the specified reader or buffer.
             * @function decode
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {packets.PacketInfo.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketInfo.Client();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.langVersion = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("version"))
                    throw $util.ProtocolError("missing required 'version'", { instance: message });
                if (!message.hasOwnProperty("langVersion"))
                    throw $util.ProtocolError("missing required 'langVersion'", { instance: message });
                return message;
            };

            /**
             * Decodes a Client message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {packets.PacketInfo.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Client message.
             * @function verify
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Client.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.type))
                    return "type: string expected";
                if (!$util.isString(message.version))
                    return "version: string expected";
                if (!$util.isString(message.langVersion))
                    return "langVersion: string expected";
                return null;
            };

            /**
             * Creates a Client message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {packets.PacketInfo.Client} Client
             */
            Client.fromObject = function fromObject(object) {
                if (object instanceof $root.packets.PacketInfo.Client)
                    return object;
                let message = new $root.packets.PacketInfo.Client();
                if (object.type != null)
                    message.type = String(object.type);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.langVersion != null)
                    message.langVersion = String(object.langVersion);
                return message;
            };

            /**
             * Creates a plain object from a Client message. Also converts values to other types if specified.
             * @function toObject
             * @memberof packets.PacketInfo.Client
             * @static
             * @param {packets.PacketInfo.Client} message Client
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Client.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type = "";
                    object.version = "";
                    object.langVersion = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.langVersion != null && message.hasOwnProperty("langVersion"))
                    object.langVersion = message.langVersion;
                return object;
            };

            /**
             * Converts this Client to JSON.
             * @function toJSON
             * @memberof packets.PacketInfo.Client
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Client.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Client;
        })();

        return PacketInfo;
    })();

    packets.PacketDisconnect = (function() {

        /**
         * Properties of a PacketDisconnect.
         * @memberof packets
         * @interface IPacketDisconnect
         * @property {string} ver PacketDisconnect ver
         * @property {string} sender PacketDisconnect sender
         */

        /**
         * Constructs a new PacketDisconnect.
         * @memberof packets
         * @classdesc Represents a PacketDisconnect.
         * @constructor
         * @param {packets.IPacketDisconnect=} [properties] Properties to set
         */
        function PacketDisconnect(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketDisconnect ver.
         * @member {string}ver
         * @memberof packets.PacketDisconnect
         * @instance
         */
        PacketDisconnect.prototype.ver = "";

        /**
         * PacketDisconnect sender.
         * @member {string}sender
         * @memberof packets.PacketDisconnect
         * @instance
         */
        PacketDisconnect.prototype.sender = "";

        /**
         * Creates a new PacketDisconnect instance using the specified properties.
         * @function create
         * @memberof packets.PacketDisconnect
         * @static
         * @param {packets.IPacketDisconnect=} [properties] Properties to set
         * @returns {packets.PacketDisconnect} PacketDisconnect instance
         */
        PacketDisconnect.create = function create(properties) {
            return new PacketDisconnect(properties);
        };

        /**
         * Encodes the specified PacketDisconnect message. Does not implicitly {@link packets.PacketDisconnect.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketDisconnect
         * @static
         * @param {packets.IPacketDisconnect} message PacketDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketDisconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            return writer;
        };

        /**
         * Encodes the specified PacketDisconnect message, length delimited. Does not implicitly {@link packets.PacketDisconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketDisconnect
         * @static
         * @param {packets.IPacketDisconnect} message PacketDisconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketDisconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketDisconnect message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketDisconnect} PacketDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketDisconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketDisconnect();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketDisconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketDisconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketDisconnect} PacketDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketDisconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketDisconnect message.
         * @function verify
         * @memberof packets.PacketDisconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketDisconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            return null;
        };

        /**
         * Creates a PacketDisconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketDisconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketDisconnect} PacketDisconnect
         */
        PacketDisconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketDisconnect)
                return object;
            let message = new $root.packets.PacketDisconnect();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            return message;
        };

        /**
         * Creates a plain object from a PacketDisconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketDisconnect
         * @static
         * @param {packets.PacketDisconnect} message PacketDisconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketDisconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            return object;
        };

        /**
         * Converts this PacketDisconnect to JSON.
         * @function toJSON
         * @memberof packets.PacketDisconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketDisconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketDisconnect;
    })();

    packets.PacketHeartbeat = (function() {

        /**
         * Properties of a PacketHeartbeat.
         * @memberof packets
         * @interface IPacketHeartbeat
         * @property {string} ver PacketHeartbeat ver
         * @property {string} sender PacketHeartbeat sender
         * @property {number} cpu PacketHeartbeat cpu
         */

        /**
         * Constructs a new PacketHeartbeat.
         * @memberof packets
         * @classdesc Represents a PacketHeartbeat.
         * @constructor
         * @param {packets.IPacketHeartbeat=} [properties] Properties to set
         */
        function PacketHeartbeat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketHeartbeat ver.
         * @member {string}ver
         * @memberof packets.PacketHeartbeat
         * @instance
         */
        PacketHeartbeat.prototype.ver = "";

        /**
         * PacketHeartbeat sender.
         * @member {string}sender
         * @memberof packets.PacketHeartbeat
         * @instance
         */
        PacketHeartbeat.prototype.sender = "";

        /**
         * PacketHeartbeat cpu.
         * @member {number}cpu
         * @memberof packets.PacketHeartbeat
         * @instance
         */
        PacketHeartbeat.prototype.cpu = 0;

        /**
         * Creates a new PacketHeartbeat instance using the specified properties.
         * @function create
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {packets.IPacketHeartbeat=} [properties] Properties to set
         * @returns {packets.PacketHeartbeat} PacketHeartbeat instance
         */
        PacketHeartbeat.create = function create(properties) {
            return new PacketHeartbeat(properties);
        };

        /**
         * Encodes the specified PacketHeartbeat message. Does not implicitly {@link packets.PacketHeartbeat.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {packets.IPacketHeartbeat} message PacketHeartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketHeartbeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.cpu);
            return writer;
        };

        /**
         * Encodes the specified PacketHeartbeat message, length delimited. Does not implicitly {@link packets.PacketHeartbeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {packets.IPacketHeartbeat} message PacketHeartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketHeartbeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketHeartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketHeartbeat} PacketHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketHeartbeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketHeartbeat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.cpu = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("cpu"))
                throw $util.ProtocolError("missing required 'cpu'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketHeartbeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketHeartbeat} PacketHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketHeartbeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketHeartbeat message.
         * @function verify
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketHeartbeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (typeof message.cpu !== "number")
                return "cpu: number expected";
            return null;
        };

        /**
         * Creates a PacketHeartbeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketHeartbeat} PacketHeartbeat
         */
        PacketHeartbeat.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketHeartbeat)
                return object;
            let message = new $root.packets.PacketHeartbeat();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.cpu != null)
                message.cpu = Number(object.cpu);
            return message;
        };

        /**
         * Creates a plain object from a PacketHeartbeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketHeartbeat
         * @static
         * @param {packets.PacketHeartbeat} message PacketHeartbeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketHeartbeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                object.cpu = 0;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.cpu != null && message.hasOwnProperty("cpu"))
                object.cpu = options.json && !isFinite(message.cpu) ? String(message.cpu) : message.cpu;
            return object;
        };

        /**
         * Converts this PacketHeartbeat to JSON.
         * @function toJSON
         * @memberof packets.PacketHeartbeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketHeartbeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketHeartbeat;
    })();

    packets.PacketPing = (function() {

        /**
         * Properties of a PacketPing.
         * @memberof packets
         * @interface IPacketPing
         * @property {string} ver PacketPing ver
         * @property {string} sender PacketPing sender
         * @property {number|Long} time PacketPing time
         */

        /**
         * Constructs a new PacketPing.
         * @memberof packets
         * @classdesc Represents a PacketPing.
         * @constructor
         * @param {packets.IPacketPing=} [properties] Properties to set
         */
        function PacketPing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPing ver.
         * @member {string}ver
         * @memberof packets.PacketPing
         * @instance
         */
        PacketPing.prototype.ver = "";

        /**
         * PacketPing sender.
         * @member {string}sender
         * @memberof packets.PacketPing
         * @instance
         */
        PacketPing.prototype.sender = "";

        /**
         * PacketPing time.
         * @member {number|Long}time
         * @memberof packets.PacketPing
         * @instance
         */
        PacketPing.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PacketPing instance using the specified properties.
         * @function create
         * @memberof packets.PacketPing
         * @static
         * @param {packets.IPacketPing=} [properties] Properties to set
         * @returns {packets.PacketPing} PacketPing instance
         */
        PacketPing.create = function create(properties) {
            return new PacketPing(properties);
        };

        /**
         * Encodes the specified PacketPing message. Does not implicitly {@link packets.PacketPing.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketPing
         * @static
         * @param {packets.IPacketPing} message PacketPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified PacketPing message, length delimited. Does not implicitly {@link packets.PacketPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketPing
         * @static
         * @param {packets.IPacketPing} message PacketPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPing message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketPing} PacketPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketPing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketPing} PacketPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPing message.
         * @function verify
         * @memberof packets.PacketPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketPing} PacketPing
         */
        PacketPing.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketPing)
                return object;
            let message = new $root.packets.PacketPing();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PacketPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketPing
         * @static
         * @param {packets.PacketPing} message PacketPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this PacketPing to JSON.
         * @function toJSON
         * @memberof packets.PacketPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketPing;
    })();

    packets.PacketPong = (function() {

        /**
         * Properties of a PacketPong.
         * @memberof packets
         * @interface IPacketPong
         * @property {string} ver PacketPong ver
         * @property {string} sender PacketPong sender
         * @property {number|Long} time PacketPong time
         * @property {number|Long} arrived PacketPong arrived
         */

        /**
         * Constructs a new PacketPong.
         * @memberof packets
         * @classdesc Represents a PacketPong.
         * @constructor
         * @param {packets.IPacketPong=} [properties] Properties to set
         */
        function PacketPong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PacketPong ver.
         * @member {string}ver
         * @memberof packets.PacketPong
         * @instance
         */
        PacketPong.prototype.ver = "";

        /**
         * PacketPong sender.
         * @member {string}sender
         * @memberof packets.PacketPong
         * @instance
         */
        PacketPong.prototype.sender = "";

        /**
         * PacketPong time.
         * @member {number|Long}time
         * @memberof packets.PacketPong
         * @instance
         */
        PacketPong.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PacketPong arrived.
         * @member {number|Long}arrived
         * @memberof packets.PacketPong
         * @instance
         */
        PacketPong.prototype.arrived = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PacketPong instance using the specified properties.
         * @function create
         * @memberof packets.PacketPong
         * @static
         * @param {packets.IPacketPong=} [properties] Properties to set
         * @returns {packets.PacketPong} PacketPong instance
         */
        PacketPong.create = function create(properties) {
            return new PacketPong(properties);
        };

        /**
         * Encodes the specified PacketPong message. Does not implicitly {@link packets.PacketPong.verify|verify} messages.
         * @function encode
         * @memberof packets.PacketPong
         * @static
         * @param {packets.IPacketPong} message PacketPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ver);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sender);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.time);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.arrived);
            return writer;
        };

        /**
         * Encodes the specified PacketPong message, length delimited. Does not implicitly {@link packets.PacketPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof packets.PacketPong
         * @static
         * @param {packets.IPacketPong} message PacketPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PacketPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PacketPong message from the specified reader or buffer.
         * @function decode
         * @memberof packets.PacketPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {packets.PacketPong} PacketPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.packets.PacketPong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.time = reader.int64();
                    break;
                case 4:
                    message.arrived = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ver"))
                throw $util.ProtocolError("missing required 'ver'", { instance: message });
            if (!message.hasOwnProperty("sender"))
                throw $util.ProtocolError("missing required 'sender'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("arrived"))
                throw $util.ProtocolError("missing required 'arrived'", { instance: message });
            return message;
        };

        /**
         * Decodes a PacketPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof packets.PacketPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {packets.PacketPong} PacketPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PacketPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PacketPong message.
         * @function verify
         * @memberof packets.PacketPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PacketPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ver))
                return "ver: string expected";
            if (!$util.isString(message.sender))
                return "sender: string expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            if (!$util.isInteger(message.arrived) && !(message.arrived && $util.isInteger(message.arrived.low) && $util.isInteger(message.arrived.high)))
                return "arrived: integer|Long expected";
            return null;
        };

        /**
         * Creates a PacketPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof packets.PacketPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {packets.PacketPong} PacketPong
         */
        PacketPong.fromObject = function fromObject(object) {
            if (object instanceof $root.packets.PacketPong)
                return object;
            let message = new $root.packets.PacketPong();
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.arrived != null)
                if ($util.Long)
                    (message.arrived = $util.Long.fromValue(object.arrived)).unsigned = false;
                else if (typeof object.arrived === "string")
                    message.arrived = parseInt(object.arrived, 10);
                else if (typeof object.arrived === "number")
                    message.arrived = object.arrived;
                else if (typeof object.arrived === "object")
                    message.arrived = new $util.LongBits(object.arrived.low >>> 0, object.arrived.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PacketPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof packets.PacketPong
         * @static
         * @param {packets.PacketPong} message PacketPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PacketPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ver = "";
                object.sender = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.arrived = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.arrived = options.longs === String ? "0" : 0;
            }
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.arrived != null && message.hasOwnProperty("arrived"))
                if (typeof message.arrived === "number")
                    object.arrived = options.longs === String ? String(message.arrived) : message.arrived;
                else
                    object.arrived = options.longs === String ? $util.Long.prototype.toString.call(message.arrived) : options.longs === Number ? new $util.LongBits(message.arrived.low >>> 0, message.arrived.high >>> 0).toNumber() : message.arrived;
            return object;
        };

        /**
         * Converts this PacketPong to JSON.
         * @function toJSON
         * @memberof packets.PacketPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PacketPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PacketPong;
    })();

    return packets;
})();

module.exports = $root;
