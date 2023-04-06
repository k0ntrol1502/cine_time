import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
import {Link} from "react-router-dom";
function nav  () {
  return(
    <Flex justify="center" align="center" height  ="5">
    <Breadcrumb fontsize="8" spacing= "20px" separator={'|'} fontSize="xl">
      <BreadcrumbItem>
        <BreadcrumbLink><Link to="/">Home</Link></BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink ><Link to="/about">About</Link></BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink ><Link to="/contact">Contact</Link></BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    </Flex>
  );
}
export default nav;