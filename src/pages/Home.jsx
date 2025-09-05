import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Card from '../components/Card.jsx'
import { Link } from 'react-router-dom'
import locations from '../data/locations.json'
import { useLang } from '../contexts/LanguageContext.jsx'
import { tText } from '../utils/i18n.js'

export default function Home() {
  const { lang } = useLang()

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Popular Spots */}
      <section className="section py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Spots</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 9).map((spot) => (
              <Card key={spot.id} className="spot-card">
                <Link
                  to={'/location/' + spot.slug}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img
                    className="spot-img w-full h-56 object-cover rounded-xl shadow-md"
                    src={spot.image}
                    alt={tText(spot.name, lang)}
                  />
                  <div className="flex justify-between items-center mt-4">
                    <strong className="text-lg">{tText(spot.name, lang)}</strong>
                    <span className="text-sm text-yellow-500">
                      ★ {tText(spot.rating, lang)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{tText(spot.city, lang)}</span>
                    <span>{tText(spot.crowd, lang)}</span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
