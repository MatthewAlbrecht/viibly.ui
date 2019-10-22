import React from 'react'

import { Txt, Box, Col, Img } from 'components/Base/Base'

export default function AlbumSectionItem(props) {
  return (
    <Col classes="6 3Md">
      <Img 
        className="albumSectionItem-albumCover" 
        name="random" 
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
