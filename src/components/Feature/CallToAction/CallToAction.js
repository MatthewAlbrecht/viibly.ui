import React from 'react'
import classnames from 'classnames'
import { Box, Txt, Row, Col, Icon } from 'components/Base/Base'

export default function CallToAction(props) {
  function className() {
    return classnames([
      'callToAction',
      `callToAction_${props.color}`
    ])
  }
  return (
    <a href="/" className={className()}>
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
            <Box classes="top1">
              <Txt
                tag="h4"
                size="20"
                color="Lightest"
                content={props.subtitle}
                align="left"
              />
            </Box>
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
