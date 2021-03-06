import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Text } from "rebass";

import { PortfolioItemDocument } from "../types";

export interface PortfolioItemCardProps {
  portfolioItem: PortfolioItemDocument;
}

const PortfolioItemCard: React.FunctionComponent<PortfolioItemCardProps> = (
  props: PortfolioItemCardProps
) => {
  const { portfolioItem } = props;

  return (
    <li className="card__portfolio-item">
      <Flex
        alignItems="center"
        flexDirection={["column", "row"]}
        justifyContent="flex-start"
        sx={{
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          fontSize="6"
          sx={{
            background: portfolioItem.iconBackground,
            borderRadius: "50%",
            color: "#ffffff",
            height: "100px",
            marginBottom: ["25px", "0"],
            marginRight: ["0", "50px"],
            width: "100px",
          }}
        >
          <i className={portfolioItem.iconClass} />
        </Flex>
        <Box sx={{ maxWidth: "80%" }}>
          <Heading as="h3" sx={{ textTransform: "uppercase" }}>
            {portfolioItem.title}
          </Heading>
          <Text sx={{ marginBottom: "10px", marginTop: "10px" }}>
            {portfolioItem.tagline}
          </Text>
          <RouterLink to={`/portfolio/${portfolioItem._id}`}>
            View Item
          </RouterLink>
        </Box>
      </Flex>
    </li>
  );
};

export default PortfolioItemCard;
