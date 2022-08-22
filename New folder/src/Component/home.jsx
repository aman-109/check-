import { Box, Button, useDisclosure } from "@chakra-ui/react"

import { Hospital } from "./forHome/hospital"
import { Doctor } from "./forHome/doctor"

function Home(){





    return (
        <Box>
           <Hospital/>
           <Doctor/>
        </Box>
    )
}

export {Home}