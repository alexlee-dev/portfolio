import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'
import { intro, social } from '../../config.json'
import SocialIcon from '../SocialIcon'

const Intro = ({ navRef, size }) => {
  return (
    <Box
      align="center"
      background={`url(${intro.backgroundImage})`}
      fill="horizontal"
      height={size === 'small' ? '400px' : '500px'}
      id="Home"
      justify="center"
      ref={navRef}
    >
      <Box direction="row" justify="center" align="center">
        <Box align="center" justify="center" pad="medium">
          <Heading className="uppercase" color="white" level="4" margin="none">
            Hello, World.
          </Heading>
          <Heading
            color="white"
            level="1"
            margin={{ top: 'small', bottom: 'none' }}
            size={size === 'small' ? '3em' : '4em'}
          >
            I&#39;m Alex Lee
          </Heading>
          <Heading className="uppercase" color="white" level="4" margin="none">
            Web Developer
          </Heading>
          <Box direction="row" margin={{ top: 'large' }}>
            {social.map(({ icon, link }, i) => (
              <SocialIcon
                key={i}
                icon={icon}
                link={link}
                size={size === 'small' ? '30px' : 'large'}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Intro.propTypes = {
  navRef: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
}

export default Intro
