import Image from 'next/image'
import HeroSection from '@/components/hero-section'
import Steps from '@/components/steps'
import EmailSection from '@/components/email-section'
import GetStarted from '@/components/get-start'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <EmailSection/>
      <Steps/>
      <GetStarted/>
    </main>
  )
}
