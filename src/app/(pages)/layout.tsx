// import ButtonChat from "@/components/chat/button-chat"

export default function Layout(props: { children: React.ReactNode }) {
  
    return (
        <div className="bg-white/90 dark:bg-black">
            {props.children}
            {/* <ButtonChat /> */}
        </div>
    )
}