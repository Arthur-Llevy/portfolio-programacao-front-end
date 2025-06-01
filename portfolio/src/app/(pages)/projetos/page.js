"use client";

import CardProjeto from "@/app/componentes/cardProjeto/cardProjeto";
import DescricaoCardProjeto from "@/app/componentes/cardProjeto/descricaoCardProjeto";
import LinkProjeto from "@/app/componentes/cardProjeto/linkProjeto";
import TituloCardProjeto from "@/app/componentes/cardProjeto/tituloCardProjeto";
import { buscarTodosRepositorios } from "@/app/servicos/apiGithub";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Projetos() {
  const [repositorios, setRepositorios] = useState([]);
  const respostaAlternativa = [
     {
         "id": 871815596,
         "name": "3W",
         "html_url": "https://github.com/Arthur-Llevy/3W",
         "description": "Promotes development of ML algorithms for early detection and classification of undesirable events in offshore oil wells.",
     },
     {
         "id": 868142741,
         "name": "Analise-Dados",
         "html_url": "https://github.com/Arthur-Llevy/Analise-Dados",
         "description": null,
     },
     {
         "id": 740155474,
         "name": "angular-blog",
         "html_url": "https://github.com/Arthur-Llevy/angular-blog",
         "description": "A blog project created with Angular based on dribbble layout",
     },
    {
        "name": "Arthur-Llevy",
        "description": null,
        "html_url": "https://github.com/Arthur-Llevy/Arthur-Llevy"
    },
    {
        "name": "Atividade-Curso",
        "description": "CRUD feito em Java",
        "html_url": "https://github.com/Arthur-Llevy/Atividade-Curso"
    },
    {
        "name": "atividade-estatistica-upe",
        "description": null,
        "html_url": "https://github.com/Arthur-Llevy/atividade-estatistica-upe"
    }]

  const consultarApi = async () => {
    try {
      const resposta = await buscarTodosRepositorios();
      setRepositorios(resposta);
    } catch (erro) {
        setRepositorios(respostaAlternativa)
        throw new Error(`Falha ao buscar todos os repositórios: ${erro}`);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const rolarEsquerda = () => {
    const carrossel = document.querySelector(".carrossel");
    if (carrossel) {
      const larguraCard = window.innerWidth >= 640 ? 384 : 320; 
      const quantidadeRolagem = larguraCard * 3; 
      carrossel.scrollBy({ left: -quantidadeRolagem, behavior: "smooth" });
    }
  };

  const rolarDireita = () => {
    const carrossel = document.querySelector(".carrossel");
    if (carrossel) {
      const larguraCard = window.innerWidth >= 640 ? 384 : 320; 
      const quantidadeRolagem = larguraCard * 3;
      carrossel.scrollBy({ left: quantidadeRolagem, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 sm:px-12 py-6 flex justify-center">
      <div className="w-[960px] sm:w-[1152px]">
        <h1 className="py-6 text-3xl text-emerald-500 font-bold self-start">Projetos</h1>
        <div className="relative">
          <button
            onClick={rolarEsquerda}
            className="absolute left-[-1rem] top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full z-10 hover:bg-emerald-600 transition"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={rolarDireita}
            className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full z-10 hover:bg-emerald-600 transition"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          <div
            className="carrossel flex  overflow-x-hidden space-x-4 scroll-smooth snap-x snap-mandatory no-scrollbar mx-auto w-[960px] sm:w-[1152px]"
          >
            {repositorios.map((repositorio) => (
              <div key={repositorio.id} className="flex-none w-80 sm:w-96 snap-start">
                <CardProjeto>
                  <TituloCardProjeto>{repositorio.name}</TituloCardProjeto>
                  <DescricaoCardProjeto>{repositorio.description}</DescricaoCardProjeto>
                  <LinkProjeto href={repositorio.html_url}>Acessar</LinkProjeto>
                </CardProjeto>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}