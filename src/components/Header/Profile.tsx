import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {

    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Moises Conte</Text>
                    <Text color="gray.300" fontSize="small">
                        mtfc.dk@hotmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Moises Conte" src="https://avatars.githubusercontent.com/u/38914373?s=400&u=3ef723b4b56a6343ae6cdf58fb64697409f31022&v=4" />
        </Flex>
    )
}