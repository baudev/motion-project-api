export declare class WebControl {
    private _url;
    constructor(url: string);
    private request;
    /**
     * Lists all the configuration values for the camera.
     * @param cameraId
     */
    getConfigList(cameraId: number): Promise<any>;
    /**
     * Set the value for the requested parameter
     * @param cameraId
     * @param parm
     * @param value1
     */
    setConfig(cameraId: number, parm: string, value1: string): Promise<any>;
    /**
     * Return the value currently set for the parameter.
     * @param cameraId
     * @param parm
     */
    getConfig(cameraId: number, parm: string): Promise<any>;
    /**
     * Write the current parameters to the file.
     * @param cameraId
     */
    writeConfig(cameraId: number): Promise<any>;
    /**
     * Return the current status of the camera.
     * @param cameraId
     */
    getDetectionStatus(cameraId: number): Promise<any>;
    /**
     * Return the connection status of the camera.
     * @param cameraId
     */
    getDetectionConnection(cameraId: number): Promise<any>;
    /**
     * Start or resume motion detection.
     * @param cameraId
     */
    setDetectionStart(cameraId: number): Promise<any>;
    /**
     * Pause the motion detection.
     * @param cameraId
     */
    setDetectionPause(cameraId: number): Promise<any>;
    /**
     * Trigger a new event.
     * @param cameraId
     */
    startEvent(cameraId: number): Promise<any>;
    /**
     * Trigger the end of a event.
     * @param cameraId
     */
    endEvent(cameraId: number): Promise<any>;
    /**
     * Create a snapshot
     * @param cameraId
     */
    getSnapshot(cameraId: number): Promise<any>;
    /**
     * Shutdown and restart Motion
     * @param cameraId
     */
    restart(cameraId: number): Promise<any>;
    /**
     * Close all connections to the camera
     * @param cameraId
     */
    quit(cameraId: number): Promise<any>;
    /**
     * Entirely shutdown the Motion application
     * @param cameraId
     */
    end(cameraId: number): Promise<any>;
    get url(): string;
    set url(value: string);
}
