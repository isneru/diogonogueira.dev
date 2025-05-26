import { Email, Phone, Location, Linkedin, Github } from '@components/icons'

const name = 'Diogo Nogueira'
const about = 'Computer Engineering Student and Self-taught Front-end Developer'
const aboutPt =
	'Estudante de Engenharia Informática e Desenvolvedor Front-end Autodidata'

const info = [
	{
		text: 'diogoclanogueira@gmail.com',
		Icon: Email
	},
	{
		text: '(+351) 916 977 715',
		Icon: Phone
	},
	{
		text: 'Porto, Portugal',
		Icon: Location
	},
	{
		text: 'linkedin.com/in/diogoclanogueira',
		href: 'https://linkedin.com/in/diogoclanogueira',
		Icon: Linkedin
	},
	{
		text: 'github.com/isneru',
		href: 'https://github.com/isneru',
		Icon: Github
	}
]

const career = [
	{
		title: 'Last Position',
		description: 'Employee at CeX - Computer Entertainment Exchange (PT)',
		start: '06/2023',
		end: '06/2025'
	}
]
const careerPt = [
	{
		title: 'Último Cargo',
		description: 'Funcionário na CeX - Computer Entertainment Exchange (PT)',
		start: '06/2023',
		end: '06/2025'
	}
]

const education = [
	{
		title: 'College - Instituto Superior de Engenharia do Porto',
		description: 'Telecommunications Engineering and IT',
		start: '09/2024',
		end: 'Present'
	},
	{
		title: 'College - Escola Superior de Tecnologia e Gestão',
		description: 'Computer Security and Computer Networks',
		start: '10/2022',
		end: '06/2024'
	},
	{
		title: 'High School - Instituto Profissional de Tecnologias Avançadas',
		description: 'Hardware and Software Management',
		start: '09/2018',
		end: '07/2021'
	}
]
const educationPt = [
	{
		title: 'Faculdade - Instituto Superior de Engenharia do Porto',
		description: 'Engenharia de Telecomunicações e Informática',
		start: '09/2024',
		end: 'Presente'
	},
	{
		title: 'Faculdade - Escola Superior de Tecnologia e Gestão',
		description: 'Segurança Informática e Redes de Computadores',
		start: '10/2022',
		end: '06/2024'
	},
	{
		title:
			'Ensino Secundário - Instituto Profissional de Tecnologias Avançadas',
		description: 'Gestão de Equipamentos Informáticos',
		start: '09/2018',
		end: '07/2021'
	}
]

const internships = [
	{
		title: 'Computer Repair and Service, Rethymno, Greece',
		start: '01/2022',
		end: '05/2022',
		tasks: [
			"Assistance in computers' formats and operational systems upgrades",
			'Computers installation and set up in a school environment',
			'Wi-Fi network installations',
			'Camera services and repairs',
			'Computer services and repairs',
			'General assistance to my supervisor',
			'Acquisition of knowledge in the field of IT and electronics'
		]
	},
	{
		title: 'ITSector, Porto, Portugal',
		start: '04/2021',
		end: '07/2021',
		tasks: [
			'Linked computers to certain networks and peripheral equipment, including printers and scanners',
			'Patched software and installed new versions to eliminate security vulnerabilities and protect data',
			'Helped streamline repair processes and update procedures for support action consistency',
			'Configured hardware, devices and software to set up workstations for employees'
		]
	}
]
const internshipsPt = [
	{
		title: 'Reparação e assistência de computadores, Rethymno, Grécia',
		start: '01/2022',
		end: '05/2022',
		tasks: [
			'Assistência em formatações de computadores e atualizações de sistemas operativos',
			'Instalação e configuração de computadores em ambiente escolar',
			'Instalações de redes Wi-Fi',
			'Serviços e reparações de câmaras',
			'Serviços e reparações de computadores',
			'Assistência geral ao meu supervisor',
			'Aquisição de conhecimentos na área das TI e eletrónica'
		]
	},
	{
		title: 'ITSector, Porto, Portugal',
		start: '04/2021',
		end: '07/2021',
		tasks: [
			'Vinculação de computadores a determinadas redes e equipamentos periféricos, incluindo impressoras e scanners',
			'Correção de software e instalação de novas versões para eliminar vulnerabilidades de segurança e proteger dados',
			'Ajudou a simplificar processos de reparação e atualizar procedimentos para consistência de ação de suporte',
			'Configuração de hardware, dispositivos e software para configurar estações de trabalho para os funcionários'
		]
	}
]

const skills = {
	frontend: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'SvelteKit',
		'Astro',
		'TailwindCSS'
	],
	backend: ['Node.js', 'Express.js', 'C', 'PHP', 'Java'],
	databases: ['MongoDB', 'SQL', 'Prisma'],
	tools: ['Git', 'GitHub', 'VSCode', 'Figma']
}

const languages = [
	{
		title: 'Portuguese',
		level: 'Native'
	},
	{
		title: 'English',
		level: 'C1'
	}
]
const languagesPt = [
	{
		title: 'Português',
		level: 'Nativo'
	},
	{
		title: 'Inglês',
		level: 'C1'
	}
]

const certificates = ['The Web Developer Bootcamp 2022']

const achievements = [
	{
		title: 'Acquired drivers license',
		date: '01/2023'
	}
]
const achievementsPt = [
	{
		title: 'Carta de condução adquirida',
		date: '01/2023'
	}
]

const hobbies = ['Driving', 'Gaming', 'Coffee', 'Running']
const hobbiesPt = ['Condução', 'Jogos', 'Café', 'Corrida']

export const me = {
	en: {
		about,
		career,
		education,
		internships,
		languages,
		achievements,
		hobbies
	},
	pt: {
		about: aboutPt,
		career: careerPt,
		education: educationPt,
		internships: internshipsPt,
		languages: languagesPt,
		achievements: achievementsPt,
		hobbies: hobbiesPt
	},
	info,
	name,
	skills,
	certificates
}
