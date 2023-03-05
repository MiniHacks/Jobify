import { Heading, Flex } from "@chakra-ui/react";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    return (
        <Flex
            justify="center"
            align="center"
            p="1rem"
            borderBottom="1px solid #94a3b8"
        >
            <Heading
                letterSpacing="5px"
                fontSize="4rem"
                color="#e2e8f0"
                onClick={() => router.push("/")}
            >
                JOBIFY
            </Heading>
        </Flex>
    )
}