import './index.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./data"
console.log(Data);

function App() {
  const cards = Data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />


    )
  })



  return (
    <div className="App">
      <Navbar  />
      <section className="cards-list">
        <Hero />
        {cards}
      </section>
    </div>
  )
}

export default App
