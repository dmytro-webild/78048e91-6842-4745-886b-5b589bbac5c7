"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, MessageSquare, Monitor, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Content",          id: "#content"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/music-background-with-phone-with-music-icon-modern-technology-concept_169016-52931.jpg"
      logoAlt="StreamNest Logo"
      brandName="StreamNest"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "downward-rays-animated"}}
      imagePosition="right"
      title="Unleash Endless Entertainment"
      description="Stream thousands of movies, series, and exclusive originals anytime, anywhere. Your next favorite story is just a click away."
      buttons={[
        {
          text: "Start Free Trial",          href: "#pricing"},
        {
          text: "Explore Content",          href: "#content"},
      ]}
      imageSrc="https://images.unsplash.com/photo-1603730030119-94b15f532a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3YXRjaGluZyUyMHN0cmVhbWluZyUyMG9uJTIwZGV2aWNlc3xlbnwwfHx8fDE3MjA0MTYxMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
      imageAlt="People engaging with StreamNest on various devices showing streaming content"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-looking-tablet_23-2148765430.jpg",          alt: "Medium shot woman looking at tablet"},
        {
          src: "http://img.b2bpic.net/free-photo/business-young-woman-holding-tablet-outside-cold-day_169016-23866.jpg",          alt: "Business young woman holding a tablet outside on a cold day"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-elegant-female-tourist-using-tablet_1262-19148.jpg",          alt: "Happy elegant female tourist using tablet"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-holding-tablet-outdoors_23-2148346202.jpg",          alt: "Happy woman holding a tablet outdoors"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bearded-man-art-studio_23-2149705893.jpg",          alt: "Portrait of bearded man in an art studio"},
      ]}
      avatarText="Join 10M+ satisfied viewers globally!"
      marqueeItems={[
        {
          type: "text",          text: "New Originals Weekly"},
        {
          type: "text-icon",          text: "4K Ultra HD",          icon: Monitor,
        },
        {
          type: "text",          text: "Any Device, Anywhere"},
        {
          type: "text-icon",          text: "Personalized Picks",          icon: Sparkles,
        },
        {
          type: "text",          text: "Ad-Free Streaming"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Personalized Playlists",          description: "Our intelligent algorithm learns your preferences to curate the perfect content just for you. Discover new favorites effortlessly.",          imageSrc: "http://img.b2bpic.net/free-photo/smartwatch-with-message-icons-world-map_1134-386.jpg",          imageAlt: "Personalized content recommendations UI"},
        {
          title: "Seamless Cross-Device Sync",          description: "Start watching on your TV, pause, and continue exactly where you left off on your phone or tablet. Your entertainment, uninterrupted.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-home-using-tablet_23-2148793512.jpg",          imageAlt: "Seamless cross-device streaming"},
        {
          title: "Stunning 4K Ultra HD",          description: "Immerse yourself in breathtaking visuals with our premium 4K Ultra HD streaming quality. Every detail comes to life.",          imageSrc: "http://img.b2bpic.net/free-photo/gamer-battling-enemies-multiplayer-shooter-discussing-with-other-players-through-headphones-mic_482257-77140.jpg",          imageAlt: "Ultra HD 4K streaming quality"},
      ]}
      title="Experience Streaming Reimagined"
      description="From personalized recommendations to crystal-clear quality, StreamNest brings you an unparalleled viewing experience."
    />
  </div>

  <div id="content" data-section="content">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "p1",          name: "Galactic Odyssey",          price: "Genre: Sci-Fi Epic",          imageSrc: "http://img.b2bpic.net/free-photo/space-travel-collage-design_23-2150163744.jpg",          imageAlt: "Movie poster Galactic Odyssey"},
        {
          id: "p2",          name: "Dragon's Legacy",          price: "Genre: Fantasy Series",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-natural-landscape_23-2151839216.jpg",          imageAlt: "Series poster Dragon's Legacy"},
        {
          id: "p3",          name: "Blue Planet Unveiled",          price: "Genre: Nature Documentary",          imageSrc: "http://img.b2bpic.net/free-photo/journey-planet-mars-concept_23-2150063204.jpg",          imageAlt: "Documentary poster Blue Planet Unveiled"},
        {
          id: "p4",          name: "The Laughing Tree",          price: "Genre: Animated Feature",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-road-scenario_23-2151293820.jpg",          imageAlt: "Animation movie poster The Laughing Tree"},
        {
          id: "p5",          name: "Shadows of the City",          price: "Genre: Crime Thriller",          imageSrc: "http://img.b2bpic.net/free-photo/man-funfair-looking-away_23-2148281618.jpg",          imageAlt: "Series poster Shadows of the City"},
        {
          id: "p6",          name: "Weekend Warriors",          price: "Genre: Comedy Series",          imageSrc: "http://img.b2bpic.net/free-photo/couple-taking-photos-light-movie-projector_23-2149377395.jpg",          imageAlt: "Comedy series poster Weekend Warriors"},
      ]}
      title="Our Vast Content Library"
      description="Dive into a world of diverse stories, from blockbuster movies to critically acclaimed series. There's always something new to explore."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Standard",          badgeIcon: Star,
          price: "$9.99/month",          subtitle: "Essential Entertainment",          features: [
            "Access to Full Library",            "HD Streaming",            "1 Concurrent Stream",            "Ad-supported"],
        },
        {
          id: "premium",          badge: "Popular",          badgeIcon: Sparkles,
          price: "$14.99/month",          subtitle: "Enhanced Experience",          features: [
            "All Standard Features",            "4K Ultra HD Streaming",            "3 Concurrent Streams",            "Ad-Free Viewing",            "Download Content"],
        },
        {
          id: "family",          badge: "Best Value",          badgeIcon: Award,
          price: "$19.99/month",          subtitle: "Ultimate Family Pack",          features: [
            "All Premium Features",            "5 Concurrent Streams",            "Multiple User Profiles",            "Exclusive Bonus Content"],
        },
      ]}
      title="Flexible Plans for Every Viewer"
      description="Choose the perfect subscription that fits your lifestyle and viewing habits. No commitments, cancel anytime."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "10M+",          title: "Active Users",          items: [
            "Global Audience",            "Daily Engagement",            "Community Growth"],
        },
        {
          id: "m2",          value: "100K+",          title: "Hours of Content",          items: [
            "Movies & Series",            "Original Productions",            "Documentaries & More"],
        },
        {
          id: "m3",          value: "98%",          title: "Satisfaction Rate",          items: [
            "Positive Reviews",            "Dedicated Support",            "Continuous Improvement"],
        },
      ]}
      title="Our Impact in Numbers"
      description="Join a rapidly growing community of viewers enjoying top-tier entertainment and innovative features."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sophia L.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-city_1157-17225.jpg",          imageAlt: "Sophia L."},
        {
          id: "2",          name: "Mark D.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-athletic-wear-earbuds-outdoors_23-2148773858.jpg",          imageAlt: "Mark D."},
        {
          id: "3",          name: "Elena R.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-blonde-young-woman-outdoor-using-her-tablet_657883-187.jpg",          imageAlt: "Elena R."},
        {
          id: "4",          name: "Chris B.",          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",          imageAlt: "Chris B."},
        {
          id: "5",          name: "Olivia M.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-doing-okay_1187-4049.jpg",          imageAlt: "Olivia M."},
      ]}
      cardTitle="What Our Viewers Say"
      cardTag="Rave Reviews"
      cardTagIcon={MessageSquare}
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "What devices can I use to watch StreamNest?",          content: "StreamNest is available on smart TVs, streaming media players, game consoles, mobile devices (iOS/Android), and web browsers."},
        {
          id: "f2",          title: "Can I download content for offline viewing?",          content: "Yes, our Premium and Family plans allow you to download select movies and series to your mobile devices for offline viewing."},
        {
          id: "f3",          title: "How many profiles can I create?",          content: "You can create up to 5 individual user profiles with our Family plan, each with personalized recommendations and watch history."},
        {
          id: "f4",          title: "Is StreamNest available internationally?",          content: "StreamNest is currently available in over 100 countries. Content availability may vary by region due to licensing agreements."},
        {
          id: "f5",          title: "How do I cancel my subscription?",          content: "You can easily cancel your subscription anytime through your account settings on our website. No hidden fees or long-term commitments."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about StreamNest's service, plans, and features."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Ready to Watch?"
      title="Start Your Free Trial Today!"
      description="Unlock a world of entertainment. Sign up now and experience the best in streaming. Your journey begins here."
      buttons={[
        {
          text: "Get Started",          href: "#pricing"},
        {
          text: "Contact Support",          href: "mailto:support@streamnest.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="StreamNest"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}