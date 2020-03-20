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

**startMotionDetection(): Promise<void>**

Start or resume motion detection.

**pauseMotionDetection(): Promise<void>**

Pause the motion detection.

**createSnapshot(): Promise<void>**

Create a snapshot

**getCurrentStatus(): Promise<MotionDetectionStatus>**

Return the current status of the camera. `MotionDetectionStatus.ENABLE` is enable or `MotionDetectionStatus.DISABLE` if disabled.

**getConnectionStatus(): Promise<MotionConnectionStatus>**

Return the connection status of the camera. `MotionConnectionStatus.OK` if well connected otherwise `MotionConnectionStatus.DISCONNECTED`.

**getFilesTargetDir(): Promise<string>**

Return the files target directory.