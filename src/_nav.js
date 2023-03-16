import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilBold,
  cilPeople,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
const _nav = [
  {
    component: CNavItem,
    name: 'ኢጵላሣጵ',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'አዲስ',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'ማስታወቂያዎች',
    to: '/blogs',
    icon: <CIcon icon={cilBold} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ሁሉም ማስታወቂያዎች',
        to: '/blogs/all_blogs',
      },
      {
        component: CNavItem,
        name: 'አዲስ ማስታወቂያዎች ጨምር',
        to: '/blogs/add_blog',
      },
      // {
      //   component: CNavItem,
      //   name: 'ስተት ካለ ያስተካክሉ',
      //   to: '/blogs/update_blog',
      // },
    ],
  },


// letter parts
  {
    component: CNavGroup,
    name: 'ደብዳቤ',
    to: '/letter',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ሁሉም ደብዳቤወች',
        to: '/letter/all_letter',
      },
      {
        component: CNavItem,
        name: 'አዲስ ደብዳቤ ጻፍ',
        to: '/letter/add_letter',
      },
      {
        component: CNavItem,
        name: 'የጻፉትን ደብዳቤ ይላኩ',
        to: '/letter/send_letter',
      },
    ],
  },
// contract page icon
  {
    component: CNavGroup,
    name: 'ውል',
    to: '/contract',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'የግዥ ውል',
        to: '/contract/Purchase_contract',

        items: [
          {
            component: CNavItem,
            name: 'ሁሉም የግዥ ውል',
            to: '/contract/Purchase_contract/all_purchase_contract',
          },
          {
            component: CNavItem,
            name: 'አዲስ የግዥ ውል ጻፍ',
            to: '/contract/Purchase_contract/add_purchase_contract',
          },
          {
            component: CNavItem,
            name: 'የጻፉትን የግዥ ውል ይላኩ',
            to: '/contract/Purchase_contract/send_purchase_contract',
          },
        ],

      },
      {
        component: CNavGroup,
        name: 'የስራ ቅጥር ውል',
        to: '/contract/Employment_contract',

        items: [
          {
            component: CNavItem,
            name: 'ሁሉም የስራ ቅጥር ውል',
            to: '/contract/Employment_contract/all_employment_contract',
          },
          {
            component: CNavItem,
            name: 'አዲስ ቅጥር ውል ጻፍ',
            to: '/contract/Employment_contract/add_employment_contract',
          },
          {
            component: CNavItem,
            name: 'የጻፉትን የቅጥር ውል ይላኩ',
            to: '/contract/Employment_contract/send_employment_contract',
          },
        ],

      },
    ],
  },

  // users page
  {
    component: CNavGroup,
    name: 'ተጠቃሚዎች',
    to: '/users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ሁሉም ተጠቃሚዎች',
        to: '/users/users_list',
      },
      {
        component: CNavItem,
        name: 'አዲስ ተጠቃሚዎች',
        to: '/users/add_user',
      },
    ],
  },

  
  // vacancy page
  {
    component: CNavGroup,
    name: 'የስራ ማስታወቂያዎች',
    to: '/vacancy',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'ሁሉም ማስታወቂያዎች',
        to: '/vacancy/all_vacancy',
      },
      {
        component: CNavItem,
        name: 'አዲስ ማስታወቂያዎች ጨምር',
        to: '/vacancy/add_vacancy',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Error 888',
        to: '/404',
      },
    ],
  },
]
export default _nav
