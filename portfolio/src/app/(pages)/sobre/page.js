"use client";

export default function Sobre() {
  const tecnologias = [
    { nome: "React", cor: "#61DAFB" },
    { nome: "Tailwind", cor: "#38B2AC" },
    { nome: "JavaScript", cor: "#F7DF1E" },
    { nome: "Next", cor: "#999999" },
    { nome: "Zustand", cor: "#3B82F6" },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col">
      <main className="flex-1 px-4 sm:px-12 py-6">
        <h1 className="py-6 text-3xl text-emerald-500 font-bold self-start">Sobre</h1>

        <section className="flex flex-col items-center mt-12">
          <h2 className="text-2xl mb-8">Tecnologias utilizadas</h2>
          <div className="flex flex-wrap justify-center gap-4 w-[500px]">
            {tecnologias.map((tecnologia) => (
              <span
                key={tecnologia.nome}
                className={`text-[${tecnologia.cor}] font-bold border rounded-full p-2 w-auto min-w-32 text-center transition duration-200 hover:text-[#202020]`}
                style={{
                  borderColor: tecnologia.cor,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = tecnologia.cor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {tecnologia.nome}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}