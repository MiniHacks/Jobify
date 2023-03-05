import { Text, Flex, keyframes } from "@chakra-ui/react";

const fadeIn = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`

export default function Hero() {

    return (
        <Flex
            justify="space-between"
            align="center"
            p="2rem"
            m="4rem"
            color="#0EA5E9"
        >
            <Text
                fontSize="2rem"
                animation= {`1s ease-out 0s ${fadeIn}`}
            >
                Stay Safe
            </Text>
            <Text
                fontSize="2rem"
                animation={`1s ease-out 1.25s ${fadeIn}`}
                sx={{animationFillMode: "both"}}
            >
                Save Time
            </Text>
            <Text
                fontSize="2rem"
                animation={`1s ease-out 2.50s ${fadeIn}`}
                sx={{animationFillMode: "both"}}
            >
                Search Better
            </Text>
        </Flex>
    )
}