
import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <>
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting = "bienvenido"/>
      </div>
      
    </>
  )
}

export default App
