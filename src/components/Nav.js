import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Menu, Text } from 'grommet'
import NavLink from './NavLink.js'
import { sections } from '../config.json'
import { More } from 'grommet-icons'
import { smoothlyScroll } from '../util'

const navigationSections = sections.map(({ title }) => title)

const Nav = ({ size, views }) => {
  const sectionInView = views.filter(view => view.isInView === true)

  return (
    <Box
      align="center"
      className="primary-color"
      direction="row"
      elevation="large"
      fill="horizontal"
      height="50px"
      justify="between"
      pad={{ horizontal: 'medium' }}
      style={{ position: 'fixed', zIndex: '10' }}
    >
      <Button onClick={() => smoothlyScroll('Home')}>
        <Text color="white" size="xlarge" weight="bold">
          Alex Lee
        </Text>
      </Button>
      {size === 'small' ? (
        <Menu
          dropAlign={{ top: 'bottom', right: 'right' }}
          icon={<More color="white" />}
          id="menu"
          items={navigationSections.map((title, i) => ({
            label: <Box pad="medium">{title}</Box>,
            onClick: () => smoothlyScroll(title)
          }))}
        />
      ) : (
        <Box direction="row" gap="small">
          {navigationSections.map(title => (
            <NavLink
              active={
                sectionInView.length > 0 && title === sectionInView[0].title
              }
              key={title}
              title={title}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

Nav.propTypes = {
  size: PropTypes.string.isRequired,
  views: PropTypes.array.isRequired
}

export default Nav