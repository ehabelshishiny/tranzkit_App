import type React from "react"
import Link from "next/link"
import { BarChart, Calendar, Car, CheckCircle, Layers, MapPin, Smartphone, Truck, User, Quote } from "lucide-react"
import { Twitter, Linkedin, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Home() {
  "use client"
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center" href="/">
              <span className="font-bold">TranzKit</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#features"
                onClick={(e) => scrollToSection(e, "features")}
              >
                Features
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#products"
                onClick={(e) => scrollToSection(e, "products")}
              >
                Products
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#case-study"
                onClick={(e) => scrollToSection(e, "case-study")}
              >
                Case Study
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#pricing"
                onClick={(e) => scrollToSection(e, "pricing")}
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="outline" className="ml-auto">
              Log in
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/6c51044939083eb33b24c99e340c7ebb.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  The Future of Transport Management Starts Here!
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Digitize, automate, and optimize your corporate transport, ride-hailing, and logistics operations—all
                  in one powerful MaaS SaaS Platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Designed for Everyone in Mobility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <User className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold">Riders</h3>
                <p className="text-gray-500 dark:text-gray-400">Seamless rides and easy booking</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Car className="h-12 w-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold">Captains</h3>
                <p className="text-gray-500 dark:text-gray-400">Efficient trip management</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold">Operators & Enterprises</h3>
                <p className="text-gray-500 dark:text-gray-400">Smart business control and insights</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <Layers className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Operators Platform</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Real-time insights, automated scheduling, and complete fleet control.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <Smartphone className="h-12 w-12 mb-4 text-green-500" />
                <h3 className="text-xl font-bold mb-2">Ops Supervisor App</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Instant access to schedules, incident capturing, and financial tracking.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <MapPin className="h-12 w-12 mb-4 text-red-500" />
                <h3 className="text-xl font-bold mb-2">Captain App</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simplified trip management with real-time updates and built-in navigation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <BarChart className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Client Platform</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Real-time and historical transit data for seamless operations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <Calendar className="h-12 w-12 mb-4 text-yellow-500" />
                <h3 className="text-xl font-bold mb-2">Rider App</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Seamless, scheduled, and stress-free employee transportation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What sets TranzKit apart?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">End-to-End Fleet & Mobility Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage corporate commuting, shuttle services, and ride-hailing operations in one powerful ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Powered Trip & Attendance Validation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ensure seamless employee transport with automated check-ins, real-time attendance tracking, and
                    fraud prevention.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Seamless Communication Between Teams</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect drivers, supervisors, fleet managers, and HR teams effortlessly for smooth operations and
                    real-time coordination.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Scalable & Customizable</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Use our SaaS model or opt for a white-label solution tailored to your brand and operational needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Case Study: AL GAWDA Digital Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                  <li>70% of daily tasks were manual, relying on spreadsheets</li>
                  <li>No live tracking capabilities for clients</li>
                  <li>Delayed payments and slow invoicing processes</li>
                </ul>
                <h3 className="text-2xl font-bold mt-8 mb-4">The Solution</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Fully automated trip scheduling and invoicing</li>
                  <li>Real-time client dashboard with GPS tracking</li>
                  <li>Automated billing and trip validation system</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Impact Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Reduction in Manual Work</span>
                    <span className="text-green-500 font-bold">70%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Increase in Real-Time Visibility</span>
                    <span className="text-green-500 font-bold">125%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Faster Financial Reporting</span>
                    <span className="text-green-500 font-bold">90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <blockquote className="relative">
                <Quote className="absolute top-0 left-0 text-gray-300 dark:text-gray-600 h-8 w-8 -mt-4 -ml-4" />
                <p className="text-lg italic text-gray-700 dark:text-gray-300 ml-6">
                  "We went from being overwhelmed by manual work to running a fully automated fleet operation. If you're
                  serious about growth, you need a platform like TranzKit."
                </p>
                <footer className="mt-4 text-right">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Dr. Ahmed EL Aktaa</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">CEO, AL GAWDA</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple, Flexible Pricing That Grows with You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Starter Plan</h3>
                <p className="text-4xl font-bold mb-6">
                  50EGP<span className="text-base font-normal">/user/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Basic trip scheduling & management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Operations dashboard for fleet tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Driver & rider apps included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Standard reporting & analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Customer support via email
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-blue-600 text-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>

                <p className="text-4xl font-bold mb-6">
                  100EGP<span className="text-base font-normal">/user/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" /> Everything in Starter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" /> Incident reporting & compliance logs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" /> Advanced trip scheduling & automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" /> AI-powered trip & attendance validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-2" /> Financial reporting & Supplier payroll
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
                <p className="text-4xl font-bold mb-6">
                  Custom<span className="text-base font-normal"> pricing</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Full API access & third-party integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Custom reporting & advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Dedicated account manager & 24/7 support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> On-premise or private cloud deployment
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
            <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
              Note: Above Price is only for Egyptian Companies. For Companies out of Egypt, please contact us at
              +000000000
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6" />
              <span className="font-bold">TranzKit</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="#">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 TranzKit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

