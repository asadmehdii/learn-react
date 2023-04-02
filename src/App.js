import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data.js";

function App() {
  return (
    <>
      <div className="App">
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              onPlay={() => console.log("button is played", video.title)}
              onPause={() => console.log("button is paused", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
        <br />
      </div>
      {/* <PlayButton
        message="pause button"
        onClick={() => console.log("button is clicked")}
      >
        Play
      </PlayButton> */}
    </>
  );
}

export default App;
