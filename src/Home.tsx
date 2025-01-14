import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="">
      <p className="underline">Home</p>
      <div className='text-blue-500'>Home</div>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home;