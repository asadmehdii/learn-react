import React from "react";

export default function Video({
  channel,
  id,
  title,
  views,
  verified,
  children,
}) {
  let channelJSX;
  return (
    <>
      <div>
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
          alt="img"
          className="myimg"
        />
        {
          (channelJSX = (
            <div className="channels">
              {channel}
              {verified && "✔️"}{" "}
            </div>
          ))
        }

        <div className="title">{title}</div>
        <div className="views">{views}</div>
      </div>
      <div style={{ float: "right" }}>{children}</div>
    </>
  );
}
