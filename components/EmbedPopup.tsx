"use client";
import { useClickOutside } from "@/utility";
import { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface EmbedPopupContentProps {
  close: () => void;
  videoID: string;
}

const EmbedPopup_ = ({ close, videoID }: EmbedPopupContentProps) => {
  const domNode = useClickOutside(() => {
    close();
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={close}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <ReactPlayer url={videoID} playing={true} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const EmbedPopup = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach((a) => {
        if (
          a.href.includes("www.youtube.com") ||
          a.href.includes("vimeo.com") ||
          a.href.includes("soundcloud.com")
        ) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 600);
  }, [video]);

  return (
    video && videoValue && <EmbedPopup_ close={() => setVideo(false)} videoID={videoValue} />
  );
};

export default EmbedPopup;
