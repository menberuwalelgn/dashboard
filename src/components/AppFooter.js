import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://eplusapp.et/" target="_blank" rel="noopener noreferrer">
        ኢጵላሣጵ
        </a>
        <span className="ms-1">&copy; 2023 Admin</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">ኢጵላሣጵ</span>
        <a href="https://eplusapp.et/" target="_blank" rel="noopener noreferrer">
        Copyright © 2015 e+App. All Rights Reserved.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
