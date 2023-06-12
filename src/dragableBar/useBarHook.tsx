import React, { useCallback, useRef, useState } from "react";

 function useBarHook() {

    const [verticalLine , setVerticalLine] = useState(200);
    const [horizontalLine , setHorizontalLine] = useState(200);
    const verticalRef = useRef<any>(null);
    const horizontalRef = useRef<any>(null);


    const handleVerticalSelect = useCallback((event : React.MouseEvent)=>{

            const X = event.clientX;

            const handleMouseMove = (event: MouseEvent) => {
              const newVerticalLine = event.clientX + X;
              setVerticalLine(newVerticalLine);
            };

            const handleMouseUp = () => {
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
    } , []) ; 


    const handleHorizontalSelect = useCallback((event: React.MouseEvent) => {
      const Y = event.clientY;

      const handleMouseMove = (event: MouseEvent) => {
        const newHorizontalLine = event.clientY + Y;
        setHorizontalLine(newHorizontalLine);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }, []); ; 




    return {
      verticalLine,
      horizontalLine,
      verticalRef,
      horizontalRef,
      handleVerticalSelect,
      handleHorizontalSelect,
    };




}
export default useBarHook;