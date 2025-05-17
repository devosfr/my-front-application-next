"use client"
import { Button } from "@/components/ui/button"
import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/main"
import { getTecnologies } from "../../../functions/tecnologies"
import { getProjects } from "../../../functions/projects"
import Container from "@/components/shared/container"
import Projects from "@/components/projects"
import { useEffect, useState } from "react"

export default function Home() {
    function sendMail(){
        window.location.href = "mailto:oseiasdfreitas@gmail.com";
        }
	const [data, setData] = useState<{ technologies: any; projects: any } | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const technologies = await getTecnologies()
			const projects = await getProjects()
			setData({ technologies, projects })
		}
		fetchData()
	}, [])

	if (!data) return <div>Loading...</div>

	if ("all" in data.technologies && "all" in data.projects) {
		return (
			<div>
				<Main tecnologies={data.technologies.getEmphasis} />
				<Container className="p-16 flex flex-col items-center gap-10">
					<Projects
						title="Alguns projetos em que tenho trabalhado"
						value={data.projects.all}
					/>
					<Curriculum technologies={data.technologies.all} />
				</Container>
				<div className="flex flex-col justify-center items-center mt-4 h-96" id="contact">
					<div className="w-auto h-36 justify-center items-center">
					<h1 className="text-zinc-600 dark:text-zinc-300">Contato</h1>
						<Button className="justify-center items-center bg-[#ddad29] text-white" onClick={sendMail}>
							Clique aqui para entrar em contato
						</Button>
					</div>
				</div>
			</div>
		)
	} else {
		return <div>No data available</div>
	}
}
