import Header from "../shared/header";

export default function Main(){
    return (
        <div className="flex flex-col gap-10 justify-center items-center bg-[url('/principal.jpg')] h-[500px] bg-cover bg-center">
            <Header />
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/50"></span>
                    <span className="text-white text-4xl font-bold">Oseias Freitas</span>
                    <span className="w-2 h-2 rounded-full bg-white/50"></span>
                </div>
              

                <span className="text-white text-2xl font-bold">Desenvolvedor Full Stack</span>
                <p className="text-ZINC-500 text-lg">
                        Sou um desenvolvedor full stack com mais de 10 anos de experiência.
                    </p>
                    <p className="text-ZINC-500 text-lg">
                        Tenho experiência com desenvolvimento web, mobile e desktop.
                    </p>
            </div>
        </div>
    )
}