import React, { Component } from 'react'
import { 
  featuredReleases, 
  popularThisMonth, 
  recentlyAdded 
} from 'data/albums'

import { Container, Box } from 'components/Base/Base'
import AlbumSection from 'components/Feature/AlbumSection/AlbumSection'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Box classes="top5">
          <AlbumSection
            title="Featured Releases"
            data={featuredReleases}
          />
        </Box>
        <Box classes="top9">
          <AlbumSection
            title="Popular This Month"
            data={popularThisMonth}
          />
        </Box>
        <Box classes="top9">
          <AlbumSection
            title="Recently Added"
            data={recentlyAdded}
          />
        </Box>
      </Container>
    );
  }
}
