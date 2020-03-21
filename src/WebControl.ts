const fetch = require("node-fetch");

export class WebControl {

    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    private request(route: string){
        return fetch(this.url + "/" + route)
            .then((res: Response) => res.text());
    }

    /**
     * Lists all the configuration values for the camera.
     * @param cameraId
     */
    public async getConfigList(cameraId: number) {
        return this.request(cameraId + "/config/list");
    }

    /**
     * Set the value for the requested parameter
     * @param cameraId
     * @param parm
     * @param value1
     */
    public async setConfig(cameraId: number, parm: string, value1: string) {
        return this.request(cameraId + "/config/set?" + parm + "=" + value1);
    }

    /**
     * Return the value currently set for the parameter.
     * @param cameraId
     * @param parm
     */
    public async getConfig(cameraId: number, parm: string) {
        return this.request(cameraId + "/config/get?query=" + parm);
    }

    /**
     * Write the current parameters to the file.
     * @param cameraId
     */
    public async writeConfig(cameraId: number) {
        return this.request(cameraId + "/config/write");
    }

    /**
     * Return the current status of the camera.
     * @param cameraId
     */
    public async getDetectionStatus(cameraId: number) {
        return this.request(cameraId + "/detection/status");
    }

    /**
     * Return the connection status of the camera.
     * @param cameraId
     */
    public async getDetectionConnection(cameraId: number) {
        return this.request(cameraId + "/detection/connection");
    }

    /**
     * Start or resume motion detection.
     * @param cameraId
     */
    public async setDetectionStart(cameraId: number) {
        return this.request(cameraId + "/detection/start");
    }

    /**
     * Pause the motion detection.
     * @param cameraId
     */
    public async setDetectionPause(cameraId: number) {
        return this.request(cameraId + "/detection/pause");
    }


    /**
     * Trigger a new event.
     * @param cameraId
     */
    public async startEvent(cameraId: number) {
        return this.request(cameraId + "/action/eventstart");
    }

    /**
     * Trigger the end of a event.
     * @param cameraId
     */
    public async endEvent(cameraId: number) {
        return this.request(cameraId + "/action/eventend");
    }

    /**
     * Create a snapshot
     * @param cameraId
     */
    public async getSnapshot(cameraId: number) {
        return this.request(cameraId + "/action/snapshot");
    }

    /**
     * Shutdown and restart Motion
     * @param cameraId
     */
    public async restart(cameraId: number) {
        return this.request(cameraId + "/action/restart")
    }

    /**
     * Close all connections to the camera
     * @param cameraId
     */
    public async quit(cameraId: number) {
        return this.request(cameraId + "/action/quit");
    }

    /**
     * Entirely shutdown the Motion application
     * @param cameraId
     */
    public async end(cameraId: number) {
        return this.request(cameraId + "/action/end");
    }
    
    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}