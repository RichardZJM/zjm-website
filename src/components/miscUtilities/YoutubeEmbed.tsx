import React from "react";
import "./YoutubeEmbed.css";

type youtubeEmbedProps = { embedID: string };

//Built from https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

function YoutubeEmbed(props: youtubeEmbedProps) {
  return (
    <div className="responsive-video-container">
      <h1>whiauhi</h1>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded Youtube Video"
      />
    </div>
  );
}

export default YoutubeEmbed;
