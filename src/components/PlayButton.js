import "bootstrap/dist/css/bootstrap.min.css";

function PlayButton({ children, onClick, onPlay, onPause }) {
  let playing = false;
  function handleClick() {
    if (playing) onPlay();
    else onPause();
    playing = !playing;
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        {children}
        {playing ? ">" : "||"}
      </button>
    </div>
  );
}
export default PlayButton;
