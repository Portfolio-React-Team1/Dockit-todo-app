import "./Landing.css";
import Intro from "./Intro.js";
import Carousel, { CarouselItem } from "./Carousel";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";

function Landing() {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <Intro />
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Onboarding1 />{" "}
        </CarouselItem>
        <CarouselItem>
          <Onboarding2 />
        </CarouselItem>
        <CarouselItem>organize your task component</CarouselItem>
      </Carousel>
      <Onboarding1 />
      <hr />
      <Onboarding2 />
    </div>
  );
}

export default Landing;
