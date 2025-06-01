export default function StatusCard ({ children }) {
    return (
        <span className="w-auto min-w-3xs text-center text-green-400 text-lg border-2 border-green-400 rounded-full px-6 py-2">{children}</span>
    )
}