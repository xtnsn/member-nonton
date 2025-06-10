"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen ? "bg-black py-4" : isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary" onClick={closeMobileMenu}>
            ANIMMOMEN
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-white hover:text-primary transition-colors">
              Movies
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-zinc-800/50 border-zinc-700 focus:border-primary w-[200px]"
              />
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 pt-20">
          <div className="container mx-auto px-4 py-6 h-full">
            <div className="flex flex-col space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="search"
                  placeholder="Search movies..."
                  className="pl-10 bg-zinc-800/50 border-zinc-700 focus:border-primary w-full h-12 text-white"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-xl py-4 px-2 text-white hover:text-primary transition-colors border-b border-zinc-800/50"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/movies"
                  className="text-xl py-4 px-2 text-white hover:text-primary transition-colors border-b border-zinc-800/50"
                  onClick={closeMobileMenu}
                >
                  Movies
                </Link>
              </div>
            </div>

            {/* Close button area - tap anywhere to close */}
            <div className="absolute inset-0 -z-10" onClick={closeMobileMenu} aria-label="Close menu" />
          </div>
        </div>
      )}
    </>
  )
}
