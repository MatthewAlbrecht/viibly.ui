import React from 'react'

import { Txt, Box, Row } from 'components/Base/Base'
import AlbumSectionItem from 'components/Feature/AlbumSectionItem/AlbumSectionItem'

export default function AlbumSection(props) {
  return (
    <>
      <Txt tag='h2' size='24' color='Darkest' content={props.title} />
      <Box classes='top3'>
        <Row>
          {props.data.map((album, i) => (
            <AlbumSectionItem
              key={i}
              artists={album.artists}
              albumName={album.albumName}
            />
          ))}
        </Row>
      </Box>
    </>
  )
}
