import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'
import { sections } from '../../config.json'
import SkillBox from './SkillBox.js'

const about = sections.find(({ title }) => title === 'About')

const Skills = ({ size }) => (
  <Box
    align={size === 'small' ? 'center' : 'start'}
    direction={size === 'small' ? 'column' : 'row'}
    fill="horizontal"
    gap={size === 'small' ? 'large' : 'xlarge'}
    justify="center"
    margin={{ vertical: 'large' }}
  >
    {about.skills.map(({ sectionTitle, languages }, i) => (
      <Box align="start" key={i} justify="start">
        <Box
          align="center"
          justify="center"
          fill="horizontal"
          margin={{ bottom: 'small' }}
        >
          <Heading level="3" margin={{ bottom: 'xsmall' }}>
            {sectionTitle}
          </Heading>
          <Box
            background="#eb1736"
            fill="horizontal"
            height="3px"
            round="small"
          />
        </Box>
        <Box fill="horizontal">
          {languages.map(({ color, title }, i) => (
            <SkillBox color={color} key={i} title={title} />
          ))}
        </Box>
      </Box>
    ))}
  </Box>
)

Skills.propTypes = {
  size: PropTypes.string.isRequired
}

export default Skills
