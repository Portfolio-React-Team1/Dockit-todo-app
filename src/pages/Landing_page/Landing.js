import "./Landing.css";
import Intro from "./Intro.js";
import Carousel, { CarouselItem } from "./Carousel";
import TaskManager from "./TaskManager";

function Landing() {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <Intro />
        </CarouselItem>
        <CarouselItem>
          {" "}
          <TaskManager />{" "}
        </CarouselItem>
        <CarouselItem>create daily routine component</CarouselItem>
        <CarouselItem>organize your task component</CarouselItem>
      </Carousel>
      <TaskManager />
    </div>
  );
}

export default Landing;
