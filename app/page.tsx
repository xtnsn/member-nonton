import { Button } from "@/components/ui/button"
import FeaturedSlider from "@/components/featured-slider"
import MovieCard from "@/components/movie-card"
import Link from "next/link"

export default function Home() {
  const featuredMovies = [
    {
      id: "crows-zero",
      title: "Crows Zero",
      coverImage: "/images/crows-zero-cover.jpeg",
      rating: 4.8,
      year: 2007,
      duration: "130 min",
      description:
        "High school student Genji Takiya attempts to conquer the notorious Suzuran Boys High School and become the school's top fighter.",
    },
    {
      id: "crows-zero-2",
      title: "Crows Zero II",
      coverImage: "/images/crows-zero-2-cover.jpeg",
      rating: 4.7,
      year: 2009,
      duration: "133 min",
      description:
        "Genji and his victorious G.P.S. alliance find themselves facing down a new challenge by the students of Hosen Academy.",
    },
    {
      id: "crows-explode",
      title: "Crows Explode",
      coverImage: "/images/crows-explode-cover.jpeg",
      rating: 4.5,
      year: 2014,
      duration: "130 min",
      description:
        "A new generation of students takes over Suzuran High School as the battle for supremacy continues in this explosive sequel.",
    },
    {
      id: "high-low-worst",
      title: "High & Low The Worst",
      coverImage: "/images/high-low-worst-cover.png",
      rating: 4.6,
      year: 2019,
      duration: "125 min",
      description:
        "The story continues from the High & Low series, focusing on the worst and most dangerous fighters from different gangs.",
    },
    {
      id: "high-low-worst-x",
      title: "High & Low The Worst X",
      coverImage: "/images/high-low-worst-x-cover.png",
      rating: 4.5,
      year: 2022,
      duration: "118 min",
      description:
        "The ultimate showdown between the strongest fighters continues in this explosive sequel to High & Low The Worst.",
    },
    {
      id: "crows-anime",
      title: "Crows Anime Full Episode",
      coverImage: "/images/crows-anime-cover.png",
      rating: 4.4,
      year: 2006,
      duration: "180 min",
      description:
        "The animated adaptation of the popular manga series, following the intense battles and rivalries at Suzuran High School.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Featured Movies Slider */}
        <FeaturedSlider movies={featuredMovies.slice(0, 4)} />

        {/* Movie Collection */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Movies</h2>
            <Link href="/movies">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
