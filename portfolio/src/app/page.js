import Image from "next/image";

  export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center gap-20">
        <h1 className="px-12 py-6 text-3xl text-emerald-500 font-bold self-start">Home</h1>
        <div className="flex flex-col items-center">
          <Image
            src="/perfil-icon.svg"
            alt="Profile"
            className="rounded-full mb-6"
            width={255}
            height={255}
          />
          <h1 className="text-2xl font-bold mb-2">Arthur Levy</h1>
          <p className="text-xl mb-8">Desenvolvedor full-stack</p>
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <div className="flex space-x-6 mb-16">
            <a href="mailto:arthur123lbv@gmail.com" target="_blank" className="text-blue-400 text-xl underline">E-mail</a>
            <a href="https://github.com/Arthur-Llevy" target="_blank" className="text-blue-400 text-xl underline">GitHub</a>
            <a href="https://www.linkedin.com/in/arthur-levy-bb0aa32a6/" target="_blank" className="text-blue-400 text-xl underline">LinkedIn</a>
          </div>
        </div>
      </main>
    </div>
  );
}