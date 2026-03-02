import fetchNavigation from '@/lib/cms/fetchNavigation'

import { EventsBar } from "@/ui/eventsbar"
import { Header } from "@/ui/header"
import { Section } from "@/ui/section"

import './page.css'

// static nav
import { FHS_SA as nav } from '@/fixtures/nav'

export default async function Page() {

      // const nav = await fetchNavigation("fhsSaudiArabia")
      // console.log('nav:', nav)
      
	return (
            <>
                  <EventsBar />
                  
                  <Header site={`sa`} handle={`Saudi Arabia`} mainMenu={nav.data.entries} />

                  <Section>
                        <p className="h5 fw-400">Home page</p>
                  </Section>
		</>
	)
}
