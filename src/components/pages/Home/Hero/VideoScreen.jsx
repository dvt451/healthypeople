import React from 'react'

export default function VideoScreen() {
	return (
		<div
			className="hero-image__screen">
			<video playsInline autoPlay muted loop src="/videos/hero.mp4"></video>
		</div>
	)
}
