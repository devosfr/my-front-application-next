"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default  function Menu() {
    const path = usePathname();
    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selected={path === "/" }>Home</MenuItem>
            {/* <MenuItem href="/project/1" selected={path.startsWith("/project")}>Projetos</MenuItem>  
            <MenuItem href="/projetos" selected={false} newTab={true}>Contato</MenuItem>   */}
        </nav>
    )
}

function MenuItem(props:{
    href: string,
    children: React.ReactNode,
    selected: boolean,
    newTab?: boolean
}){
    return (
        <Link href={props.href} target={props.newTab ? "_blank" : "_self"} >
            <span className={`flex items-center gap-2 text-sm border-red-600 hover:text-white
                ${props.selected ? "border-b-4 text-white" : "text-zinc-400"}       
                `}>{props.children}</span>
        </Link>
    )
}