'use client'
import Link from 'next/link'

import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" $lineBottom $lineColor="secondary">
          Contact
        </Heading>

        <Link href="mailto:sac@mytest.com">sac@mytests.com</Link>
      </S.Column>
      <S.Column>
        <Heading color="black" $lineColor="secondary" $lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <Link
            href="https://www.instagram.com/mytest"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.twitter.com/mytest"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://www.youtube.com/mytest"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </Link>
          <Link
            href="https://www.facebook.com/mytest"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" $lineColor="secondary" $lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" $lineColor="secondary" $lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>My test 2025 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
