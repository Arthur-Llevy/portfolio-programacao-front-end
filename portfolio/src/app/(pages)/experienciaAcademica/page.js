import Card from "@/app/componentes/card/card";
import DescricaoCard from "@/app/componentes/card/descricaoCard";
import StatusCard from "@/app/componentes/card/statusCard";
import TituloCard from "@/app/componentes/card/tituloCard";

export default function ExperienciaAcademica () {
    return (
        <div className="flex flex-col gap-6 px-12 ">
            <h1 className="py-6 text-3xl text-emerald-500 font-bold self-start">Expêriencia Acadêmica</h1>
            <Card>
                <div>
                    <TituloCard>Monitor de cálculo diferencial e integral 1</TituloCard>
                    <DescricaoCard>Escola Politécnica de Pernambuco</DescricaoCard>
                </div>
                <StatusCard>2025.1 - atual</StatusCard>
            </Card>
            <Card>
                <div>
                    <TituloCard>Iniciação Científica - uso de arduino e gêmeos digitais na automação</TituloCard>
                    <DescricaoCard>Universidade de Pernambuco</DescricaoCard>
                </div>
                <StatusCard>2024.2 - atual</StatusCard>
            </Card>
        </div>
    )
}