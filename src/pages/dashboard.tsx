import {
  mdiTrophy,
  mdiChartBar,
  mdiArrowRightCircle,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Button from '../components/Button'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import CardBox from '../components/CardBox'
import ChartLineSample from '../components/ChartLineSample'
import { sampleChartData } from '../components/ChartLineSample/config'
import { getPageTitle } from '../config'
import LayoutAuthenticated from '../layouts/Authenticated'

const userType = 'student';

const DashboardPage = () => {
  const [chartData, setChartData] = useState(sampleChartData())

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault()
    setChartData(sampleChartData())
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Student Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiArrowRightCircle} title="Welcome to Your Learning Journey">
          <Button
            label="Start Quiz"
            href="/quiz"
            color="success"
            icon={mdiArrowRightCircle}
            roundedFull
          />
        </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            icon={mdiTrophy}
            iconColor="success"
            number={5}
            label="Rewards Earned"
          />
          <CardBoxWidget
            icon={mdiChartBar}
            iconColor="info"
            number="87%"
            label="Progress Overview"
          />
        </div>

        <SectionTitleLineWithButton icon={mdiChartBar} title="Progress Overview">
          <Button icon={mdiArrowRightCircle} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6">{chartData && <ChartLineSample data={chartData} />}</CardBox>

        <SectionTitleLineWithButton icon={mdiTrophy} title="Rewards">
          <Button label="View All" href="/rewards" color="info" roundedFull />
        </SectionTitleLineWithButton>
      </SectionMain>
    </>
  )
}

// Wrap the page with LayoutAuthenticated to include the navbar and pass hasSubscribed state
DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType={userType}>{page}</LayoutAuthenticated> // Using state value directly
}

export default DashboardPage
