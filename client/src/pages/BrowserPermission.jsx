import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const BrowserPermission = () => {
  const webRef = useRef(null);
  const [image, setImage] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const videoConstraints = {
    width: 500,
    height: 300,
    facingMode: "user",
  };

  const getScreenshot = () => {
    if (webRef.current) {
      setImage(webRef.current.getScreenshot({ width: 500, height: 300 }));
    }
  };

  const requestPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setPermissionGranted(true);
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.log("Permission denied", error);
      setPermissionGranted(false);
    }
  };

  useEffect(() => {
    if (!permissionGranted) {
      requestPermissions();
    }
  }, [permissionGranted]);

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-center text-2xl">
        Allow Camera and Microphone Permissions
      </h1>

      {permissionGranted ? (
        <>
          <Webcam
            audio={true}
            ref={webRef}
            videoConstraints={videoConstraints}
            className="mx-auto m-10 border-solid border-2 border-black"
          />
          <button
            onClick={getScreenshot}
            className="rounded-md bg-blue-900 text-white mx-auto p-3"
          >
            Take Picture
          </button>
          {image && (
            <img
              src={image}
              alt="screenshot"
              className="mx-auto m-10 border-solid border-2 border-black"
            />
          )}
        </>
      ) : (
        <p className="text-center text-red-500">
          Please allow camera and microphone permissions to continue.
        </p>
      )}
    </div>
  );
};

export default BrowserPermission;
