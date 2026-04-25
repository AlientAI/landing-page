export default function LiveDemo() {
  return (
    <section className="demo-strip" id="live-demo">
      <div className="demo-inner">
        <div className="container">
          <div className="demo-frame demo-frame--video">
            <iframe
              src="https://www.youtube.com/embed/p0IIO4391RQ?rel=0&modestbranding=1"
              title="Alient — live session"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="demo-caption">Real session. Recorded April 15, 2026. No edits, no cuts.</p>
        </div>
      </div>
    </section>
  );
}
