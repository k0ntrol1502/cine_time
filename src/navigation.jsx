import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
function nav  () {
  return(
    <Flex justify="left" align="center" height  ="5">
    <Breadcrumb fontsize="8" spacing= "20px" separator={'|'} fontSize="xl">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Shirts</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    </Flex>
  );
}
export default nav;