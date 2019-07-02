import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Paragraph, Text } from 'grommet'
import * as icons from 'grommet-icons'

const TimelineItem = ({
  endDate,
  icon,
  organization,
  present,
  size,
  startDate,
  summary,
  title
}) => {
  const Icon = icons[icon]

  return (
    <Box
      align={size === 'small' ? 'center' : 'start'}
      direction={size === 'small' ? 'column' : 'row'}
      fill="horizontal"
      gap={size === 'small' ? 'medium' : 'xlarge'}
      justify="center"
      margin={size === 'small' ? { vertical: 'medium' } : undefined}
    >
      <Box
        style={{ textAlign: `${size === 'small' ? 'center' : 'right'}` }}
        width={size === 'small' ? '100%' : '30%'}
      >
        <Box align={size === 'small' ? 'center' : 'end'} fill="horizontal">
          <Heading
            level="3"
            margin={size === 'small' ? 'none' : { top: 'none' }}
          >
            {title}
          </Heading>
        </Box>
        <Text>
          {startDate} {startDate && '-'} {present ? 'Present' : endDate}
        </Text>
      </Box>
      <Box align="center" width={size === 'small' ? '100%' : '10%'}>
        <Icon />
      </Box>
      <Box align={size === 'small' ? 'center' : undefined} width="medium">
        <Heading level="4" margin="none">
          {organization}
        </Heading>
        <Box
          background="#eb1736"
          height="3px"
          margin={{ top: 'small', bottom: 'medium' }}
          round="small"
          style={{ minWidth: '100%' }}
        />
        <Paragraph textAlign={size === 'small' ? 'center' : undefined}>
          {summary}
        </Paragraph>
      </Box>
    </Box>
  )
}

TimelineItem.propTypes = {
  endDate: PropTypes.string,
  icon: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  present: PropTypes.bool,
  size: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default TimelineItem