import * as React from 'react';

export default function CopyDemo() {
  const handleCopy = () => {
    alert("This free lorem from the Futurama Ipsum Lorem, called Fillerama.")
  }
  return (
    <div>
      <h3>Try and copy this text, I dare ya.</h3> 
      <section style={{width: "40rem", display: "inline-block"}}
      onCopy={handleCopy}>
        Just once I'd like to eat dinner with a celebrity who isn't bound and gagged.
        I love you, buddy! Stop! Don't shoot fire stick in space canoe! Cause 
        explosive decompression! Isn't it true that you have been paid for your testimony?
        I guess because my parents keep telling me to be more ladylike. As though!
        I'll get my kit! You, a bobsleder!? That I'd like to see! Hello, little man.
        I will destroy you! Meh. I'm sure those windmills will keep them cool. 
        You're going back for the Countess, aren't you? What kind of a father would 
        I be if I said no? I haven't felt much of anything since my guinea pig died. 
        Shut up and take my money!  No! The cat shelter's on to me. You guys realize you 
        live in a sewer, right? We're also Santa Claus! Check it out, y'all. Everyone 
        who was invited is here. Yes, if you make it look like an electrical fire. 
        When you do things right, people won't be sure you've done anything at all. 
        Also Zoidberg. And I'd do it again! And perhaps a third time! But that 
        would be it. Throw her in the brig. You'll have all the Slurm you can 
        drink when you're partying with Slurms McKenzie! And from now on you're 
        all named Bender Jr. Um, is this the boring, peaceful kind of taking to the 
        streets? Now Fry, it's been a few years since medical school, so remind me. 
        Disemboweling in your species: fatal or non-fatal? I haven't felt much of 
        anything since my guinea pig died.
      </section>
    </div>
  )
}