import { WebControl } from "./WebControl";
import { Camera } from "./Camera";
export declare class MotionApi {
    private _cameras;
    /**
     * Webcontrol instance
     */
    private _webControl;
    /**
     * Creates MotionApi object
     * @param apiUrl The base url of the HTTP motion server
     */
    constructor(apiUrl: string);
    /**
     * Returns an unique instance of the camera
     * @param idCamera
     */
    getCamera(idCamera: number): Camera;
    get cameras(): Array<Camera>;
    set cameras(value: Array<Camera>);
    get webControl(): WebControl;
    set webControl(value: WebControl);
}
