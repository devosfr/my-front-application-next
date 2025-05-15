import Header from "@/components/shared/header";
import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // tema
import 'primereact/resources/primereact.min.css'; // componentes
import 'primeicons/primeicons.css'; // ícones

export default async function ProjectPage(){
 
    return <div className="bg-black">
        <Header />
        <div style={{ padding: '2rem' }}>
      <h1>Hello from PrimeReact</h1>
      <div className="justify-content-center bg-zinc-600 dark:bg-zinc-800 p-4">
        <Button label="Clique aqui" icon="pi pi-check" />
      </div>
    </div>
    </div>
       
}