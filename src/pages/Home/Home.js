import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
  featuredReleases, 
  popularThisMonth, 
  recentlyAdded 
} from 'data/albums'

import Box from 'components/Box/Box'
import Txt from 'components/Txt/Txt'
import VList from 'components/VList/VList'
import Container from 'components/Container/Container'
import AlbumSection from 'components/AlbumSection/AlbumSection'

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
