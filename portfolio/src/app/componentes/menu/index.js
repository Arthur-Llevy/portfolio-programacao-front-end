import Link from "next/link";

export default function Menu () {
    return (
        <header>
            <nav>
                <ul className="text-2xl font-bold flex gap-x-7 justify-end px-12 py-6 border-b-2 border-emerald-500">
                    <li><Link href="/" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Home</Link></li>
                    <li><Link href="/experienciaAcademica" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Experiência acadêmica</Link></li>
                    <li><Link href="/experienciaProfissional" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Experiência profissional</Link></li>
                    <li><Link href="#" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Projetos</Link></li>
                    <li><Link href="#" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Sobre</Link></li>
                    <li><Link href="#" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Formação</Link></li>
                    <li><Link href="#" className="duration-200 ease-in-out hover:underline  hover:text-emerald-500">Jogo</Link></li>
                </ul>
            </nav>
        </header>
    )
}