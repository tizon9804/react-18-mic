let audioCtx, analyser;
if (typeof window !== 'undefined') {
  // Estamos en un entorno de navegador
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
}

const AudioContext  = {

  getAudioContext() {
    return audioCtx;
  },

  getAnalyser() {
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData() {
    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data here
    });
  }

}

export default AudioContext;
