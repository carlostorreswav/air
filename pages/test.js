import { Div, Button, Text } from "../air"

const Test = () => {
  return (
    <>
      <Div bg="red">sdf</Div>
      <Button
        p="xl"
        hover={{ bg: "yellow", p: "s" }}
        m={{ bg: "blue", p: "xxl" }}
      >
        Click me!
      </Button>
      <Text size="m" hover={{ color: "red", bold: "true" }}>
        Im a beautiful Text
      </Text>
    </>
  )
}

export default Test
