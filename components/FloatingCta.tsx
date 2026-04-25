'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from './icons';

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const finalCta = document.getElementById('demo');

    const update = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.6;
      const finalRect = finalCta?.getBoundingClientRect();
      const finalVisible = finalRect ? finalRect.top < window.innerHeight - 100 : false;
      setVisible(scrolled && !finalVisible);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <a
      className={`floating-cta${visible ? ' visible' : ''}`}
      href="#demo"
      aria-label="Request a demo"
      aria-hidden={!visible}
    >
      <span className="dot" />
      <span>Request a demo</span>
      <ArrowRight />
    </a>
  );
}
