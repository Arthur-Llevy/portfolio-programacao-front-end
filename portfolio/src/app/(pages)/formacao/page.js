import Card from "@/app/componentes/card/card";
import DescricaoCard from "@/app/componentes/card/descricaoCard";
import StatusCard from "@/app/componentes/card/statusCard";
import TituloCard from "@/app/componentes/card/tituloCard";
import Image from "next/image";

export default function Formacao () {
    return (
        <div className="flex justify-around items-center">
            <main className="flex flex-col gap-12 px-12" >
                <h1 className="py-6 text-3xl text-emerald-500 font-bold self-start">Formação</h1>
                <Card>
                    <div>
                        <TituloCard>Engenharia da Computação</TituloCard>
                        <DescricaoCard>Escola Politécnica de Pernambuco</DescricaoCard>
                    </div>
                    <StatusCard>2024.2 - atual</StatusCard>
                </Card>
                <Card>
                    <div>
                        <TituloCard>Sistemas para Internet</TituloCard>
                        <DescricaoCard>Universidade de Pernambuco</DescricaoCard>
                    </div>
                    <StatusCard>2024.1 - atual</StatusCard>
                </Card>
                <Card>
                    <div>
                        <TituloCard>Desenvolvimento de Sistemas</TituloCard>
                        <DescricaoCard>ETE Ginásio Pernambuccano</DescricaoCard>
                    </div>
                    <StatusCard>2021 - 2023</StatusCard>
                </Card>
            </main>
            <article>
                <Image width={400} height={400} src="/formacao-imagem.svg" alt="Imagem" />
            </article>
        </div>
    )
}