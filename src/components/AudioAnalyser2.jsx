import React from 'react';
import AudioStreamMeter from 'audio-stream-meter';
import { useEffect, useRef } from 'react';

const AudioAnalyser2 = ({audio}) =>{
  const volume = useRef()

useEffect(() => {
  async function fetchData() {
      //const stream = await navigator.mediaDevices.getUserMedia({audio:true})
      if(audio) {
      let audioContext = new AudioContext();			
      let mediaStream = audioContext.createMediaStreamSource(audio);
      var config = {
        bufferSize: 1024, // default: 1024, interval: {0, 256, 512, 1024, 2048, 4096, 8192, 16384} 
        inputChannels: 1, // default: 1, interval: [1, 32]
        volumeFall: 0.95, // default: 0.95, interval: (0,1)
        throttle: 1, // default: 1, interval: [1, 10]
    };
      const meter = AudioStreamMeter.audioStreamProcessor(audioContext, function() {
          volume.current.style.width = meter.volume * 100 + '%';
      }, config);
      console.log(meter)
      mediaStream?.connect(meter);
      audio.onended = meter.close.bind(meter);
    }

    return () => {
      mediaStream.disconnect();
    }
  }
  fetchData();
},[audio])

      return (
        <div  style={{color: "red", width:"300px",height:"30px", backgroundColor:"#FF00FF"}}>
	      <div id="volume" ref={volume} style={{height:"30px", backgroundColor:"#00FFFF"}}></div>
        </div>
      )
    }

export default AudioAnalyser2;