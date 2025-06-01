import Card from "@/app/componentes/card/card";
import DescricaoCard from "@/app/componentes/card/descricaoCard";
import StatusCard from "@/app/componentes/card/statusCard";
import TituloCard from "@/app/componentes/card/tituloCard";

export default function ExperienciaProfissional () {
    return (
        <div className="flex flex-col gap-6 px-12 ">
            <h1 className="py-6 text-3xl text-emerald-500 font-bold self-start">Expêriencia Profissional</h1>
            <Card>
                <div>
                    <TituloCard>Desenvolvedor Full-Stack Freelancer</TituloCard>
                    <DescricaoCard>HTML, CSS, JavaScript, TypeScript, React, Next e Docker</DescricaoCard>
                </div>
                <StatusCard>Junho - Dezembro (2024)</StatusCard>
            </Card>
        </div>
    )
}