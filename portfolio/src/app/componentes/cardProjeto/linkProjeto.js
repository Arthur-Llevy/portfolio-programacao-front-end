export default function LinkProjeto ({ href, children }) {
    return (
        <a target="_blank" className="text-emerald-500 text-xl border-1 border-emerald-500 p-2 rounded-lg w-40 text-center duration-200 hover:bg-emerald-500 hover:text-black" href={href}>{children}</a>
    )
}