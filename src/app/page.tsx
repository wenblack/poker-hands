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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <main
      className={`flex bg-black text-white  flex-col items-center justify-center  ${poppins.className}`}
    >
      <h2 className="text-4xl text-red-600 py-10 font-bold leading-7brightness-100">
        Mãos de Poker
      </h2>
      <Popover title="Carta Alta" content="bla bla bla" imgSrc={highCard} />
      <Popover title="um par" content="bla bla bla" imgSrc={pair} />
      <Popover title="dois pares" content="bla bla bla" imgSrc={twoPairs} />
      <Popover title="trinca" content="bla bla bla" imgSrc={threeOfAKind} />
      <Popover title="Straight" content="bla bla bla" imgSrc={straight} />
      <Popover title="flush" content="bla bla bla" imgSrc={flush} />
      <Popover title="full house" content="bla bla bla" imgSrc={fullHouse} />
      <Popover title="Quadra" content="bla bla bla" imgSrc={forOfAKind} />
      <Popover
        title="Straight flush"
        content="bla bla bla"
        imgSrc={straightFlush}
      />
      <Popover
        title="Royal Flush"
        content="bla bla bla"
        imgSrc={straightFlush}
      />
    </main>
  );
}
