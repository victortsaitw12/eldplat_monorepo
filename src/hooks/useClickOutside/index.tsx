import React from "react";

const useClickOutside = (callback: () => void) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);
  return ref;
};

export default useClickOutside;
