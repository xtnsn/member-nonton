import Image from "next/image"
import Link from "next/link"
import { Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Movie {
  id: string
  title: string
  coverImage: string
  rating: number
  year: number
  duration: string
  description: string
}

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <Card className="overflow-hidden bg-zinc-900 border-none group cursor-pointer transition-transform hover:scale-105">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={movie.coverImage || "/placeholder.svg"}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button className="rounded-full size-14" variant="secondary">
              <Play className="w-6 h-6" fill="currentColor" />
            </Button>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
            <h3 className="font-bold text-lg sm:text-xl line-clamp-1">{movie.title}</h3>
            <div className="flex items-center flex-shrink-0">
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
              <span className="text-sm sm:text-base">{movie.rating}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-400 mb-3 gap-2">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>
          <p className="text-gray-300 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{movie.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
