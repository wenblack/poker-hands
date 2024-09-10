import Popover from "@/components/PopOver";
import { Poppins } from "next/font/google";
import highCard from "@/assets/high-card.png";
import pair from "@/assets/pair.png";
import twoPairs from "@/assets/two-pairs.png";
import threeOfAKind from "@/assets/three-of-a-kind.png";
import straight from "@/assets/straight.png";
import flush from "@/assets/flush.png";
import fullHouse from "@/assets/full-house.png";
import forOfAKind from "@/assets/for-of-a-kind.png";
import straightFlush from "@/assets/straight-flush.png";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <main
      className={`flex bg-black text-white w-full flex-col items-center justify-center  ${poppins.className}`}
    >
      <h2 className="text-4xl text-red-600 py-10 font-bold leading-7brightness-100">
        Mãos de Poker
      </h2>
      <Popover
        title="Carta Alta"
        content="É utilizando quando não há nenhum jogo ou ocorre empate. O jogador com a carta maior vence"
        imgSrc={highCard}
        observations="Caso as cartas sejam idênticas, o valor da mesa é dividido entre os jogadores que restaram."
      />
      <Popover
        title="um par"
        content="Um par é formado quando um jogador tem duas cartas do mesmo número. Se dois jogadores tiverem pares, vence quem tiver o par com o valor mais alto."
        imgSrc={pair}
        observations="Em caso de pares iguais, é utilizado a carta alta como desempate"
      />
      <Popover
        title="Dois pares"
        content="Dois pares de cartas diferentes. Se dois jogadores tiverem pares, vence quem tiver o par com o valor mais alto."
        imgSrc={twoPairs}
        observations="Em caso de pares iguais, é utilizado a carta alta como desempate"
      />
      <Popover
        title="trinca"
        content="Uma trinca é formado quando um jogador tem três cartas do mesmo número. Se dois jogadores tiverem trinca, vence quem tiver a trinca com o valor mais alto."
        imgSrc={threeOfAKind}
        observations="Em caso de trincas iguais, é utilizado a carta alta como desempate"
      />
      <Popover
        title="Straight "
        content="Um straight é formado quando um jogador tem 5 cartas em sequência .O A só pode ser usado no início ou no fim da sequência. Não é permitido fazer uma ponte(Ex:Q, K, A, 1, 2)."
        imgSrc={straight}
        observations="Se dois jogadores tiverem um straight, vence quem tiver a sequência com o valor mais alto. Caso a sequência seja igual, é utilizado a carta alta como desempate. 
"
      />
      <Popover
        title="flush"
        content="Um Flush é formado quando um jogador tem 5 cartas do mesmo naipe."
        imgSrc={flush}
        observations="Se dois jogadores tiverem um flush, vence quem tiver flush com o valor mais alto."
      />
      <Popover
        title="full house"
        content="Um Full House é formado quando um jogador tem um par e uma trinca. Se dois jogadores tiverem um Full House, vence quem tiver Full house com o valor mais alto."
        imgSrc={fullHouse}
        observations="Em caso de Full House igual, é utilizado a carta alta como desempate"
      />
      <Popover
        title="Quadra"
        content="Uma quadra é formado quando um jogador tem quatro cartas do mesmo número."
        imgSrc={forOfAKind}
        observations="Se dois jogadores tiveram quadra, a maior quadra vence"
      />
      <Popover
        title="Straight flush"
        content="Um straight  flush é formado quando um jogador tem 5 cartas em sequência e do mesmo naipe. O A só pode ser usado no início ou no fim da sequência. Não é permitido fazer uma ponte(Ex:Q, K, A, 1, 2)."
        imgSrc={straightFlush}
        observations="Se dois jogadores tiveram straight flush , a sequência maior vence"
      />
      <Popover
        title="Royal Flush"
        content="Um straight é formado quando um jogador tem 5 cartas em sequência , do mesmo naipe e seguindo uma sequência específica. A sequência precisa ser 10,J,Q,K,A."
        imgSrc={straightFlush}
        observations="É extremamente raro de acontecer"
      />
      <Footer></Footer>
    </main>
  );
}
