import React from 'react'
import { Tile, Card, Anchor } from 'grommet'
import LinkNext from 'grommet/components/icons/base/LinkNext'

const PayrollForm = () => {
  return (
    <Tile>
      <Card
        colorIndex="brand"
        thumbnail={'https://res.cloudinary.com/alexlee-dev/image/upload/v1538177964/portfolio/payroll-form.png'}
        heading="Payroll Form"
        label="Form"
        description="A form integrated with a dashboard to collect and process employee payroll information."
        link={
          <Anchor
            href="https://www.google.com/"
            icon={<LinkNext />}
            label="www.DUMMYSTIE.com"
            target="_blank"
          />
        }
      />
    </Tile>
  )
}

export default PayrollForm
