import './App.css';
import elephant from "./images/elephant.jpeg";


const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const images1= imageData();
  return (
    <div className='App'>
      <h1>Kalvium Gallery</h1>
      <div className="image-grid">
        <img key={images1[0].id} src={images1[0].img} alt="Image Description" />
        <img key={images1[1].id} src={images1[1].img} alt="Image Description" />
        <img key={images1[2].id} src={images1[2].img} alt="Image Description" />
        <img key={images1[3].id} src={images1[3].img} alt="Image Description" />
      </div>
    </div>
  )
}

export default App;
