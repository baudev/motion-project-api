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
     * Create a snapshot
     * @param cameraId
     */
    public async getSnapshot(cameraId: number) {
        return this.request(cameraId + "/action/snapshot");
    }

    /**
     * Lists all the configuration values for the camera.
     * @param cameraId
     */
    public async getConfigList(cameraId: number) {
        return this.request(cameraId + "/config/list");
    }
    
    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}