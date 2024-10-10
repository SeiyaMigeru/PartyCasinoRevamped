import { FocusCards } from "@/app/components/ui/focus-cards";

export function GameCards() {
  const cards = [
    {
      title: "King Kong Cash DJ Prime 8",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/blueprintkingkcdjp8.jpg",
    },
    {
      title: "Hyper Gold All-In",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/eusmdhypergoldai.jpg",
    },
    {
      title: "Immortal Romance II",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/eusmdimmortalr2.jpg",
    },
    {
      title: "Area Link Dragon",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/eusmdarealinkdragon.jpg",
    },
    {
      title: "Cerberus Gold",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/eusmdcerberusgold.jpg",
    },
    {
      title: "Plenty O'Fish",
      src: "https://slotgames.partycasino.com/htmllobby/images/newlmticons/square_uk/blueprintplentyof.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
