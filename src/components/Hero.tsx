useEffect(() => {
  if (phase < 3) {
    const timer = setTimeout(() => setPhase(phase + 1), ANIMATION_DURATION);
    return () => clearTimeout(timer);
  } else {
    const contentTimer = setTimeout(() => setShowContent(true), CONTENT_SLIDE_DELAY);
    return () => clearTimeout(contentTimer);
  }
}, [phase]);