import React, { useRef, useEffect, useState } from 'react';

export default function AutoPosterVideo() {
	const videoRef = useRef(null);
	const [posterSrc, setPosterSrc] = useState('');
	const [hasUserInteracted, setHasUserInteracted] = useState(false);

	// Генерируем постер из первого кадра видео
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const captureFirstFrame = () => {
			// Создаем canvas для захвата кадра
			const canvas = document.createElement('canvas');
			canvas.width = video.videoWidth || 640;
			canvas.height = video.videoHeight || 360;

			const ctx = canvas.getContext('2d');

			// Пытаемся получить текущий кадр
			try {
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
				setPosterSrc(dataUrl);
			} catch (error) {
				console.log('Не удалось захватить кадр:', error);
			}
		};

		// Пытаемся захватить кадр когда видео загрузит метаданные
		video.addEventListener('loadeddata', captureFirstFrame);

		// Альтернативный подход для iOS
		video.addEventListener('loadedmetadata', () => {
			// Устанавливаем текущее время на первый кадр (не работает на iOS без user interaction)
			video.currentTime = 0.1;

			// Через небольшой таймаут пытаемся захватить кадр
			setTimeout(captureFirstFrame, 100);
		});

		return () => {
			video.removeEventListener('loadeddata', captureFirstFrame);
		};
	}, []);

	const handlePlay = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setHasUserInteracted(true);
		}
	};

	return (
		<div style={{ position: 'relative', width: '100%' }}>
			{/* Показываем наш сгенерированный постер до взаимодействия */}
			{!hasUserInteracted && posterSrc ? (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundImage: `url(${posterSrc})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						cursor: 'pointer',
						zIndex: 2
					}}
					onClick={handlePlay}
				>

					<div style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						backgroundColor: 'rgba(0,0,0,0.7)',
						borderRadius: '50%',
						width: '60px',
						height: '60px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						▶
					</div>
				</div>
			) : null}

			<video
				ref={videoRef}
				playsInline
				webkit-playsinline="true"
				preload="metadata"
				controls
				style={{
					width: '100%',
					height: 'auto',
					display: 'block'
				}}
				// Важно: пробуем использовать первый кадр как постер
				poster={posterSrc}
			>
				<source src="/videos/clouds.mp4" type='video/mp4' />
			</video>
		</div>
	);
};