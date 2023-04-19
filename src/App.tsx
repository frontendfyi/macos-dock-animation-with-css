import "./index.css";
import { useRef } from "react";
import { scaleValue } from "./utils/scale";

const maxAdditionalSize = 5;

function App() {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <div className="page">
      <nav ref={dockRef} className="dock">
        <ul>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/arc.png" />
              <span className="tooltip">Arc Browser</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/1password.png" />
              <span className="tooltip">1Password</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/calendar.png" />
              <span className="tooltip">Calendar</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/email.png" />
              <span className="tooltip">Mail (who uses this app?!)</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/signal.png" />
              <span className="tooltip">Signal</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/slack.png" />
              <span className="tooltip">Slack</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/spotify.png" />
              <span className="tooltip">Spotify</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/vscode.png" />
              <span className="tooltip">VsCode</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/warp.png" />
              <span className="tooltip">Warp</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://www.frontend.fyi" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/frontendfyi.png" />
              <span className="tooltip">Visit frontend.fyi</span>
            </a>
          </li>
          <li className="app" onMouseMove={handleAppHover}>
            <a href="https://youtu.be/_ZcIFTvLm64" target="_blank">
              <img src="https://www.frontend.fyi/playground-assets/macos-dock/icons/youtube.png" />
              <span className="tooltip">Watch this tutorial on YouTube</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="source-links">
        <a
          href="https://unsplash.com/photos/4wzRuAb-KWs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wallpaper by Mohammad <br />
          Alizade on Unsplash
        </a>
        <a
          href="https://macosicons.com/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Icons by MacOS Icons
        </a>
      </div>
      <div className="mobile-message">
        <p>
          What?! MacOS works on mobile?..
          <br />— Unfortunately it doesn't 😢 Open this site on your desktop to
          enjoy the amazing animations! Or watch the video{" "}
          <a href="https://youtu.be/_ZcIFTvLm64" target="_blank">
            on YouTube
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
