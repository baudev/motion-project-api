"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require("node-fetch");
class WebControl {
    constructor(url) {
        this._url = url;
    }
    request(route) {
        return fetch(this.url + "/" + route)
            .then((res) => res.text());
    }
    /**
     * Lists all the configuration values for the camera.
     * @param cameraId
     */
    getConfigList(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/config/list");
        });
    }
    /**
     * Set the value for the requested parameter
     * @param cameraId
     * @param parm
     * @param value1
     */
    setConfig(cameraId, parm, value1) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/config/set?" + parm + "=" + value1);
        });
    }
    /**
     * Return the value currently set for the parameter.
     * @param cameraId
     * @param parm
     */
    getConfig(cameraId, parm) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/config/get?query=" + parm);
        });
    }
    /**
     * Write the current parameters to the file.
     * @param cameraId
     */
    writeConfig(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/config/write");
        });
    }
    /**
     * Return the current status of the camera.
     * @param cameraId
     */
    getDetectionStatus(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/detection/status");
        });
    }
    /**
     * Return the connection status of the camera.
     * @param cameraId
     */
    getDetectionConnection(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/detection/connection");
        });
    }
    /**
     * Start or resume motion detection.
     * @param cameraId
     */
    setDetectionStart(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/detection/start");
        });
    }
    /**
     * Pause the motion detection.
     * @param cameraId
     */
    setDetectionPause(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/detection/pause");
        });
    }
    /**
     * Trigger a new event.
     * @param cameraId
     */
    startEvent(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/eventstart");
        });
    }
    /**
     * Trigger the end of a event.
     * @param cameraId
     */
    endEvent(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/eventend");
        });
    }
    /**
     * Create a snapshot
     * @param cameraId
     */
    getSnapshot(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/snapshot");
        });
    }
    /**
     * Shutdown and restart Motion
     * @param cameraId
     */
    restart(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/restart");
        });
    }
    /**
     * Close all connections to the camera
     * @param cameraId
     */
    quit(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/quit");
        });
    }
    /**
     * Entirely shutdown the Motion application
     * @param cameraId
     */
    end(cameraId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(cameraId + "/action/end");
        });
    }
    get url() {
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
}
exports.WebControl = WebControl;
