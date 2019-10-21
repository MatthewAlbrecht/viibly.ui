import React from 'react'
import classnames from 'classnames'
import { Box, Txt } from 'components/Base/Base'

export default function CallToAction(props) {
  function className() {
    return classnames([
      'callToAction',
      `callToAction_${props.color}`
    ])
  }
  return (
    <a className={className()}>
      <Box classes="sides6 flats3">
        <Row>
          <Col classes="8">
            <Txt
              tag="h3"
              size="24"
              color="Lightest"
              content={props.title}
              align="left"
            />
            <Txt
              tag="h4"
              size="20"
              color="Lightest"
              content={props.subtitle}
              align="left"
            />
          </Col>
          <Col classes="4">
            <Icon
              type="Info"
              classes="info"
            />
          </Col>
        </Row>
      </Box>
    </a>
  )
}
