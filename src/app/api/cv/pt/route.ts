import { me } from '@/utils/me'
import { NextResponse } from 'next/server'

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

interface Education {
	title: string
	description: string
	start: string
	end: string
}

interface Career {
	title: string
	description: string
	start: string
	end: string
}

interface Internship {
	title: string
	start: string
	end: string
	tasks: string[]
}

interface Language {
	title: string
	level: string
}

interface Skills {
	[key: string]: string[]
}

export async function GET() {
	const { name, info, pt } = me
	const { career, education, internships, languages } = pt

	const skills = me.skills as Skills

	const latexContent = `\\documentclass[letterpaper,10pt]{article}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{titlesec}
\\usepackage{parskip}
\\usepackage{multicol}

% Remove paragraph indentation
\\setlength{\\parindent}{0pt}

\\pagestyle{empty}

\\begin{document}

\\begin{center}
    {\\LARGE \\textbf{${name}}}\\\\[4pt]
    \\href{mailto:${info[0].text}}{${info[0].text}} \\quad $|$ \\quad 
    \\href{${info[3].href}}{${info[3].text}} \\quad $|$ \\quad 
    \\href{${info[4].href}}{${info[4].text}}
\\end{center}

\\vspace{0.3cm}

\\section*{Educação}

${education
	.map(
		(
			edu: Education
		) => `\\textbf{${edu.title}} \\hfill ${edu.start} - ${edu.end} \\\\
${edu.description}`
	)
	.join('\n\n')}

\\section*{Experiência}

${career
	.map(
		(job: Career) =>
			`\\textbf{${job.description}} \\hfill ${job.start} - ${job.end}`
	)
	.join('\n\n')}

${internships
	.map(
		(intern: Internship) => `\\bigskip

\\textbf{${intern.title}} \\hfill ${intern.start} - ${intern.end}
\\begin{itemize}[leftmargin=0.2in]
  ${intern.tasks.map((task: string) => `\\item ${task}`).join('\n  ')}
\\end{itemize}`
	)
	.join('\n')}

\\section*{Competências}
\\begin{itemize}[leftmargin=0.2in]
${Object.keys(skills)
	.map(
		section =>
			`\\item \\textbf{${capitalizeFirstLetter(section)}:} ${skills[
				section
			].join(', ')}`
	)
	.join('\n  ')}
\\end{itemize}

\\section*{Idiomas e Certificações}
\\begin{multicols}{2}
\\subsection*{Idiomas}
\\begin{itemize}[leftmargin=0.2in]
  ${languages
		.map((lang: Language) => `\\item ${lang.title} (${lang.level})`)
		.join('\n  ')}
\\end{itemize}

\\columnbreak

\\subsection*{Certificações}
\\begin{itemize}[leftmargin=0.2in]
  ${me.certificates.map((cert: string) => `\\item ${cert}`).join('\n  ')}
\\end{itemize}
\\end{multicols}

\\end{document}`

	return new NextResponse(latexContent, {
		headers: {
			'Content-Type': 'application/x-tex',
			'Content-Disposition': 'attachment; filename="cv.tex"'
		}
	})
}
