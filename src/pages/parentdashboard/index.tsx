import { mdiAccountGroup, mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useEffect, useState } from 'react'
import Button from '../../components/Button'
import CardBox from '../../components/CardBox'
import CardBoxComponentEmpty from '../../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../../layouts/Authenticated'
import NotificationBar from '../../components/NotificationBar'
import SectionMain from '../../components/Section/Main'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
import TableChildren from '../../components/Table/Children' // Custom table component
import { getPageTitle } from '../../config'
import { useRouter } from 'next/router'
import AddChildForm from '../../components/ParentDashboard/addChild'

const userType= 'parent';

const ParentDashboard = () => {
  const router = useRouter()
  const [children, setChildren] = useState([]) // Initial empty state
  const [isFormVisible, setIsFormVisible] = useState(false)

  // Fetch data from localStorage only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('children')
      if (storedData) {
        setChildren(JSON.parse(storedData))
      }
    }
  }, [])

  // Update localStorage whenever `children` state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('children', JSON.stringify(children))
    }
  }, [children])

  // Handle form submission
  const handleAddChild = (values: { id: string; name: string; age: number; grade: string; email: string; password: string  }) => {
    const newChild = {
      id: values.id,// Unique ID based on timestamp
      name: values.name,
      grade: values.grade,
      usage: '0h 0m', // Default value for usage
      progress: '0%', // Default value for progress
    }

    // Add the new child to the children list
    setChildren([...children, newChild])

    // Close the form after submission
    setIsFormVisible(false)

    // Redirect to the plans page
    router.push('/plans')
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Parent Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccountGroup} title="Manage Children">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              label="Register New Child"
              color="success"
              icon={mdiTableBorder}
              onClick={() => setIsFormVisible(true)} // Show the form
              roundedFull
              className="w-full sm:w-auto"
            />
          </div>
        </SectionTitleLineWithButton>

        <NotificationBar color="info" icon={mdiAccountGroup}>
          <b>Children Overview.</b> View and manage registered children profiles.
        </NotificationBar>

        {isFormVisible ? (
          <AddChildForm onSubmit={handleAddChild} /> // Pass the onSubmit handler
        ) : children.length > 0 ? (
          <CardBox className="mb-6">
            <div className="overflow-x-auto"> {/* Makes the table scrollable on smaller screens */}
              <TableChildren data={children} />
            </div>
          </CardBox>
        ) : (
          <>
            <SectionTitleLineWithButton icon={mdiTableOff} title="No Children Registered" />
            <NotificationBar color="danger" icon={mdiTableOff}>
              <b>No data available.</b> Register a child to get started.
            </NotificationBar>
            <CardBox>
              <CardBoxComponentEmpty />
            </CardBox>
          </>
        )}
      </SectionMain>
    </>
  )
}

ParentDashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType={userType}>{page}</LayoutAuthenticated>
}

export default ParentDashboard
