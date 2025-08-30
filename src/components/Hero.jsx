import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <div className="hero section container">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, ease: 'easeOut' }}
      >
        <h1>Find your next <span style={{color:'var(--e-sand)'}}>earthy</span> escape</h1>
        <p>Live crowd data, curated hotspots, and local vibes—wrapped in a cozy, earthish aesthetic. Not quite dark mode, not quite light… just right.</p>
        <Link to="/location/1" className="btn">Start Exploring</Link>
      </motion.div>

      <motion.div
        className="card hero-card"
        initial={{ opacity: 0, scale: .96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6, delay:.1, ease: 'easeOut' }}
      >
        <h3 style={{marginTop:0}}>Today’s Picks</h3>
        <ul style={{margin:'8px 0 0 18px'}}>
          <li>Low crowd beaches near you</li>
          <li>Hidden cafés with ocean views</li>
          <li>Short hikes with big payoffs</li>
        </ul>
      </motion.div>
    </div>
  )
}
