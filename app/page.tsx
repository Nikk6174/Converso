import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 >Popular companion</h1>
       
       <section className="home-section">
        <CompanionCard
          id = "123"
          name = "neura the brainy explorer"
          topic = "neural networks"
          subject = " science"
          duration = {45}
          colour = "#afda6e"
          />

          <CompanionCard
            id="456"
            name="Countsy the Number Wizard"
            topic="Derivatives & Integrals"
            subject="maths"
            duration={30}
            colour="#e5d0ff"
          />

          <CompanionCard
            id="789"
            name="Verba the Vocabulary Builder"
            topic="Language"
            subject="English Literature"
            duration={45}
            colour="#ffda6e"
          />
        
       </section>

        <section className="home-section">
          <CompanionList
            title="Recent Sessions"
            companions = {recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA/> 

        </section>

    </main>
  )
}

export default Page