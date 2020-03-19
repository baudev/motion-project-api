import {throws} from "assert";

const fetch = require("node-fetch");

export class WebControl {

    public static url = "http://192.168.1.68:7999";

    private static request(route: string){
        return fetch(WebControl.url + "/" + route)
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

}