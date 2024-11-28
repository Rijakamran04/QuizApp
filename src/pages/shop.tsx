import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../stores/hooks'
import { decrementPoints } from '../stores/mainSlice'
import { mdiCheckCircle, mdiCurrencyUsd, mdiStore } from '@mdi/js'
import CardBoxWidget from '../components/CardBox/Widget'
import Button from '../components/Button'
import SectionMain from '../components/Section/Main'
import Head from 'next/head'
import { getPageTitle } from '../config'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import { ReactElement } from 'react'
import Modal from '../components/Modal' // Import the Modal component
import Image from 'next/image';


const mockShopItems = [
  {
    id: 1,
    name: 'Golden Crown',
    price: 100,
    description: 'A shiny golden crown to make your avatar royal.',
    image: '/images/golden-crown.svg',
    purchased: false,
  },
  {
    id: 2,
    name: 'Silver Sword',
    price: 50,
    description: 'A sharp sword to complement your avatar.',
    image: '/images/silver-sword.svg',
    purchased: false,
  },
  {
    id: 3,
    name: 'Glasses',
    price: 100,
    description: 'A good looking glasses to complement your avatar',
    image: '/images/glasses.svg',
    purchased: false,
  }
  
]

export default function ShopPage() {
  const userPoints = useAppSelector((state) => state.main.userPoints)
  const dispatch = useAppDispatch()
  const [items, setItems] = useState(mockShopItems)
  const [isModalOpen, setIsModalOpen] = useState(false)  // State to control modal visibility
  const [modalMessage, setModalMessage] = useState('')    // State to store the modal message

  const handlePurchase = (itemId: number) => {
    const item = items.find((i) => i.id === itemId)
    if (!item || item.purchased || userPoints < item.price) return
    dispatch(decrementPoints(item.price))
    setItems(
      items.map((i) =>
        i.id === itemId ? { ...i, purchased: true } : i
      )
    )

    // Open the modal with the success message
    setModalMessage(`You purchased ${item.name}!`)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Shop')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiStore} title="Shop" />

        <div className="container mx-auto p-6 " >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 ">
            {/* Available Points */}
            <CardBoxWidget
              icon={mdiCurrencyUsd}
              iconColor="success"
              number={userPoints}
              label="Available Points"
            />
            {/* Purchased Items */}
            <CardBoxWidget
              icon={mdiCheckCircle}
              iconColor="info"
              number={items.filter((i) => i.purchased).length}
              label="Items Purchased"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 ">
            {items.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg p-4 bg-white dark:bg-gray-800 dark:text-white shadow-md transition-all ${
                  item.purchased ? 'opacity-70' : 'hover:scale-105'
                }`}
              >
               <div className="w-full h-48 object-cover mb-4 rounded-md overflow-hidden">
  <Image
    src={item.image}
    alt={item.name}
    layout="responsive" // Dynamically handles width & height
    width={300}
    height={192}
  />
</div>


                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-green-500">{item.price} points</p>
                  <Button
                    label={item.purchased ? 'Purchased' : 'Buy Now'}
                    onClick={() => handlePurchase(item.id)}
                    color={item.purchased ? 'white' : 'success'}
                    disabled={item.purchased || userPoints < item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionMain>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} message={modalMessage} onClose={closeModal} />
    </>
  )
}

// Wrap the page with LayoutAuthenticated to include the navbar
ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}
