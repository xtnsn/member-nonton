"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Movie {
  id: string
  title: string
  coverImage: string
  rating: number
  year: number
  duration: string
  description: string
}

interface FeaturedSliderProps {
  movies: Movie[]
}

export default function FeaturedSlider({ movies }: FeaturedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const currentMovie = movies[currentIndex]

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      <Image
        src={currentMovie.coverImage || "/placeholder.svg"}
        alt={currentMovie.title}
        fill
        className="object-cover transition-all duration-700 transform scale-105"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 z-20">
        <Badge className="mb-2 sm:mb-4 bg-primary/80 hover:bg-primary text-white text-xs sm:text-sm">Featured</Badge>
        <Link href={`/movies/${currentMovie.id}`}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 hover:text-primary transition-colors cursor-pointer line-clamp-2">
            {currentMovie.title}
          </h1>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 text-sm sm:text-base">
          <span className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" fill="currentColor" />
            {currentMovie.rating}
          </span>
          <span>{currentMovie.year}</span>
          <span>{currentMovie.duration}</span>
        </div>
        <p className="max-w-2xl mb-4 sm:mb-6 text-gray-200 line-clamp-2 md:line-clamp-3 text-sm sm:text-base">
          {currentMovie.description}
        </p>
        <Link href={`/movies/${currentMovie.id}`}>
          <Button className="gap-2 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-4 sm:px-6">
            <Play className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" /> Watch Now
          </Button>
        </Link>
      </div>

      <div className="absolute top-1/2 left-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/30 hover:bg-black/50 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/30 hover:bg-black/50 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
