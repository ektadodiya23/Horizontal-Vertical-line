import React from 'react'
import useBarHook from './useBarHook';
import './barStyle.css';
export default function Barline() {

    const data = useBarHook();


  return (
    <div className="app_container">
      <div
        ref={data.verticalRef}
        style={{
          position: "absolute",
          top: 0,
          left: data.verticalLine,
          height: "100%",
          width: 3,
          background: "gray",
          cursor: "col-resize",
        }}
        onMouseDown={data.handleVerticalSelect}
      ></div>
      <div
        ref={data.horizontalRef}
        style={{
          position: "absolute",
          top: data.horizontalLine,
          left: 0,
          width: "100%",
          height: 3,
          background: "gray",
          cursor: "row-resize",
        }}
        onMouseDown={data.handleHorizontalSelect}
      ></div>
    </div>
  );
}
