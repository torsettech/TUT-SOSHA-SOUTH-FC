import {Outlet} from "react-router-dom"
import Sidebar from "../Components/Sidebar/Sidebar"
import { Box, Flex, useDisclosure } from "@chakra-ui/react"
import Navbar from "../components/Navbar/Navbar";

const MainContent = () => (
    <Box
      as="main"
      ml={{ base: 0, md: "250px" }} // Adjust margin based on screen size
      mt="80px"
      p={4}
      bg="white"
      height="calc(100vh- 85px)"
      overflowY="auto"
      w="100%"
    >
      <Outlet />
    </Box>
  );

const AdminLayout = () => {
  const { isOpen,onOpen, onClose } = useDisclosure();
  return (
    <>
    <Flex>
        <Navbar onOpen={onOpen} />
            <Sidebar onClose={onClose} isOpen={isOpen} />
        <MainContent />
    </Flex>
    </>
  )
}

export default AdminLayout