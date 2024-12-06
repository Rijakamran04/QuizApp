// pages/index.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to signup page
    router.push('/signup')
  }, [router])

  return <p>Redirecting to signup...</p>;
  // You can return a loading spinner or message here if needed
}

export default HomePage
