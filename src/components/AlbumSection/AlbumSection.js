import React from 'react'

import Txt from 'components/Txt/Txt'
import Box from 'components/Box/Box'
import Row from 'components/Row/Row'
import AlbumSectionItem from 'components/AlbumSectionItem/AlbumSectionItem'

export default function AlbumSection(props) {
  return (
    <>
      <Txt
        tag="h2"
        size="24"
        color="Darkest"
        content={props.title}
      />
      <Box classes="top3">
        <Row>
          {props.data.map(album => 
            <AlbumSectionItem 
              artists={album.artists} 
              albumName={album.albumName} 
            />
          )}
        </Row>
      </Box>
    </>
  )
}
