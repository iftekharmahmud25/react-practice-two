
import './App.css'
import Card from './componants/Card/Card'
// import Title from './componants/Title'
// import Image from './componants/Image'
// import Views from './Views'


function App() {


  return (
    <>
    <h1 className='text-center text-purple-600 text-4xl font-bold'>welcome to my card</h1>
    <div className='grid grid-cols-3 gap-4'>
      <Card></Card>
      <Card></Card>
      <Card></Card>

    </div>
    
    
    </>
  )
}






export default App
