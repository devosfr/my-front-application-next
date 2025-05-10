import Header from "@/components/shared/header";
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // tema
import 'primereact/resources/primereact.min.css'; // componentes
import 'primeicons/primeicons.css'; // ícones

export default async function ProjectPage(props: {params: Promise<{id: string}>}){
 
    return <div className="bg-black">
        <Header />
        <div style={{ padding: '2rem' }}>
      <h1>Hello from PrimeReact</h1>
      <Button label="Clique aqui" icon="pi pi-check" />
    </div>
    </div>
       
}