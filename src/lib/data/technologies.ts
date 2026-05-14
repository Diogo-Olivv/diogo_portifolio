import ServiceNow from '$lib/images/technologies/service_now.png';

export interface Technology {
	name: string;
	icon: string;
	isImage?: boolean;
	url: string;
	color: string;
}

export const techDictionary: Record<string, Technology> = {
	// ==========================================
	// PROGRAMMING LANGUAGES
	// ==========================================
	html: {
		name: 'HTML5',
		icon: 'logos:html-5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		color: '#E34F26'
	},
	css: {
		name: 'CSS3',
		icon: 'logos:css-3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		color: '#1572B6'
	},
	javascript: {
		name: 'JavaScript',
		icon: 'logos:javascript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		color: '#F7DF1E'
	},
	typescript: {
		name: 'TypeScript',
		icon: 'logos:typescript-icon',
		url: 'https://www.typescriptlang.org/',
		color: '#3178C6'
	},
	java: {
		name: 'Java',
		icon: 'logos:java',
		url: 'https://dev.java/',
		color: '#5382A1'
	},
	python: {
		name: 'Python',
		icon: 'logos:python',
		url: 'https://www.python.org/',
		color: '#3776AB'
	},
	c: {
		name: 'C',
		icon: 'logos:c',
		url: 'https://en.cppreference.com/w/c',
		color: '#A8B9CC'
	},
	cpp: {
		name: 'C++',
		icon: 'logos:c-plusplus',
		url: 'https://cplusplus.com/',
		color: '#00599C'
	},

	// ==========================================
	// FRAMEWORKS AND LIBRARIES
	// ==========================================
	svelte: {
		name: 'SvelteKit',
		icon: 'logos:svelte-icon',
		url: 'https://kit.svelte.dev/',
		color: '#FF3E00'
	},
	tailwind: {
		name: 'Tailwind CSS',
		icon: 'logos:tailwindcss-icon',
		url: 'https://tailwindcss.com/',
		color: '#38BDF8'
	},
	react: {
		name: 'React',
		icon: 'logos:react',
		url: 'https://react.dev/',
		color: '#61DAFB'
	},
	angular: {
		name: 'Angular',
		icon: 'logos:angular-icon',
		url: 'https://angular.io/',
		color: '#DD0031'
	},
	nodejs: {
		name: 'Node.js',
		icon: 'logos:nodejs-icon',
		url: 'https://nodejs.org/',
		color: '#339933'
	},
	springboot: {
		name: 'Spring Boot',
		icon: 'logos:spring-icon',
		url: 'https://spring.io/projects/spring-boot',
		color: '#6DB33F'
	},
	quarkus: {
		name: 'Quarkus',
		icon: 'logos:quarkus-icon',
		url: 'https://quarkus.io/',
		color: '#4695EB'
	},

	// ==========================================
	// DADOS E INTELIGÊNCIA ARTIFICIAL
	// ==========================================
	numpy: {
		name: 'NumPy',
		icon: 'logos:numpy',
		url: 'https://numpy.org/',
		color: '#013243'
	},
	pandas: {
		name: 'Pandas',
		icon: 'logos:pandas-icon',
		url: 'https://pandas.pydata.org/',
		color: '#150458'
	},
	pytorch: {
		name: 'PyTorch',
		icon: 'logos:pytorch-icon',
		url: 'https://pytorch.org/',
		color: '#EE4C2C'
	},
	tensorflow: {
		name: 'TensorFlow',
		icon: 'logos:tensorflow',
		url: 'https://www.tensorflow.org/',
		color: '#FF6F00'
	},
	opencv: {
		name: 'OpenCV',
		icon: 'logos:opencv',
		url: 'https://opencv.org/',
		color: '#5C3EE8'
	},
	scikitlearn: {
		name: 'Scikit-Learn',
		icon: 'devicon:scikitlearn',
		url: 'https://scikit-learn.org/',
		color: '#F7931E'
	},
	// ==========================================
	// BANCO DE DADOS, INFRAESTRUTURA E FERRAMENTAS
	// ==========================================
	mysql: {
		name: 'MySQL',
		icon: 'logos:mysql',
		url: 'https://www.mysql.com/',
		color: '#4479A1'
	},
	postgresql: {
		name: 'PostgreSQL',
		icon: 'logos:postgresql',
		url: 'https://www.postgresql.org/',
		color: '#336791'
	},
	mongodb: {
		name: 'MongoDB',
		icon: 'logos:mongodb-icon',
		url: 'https://www.mongodb.com/',
		color: '#47A248'
	},
	docker: {
		name: 'Docker',
		icon: 'logos:docker-icon',
		url: 'https://www.docker.com/',
		color: '#2496ED'
	},
	git: {
		name: 'Git',
		icon: 'logos:git-icon',
		url: 'https://git-scm.com/',
		color: '#F05032'
	},
	github: {
		name: 'GitHub',
		icon: 'logos:github-icon',
		url: 'https://github.com/',
		color: '#181717'
	},
	servicenow: {
		name: 'ServiceNow',
		icon: ServiceNow,
		isImage: true,
		url: 'https://www.servicenow.com/',
		color: '#81B5A1'
	},

	// ==========================================
	// EXTRAS
	// ==========================================

	aws: {
		name: 'AWS',
		icon: 'logos:aws',
		url: 'https://aws.amazon.com/',
		color: '#FF9900'
	},
	fastapi: {
		name: 'FastAPI',
		icon: 'logos:fastapi-icon',
		url: 'https://fastapi.tiangolo.com/',
		color: '#009688'
	},
	huggingface: {
		name: 'Hugging Face',
		icon: 'logos:huggingface-icon',
		url: 'https://huggingface.co/',
		color: '#FFD21E'
	},
	githubactions: {
		name: 'GitHub Actions',
		icon: 'logos:github-actions',
		url: 'https://github.com/features/actions',
		color: '#2088FF'
	}
};
