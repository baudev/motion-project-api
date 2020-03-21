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
     * Lists all the configuration values for the camera.
     */
    public getConfigList(): Promise<string> {
        return this.webControl.getConfigList(this.id);
    }

    /**
     * Set the value for the requested parameter.
     * @param parm
     * @param value1
     */
    public setConfig(parm: string, value1: string): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
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
    public getConfig(parm: string): Promise<string> {
        return new Promise<string>(((resolve, reject) => {
            return this.webControl.getConfig(this.id, parm)
                .then((response) => {
                    let regex = /= (.+) /;
                    let match = regex.exec(response);
                    return match && match[1] ? resolve(match[1]) : reject()
                })
                .catch((err) => reject(err));
        }));
    }

    /**
     * Write the current parameters to the file.
     */
    public writeConfig(): Promise<string> {
        return this.webControl.writeConfig(this.id);
    }

    /**
     * Return the current status of the camera.
     */
    public getDetectionStatus(): Promise<MotionDetectionStatus> {
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
     * Start or resume motion detection.
     */
    public startDetection(): Promise<string> {
        return this.webControl.setDetectionStart(this.id);
    }

    /**
     * Pause the motion detection.
     */
    public pauseDetection(): Promise<string> {
        return this.webControl.setDetectionPause(this.id);
    }

    /**
     * Trigger a new event.
     */
    public startEvent(): Promise<string> {
        return this.webControl.startEvent(this.id);
    }

    /**
     * Trigger the end of a event.
     */
    public endEvent(): Promise<string> {
        return this.webControl.endEvent(this.id);
    }

    /**
     * Create a snapshot.
     */
    public createSnapshot(): Promise<string> {
        return this.webControl.getSnapshot(this.id)
            .then(async () => {
                return await this.getConfig("target_dir") + "/lastsnap.jpg";
            });
    }

    /**
     * Shutdown and restart Motion.
     */
    public restart(): Promise<string> {
        return this.webControl.restart(this.id);
    }

    /**
     * Close all connections to the camera.
     */
    public quit(): Promise<string> {
        return this.webControl.quit(this.id);
    }

    /**
     * Entirely shutdown the Motion application.
     */
    public end(): Promise<string> {
        return this.webControl.end(this.id);
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