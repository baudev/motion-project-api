import {WebControl} from "./WebControl";
import {MotionDetectionStatus} from "./Enums/MotionDetectionStatus";
import {MotionConnectionStatus} from "./Enums/MotionConnectionStatus";

export class Camera {

    /**
     * Id of the camera
     */
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    /**
     * Start or resume motion detection.
     */
    public startMotionDetection(): Promise<void> {
        return WebControl.setDetectionStart(this.id)
            .then(() => {return;});
    }

    /**
     * Pause the motion detection.
     */
    public pauseMotionDetection(): Promise<void> {
        return WebControl.setDetectionPause(this.id)
            .then(() => {return;});
    }

    /**
     * Create a snapshot
     */
    public createSnapshot(): Promise<void> {
        return WebControl.getSnapshot(this.id)
            .then(() => {return;});
    }

    /**
     * Return the current status of the camera.
     */
    public getCurrentStatus(): Promise<MotionDetectionStatus> {
        return WebControl.getDetectionStatus(this.id)
            .then((message) => {
                return new RegExp(/Detection status ACTIVE/).test(message) ? MotionDetectionStatus.ENABLE : MotionDetectionStatus.DISABLE;
            })
    }

    /**
     * Return the connection status of the camera.
     */
    public getConnectionStatus(): Promise<MotionConnectionStatus> {
        return WebControl.getDetectionConnection(this.id)
            .then((message) => {
                return new RegExp(/Camera Connection OK/).test(message) ? MotionConnectionStatus.OK : MotionConnectionStatus.DISCONNECTED;
            })
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}