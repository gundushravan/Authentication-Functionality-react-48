import LogoutButton from '../LogoutButton'

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="container">
    <Header />
    <div>
      <h1>Home Route</h1>
    </div>
    <LogoutButton />
  </div>
)

export default Home
