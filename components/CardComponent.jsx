import { useSQLiteContext } from "expo-sqlite";
import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardComponents = () => {
  const [budget, setBudget] = React.useState([]);
  const db = useSQLiteContext();
  const getdata = async () => {
    const result = await db.prepareAsync("SELECT * FROM budgets");

    const item = await result.executeAsync();
    const allRows = await item.getAllAsync();
    setBudget(allRows);
    console.log("====================================");
    console.log(allRows);
    console.log("====================================");
  };
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <View>
      {budget.map((datas) => {
        return (
          <Card>
            <Card.Title
              title={datas.name}
              subtitle={datas.deadline}
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">{datas.name}</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button buttonColor={datas.color}>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        );
      })}
    </View>
  );
};

export default CardComponents;
