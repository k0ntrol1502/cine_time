import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react";
function nav  () {
  return(
    <Flex justify="center" align="center" height  ="0.5">
    <Breadcrumb fontsize="8" spacing= "8px" separator={'>'} fontSize="xs">
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