import { Project } from "@/types/project";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects() {

  console.log(baseURL);

  try {
    const projects: Project[] = [
      {
        id: 1,
        name: 'WS Veiculos',
        emphasis: true,
        image: "/portfolio/web/ws-veiculos2.jpg",
        link: 'https://devosfr.github.io/WSVeiculos-Front/'
      },
      {
        id: 2,
        name: 'Obi DevOps Time Tracker',
        emphasis: true,
        image: "/portfolio/web/obi-devops-time-tracker.jpg",
        link: 'http://devops-time-tracker-application-dev.s3-website-us-east-1.amazonaws.com/projects/'
      },

      {
        id: 3,
        name: 'Learning Plataforma de Aprendizagem',
        emphasis: true,
        image: "/portfolio/web/learning-platform.jpg",
        link: 'https://obi-university-poa.uat.obi.tec.br/auth/signin/'
      },
      {
        id: 4,
        name: 'ObiTec',
        emphasis: true,
        image: "/portfolio/web/obitec-site.jpg",
        link: 'https://www.obitec.com.br/'
      },
      {
        id: 5,
        name: 'Eportfolios',
        emphasis: true,
        image: "/portfolio/web/eportfolios.jpg",
        link: 'https://www.obitec.com.br/products/e-portfolio'
      },

      // {
      //   id: 4,
      //   name: 'WS Veiculos',
      //   emphasis: true,
      //   image: "/portfolio/web/ws-veiculos.jpg",
      //   link: 'https://devosfr.github.io/WSVeiculos-Front/'
      // },
      // {
      //   id: 5,
      //   name: 'WS Veiculos',
      //   emphasis: true,
      //   image: "/portfolio/web/ws-veiculos.jpg",
      //   link: 'https://devosfr.github.io/WSVeiculos-Front/'
      // },
    ]

    return {
      all: projects,
      getEmphasis: projects.filter((item) => item.emphasis),
    }
  } catch (error) {
    debugger;

    console.error('Erro ao buscar usuários:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {

  console.log(baseURL);

  try {
    const projects: Project[] = [
      {
        id: 1,
        name: 'Vuejs',
        emphasis: true,
        image: "/vue-js-logo.png",
        link: ''
      },

    ]

    return {
      all: projects,
      getEmphasis: response.filter((item) => item.emphasis),
    }
  } catch (error) {
    debugger;

    console.error('Erro ao buscar usuários:', error);
    return [];
  }
}