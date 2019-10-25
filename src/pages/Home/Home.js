import React, { Component } from 'react'
import { featuredReleases, popularThisMonth, recentlyAdded } from 'data/albums'

import { Container, Box, Row, Col } from 'components/Base/Base'
import AlbumSection from 'components/Feature/AlbumSection/AlbumSection'
import HomeHero from 'components/Feature/HomeHero/HomeHero'
import CallToAction from 'components/Feature/CallToAction/CallToAction'

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeHero />
        <Container>
          <Box classes='top5'>
            <AlbumSection title='Featured Releases' data={featuredReleases} />
          </Box>
          <Box classes='top9'>
            <AlbumSection title='Popular This Month' data={popularThisMonth} />
          </Box>
          <Box classes='top9'>
            <AlbumSection title='Recently Added' data={recentlyAdded} />
          </Box>
          <Box classes='top10'>
            <Row>
              <Col classes='6'>
                <CallToAction
                  color='purple'
                  title='Vote'
                  subtitle='Collaborate with us on future features'
                  iconType='Vote'
                />
              </Col>
              <Col classes='6'>
                <CallToAction
                  color='blue'
                  title='Donate'
                  subtitle='Help us make the music world better'
                  iconType='Donate'
                />
              </Col>
            </Row>
          </Box>
        </Container>
      </>
    )
  }
}
