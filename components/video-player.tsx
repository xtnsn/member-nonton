interface VideoPlayerProps {
  videoUrl: string
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-black">
      <iframe src={videoUrl} className="w-full aspect-video" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  )
}
