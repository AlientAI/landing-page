'use client';

import { useState } from 'react';
import Image from 'next/image';

const VIDEO_ID = 'p0IIO4391RQ';

// Click-to-play facade: the heavy YouTube iframe only loads on demand,
// keeping ~1.5 MB of third-party JS out of the initial page load.
export default function LiveDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="demo-strip" id="live-demo">
      <div className="demo-inner">
        <div className="container">
          <div className="demo-frame demo-frame--video">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
                title="Alient — live session"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <button
                type="button"
                className="demo-facade"
                onClick={() => setPlaying(true)}
                aria-label="Play the Alient demo video"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Still from a recorded Alient session"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  style={{ objectFit: 'cover' }}
                />
                <span className="demo-play" aria-hidden="true">
                  <svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <p className="demo-caption">
            Watch Alient pick up a real task and finish it end to end — one example of the agent
            completing work. Recorded April 15, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
