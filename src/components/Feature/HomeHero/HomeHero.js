import React from 'react'

import { Container, Txt, MaxWidth, Icon } from 'components/Base/Base'

export default function HomeHero(props) {
  return (
    <section className='homeHero'>
      <Container>
        <MaxWidth classes='55p'>
          <Txt tag='h1' size='40' color='Lightest' className='homeHero-heading'>
            We are building a new hub to
            <nobr>
              <i className='homeHero-underlinedText'>
                &nbsp;review music
                <Icon
                  type='Underline'
                  classes='underline'
                  className='homeHero-underline'
                  notIcon
                />
              </i>
            </nobr>
          </Txt>
        </MaxWidth>
      </Container>
    </section>
  )
}
