// src/Layouts/Authenticated.tsx
import React, { ReactNode, useEffect, useState } from 'react'
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import { useRouter } from 'next/router'
import menuNavBar from '../menuNavBar'
import { getMenuAside } from '../menuAside'  // Import the getMenuAside function
import Icon from '../components/Icon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBar/Item/Plain'
import AsideMenu from '../components/AsideMenu'
import FormField from '../components/Form/Field'
import { Field, Form, Formik } from 'formik'

type Props = {
  children: ReactNode
  userType: 'student' | 'parent'  // Accept userType as a prop
}

export default function LayoutAuthenticated({ children, userType }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const router = useRouter()

  useEffect(() => {
    // Handle side menu state on route change
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false)
      setIsAsideLgActive(false)
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router.events])

  useEffect(() => {
    // Automatically set dark mode based on user or system preferences
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', prefersDarkMode)
  }, [])

  const layoutAsidePadding = 'xl:pl-60'

  const menu = getMenuAside(userType)  // Get the menu based on userType

  return (
    <div className="flex flex-col min-h-screen overflow-hidden lg:overflow-visible">
      <div
        className={`${
          layoutAsidePadding
        } pt-14 flex-grow w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <Icon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <Icon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain useMargin>
            <Formik
              initialValues={{
                search: '',
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  <Field name="search" placeholder="Search" />
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain>
        </NavBar>

        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menu}  // Pass the dynamically generated menu
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />

        {/* Main content area */}
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  )
}
