import "./App.css";
import Landing from "./pages/Landing_page/Landing";
import Carousel, { CarouselItem } from "./pages/Landing_page/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>
          <Landing />
        </CarouselItem>
        <CarouselItem>Manage your tasks component Page</CarouselItem>
        <CarouselItem>create daily routine component</CarouselItem>
        <CarouselItem>organize your task component</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
