import { WebControl } from "./WebControl";
import { MotionDetectionStatus } from "./Enums/MotionDetectionStatus";
import { MotionConnectionStatus } from "./Enums/MotionConnectionStatus";
export declare class Camera {
    /**
     * Id of the camera
     */
    private _id;
    /**
     * Webcontrol instance
     */
    private _webControl;
    constructor(id: number, webControl: WebControl);
    /**
     * Lists all the configuration values for the camera.
     */
    getConfigList(): Promise<string>;
    /**
     * Set the value for the requested parameter.
     * @param parm
     * @param value1
     */
    setConfig(parm: string, value1: string): Promise<void>;
    /**
     * Return the value currently set for the parameter.
     * @param parm
     */
    getConfig(parm: string): Promise<string>;
    /**
     * Write the current parameters to the file.
     */
    writeConfig(): Promise<string>;
    /**
     * Return the current status of the camera.
     */
    getDetectionStatus(): Promise<MotionDetectionStatus>;
    /**
     * Return the connection status of the camera.
     */
    getConnectionStatus(): Promise<MotionConnectionStatus>;
    /**
     * Start or resume motion detection.
     */
    startDetection(): Promise<string>;
    /**
     * Pause the motion detection.
     */
    pauseDetection(): Promise<string>;
    /**
     * Trigger a new event.
     */
    startEvent(): Promise<string>;
    /**
     * Trigger the end of a event.
     */
    endEvent(): Promise<string>;
    /**
     * Create a snapshot.
     */
    createSnapshot(): Promise<string>;
    /**
     * Shutdown and restart Motion.
     */
    restart(): Promise<string>;
    /**
     * Close all connections to the camera.
     */
    quit(): Promise<string>;
    /**
     * Entirely shutdown the Motion application.
     */
    end(): Promise<string>;
    get id(): number;
    set id(value: number);
    get webControl(): WebControl;
    set webControl(value: WebControl);
}
