import * as React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "rebass";

const About: React.FunctionComponent<unknown> = () => {
  return (
    <div id="about">
      <Flex
        alignItems="center"
        flexDirection="column"
        sx={{ margin: ["100px 10%", "100px 15%"] }}
      >
        <Heading as="h2" sx={{ textTransform: "uppercase" }}>
          About
        </Heading>
        <Image
          alt="Alex Lee profile image"
          sx={{
            borderRadius: "50%",
            margin: "10px auto",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          height={250}
          src="/assets/avatar-250.webp"
          width={250}
        />
        <Box maxWidth="75%">
          <Text fontWeight="bold" margin="10px auto">
            Hi. I&apos;m Alex, a Senior Software Engineer creating purposeful
            and functional applications that go beyond expectations.
          </Text>
          <Text margin="10px auto">
            I&apos;ve restructured company-wide testing strategies and I
            currently instruct training sessions on front end specializations
            and techniques.
          </Text>
          <a
            data-cy="resume-link"
            href="/assets/resume-alex-lee.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              sx={{
                marginTop: "10px",
                transition: "0.25s ease-in-out",
                ":hover": {
                  backgroundColor: "rgba(0, 119, 204, 0.8)",
                  cursor: "pointer",
                },
              }}
              variant="primary"
            >
              <i className="far fa-file-user" style={{ marginRight: "10px" }} />
              Résumé
            </Button>
          </a>
        </Box>
      </Flex>
    </div>
  );
};

export default About;
