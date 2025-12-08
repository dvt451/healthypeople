import React, { useRef, useState } from 'react'
import { CiPlay1 } from "react-icons/ci";

export default function VideoSection() {
	const videoRef = useRef(null)
	const [playerState, setPlayerState] = useState(true)
	const playButton = () => {
		videoRef.current.play()
		videoRef.current.controls = true
		setPlayerState(false)
	}
	return (
		<div className='video-section'>
			<div className="video-section__container">
				<div className="video-section__head section-head">
					<h2 className="video-section__title section-title-2">
						Always Ready
					</h2>
				</div>
				<div className="video-section__video-wrapper">
					<button style={{ display: playerState ? 'flex' : 'none' }} className='video-section__play-button' onClick={playButton}>
						<div className="video-section__play-button_layer"></div>
						<CiPlay1 />
					</button>
					<video controlsList="nodownload" ref={videoRef} >
						<source src="/videos/clouds.mp4" type='video/mp4' />
					</video>
				</div>
			</div>
		</div>
	)
}
