// import React from 'react';
// import { useEffect, useState, forwardRef, useRef} from 'react';;
// import AudioVisualiser from './AudioVisualiser';

// const AudioAnalyser = forwardRef((props, ref) =>{
//   let dataArray, rafId, analyser;
//   const [audioData, setAudioData] = useState(new Uint8Array(0));
//   const childCompRef = useRef()

//   useEffect(() =>{
//     props.sendData(childCompRef);
//     console.log(childCompRef)
//      // Primero creamos un nuevo AudioContext .
//         // Safari todavía solo admite la versión prefijada de webkit.
//         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         // crearemos un AnalyserNode que hará el trabajo pesado por nosotros:
//         analyser = audioContext.createAnalyser();
//         //Del AnalyserNode necesitamos saber la frecuenciaBinCount que, según la documentación, generalmente equivale a la cantidad de valores de datos que estarán disponibles para reproducir en una visualización.
//         // Crearemos una matriz de enteros sin signo de 8 bits, un Uint8Array, la longitud de la frecuenciaBinCount.
//         // Este dataArray se utilizará para almacenar los datos de forma de onda que el AnalyserNode creará.
//         dataArray = new Uint8Array(analyser.frequencyBinCount);
//        // Pasamos el media stream del micrófono al componente como props y necesitamos convertirlo en una fuente para la Web Audio API.
//        // To do this, call createMediaStreamSource on the AudioContext object, passing in the stream.  
//        const source = audioContext.createMediaStreamSource(props.audio);
//         // Once we have the source we can then connect the analyser.
//         source.connect(analyser);
//         // tendremos que llamar al método getByteTimeDomainData de AnalyserNode cada vez que queramos actualizar la visualización.
//         rafId = requestAnimationFrame(tick);

//         return () => {
//           cancelAnimationFrame(rafId);
//           analyser.disconnect();
//           source.disconnect();
//         }
//   },[])

//         let tick = () => {
//           analyser.getByteTimeDomainData(dataArray);
//           setAudioData([...dataArray]);
//             /* Dado que estaremos animando esta visualización, llamaremos a la API requestAnimationFrame del navegador para extraer
//              los datos de audio más recientes del AnalyserNode cada vez que queramos actualizar la visualización.*/
//              rafId = requestAnimationFrame(tick);
//           }
      

//       return <AudioVisualiser ref={childCompRef} audioInputSelect={props.audioInputSelect} audioData={audioData} /> 
//     })

// export default AudioAnalyser;