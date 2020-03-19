import {WebControl} from "./WebControl";
import {Camera} from "./Camera";

const _ = require('lodash');

export class MotionApi {

    private cameras: Array<Camera> = [];

    /**
     * Creates MotionApi object
     * @param apiUrl The base url of the HTTP motion server
     */
    constructor(apiUrl: string) {
        WebControl.url = apiUrl;
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
            let newCamera = new Camera(idCamera);
            this.cameras.push(newCamera);
            return newCamera;
        }
    }
}