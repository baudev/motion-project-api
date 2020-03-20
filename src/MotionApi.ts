import {WebControl} from "./WebControl";
import {Camera} from "./Camera";

const _ = require('lodash');

export class MotionApi {

    private _cameras: Array<Camera> = [];
    /**
     * Webcontrol instance
     */
    private _webControl: WebControl;

    /**
     * Creates MotionApi object
     * @param apiUrl The base url of the HTTP motion server
     */
    constructor(apiUrl: string) {
        this._webControl = new WebControl(apiUrl);
    }

    /**
     * Returns an unique instance of the camera
     * @param idCamera
     */
    public getCamera(idCamera: number): Camera{
        let camera = _.find(this.cameras, function (camera: Camera) {
            return camera.id === idCamera;
        });
        if (camera !== undefined) {
            return camera;
        } else {
            let newCamera = new Camera(idCamera, this.webControl);
            this.cameras.push(newCamera);
            return newCamera;
        }
    }


    get cameras(): Array<Camera> {
        return this._cameras;
    }

    set cameras(value: Array<Camera>) {
        this._cameras = value;
    }

    get webControl(): WebControl {
        return this._webControl;
    }

    set webControl(value: WebControl) {
        this._webControl = value;
    }
}