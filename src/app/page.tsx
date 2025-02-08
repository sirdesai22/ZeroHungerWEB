import Footer from "@/components/footer";
import BlogSection from "@/components/landingpage/blog-section";
import ContactSection from "@/components/landingpage/contact-section";
import HeroSection from "@/components/landingpage/hero-section";
import LeaderboardSection from "@/components/landingpage/leaderboard-section";
import VisionSection from "@/components/landingpage/vision-section";
import Navbar from "@/components/navbar";


export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <LeaderboardSection />
        <VisionSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

