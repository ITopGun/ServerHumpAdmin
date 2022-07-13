import React, { useEffect, useState, createRef ,lazy} from 'react'

import classNames from 'classnames'
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CProgress,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPagination
} from '@coreui/react'

import {
 
  CFormGroup,
 
  CLabel,
  CSelect
} from '@coreui/react'

import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

// import Table from "../../base/tables/Tables"

const Table = lazy(() => import('../../base/tables/Tables.js'))

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Colors = () => {

  const [success, setSuccess] = useState(false)
  const [currentPage, setCurrentPage] = useState(2)


  return (
    <>
    <div><h1 style={{color:'#2A87C5', float:'left', marginRight:20}}>My Products &amp; Services</h1> <h4 style={{paddingTop:14}}>o</h4></div>
      <hr></hr>
    <CModal 
        show={success} 
        onClose={() => setSuccess(!success)}
        color="success"
        cellPadding="1000"
      >
        <CModalHeader closeButton>
          <CModalTitle>+Create a New Account</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => setSuccess(!success)}>Do Something</CButton>{' '}
          <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
      <CRow>
      
        
      </CRow>
      <CRow>
        <CCol md="12">
          {/* <Table></Table> */}
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                <th style={{textAlign:'center'}}>Prodect/Service</th>
                {/* <th className="text-left">
                <div style={{fontSize:20, fontWeight:400, color:'black'}}><CIcon name="cil-people" />Your Active</div>
                  <div className="small text-muted">
                    Products/Service
                  </div>
                </th> */}
                <th style={{textAlign:'center'}}>Pricing</th>
                <th style={{textAlign:'center'}}>Date</th>
                <th style={{textAlign:'center'}}>Status</th>
                {/* <th className="text-center">Payment Method</th>
                <th>
                  <div style={{padding:2, background:'orange', borderRadius:5, width:70, color:'white', fontWeight:200, cursor:'pointer'}}>+View All</div>
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td className="text-center">
                  <div className="c-avatar">
                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td> */}
                
                <td>
                  <div style={{fontSize:16}}>Unlimited Free Hosting</div>
                  <div className="text-muted" style={{ color:'blue'}}>
                    <Link to="/list/detailinfo">
                      kinghamza.homp.in
                    </Link>
                  </div>
                </td>

                <td>
                  <div style={{fontSize:16}}>$0.00 USD</div>
                  <div className="text-muted" style={{ color:'blue'}}>
                    Free Account
                  </div>
                </td>
                
                <td className="text-center" style={{fontSize:15}}>
                  {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                  Monday, December 14th, 2020 (12:13)
                </td>
                {/* <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td> */}

              <td>
                  {/* <div className="clearfix">
                    <div className="float-left">
                      <strong>50%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                    </div>
                  </div>
                  <CProgress className="progress-xs" color="success" value="50" /> */}

                <Link to="/list/detailinfo">
                  <div style={{color:'green', fontWeight:'bold', padding:5, border:'2px solid grey', cursor:'pointer', borderRadius:10, textAlign:'center' , width:100}}> Active</div>
                </Link>
                  
                </td>
              </tr>
              

              
              
            </tbody>
          </table>

          
        </CCol>
      </CRow>

      <CRow style={{marginTop:20}}>
        <CCol md="6">
          <div style={{display:'flex'}}>
            <div style={{paddingTop:7, paddingRight:10}}>
            Show
            </div>
          <CFormGroup>
            <CSelect custom name="ccmonth" id="ccmonth">
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="2">15</option>
              <option value="2">20</option>
            </CSelect>
          </CFormGroup>
          <div style={{paddingTop:7, paddingLeft:10}}>
            entries
            </div>
          </div>
        </CCol>

        <CCol md="6">
          <div>
   

          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          </div>
        </CCol>
      </CRow>
      {/* <CCard>
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Grays
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <ThemeColor className="bg-gray-100">
              <h6>Gray 100 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-200">
              <h6>Gray 200 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-300">
              <h6>Gray 300 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-400">
              <h6>Gray 400 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-500">
              <h6>Gray 500 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-600">
              <h6>Gray 600 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-700">
              <h6>Gray 700 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-800">
              <h6>Gray 800 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-900">
              <h6>Gray 900 Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard> */}
    </>
  )
}

export default Colors
