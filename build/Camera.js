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
const MotionDetectionStatus_1 = require("./Enums/MotionDetectionStatus");
const MotionConnectionStatus_1 = require("./Enums/MotionConnectionStatus");
class Camera {
    constructor(id, webControl) {
        this._id = id;
        this._webControl = webControl;
    }
    /**
     * Lists all the configuration values for the camera.
     */
    getConfigList() {
        return this.webControl.getConfigList(this.id);
    }
    /**
     * Set the value for the requested parameter.
     * @param parm
     * @param value1
     */
    setConfig(parm, value1) {
        return new Promise(((resolve, reject) => {
            this.webControl.setConfig(this.id, parm, value1)
                .then((res) => {
                return new RegExp(/Done/).test(res) ? resolve() : reject();
            })
                .catch((err) => reject(err));
        }));
    }
    /**
     * Return the value currently set for the parameter.
     * @param parm
     */
    getConfig(parm) {
        return new Promise(((resolve, reject) => {
            return this.webControl.getConfig(this.id, parm)
                .then((response) => {
                let regex = /= (.+)/;
                let match = regex.exec(response);
                return match && match[1] ? resolve(match[1]) : reject();
            })
                .catch((err) => reject(err));
        }));
    }
    /**
     * Write the current parameters to the file.
     */
    writeConfig() {
        return this.webControl.writeConfig(this.id);
    }
    /**
     * Return the current status of the camera.
     */
    getDetectionStatus() {
        return this.webControl.getDetectionStatus(this.id)
            .then((message) => {
            return new RegExp(/Detection status ACTIVE/).test(message) ? MotionDetectionStatus_1.MotionDetectionStatus.ENABLE : MotionDetectionStatus_1.MotionDetectionStatus.DISABLE;
        });
    }
    /**
     * Return the connection status of the camera.
     */
    getConnectionStatus() {
        return this.webControl.getDetectionConnection(this.id)
            .then((message) => {
            return new RegExp(/Camera Connection OK/).test(message) ? MotionConnectionStatus_1.MotionConnectionStatus.OK : MotionConnectionStatus_1.MotionConnectionStatus.DISCONNECTED;
        });
    }
    /**
     * Start or resume motion detection.
     */
    startDetection() {
        return this.webControl.setDetectionStart(this.id);
    }
    /**
     * Pause the motion detection.
     */
    pauseDetection() {
        return this.webControl.setDetectionPause(this.id);
    }
    /**
     * Trigger a new event.
     */
    startEvent() {
        return this.webControl.startEvent(this.id);
    }
    /**
     * Trigger the end of a event.
     */
    endEvent() {
        return this.webControl.endEvent(this.id);
    }
    /**
     * Create a snapshot.
     */
    createSnapshot() {
        return this.webControl.getSnapshot(this.id)
            .then(() => __awaiter(this, void 0, void 0, function* () {
            return (yield this.getConfig("target_dir")) + "/lastsnap.jpg";
        }));
    }
    /**
     * Shutdown and restart Motion.
     */
    restart() {
        return this.webControl.restart(this.id);
    }
    /**
     * Close all connections to the camera.
     */
    quit() {
        return this.webControl.quit(this.id);
    }
    /**
     * Entirely shutdown the Motion application.
     */
    end() {
        return this.webControl.end(this.id);
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get webControl() {
        return this._webControl;
    }
    set webControl(value) {
        this._webControl = value;
    }
}
exports.Camera = Camera;
