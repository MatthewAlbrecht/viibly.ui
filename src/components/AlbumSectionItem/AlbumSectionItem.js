import React from 'react'
import imageMap from 'utils/images'

import Txt from 'components/Txt/Txt'
import Box from 'components/Box/Box'
import Col from 'components/Col/Col'

export default function AlbumSectionItem(props) {
  return (
    <Col classes="3">
      <img 
        className="albumSectionItem-albumCover" 
        alt="Album Cover" 
        {...imageMap.albumCover}
      />
      <Box classes="top2">
        <Txt
          tag="h3"
          size="16"
          color="Darkest"
          content={props.albumName}
        />
      </Box>
      <Box classes="top1">
        <Txt
          tag="h3"
          size="13"
          color="GreyBlueLight"
          content={props.artists.join(', ')}
        />
      </Box>
    </Col>
  )
}
