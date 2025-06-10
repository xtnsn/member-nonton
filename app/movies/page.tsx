import { Button } from "@/components/ui/button"
import MovieCard from "@/components/movie-card"

export default function MoviesPage() {
  const allMovies = [
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
      id: "crows-anime",
      title: "Crows Anime Full Episode",
      coverImage: "/images/crows-anime-cover.png",
      rating: 4.4,
      year: 2006,
      duration: "180 min",
      description:
        "The animated adaptation of the popular manga series, following the intense battles and rivalries at Suzuran High School.",
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
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Movies</h1>
          <p className="text-gray-400 text-sm md:text-base">Discover our collection of premium movies</p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            Load More Movies
          </Button>
        </div>
      </div>
    </div>
  )
}
