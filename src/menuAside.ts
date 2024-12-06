// src/menuAside.ts
import { 
  mdiMonitor,
  mdiTrophy,
  mdiChartBar,
  mdiAccountCircle,
  mdiBookOpen,
  mdiStore,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

// Define a function that takes `userType` as a parameter
export const getMenuAside = (userType: 'student' | 'parent'): MenuAsideItem[] => {
  // Parent-specific menu items
  if (userType === 'parent') {
    return [
     
      {
        href: '/parentdashboard',
        icon: mdiMonitor,
        label: 'Dashboard',
      },
      {
        href: '/plans',
        icon: mdiMonitor,
        label: 'Subscriptions',
      },
    
      {
        label: 'Account Settings',
        icon: mdiAccountCircle,
        href: '/account-settings',
      },
      
    ];
  }

  // Student-specific menu items
  if (userType === 'student') {
    return [
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
        href: '/rewards',
        label: 'Rewards',
        icon: mdiTrophy,
      },
      {
        href: '/headToHeadLeaderboard',
        label: 'Leaderboard',
        icon: mdiChartBar,
      },
      
      {
        href: '/shop',
        label: 'Shop',
        icon: mdiStore,
      },
      {
        href: '/profile',
        label: 'Profile',
        icon: mdiAccountCircle,
      },
      {
        label: 'Account Settings',
        icon: mdiAccountCircle,
        href: '/account-settings',
      },
      
    ];
  }

};
 export default getMenuAside;
