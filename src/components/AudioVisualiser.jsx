// import React from 'react';
// import { useEffect } from 'react';
// import { forwardRef, useRef } from 'react';

// const AudioVisualiser = forwardRef((props, valueMeter) => {
//   const meter = useRef();
//   const valueMeter = useRef();
//   let instant = 0.0;

//   useEffect(() =>{
//   draw()
//   })
  
//   const draw = () => {
//     const { audioData } = props;
//     for (const item of audioData) {
//       const y = (item / 255.0) * 300;
//       instant = y.toFixed(2) -150.50;
//       meter.current.value = valueMeter.current = instant.toFixed(2)
//     }
//   }

//     return (
//     <>
//     <meter ref={meter} high="50" max="50" value="0"></meter>
//     <div ref={valueMeter} className="value"></div>
//     </>
//     );

// })

// export default AudioVisualiser;