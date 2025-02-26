import Image from "next/image";
import Link from "next/link";
import { BuildingCard } from "@/components/buldingCard";
import { humanizeNumber } from "@/utils/humanizeNumber";
import { loadBuildings } from "./resources/dataFetch";

export default async function Home() {
  const { buildings, total, totalPages } = await loadBuildings(1)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-center">
            <Link href="/" className="flex items-end justify-end">
              <Image
                src="/logo.png"
                alt="Órulo Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-20"
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="bg-black text-white text-center py-2 text-sm">
        <p className="container mx-auto px-4">
          Garanta seu Empreendimetno com Planos de Pagamento Flexíveis e
          Descontos Especiais!{" "}
          <Link href="/" className="underline">
            Saiba mais
          </Link>
        </p>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 min-h-[75vh]">
          <div>
            <h1 className="text-2xl font-bold mb-1">Empreendimentos</h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Nós encontramos{" "}
                <span className="font-bold text-base">
                  {humanizeNumber(total)}
                </span>{" "}
                empreendimentos
              </p>
            </div>
          
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {buildings.map((building) => (
                <BuildingCard key={building.id} building={building} />
              ))}
            </div>
        </div>
      </div>
      </main>
    </div>
  );
}
