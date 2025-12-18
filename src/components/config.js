export const generalInfo = {
	brandName: 'Healthy People',
	email: 'exemple@email.com',
	phone: '+451 052 052 55',
	location: 'NY City, Alien street 24',
	// logo: '/logo/logo.svg',
	logoName: 'Healthy People',
	menus: [
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'Departments',
			link: '/departments'
		},
		{
			name: 'News',
			link: '/news'
		},
		{
			name: 'Price list',
			link: '/price-list'
		},
		{
			name: 'Contacts',
			link: '/contacts'
		}
	]
}

export const hospitals = [
	{
		name: 'Healthy People NY',
		city: 'New York',
		address: [
			'123 Health St',
			'New York',
			'NY 10001'
		],
		phone: '123-456-7890',
		googleMapLink: 'https://www.google.com/maps?ll=40.785832,-73.970025&z=9&t=m&hl=en&gl=IN&mapclient=embed&q=New+York,+NY+10001+USA',
		googleIframeMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4382229832!2d-74.1180866876812!3d40.70582543720259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4b6f5f6b7%3A0x8c6e0b8f8f8f8f8f!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin'
	},
	{
		name: 'Healthy People Washington',
		city: 'Washington',
		address: [
			'123 Health St',
			'New York',
			'NY 10001'
		],
		phone: '123-456-7890',
		googleMapLink: 'https://www.google.com/maps?ll=40.785832,-73.970025&z=9&t=m&hl=en&gl=IN&mapclient=embed&q=New+York,+NY+10001+USA',
		googleIframeMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4382229832!2d-74.1180866876812!3d40.70582543720259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4b6f5f6b7%3A0x8c6e0b8f8f8f8f8f!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin'
	},
]

export const teamMemberes = [
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Katie Beck',
		position: 'Founder & CEO'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. John Doe',
		position: 'Vice President'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Jane Smith',
		position: 'Director of Operations'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Michael Johnson',
		position: 'Director of Marketing'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Katie Beck',
		position: 'Founder & CEO'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. John Doe',
		position: 'Vice President'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Jane Smith',
		position: 'Director of Operations'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Michael Johnson',
		position: 'Director of Marketing'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Katie Beck',
		position: 'Founder & CEO'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. John Doe',
		position: 'Vice President'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Jane Smith',
		position: 'Director of Operations'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Michael Johnson',
		position: 'Director of Marketing'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. Katie Beck',
		position: 'Founder & CEO'
	},
	{
		image: '/images/members/team-member-1.jpg',
		name: 'Dr. John Doe',
		position: 'Vice President'
	},

]

export const departments = [
	{
		slug: 'cardiology',
		departmentPage: {
			title: 'Cardiology',
			image: '/images/departments/cardiology.webp',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Cardiology Department',
			image: '/images/departments/cardiology.jpg',
			text: 'Comprehensive cardiac care with advanced treatments for heart conditions. Our cardiology department offers non-invasive diagnostics, interventional procedures, and cardiac rehabilitation programs under expert supervision.'
		},
	},
	{
		slug: 'diagnostic',
		departmentPage: {
			title: 'Diagnostic',
			image: '/images/departments/diagnostic.jpg',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Diagnostic Department',
			image: '/images/departments/diagnostic.jpg',
			text: 'Our state-of-the-art diagnostic center features advanced imaging technologies including MRI, CT scans, and ultrasound. Our team of specialized radiologists provides accurate and timely diagnoses for effective treatment planning.'
		},
	},
	{
		slug: 'neurology',
		departmentPage: {
			title: 'Neurology',
			image: '/images/departments/neurology.jpg',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Neurology Department',
			image: '/images/departments/neurology.jpg',
			text: 'Specialized care for neurological disorders including stroke, epilepsy, Parkinson’s disease, and migraines. We utilize cutting-edge neurodiagnostic tools and offer both medical and surgical treatment options.'
		},
	},
	{
		slug: 'pediatrics',
		departmentPage: {
			title: 'Pediatrics',
			image: '/images/departments/pediatrics.jpg',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Pediatrics Department',
			image: '/images/departments/pediatrics.jpg',
			text: 'Child-friendly healthcare environment providing specialized medical care for infants, children, and adolescents. Our pediatricians focus on preventive care, growth monitoring, and treatment of childhood illnesses.'
		},
	},
	{
		slug: 'orthopedics',
		departmentPage: {
			title: 'Orthopedics',
			image: '/images/departments/orthopedics.jpg',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Orthopedics Department',
			image: '/images/departments/orthopedics.jpg',
			text: 'Expert care for musculoskeletal conditions including fractures, joint replacements, sports injuries, and spinal disorders. We offer both conservative treatments and advanced surgical interventions.'
		},
	},
	{
		slug: 'surgery',
		departmentPage: {
			title: 'Surgery',
			image: '/images/departments/surgery.jpg',
			textToImage: {
				subtitle: 'Comprehensive Cardiac Care',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},
			mainContext:
			{
				subtitle: 'Advanced Diagnostics',
				texts: [
					{ text: 'We utilize state-of-the-art imaging technologies such as echocardiography, stress testing, and cardiac MRI to accurately diagnose heart conditions. Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
					{ text: 'Our interventional cardiology team performs minimally invasive procedures like angioplasty and stenting to restore blood flow and improve heart function.' },
					{ text: 'We offer personalized cardiac rehabilitation programs to help patients recover and maintain a healthy lifestyle after cardiac events.' },
				]
			},

		},
		slider: {
			title: 'Surgery Department',
			image: '/images/departments/surgery.jpg',
			text: 'Modern surgical facilities equipped for both routine and complex procedures. Our surgical team specializes in minimally invasive techniques that ensure faster recovery and reduced hospital stays.'
		},
	},
];

export const news = [
	{
		category: 'Medical Research',
		date: '2024-03-15',
		readTime: '3 min',
		author: 'Dr. Sarah Johnson',
		authorImage: '/images/news/author.jpg',
		slug: 'medical-research-breakthrough',
		newsPage: {
			title: 'New Breakthrough in Cancer Treatment',
			image: '/images/news/cancer-breakthrough.webp',
			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg', },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},

		slider: {
			title: 'New Breakthrough in Cancer Treatment',
			image: '/images/news/cancer-breakthrough.webp',
			text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects.',
		},
	},
	{
		category: 'Hospital News',
		date: '2024-03-10',
		readTime: '2 min',
		author: 'Dr. Michael Lee',
		authorImage: '/images/news/author.jpg',
		slug: 'hospital-opens-new-pediatric-wing',
		newsPage: {
			title: 'Hospital Opens New Pediatric Wing',
			image: '/images/news/pediatric-wing.jpeg',
			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},
		slider: {
			title: 'Hospital Opens New Pediatric Wing',
			image: '/images/news/pediatric-wing.jpeg',
			text: 'The new state-of-the-art pediatric department features advanced equipment and child-friendly environments to improve young patients\' experience.',

		}
	},
	{
		category: 'Digital Health',
		date: '2024-03-05',
		readTime: '4 min',
		author: 'Dr. Emily Davis',
		authorImage: '/images/news/author.jpg',
		slug: 'telemedicine-services-expanded',
		newsPage: {
			title: 'Telemedicine Services Expanded',
			image: '/images/news/telemedicine.jpg',
			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},
		slider: {
			title: 'Telemedicine Services Expanded',
			image: '/images/news/telemedicine.jpg',
			text: 'Our hospital now offers expanded telemedicine services, making healthcare more accessible to patients in remote areas.',
		}
	},
	{
		category: 'Community',
		date: '2024-03-01',
		readTime: '3 min',
		author: 'Dr. Robert Smith',
		authorImage: '/images/news/author.jpg',
		slug: 'heart-health-awareness-month',
		newsPage: {
			title: 'Heart Health Awareness Month',
			image: '/images/news/heart-health.jpg',
			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},
		slider: {
			title: 'Heart Health Awareness Month',
			image: '/images/news/heart-health.jpg',
			text: 'Join our free workshops and screenings throughout March to learn about preventing cardiovascular diseases.',
		}
	},
	{
		category: 'Technology',
		date: '2024-02-25',
		readTime: '2 min',
		author: 'Dr. Sarah Johnson',
		authorImage: '/images/news/author.jpg',
		slug: 'new-mri-machine-installed',
		newsPage: {
			title: 'New MRI Machine Installed',
			image: '/images/news/mri-machine.jpg',

			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},
		slider: {
			title: 'New MRI Machine Installed',
			image: '/images/news/mri-machine.jpg',
			text: 'The hospital has acquired a next-generation MRI scanner that provides clearer images and faster scan times.',
		}
	},
	{
		category: 'Achievements',
		date: '2024-02-20',
		readTime: '3 min',
		author: 'Dr. Michael Lee',
		authorImage: '/images/news/author.jpg',
		slug: 'doctor-wins-medical-innovation-award',
		newsPage: {
			title: 'Doctor Wins Medical Innovation Award',
			image: '/images/news/award-doctor.webp',

			mainContext: {
				subtitle: 'Innovative Treatment Methods',
				texts: [
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ image: '/images/news/nurses.jpg' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
					{ text: 'Researchers have discovered a new method that shows promising results in early-stage trials for treating various types of cancer with fewer side effects. This innovative approach targets cancer cells more precisely, minimizing damage to healthy tissues.' },
				]
			},
		},
		slider: {
			title: 'Doctor Wins Medical Innovation Award',
			image: '/images/news/award-doctor.webp',
			text: 'Dr. Sarah Johnson receives recognition for her groundbreaking work in minimally invasive surgical techniques.',
		}
	}
];