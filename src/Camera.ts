import {WebControl} from "./WebControl";
import {MotionDetectionStatus} from "./Enums/MotionDetectionStatus";
import {MotionConnectionStatus} from "./Enums/MotionConnectionStatus";

export class Camera {

    /**
     * Id of the camera
     */
    private _id: number;

    /**
     * Webcontrol instance
     */
    private _webControl: WebControl;

    constructor(id: number, webControl: WebControl) {
        this._id = id;
        this._webControl = webControl;
    }

    /**
     * Start or resume motion detection.
     */
    public startMotionDetection(): Promise<void> {
        return this.webControl.setDetectionStart(this.id)
            .then(() => {return;});
    }

    /**
     * Pause the motion detection.
     */
    public pauseMotionDetection(): Promise<void> {
        return this.webControl.setDetectionPause(this.id)
            .then(() => {return;});
    }

    /**
     * Create a snapshot
     */
    public createSnapshot(): Promise<string> {
        return this.webControl.getSnapshot(this.id)
            .then(async () => {
                return await this.getFilesTargetDir() + "/lastsnap.jpg";
            });
    }

    /**
     * Return the current status of the camera.
     */
    public getCurrentStatus(): Promise<MotionDetectionStatus> {
        return this.webControl.getDetectionStatus(this.id)
            .then((message) => {
                return new RegExp(/Detection status ACTIVE/).test(message) ? MotionDetectionStatus.ENABLE : MotionDetectionStatus.DISABLE;
            })
    }

    /**
     * Return the connection status of the camera.
     */
    public getConnectionStatus(): Promise<MotionConnectionStatus> {
        return this.webControl.getDetectionConnection(this.id)
            .then((message) => {
                return new RegExp(/Camera Connection OK/).test(message) ? MotionConnectionStatus.OK : MotionConnectionStatus.DISCONNECTED;
            })
    }

    /**
     * Returns the files target directory.
     */
    public getFilesTargetDir(): Promise<string> {
        return this.webControl.getConfigList(this.id)
            .then((response) => {
                let regex = /target_dir = (.+) /;
                let match = regex.exec(response);
                return match && match[1] ? match[1] : "/var/lib/motion/Camera" + this.id
            })
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get webControl(): WebControl {
        return this._webControl;
    }

    set webControl(value: WebControl) {
        this._webControl = value;
    }
}