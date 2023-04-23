import {
  Badge,
  Card,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Text,
} from "@aws-amplify/ui-react";
import { IconType } from "react-icons";

export default function SeasonCard({
  time,
  title,
  description,
  roomNumber,
  cardIcon,
}: {
  time: string;
  title: string;
  description: string;
  roomNumber: string;
  cardIcon: IconType;
}) {
  return (
    <Card width={"500px"} variation="outlined">
      <Grid
        templateColumns={{ small: "1fr", base: "auto 1fr" }}
        gap="medium"
        alignItems={"flex-start"}
      >
        <Text variation="secondary">{time}</Text>
        <Flex direction={"column"}>
          <Heading level={3}>{title}</Heading>
          <Text variation="tertiary">{description}</Text>
          <Divider />
          <Flex gap="xl" alignItems={"center"}>
            <Icon as={cardIcon}></Icon>
            <Text variation="tertiary">Room</Text>
            <Badge variation="warning">{roomNumber}</Badge>
          </Flex>
        </Flex>
      </Grid>
    </Card>
  );
}
