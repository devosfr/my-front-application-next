'use client'; // Para Next.js App Router ou garantir comportamento no client
import { Technology } from "@/types/technology";
import Header from "../shared/header";
import Technologies from "../tecnologies";


export interface MainProps {
    tecnologies: Technology[]
}

export default function Main(props: MainProps) {



    return (
        <div className="flex relative flex-col gap-10 justify-center items-center bg-[url('/banners/main-bg8.jpg')] h-[500px] bg-cover bg-center">

            <Header />
            {/* mark */}
            <div className="flex-1 w-full flex flex-col justify-center items-center">
                <div className="flex flex-col w-full items-center gap-2 bg-black/80 p-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/50"></span>
                        <span className="text-white/90 text-4xl font-bold">Oseias Freitas</span>
                        <span className="w-2 h-2 rounded-full bg-white/50"></span>
                    </div>
                    <span className="text-white/50 text-2xl font-bold">Desenvolvedor Full Stack</span>
                    <p className="text-zinc-500 text-lg">
                        Sou um desenvolvedor full stack com mais de 10 anos de experiência.
                    </p>
                    <p className="text-zinc-500 text-lg">
                        Tenho experiência com desenvolvimento web, mobile e desktop.
                    </p>
                </div>

                <Technologies value={props.tecnologies} />
            </div>
        </div>
    )
}