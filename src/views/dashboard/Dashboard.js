import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/aman.jpg'
import avatar2 from 'src/assets/images/avatars/nardos.jpg'
import avatar3 from 'src/assets/images/avatars/legesse.jpg'
import avatar4 from 'src/assets/images/avatars/metages.jpg'
import avatar5 from 'src/assets/images/avatars/eldana.jpg'
import avatar6 from 'src/assets/images/avatars/menberu.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressGroupExample1 = [
    { title: 'ሰኞ', value1: 84, value2: 28 },
    { title: 'ማክሰኞ', value1: 89, value2: 39 },
    { title: 'ዕሮብ', value1: 69, value2: 27 },
    { title: 'ሁሙስ', value1: 93, value2: 41 },
    { title: 'አርብ', value1: 72, value2: 33 },
    { title: 'ቅዳሜ', value1: 83, value2: 42 },
    { title: 'እሁድ', value1: 69, value2: 9 },
  ]

  const progressGroupExample2 = [
    { title: 'ወንድ', icon: cilUser, value: 62 },
    { title: 'ሴት', icon: cilUserFemale, value: 57 },
  ]

  const progressGroupExample3 = [
    { title: 'ጎግል ሰርች', icon: cibGoogle, percent: 76, value: '1,835' },
    { title: 'ፌስቡክ', icon: cibFacebook, percent: 42, value: '827' },
    { title: 'ትዊተር', icon: cibTwitter, percent: 31, value: '471' },
    { title: 'ሊንክዲን', icon: cibLinkedin, percent: 27, value: '392' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'አማን ወርቁ',
        new: true,
        registered: 'ይካቲት 23, 2015',
      },
      country: { name: 'ኢትዮጵያ', flag: cifUs },
      usage: {
        value: 91,
        period: 'መስከረም 01, 2015 - ጥር 19, 2015',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'ናርዶስ አለሙ ',
        new: false,
        registered: 'ይካቲት 25, 2015',
      },
      country: { name: 'ኢትዮጵያ', flag: cifBr },
      usage: {
        value: 82,
        period: 'መስከረም 09, 2015 - ጥር 27, 2015',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'ለገሰ ያየህ', new: true, 
      registered: 'ይካቲት 23, 2015' },
      country: { name: 'ኢትዮጵያ', flag: cifIn },
      usage: {
        value: 74,
        period: 'መስከረም 01, 2015 - ጥር 12, 2015',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'መታገስ ማሩ', new: true, registered: 'ይካቲት 23, 2015' },
      country: { name: 'ኢትዮጵያ', flag: cifFr },
      usage: {
        value: 28,
        period: 'መስከረም 29, 2015 - ጥር 23, 2015',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'ኤልዳና አዲስ',
        new: true,
        registered: 'ይካቲት 26, 2015',
      },
      country: { name: 'ኢትዮጵያ', flag: cifEs },
      usage: {
        value: 32,
        period: 'መስከረም 07, 2015 - ጥር 30, 2015',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'መንበሩ',
        new: true,
        registered: 'ይካቲት 21, 2015',
      },
      country: { name: 'ኢትዮጵያ', flag: cifPl },
      usage: {
        value: 53,
        period: 'መስከረም 02, 2015 - ጥር 17, 2015',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>ኢጵላሣጵ {' & '} እንቅስቃሴዎቹ</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">አዲስ ተጠቃሚ</div>
                        <div className="fs-5 fw-semibold">623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">የቆዩ ተጠቃሚዎች</div>
                        <div className="fs-5 fw-semibold">3,843</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">ኢጵላሣጵን የጎበኙ</div>
                        <div className="fs-5 fw-semibold">8,194</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">ጎግል ሰርች</div>
                        <div className="fs-5 fw-semibold">31,093</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Role</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'አዲስ' : 'አዲስ'}</span> | የተመዘገበበት ቀን:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <strong>user</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
