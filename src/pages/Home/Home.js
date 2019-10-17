import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Txt from 'components/Txt/Txt'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/albums">
              Albums
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
        <Txt
          tag="p"
          color="Darkest"
          size="14"
        >
          I think the only card she has is the Lorem card. My text is long and beautiful, as, it has been well documented, are various other parts of my website. Be careful, or I will spill the beans on your placeholder text. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?

          We are going to make placeholder text great again. Greater than ever before. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected.

          I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. You could see there was text coming out of her eyes, text coming out of her wherever.

          An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!

          Lorem Ispum is a choke artist. It chokes! I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful.

          Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.

          It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful.

          I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice."

          You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.

          We have so many things that we have to do better... and certainly ipsum is one of them. We have so many things that we have to do better... and certainly ipsum is one of them. That other text? Sadly, it’s no longer a 10. I have a 10 year old son. He has words. He is so good with these words it's unbelievable. I’m the best thing that ever happened to placeholder text.
        </Txt>
      </>
    );
  }
}
