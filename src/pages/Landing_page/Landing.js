
import "./Landing.css";
import Intro from "./Intro.js";
import Carousel, { CarouselItem } from "./Carousel";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import StartScreen from "./StartScreen";

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
        <CarouselItem>
          <Onboarding3 />
        </CarouselItem>
        <CarouselItem>
          <StartScreen />
        </CarouselItem>
      </Carousel>
      <Onboarding1 />
      <Onboarding2 />
      <Onboarding3 />
      <StartScreen />
    </div>
  );
}
