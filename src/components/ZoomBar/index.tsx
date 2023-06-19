import React from "react";
import { ZoombarSTY } from "./style";

const ZoomBar = ({
  setState,
  initScale
}: {
  setState?: (value: any) => void;
  initScale?: number;
}) => {
  const [scale, setScale] = React.useState(initScale || 0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [initClientX, setInitClientX] = React.useState<number>(0);

  const zoomBarWidth = 100; //px
  const stepSize = 100; //by percentage
  const numSteps = 100 / stepSize;
  const limitMovement = (movement: number, limit: number): number => {
    return Math.max(Math.min(movement, limit), limit * -1);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  React.useEffect(() => {
    if (initScale !== undefined) setScale(initScale);
  }, [initScale]);

  const handleMouseMove = React.useCallback(
    (event: MouseEvent) => {
      if (!isDragging) {
        return;
      }
      const clientMouseMovement = event.clientX - initClientX;
      let adjustedMovement = (clientMouseMovement / zoomBarWidth) * 100;
      if (scale <= 0 && adjustedMovement < 0) {
        adjustedMovement = 0;
      }
      if (scale >= 100 && adjustedMovement > 0) {
        adjustedMovement = 0;
      }
      const adjustedMovementBySteps =
        Math.round(adjustedMovement / stepSize) * stepSize;
      const updatedScale = Math.min(scale + adjustedMovementBySteps, 100);

      setScale(updatedScale);
      setState && setState(updatedScale >= 100);
    },
    [isDragging, initClientX, scale, setState]
  );

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    setInitClientX(event.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setInitClientX(0);
    setIsDragging(false);
  };

  return (
    <ZoombarSTY className="zoomBar" scale={scale} onMouseDown={handleMouseDown}>
      <div className="zoom-bar"></div>
      <div className="zoom-controler"></div>
    </ZoombarSTY>
  );
};

export default ZoomBar;
