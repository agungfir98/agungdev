import React, { useCallback, useEffect, useState } from "react";

interface scrollValue {
  scrollY: number;
}

export const scrollContext = React.createContext<scrollValue>({
  scrollY: 0,
});

const ScrollObserver: React.FC<any> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return ()=> document.removeEventListener('scroll',handleScroll)
  }, [handleScroll]);

  return (
    <scrollContext.Provider value={{ scrollY }}>
      {children}
    </scrollContext.Provider>
  );
};
export default ScrollObserver;
