import {Box, Heading, IconButton} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../../assets/Club_logo.png";
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({ onOpen }) => {
  return (
    <Box
      as="header"
      w="100%"
      h="90px"
      bg="white"
      color="blue.700"
      px={4}
      py={2}
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
    >
      <IconButton
        aria-label="Open menu"
        icon={<CiMenuFries />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        bg="transparent"
        color="black"
        fontSize="1.3rem"
        _hover={{ bg: "teal.600" }}
      />
      
        <Link to="/">
            <div className="logo-nav">
            <img src={Logo} />
            </div>
        </Link>

      <Heading size="sm" display={{ base: "none", md: "block" }}>SOSHA SOUTH FC</Heading>
      
    </Box>
  )
}

export default Navbar