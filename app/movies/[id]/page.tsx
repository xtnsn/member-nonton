"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Star, Clock, Calendar, ChevronDown } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"

interface Movie {
  id: string
  title: string
  coverImage: string
  videoUrl: string
  rating: number
  year: number
  duration: string
  description: string
  genres: string[]
  director: string
  cast: string[]
}

export default function MoviePage() {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const movies: Record<string, Movie> = {
      "crows-zero": {
        id: "crows-zero",
        title: "Crows Zero",
        coverImage: "/images/crows-zero-cover.jpeg",
        videoUrl: "https://drive.google.com/file/d/1zimG646TwFBJvDaOYjLBsKie3vAlhcUF/preview",
        rating: 4.8,
        year: 2007,
        duration: "130 min",
        description:
          "High school student Genji Takiya attempts to conquer the notorious Suzuran Boys High School and become the school's top fighter. Based on a manga by Hiroshi Takahashi, this action-packed film follows Genji's journey as he battles his way through the ranks of the school's toughest fighters.",
        genres: ["Action", "Drama", "Thriller"],
        director: "Takashi Miike",
        cast: ["Shun Oguri", "Kyosuke Yabe", "Meisa Kuroki", "Takayuki Yamada"],
      },
      "crows-zero-2": {
        id: "crows-zero-2",
        title: "Crows Zero II",
        coverImage: "/images/crows-zero-2-cover.jpeg",
        videoUrl: "https://drive.google.com/file/d/1XJax1ClJuqKrOzeWL_PNqEDMvwJaLh8R/preview",
        rating: 4.7,
        year: 2009,
        duration: "133 min",
        description:
          "Genji and his victorious G.P.S. alliance find themselves facing down a new challenge by the students of Hosen Academy. The rivalry between the two schools has been fierce for generations, and now the current leaders are coming together in an all-out brawl to determine who truly deserves to rule the streets.",
        genres: ["Action", "Drama", "Thriller"],
        director: "Takashi Miike",
        cast: ["Shun Oguri", "Kyosuke Yabe", "Meisa Kuroki", "Takayuki Yamada", "Nobuaki Kaneko"],
      },
      "crows-explode": {
        id: "crows-explode",
        title: "Crows Explode",
        coverImage: "/images/crows-explode-cover.jpeg",
        videoUrl: "https://drive.google.com/file/d/1LCDqO_1EqrV3KSNTh5Or-5pRPk1aqgs7/preview",
        rating: 4.5,
        year: 2014,
        duration: "130 min",
        description:
          "A new generation of students takes over Suzuran High School as the battle for supremacy continues in this explosive sequel. Without Genji and his friends, new rivalries form and old enemies return as the fight for control of the school reaches new heights of violence and intensity.",
        genres: ["Action", "Drama", "Thriller"],
        director: "Toshiaki Toyoda",
        cast: ["Masahiro Higashide", "Taichi Saotome", "Yuya Yagira", "Kento Nagayama"],
      },
      "crows-anime": {
        id: "crows-anime",
        title: "Crows Anime Full Episode",
        coverImage: "/images/crows-anime-cover.png",
        videoUrl: "https://drive.google.com/file/d/1RCqc07tNizkQN8uXB1Xp8qOH4q0OK9l2/preview",
        rating: 4.4,
        year: 2006,
        duration: "180 min",
        description:
          "The animated adaptation of the popular manga series, following the intense battles and rivalries at Suzuran High School. This anime brings to life the original story that inspired the hit film series, with stunning animation and faithful adaptation of the source material.",
        genres: ["Animation", "Action", "Drama"],
        director: "Hiroshi Takahashi",
        cast: ["Hiroshi Nagahama", "Toshiyuki Morikawa", "Takahiro Sakurai", "Tomokazu Seki"],
      },
      "high-low-worst": {
        id: "high-low-worst",
        title: "High & Low The Worst",
        coverImage: "/images/high-low-worst-cover.png",
        videoUrl: "https://drive.google.com/file/d/1ex7r0dE5eCujRZvMhbUSOToBaBV7_MEG/preview",
        rating: 4.6,
        year: 2019,
        duration: "125 min",
        description:
          "The story continues from the High & Low series, focusing on the worst and most dangerous fighters from different gangs. When the balance of power shifts, the strongest fighters must face off in brutal battles to determine who truly rules the streets.",
        genres: ["Action", "Drama", "Crime"],
        director: "Shigeaki Kubo",
        cast: ["Taishi Nakagawa", "Yuki Yamada", "Kazuki Kitamura", "Takanori Iwata"],
      },
      "high-low-worst-x": {
        id: "high-low-worst-x",
        title: "High & Low The Worst X",
        coverImage: "/images/high-low-worst-x-cover.png",
        videoUrl: "https://drive.google.com/file/d/1DiGp1dZmBwngpmnqmd707Dg-hPg1_o5B/preview",
        rating: 4.5,
        year: 2022,
        duration: "118 min",
        description:
          "The ultimate showdown between the strongest fighters continues in this explosive sequel to High & Low The Worst. New alliances are formed and old rivalries are reignited as the battle for supremacy reaches its climax.",
        genres: ["Action", "Drama", "Crime"],
        director: "Norihisa Hiranuma",
        cast: ["Taishi Nakagawa", "Yuki Yamada", "Ryo Yoshizawa", "Kanta Sato"],
      },
    }

    if (typeof id === "string" && movies[id]) {
      setMovie(movies[id])
    }

    setIsLoading(false)
  }, [id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
        <p className="mb-8">The movie you're looking for doesn't exist or has been removed.</p>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    )
  }

  // Find related movies based on the current movie
  const getRelatedMovies = () => {
    if (id === "crows-zero") return ["crows-zero-2", "crows-explode"]
    if (id === "crows-zero-2") return ["crows-zero", "crows-explode"]
    if (id === "crows-explode") return ["crows-zero", "crows-zero-2"]
    if (id === "crows-anime") return ["crows-zero", "crows-explode"]
    if (id === "high-low-worst") return ["high-low-worst-x", "crows-zero"]
    if (id === "high-low-worst-x") return ["high-low-worst", "crows-zero"]
    return ["crows-zero", "high-low-worst"]
  }

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10" />
        <Image src={movie.coverImage || "/placeholder.svg"} alt={movie.title} fill className="object-cover" priority />
        <div className="absolute top-4 left-4 z-20">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/30 hover:bg-black/50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 sm:-mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 text-xs sm:text-sm">
              <span className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" fill="currentColor" />
                {movie.rating}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {movie.year}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {movie.duration}
              </span>
              {movie.genres.map((genre) => (
                <span key={genre} className="px-2 py-1 bg-zinc-800 rounded-md text-xs sm:text-sm">
                  {genre}
                </span>
              ))}
            </div>

            <div className="mb-6 sm:mb-8">
              <VideoPlayer videoUrl={movie.videoUrl} />
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Synopsis</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{movie.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Director</h3>
                <p className="text-gray-300 text-sm sm:text-base">{movie.director}</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor) => (
                    <span key={actor} className="px-2 py-1 bg-zinc-800 rounded-md text-xs sm:text-sm">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="bg-zinc-900 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">More Like This</h3>
              <div className="space-y-4">
                {getRelatedMovies().map((relatedId, index) => (
                  <Link href={`/movies/${relatedId}`} key={relatedId}>
                    <div className="flex gap-3 group">
                      <div className="w-20 sm:w-24 h-12 sm:h-16 relative rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={
                            relatedId === "crows-zero"
                              ? "/images/crows-zero-cover.jpeg"
                              : relatedId === "crows-zero-2"
                                ? "/images/crows-zero-2-cover.jpeg"
                                : relatedId === "crows-explode"
                                  ? "/images/crows-explode-cover.jpeg"
                                  : relatedId === "crows-anime"
                                    ? "/images/crows-anime-cover.png"
                                    : relatedId === "high-low-worst"
                                      ? "/images/high-low-worst-cover.png"
                                      : "/images/high-low-worst-x-cover.png"
                          }
                          alt={relatedId.replace(/-/g, " ")}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
                          {relatedId === "crows-zero"
                            ? "Crows Zero"
                            : relatedId === "crows-zero-2"
                              ? "Crows Zero II"
                              : relatedId === "crows-explode"
                                ? "Crows Explode"
                                : relatedId === "crows-anime"
                                  ? "Crows Anime Full Episode"
                                  : relatedId === "high-low-worst"
                                    ? "High & Low The Worst"
                                    : "High & Low The Worst X"}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {relatedId.includes("crows") ? "Action • Drama" : "Action • Crime"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <Link href="/movies">
                  <Button variant="outline" className="w-full justify-between text-sm sm:text-base">
                    More Recommendations
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
