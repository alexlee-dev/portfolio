import React from "react";
import { Box, Button } from "@material-ui/core";
import aboutStyles from "./about.module.scss";
import SectionHeading from "../components/sectionHeading";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Avatar from "../components/avatar";

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutCopy {
        edges {
          node {
            content {
              json
            }
          }
        }
      }
      contentfulAsset(title: { eq: "Resume" }) {
        title
        file {
          url
        }
      }
    }
  `);

  return (
    <Box className={aboutStyles.container}>
      <SectionHeading heading="About" />
      <Avatar />
      {documentToReactComponents(
        data.allContentfulAboutCopy.edges[0].node.content.json
      )}
      <Button
        className={aboutStyles.resume}
        href={data.contentfulAsset.file.url}
        target="_blank"
        variant="contained"
      >
        Résumé
      </Button>
    </Box>
  );
};

export default AboutSection;
