import React from "react";
import '../css/CammeraCapture.css';

class CammeraCapture extends React.Component {

	handleSuccess(stream) {
  		const video = document.querySelectorAll('video');
  		video.forEach(video => {
    		video.srcObject = stream;
  		});
	}

	handleError(error) {
  		console.error('Reeeejected!', error);
	}

	componentDidMount(){
		navigator.mediaDevices.
			getUserMedia({video: true}).
  			then(this.handleSuccess).catch(this.handleError);
	}

	render(){//<video autoplay id="camera-capture" className="embed-responsive" ></video>
		return (
			<div id="camera-capture" className="embed-responsive">
				<img src="/board.png"></img>
				<div id="konva"></div>
			</div>
		);
	}
}

export default CammeraCapture;
