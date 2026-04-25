import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Car Image Slider</h2>

      <ImageSlider url="https://raw.githubusercontent.com/Prem-0007/images-api/main/images.json" />
    </div>
  );
}

export default App;