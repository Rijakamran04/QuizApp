import {
  mdiMonitor,
  mdiTrophy,
  mdiChartBar, // If you prefer a chart icon for the leaderboard
  mdiAccountCircle,
  mdiBookOpen,
  mdiStore,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/quiz',
    icon: mdiBookOpen,
    label: 'Play Game',
  },
  {
    href: '/leaderboard',
    label: 'Leaderboard',
    icon: mdiChartBar,  // Updated to a chart icon
  },
  {
    href: '/rewards',
    label: 'Rewards',
    icon: mdiTrophy,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/shop',
    label: 'Shop',
    icon: mdiStore,
  },
  {
    label: ' Account Settings',
    icon: mdiAccountCircle,
    href: '/account-settings',
  },
]

export default menuAside
