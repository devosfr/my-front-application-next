import ButtonChat from "@/components/chat/button-chat"

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <div>
            {props.children}
            <ButtonChat />
        </div>
    )
}