import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../../shared/hooks/MyContextProvider'
import { HiArrowLongRight } from 'react-icons/hi2'
import VideoScreen from './/Hero/VideoScreen'
import Hero from './Hero/Hero'
import SliderSection from './SliderSection'
import VideoSection from './VideoSection'

export default function Home() {
	const { headerState } = useContext(MyContext)
	const departments = [
		{
			id: 1,
			title: 'Diagnostic Department',
			image: '/images/diagnostic.jpg',
			text: 'Our state-of-the-art diagnostic center features advanced imaging technologies including MRI, CT scans, and ultrasound. Our team of specialized radiologists provides accurate and timely diagnoses for effective treatment planning.'
		},
		{
			id: 2,
			title: 'Cardiology Department',
			image: '/images/cardiology.jpg',
			text: 'Comprehensive cardiac care with advanced treatments for heart conditions. Our cardiology department offers non-invasive diagnostics, interventional procedures, and cardiac rehabilitation programs under expert supervision.'
		},
		{
			id: 3,
			title: 'Neurology Department',
			image: '/images/neurology.jpg',
			text: 'Specialized care for neurological disorders including stroke, epilepsy, Parkinson’s disease, and migraines. We utilize cutting-edge neurodiagnostic tools and offer both medical and surgical treatment options.'
		},
		{
			id: 4,
			title: 'Pediatrics Department',
			image: '/images/pediatrics.jpg',
			text: 'Child-friendly healthcare environment providing specialized medical care for infants, children, and adolescents. Our pediatricians focus on preventive care, growth monitoring, and treatment of childhood illnesses.'
		},
		{
			id: 5,
			title: 'Orthopedics Department',
			image: '/images/orthopedics.jpg',
			text: 'Expert care for musculoskeletal conditions including fractures, joint replacements, sports injuries, and spinal disorders. We offer both conservative treatments and advanced surgical interventions.'
		},
		{
			id: 6,
			title: 'Surgery Department',
			image: '/images/surgery.jpg',
			text: 'Modern surgical facilities equipped for both routine and complex procedures. Our surgical team specializes in minimally invasive techniques that ensure faster recovery and reduced hospital stays.'
		},
	];
	const news = [
		{
			id: 1,
			title: 'New Breakthrough in Cancer Treatment',
			image: '/images/news/cancer-breakthrough.webp',
			text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects.',
			category: 'Medical Research',
			date: '2024-03-15',
			readTime: '3 min'
		},
		{
			id: 2,
			title: 'Hospital Opens New Pediatric Wing',
			image: '/images/news/pediatric-wing.jpeg',
			text: 'The new state-of-the-art pediatric department features advanced equipment and child-friendly environments to improve young patients\' experience.',
			category: 'Hospital News',
			date: '2024-03-10',
			readTime: '2 min'
		},
		{
			id: 3,
			title: 'Telemedicine Services Expanded',
			image: '/images/news/telemedicine.jpg',
			text: 'Our hospital now offers expanded telemedicine services, making healthcare more accessible to patients in remote areas.',
			category: 'Digital Health',
			date: '2024-03-05',
			readTime: '4 min'
		},
		{
			id: 4,
			title: 'Heart Health Awareness Month',
			image: '/images/news/heart-health.jpg',
			text: 'Join our free workshops and screenings throughout March to learn about preventing cardiovascular diseases.',
			category: 'Community',
			date: '2024-03-01',
			readTime: '3 min'
		},
		{
			id: 5,
			title: 'New MRI Machine Installed',
			image: '/images/news/mri-machine.jpg',
			text: 'The hospital has acquired a next-generation MRI scanner that provides clearer images and faster scan times.',
			category: 'Technology',
			date: '2024-02-25',
			readTime: '2 min'
		},
		{
			id: 6,
			title: 'Doctor Wins Medical Innovation Award',
			image: '/images/news/award-doctor.webp',
			text: 'Dr. Sarah Johnson receives recognition for her groundbreaking work in minimally invasive surgical techniques.',
			category: 'Achievements',
			date: '2024-02-20',
			readTime: '3 min'
		}
	];
	return (
		<main className='home-page' style={{
			transform: headerState ? 'translateX(-400px)' : 'translateX(0)',
			transition: 'all 0.2s ease',
		}}>
			<Hero />
			<SliderSection arrayItems={departments} sectionTitle='Discover our departments' />
			<VideoSection />
			<SliderSection arrayItems={news} sectionTitle='News' />
		</main>
	)
}
