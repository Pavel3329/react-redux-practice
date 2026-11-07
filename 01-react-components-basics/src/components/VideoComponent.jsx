function VideoComponent() {
  return (
    <div>
      <h2>Моё первое видео в React</h2>
      <video loop width="400" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
      <p>
        .........................................................................................................................
      </p>
    </div>
  );
}

export default VideoComponent;
