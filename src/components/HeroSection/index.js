// @ts-nocheck
import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";

const HeroSelection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Baking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $2560 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
          >
            Get stared{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSelection;
