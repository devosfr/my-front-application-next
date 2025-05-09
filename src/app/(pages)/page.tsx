// import Container from "@/components/shared/container"
import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/main"
import { getTecnologies } from "../../../functions/tecnologies";
import { getProjects } from "../../../functions/projects";
import Container from "@/components/shared/container";
import Projects from "@/components/projects";
// import Header from "@/components/shared/header"
// import Image from "next/image"

export default async function Home() {
    const technologies = await getTecnologies();
    const porjects = await getProjects();
    debugger;
    if ('all' in technologies && 'all' in porjects) {
        return (
            <div>
                <Main tecnologies={technologies.getEmphasis} />
                <Container className="p-16 flex flex-col items-center gap-10">
                    <Projects title="Alguns projetos em que tenho trabalhado" value={porjects.all} />
                  <Curriculum technologies={technologies.all} />
                </Container>
            </div>
        )
    } else {
        // Handle the case where technologies is an empty array
        return <div>No data available</div>
    }
}
