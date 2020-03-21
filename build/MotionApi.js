"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebControl_1 = require("./WebControl");
const Camera_1 = require("./Camera");
const _ = require('lodash');
class MotionApi {
    /**
     * Creates MotionApi object
     * @param apiUrl The base url of the HTTP motion server
     */
    constructor(apiUrl) {
        this._cameras = [];
        this._webControl = new WebControl_1.WebControl(apiUrl);
    }
    /**
     * Returns an unique instance of the camera
     * @param idCamera
     */
    getCamera(idCamera) {
        let camera = _.find(this.cameras, function (camera) {
            return camera.id === idCamera;
        });
        if (camera !== undefined) {
            return camera;
        }
        else {
            let newCamera = new Camera_1.Camera(idCamera, this.webControl);
            this.cameras.push(newCamera);
            return newCamera;
        }
    }
    get cameras() {
        return this._cameras;
    }
    set cameras(value) {
        this._cameras = value;
    }
    get webControl() {
        return this._webControl;
    }
    set webControl(value) {
        this._webControl = value;
    }
}
exports.MotionApi = MotionApi;
