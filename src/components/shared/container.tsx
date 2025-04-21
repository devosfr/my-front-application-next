export interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export default function Container(props: ContainerProps) {
    return <div className={`w-5/10 mx-auto px-4 ${props.className ?? ""}`}>{props.children}</div>
}