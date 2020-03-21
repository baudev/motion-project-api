# Motion API

This library aims to expose a simplistic API for the https://motion-project.github.io/ project.

# Installation

``` 
npm i motion-project-api
```

# Usage

Example creating a snapshot with the camera 1.

```typescript
let motionApi = new MotionApi("http://localhost:7999"); // URL of the motion web server
motionApi.getCamera(1).createSnapshot(); // creates a snapshot for the camera 1
```

## API

### Class MotionApi

**MotionApi(apiUrl)**

+ apiUrl - (_string_) The motion web server url.

**getCamera(idCamera): Camera**

+ idCamera - (_number_) The camera number to control.

Returns an instance of `Camera`.

### Class Camera

**Camera(id)**

+ id - (_number_) The camera number to control.

**getConfigList(): Promise<string>**

Lists all the configuration values for the camera.

**setConfig(parm, value1): Promise<void>**

+ parm - (_string_) Name of the parameter
+ value1 - (_string_) New value of the specified parameter

Set the value for the requested parameter.

**getConfig(parm): Promise<string>**

+ parm - (_string_) The name of the parameter

Return the value currently set for the parameter.

**writeConfig(): Promise<string>**

Write the current parameters to the file.

**getDetectionStatus(): Promise<MotionDetectionStatus>**

Return the current status of the camera. `MotionDetectionStatus.ENABLE` is enable or `MotionDetectionStatus.DISABLE` if disabled.

**getConnectionStatus(): Promise<MotionConnectionStatus>**

Return the connection status of the camera. `MotionConnectionStatus.OK` if well connected otherwise `MotionConnectionStatus.DISCONNECTED`.

**startDetection(): Promise<string>**

Start or resume motion detection.

**pauseDetection(): Promise<string>**

Pause the motion detection. _When the action of pause is executed, Motion will stop the motion detection processing and of course all events but will continue to process and decode images from the camera. This allows for a faster transition when the user executes a start._

**startEvent(): Promise<string>**

Trigger a new event.

**endEvent(): Promise<string>**

Trigger the end of a event.

**createSnapshot(): Promise<void>**

Create a snapshot

**restart(): Promise<string>**

Shutdown and restart Motion.

**quit(): Promise<string>**

Close all connections to the camera. _The quit action conversely not only stops the motion detection but also disconnects from the camera and decoding of images. To start motion detection after a quit, the user must execute a restart which will reinitialize the connection to the camera. And since the camera was completely disconnect, it can take more than a few seconds for Motion to fully start and have the camera available for processing or viewing._

**end(): Promise<string>**

Entirely shutdown the Motion application. _This option completely terminates the Motion application. It closes all connections to all the cameras and terminates the application. This may be required when running Motion in daemon mode. Note that there is no way to restart the Motion application from the webcontrol interface after processing a end request._