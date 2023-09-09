import Image from 'next/image'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center px-7 xs:px-12 md:px-24">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
