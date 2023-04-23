import { Flex, Icon } from "@aws-amplify/ui-react";
import SeasonCard from "./components/SeasonCard";
import { BsFillSunriseFill, BsSunglasses, BsCloudFill } from "react-icons/Bs";
import SummerIcon from "./components/SummerIcon";
import "./App.css";

function App() {
  const cards = [
    {
      time: "8am-9am",
      title: "Web Components",
      description:
        'Web components are awesome! Let"s figure them out together.',
      roomNumber: "14a",
      cardIcon: () => <BsFillSunriseFill size="24px" color="orange" />,
    },
    {
      time: "10am-11am",
      title: "Wear Sunglasses At Night",
      description: "You should wear your sunglasses everywhere!",
      roomNumber: "16a",
      cardIcon: () => <BsSunglasses size="24px" color="purple" />,
    },
    {
      time: "1pm-2pm",
      title: "Cloud Lessons",
      description: "Learn about the cloud, what is it? Why you should use it!",
      roomNumber: "18a",
      cardIcon: () => <BsCloudFill size="24px" color="gray" />,
    },
    ,
  ];
  return (
    <Flex direction={"column"} alignItems="center">
      <Icon as={SummerIcon} />
      <Flex className="App" direction={"column"} alignItems="center">
        {cards.map((card, idx) => (
          <SeasonCard key={idx} {...card!}></SeasonCard>
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
