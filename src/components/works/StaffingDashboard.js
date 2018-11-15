import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import PortfolioItemDescription from '../PortfolioItemDescription'

const StaffingDashboard = () => {
  return (
    <Tile pad="medium">
      <Card
        colorIndex="brand"
        thumbnail={
          'https://res.cloudinary.com/alexlee-dev/image/upload/c_scale,q_90,w_384,f_auto/v1538177965/portfolio/staffing-dashboard.png'
        }
        heading="Staffing Dashboard"
        label="Dashboard"
        description={
          <PortfolioItemDescription
            languages={['HTML5', 'CSS3', 'JavaScript']}
            description="A fully functional dashboard to help with staffing and recruiting."
            sourceLink="https://github.com/alexlee-dev/Staffing"
          />
        }
        link={
          <Anchor
            href="https://demo-staffing-dashboard.netlify.com"
            icon={<LinkNext />}
            label="Demo"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default StaffingDashboard
