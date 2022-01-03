import { useRef } from "react";

export default function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
    console.log(videoRef.current);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    videoRef.current.remove();
  };

  return (
    <div className="App">
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
      <video ref={videoRef} width="320" height="240" controls>
        <source
          type="video/mp4"
          src="https://player.vimeo.com/external/544643152.sd.mp4?s=7dbf132a4774254dde51f4f9baabbd92f6941282&profile_id=165"
        />
      </video>
    </div>
  );
}
