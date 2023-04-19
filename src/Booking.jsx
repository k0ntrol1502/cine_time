import { Button, ButtonGroup, Flex, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

function MultiSelectButtons() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleButtonSelect = (value, price) => {
    if (selectedButtons.includes(value)) {
      setSelectedButtons(selectedButtons.filter((button) => button !== value));
      setTotalValue(totalValue - price);
    } else {
      setSelectedButtons([...selectedButtons, value]);
      setTotalValue(totalValue + price);
    }
  };

  return (
    <>
    <Flex justifyContent="center">
      <ButtonGroup>
      <VStack>
        <HStack>
        <Button
          isSelected={selectedButtons.includes("A1")}
          onClick={() => handleButtonSelect("A1", 100)}
          bg={selectedButtons.includes("A1") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A1") ? "white" : "gray.500"}
        >
        1
        </Button>
        <Button
          isSelected={selectedButtons.includes("A2")}
          onClick={() => handleButtonSelect("A2", 100)}
          bg={selectedButtons.includes("A2") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A2") ? "white" : "gray.500"}
        >
        2
        </Button>
        <Button
          isSelected={selectedButtons.includes("A3")}
          onClick={() => handleButtonSelect("A3", 100)}
          bg={selectedButtons.includes("A3") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A3") ? "white" : "gray.500"}
        >
        3
        </Button>
        <Button
          isSelected={selectedButtons.includes("A4")}
          onClick={() => handleButtonSelect("A4", 100)}
          bg={selectedButtons.includes("A4") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A4") ? "white" : "gray.500"}
          marginLeft={10}
        >
        4
        </Button>
        <Button
          isSelected={selectedButtons.includes("A5")}
          onClick={() => handleButtonSelect("A5", 100)}
          bg={selectedButtons.includes("A5") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A5") ? "white" : "gray.500"}
        >
        5
        </Button>
        <Button
          isSelected={selectedButtons.includes("A6")}
          onClick={() => handleButtonSelect("A6", 100)}
          bg={selectedButtons.includes("A6") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A6") ? "white" : "gray.500"}
        >
        6
        </Button>
        <Button
          isSelected={selectedButtons.includes("A7")}
          onClick={() => handleButtonSelect("A7", 100)}
          bg={selectedButtons.includes("A7") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A7") ? "white" : "gray.500"}
        >
        7
        </Button>
        <Button
          isSelected={selectedButtons.includes("A8")}
          onClick={() => handleButtonSelect("A8", 100)}
          bg={selectedButtons.includes("A8") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A8") ? "white" : "gray.500"}
        >
        8
        </Button>
        <Button
          isSelected={selectedButtons.includes("A9")}
          onClick={() => handleButtonSelect("A9", 100)}
          bg={selectedButtons.includes("A9") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A9") ? "white" : "gray.500"}
        >
        9
        </Button>
        <Button
          isSelected={selectedButtons.includes("A10")}
          onClick={() => handleButtonSelect("A10", 100)}
          bg={selectedButtons.includes("A10") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("A10") ? "white" : "gray.500"}
        >
        10
        </Button>
        </HStack>
        <br />
        <HStack>
        <br />
        <Button
          isSelected={selectedButtons.includes("B1")}
          onClick={() => handleButtonSelect("B1", 100)}
          bg={selectedButtons.includes("B1") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B1") ? "white" : "gray.500"}
          marginLeft={10}
        >
        1
        </Button>
        <Button
          isSelected={selectedButtons.includes("B2")}
          onClick={() => handleButtonSelect("B2", 100)}
          bg={selectedButtons.includes("B2") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B2") ? "white" : "gray.500"}
        >
        2
        </Button>
        <Button
          isSelected={selectedButtons.includes("B3")}
          onClick={() => handleButtonSelect("B3", 100)}
          bg={selectedButtons.includes("B3") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B3") ? "white" : "gray.500"}
        >
        3
        </Button>
        <Button
          isSelected={selectedButtons.includes("B4")}
          onClick={() => handleButtonSelect("B4", 100)}
          bg={selectedButtons.includes("B4") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B4") ? "white" : "gray.500"}
        >
        4
        </Button>
        <Button
          isSelected={selectedButtons.includes("B5")}
          onClick={() => handleButtonSelect("B5", 100)}
          bg={selectedButtons.includes("B5") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B5") ? "white" : "gray.500"}
        >
        5
        </Button>
        <Button
          isSelected={selectedButtons.includes("B6")}
          onClick={() => handleButtonSelect("B6", 100)}
          bg={selectedButtons.includes("B6") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B6") ? "white" : "gray.500"}
        >
        6
        </Button>
        <Button
          isSelected={selectedButtons.includes("B7")}
          onClick={() => handleButtonSelect("B7", 100)}
          bg={selectedButtons.includes("B7") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B7") ? "white" : "gray.500"}
        >
        7
        </Button>
        <Button
          isSelected={selectedButtons.includes("B8")}
          onClick={() => handleButtonSelect("B8", 100)}
          bg={selectedButtons.includes("B8") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B8") ? "white" : "gray.500"}
        >
        8
        </Button>
        <Button
          isSelected={selectedButtons.includes("B9")}
          onClick={() => handleButtonSelect("B9", 100)}
          bg={selectedButtons.includes("B9") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B9") ? "white" : "gray.500"}
        >
        9
        </Button>
        <Button
          isSelected={selectedButtons.includes("B10")}
          onClick={() => handleButtonSelect("B10", 100)}
          bg={selectedButtons.includes("B10") ? "green.500" : "gray.100"}
          color={selectedButtons.includes("B10") ? "white" : "gray.500"}
        >
        10
        </Button>
        </HStack>
        </VStack>
      </ButtonGroup>
    </Flex>
    <br />
    <Flex justify='left' marginLeft={50}>
    <p>Total Value: ₹{totalValue}</p>
    </Flex>
    </>
  );
}
export default MultiSelectButtons;