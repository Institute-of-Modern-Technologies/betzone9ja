'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dices, Users, Shield, TrendingUp, Trophy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const upcomingMatches = [
    { id: 1, homeTeam: "Lagos City FC", awayTeam: "Abuja United", date: "2024-03-15", time: "15:00", odds: "2.5" },
    { id: 2, homeTeam: "Kano Pillars", awayTeam: "Enyimba FC", date: "2024-03-16", time: "16:30", odds: "1.8" },
    { id: 3, homeTeam: "Rivers United", awayTeam: "Sunshine Stars", date: "2024-03-17", time: "14:00", odds: "2.1" },
    { id: 4, homeTeam: "Plateau United", awayTeam: "Akwa United", date: "2024-03-18", time: "17:00", odds: "2.3" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Trophy className="h-8 w-8 text-green-600" />
          </motion.div>
          <span className="ml-2 text-2xl font-bold text-green-600">BetZone9ja</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Features", "Matches", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              className="text-sm font-medium hover:text-green-600 transition-colors relative group"
              href={`#${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-600 text-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <ScrollReveal>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Bet Smarter with BetZone9ja
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-green-100">
                  Experience the thrill of peer-to-peer betting on Nigeria's premier sports betting platform.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-x-4">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-100 transition-colors duration-300">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700 transition-colors duration-300">
                    Learn More
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose BetZone9ja?</h2>
            </ScrollReveal>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {[
                { icon: Users, title: "Peer-to-Peer", description: "Bet directly with friends and other users across Nigeria." },
                { icon: Shield, title: "Secure", description: "Bank-grade encryption and secure payment methods to protect your funds." },
                { icon: TrendingUp, title: "Competitive Odds", description: "Get the best odds on Nigerian and international sports events." },
                { icon: Dices, title: "Variety", description: "Bet on a wide range of sports, including football, basketball, and more." },
              ].map((feature, index) => (
                <ScrollReveal key={feature.title}>
                  <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <feature.icon className="h-12 w-12 text-green-600" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        <section id="matches" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Upcoming Matches</h2>
            </ScrollReveal>
            <div className="w-full overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
                  <Table className="min-w-full divide-y divide-gray-300">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Date</TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Home Team</TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Away Team</TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Odds</TableHead>
                        <TableHead className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Action</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-200 bg-white">
                      {upcomingMatches.map((match) => (
                        <TableRow key={match.id} className="hover:bg-gray-50">
                          <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{match.date}</TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{match.time}</TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{match.homeTeam}</TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{match.awayTeam}</TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{match.odds}</TableCell>
                          <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 transition-colors duration-200">
                              Bet Now
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join BetZone9ja?</h2>
                <p className="mx-auto max-w-[600px] text-xl text-green-100">
                  Sign up now and get a welcome bonus on your first deposit!
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                    <Button type="submit" className="bg-white text-green-600 hover:bg-green-100 transition-colors duration-300">
                      Sign Up
                    </Button>
                  </form>
                  <p className="text-xs text-green-100">
                    By signing up, you agree to our{" "}
                    <Link className="underline underline-offset-2 hover:text-green-200 transition-colors duration-200" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "About Us", links: ["Our Story", "Team", "Careers"] },
              { title: "Support", links: ["FAQ", "Contact Us", "Live Chat"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Responsible Gambling"] },
              { title: "Connect", links: ["Facebook", "Twitter", "Instagram"] },
            ].map((section, index) => (
              <ScrollReveal key={section.title}>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link className="text-sm hover:underline transition-all duration-200" href="#">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 pt-8 border-t border-green-700 text-center">
              <p className="text-sm">© 2024 BetZone9ja. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}