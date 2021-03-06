import React from 'react'

import { Txt, Box, HList, Icon } from 'components/Base/Base'

export default function Footer() {
  return (
    <footer className='footer'>
      <Box classes='bottom6'>
        <h5 className='footer-logo'>logo</h5>
      </Box>
      <Box classes='bottom5'>
        <HList className='footer-nav' classes='3'>
          <li>
            <Txt tag='Link' size='16' to='/' color='Lightest' content='Home' />
          </li>
          <li>
            <Txt
              tag='Link'
              size='16'
              to='/login'
              color='Lightest'
              content='Login'
            />
          </li>
          <li>
            <Txt
              tag='Link'
              size='16'
              to='/albums'
              color='Lightest'
              content='Albums'
            />
          </li>
          <li>
            <Txt
              tag='Link'
              size='16'
              to='/about-us'
              color='Lightest'
              content='About Us'
            />
          </li>
          <li>
            <Txt tag='Link' size='16' to='/' color='Lightest' content='Link' />
          </li>
        </HList>
      </Box>
      <Box classes='bottom4'>
        <HList className='footer-socialContainer' classes='3'>
          <li className='footer-socialContainer-item'></li>
          <li className='footer-socialContainer-item'></li>
          <li className='footer-socialContainer-item'></li>
        </HList>
      </Box>
      <Txt
        tag='small'
        className='footer-copyright'
        size='12'
        color='GreyBlueLight'
        content='&copy; Viibly 2019'
      />
      <Icon
        type='FooterSwoosh'
        classes='footerSwoosh'
        className='footer-swoosh'
        notIcon
      ></Icon>
    </footer>
  )
}
