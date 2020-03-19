const fetch = require("node-fetch");

export class WebControl {

    private static _url: string;

    private static request(route: string){
        return fetch(WebControl._url + "/" + route)
            .then((res: Response) => res.text());
    }

    /**
     * Return the current status of the camera.
     * @param cameraId
     */
    public static async getDetectionStatus(cameraId: number) {
        return WebControl.request(cameraId + "/detection/status");
    }

    /**
     * Return the connection status of the camera.
     * @param cameraId
     */
    public static async getDetectionConnection(cameraId: number) {
        return WebControl.request(cameraId + "/detection/connection");
    }

    /**
     * Start or resume motion detection.
     * @param cameraId
     */
    public static async setDetectionStart(cameraId: number) {
        return WebControl.request(cameraId + "/detection/start");
    }

    /**
     * Pause the motion detection.
     * @param cameraId
     */
    public static async setDetectionPause(cameraId: number) {
        return WebControl.request(cameraId + "/detection/pause");
    }

    /**
     * Create a snapshot
     * @param cameraId
     */
    public static async getSnapshot(cameraId: number) {
        return WebControl.request(cameraId + "/action/snapshot");
    }

    /**
     * Setter for server URL
     * @param value
     */
    static set url(value: string) {
        this._url = value;
    }

}