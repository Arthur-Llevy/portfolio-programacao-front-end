export default function CardProjeto ({ children }) {
    return (
        <div className="p-6 flex flex-col gap-12 items-start w-80 border-1 border-emerald-500 rounded-lg">
            {children}
        </div>
    )
}