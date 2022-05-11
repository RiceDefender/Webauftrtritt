import { React, useState, useEffect } from "react";

import './../App.css';

const Youtubeembed = () => {
return (
<div className="youtubeembed">
    {/* Make youtubeplayer without autoplay and with console*/}
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
</div>
    );
}

//default export function
export default Youtubeembed;