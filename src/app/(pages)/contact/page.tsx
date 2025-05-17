"use client"
import Header from "@/components/shared/header";
// import { Button } from 'primereact/button';
import { Button } from "@/components/ui/button"
// import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // tema
import 'primereact/resources/primereact.min.css'; // componentes
import 'primeicons/primeicons.css'; // ícones



export default function ProjectPage(){
  function sendMail(){
    window.location.href = "mailto:oseiasdfreitas@gmail.com";
    }
    return <div className="bg-black">
        <Header />
        <div style={{ padding: '2rem' }}>
      <h1>Contato</h1>
      <div className="justify-content-center justify-center items-center p-4">
      <Button className="bg-[#ddad29] text-white" onClick={sendMail}>Clique aqui para entrar em contato</Button>
        {/* <Button label="Clique aqui para enviar uma mensagem por e-mail" className="bg-red-600" icon="pi pi-check" /> */}
      </div>
    </div>
    </div>
       
}