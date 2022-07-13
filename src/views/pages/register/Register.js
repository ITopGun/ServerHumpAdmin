import React from 'react'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12">
            <CCardGroup>
              <CCard className="text-blue py-5 d-md-down-none" style={{ width: '54%', backgroundColor:'transparent', border:0, boxShadow:10}}>
                <CCardBody className="text-center">
                  <div style={{ marginTop:200}}>
                    <h1>Server Hump</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                  
                  </div>
                </CCardBody>
              </CCard>

              <CCard className="mx-4" style={{ borderLeft:1}}>
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-muted">Create an account with us . . .</p>

                  <CRow className="justify-content-center" style={{ marginBottom:10}}>
                    Personal information
                  </CRow>
                  <CRow>
                    <CCol md="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="First Name" autoComplete="username" />
                      </CInputGroup>
                    </CCol>

                    <CCol md="6"  className="justify-content-center" >
                      <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="Last name" autoComplete="username" />
                        </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow  className="justify-content-center" >
                    <CCol md="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                          @
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email Address" autoComplete="username" />
                      </CInputGroup>
                    </CCol>

                    <CCol md="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Phone Number" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  

                  <CRow className="justify-content-center" style={{ marginBottom:10}}>
                    Billing Address
                  </CRow>

                  <CRow  className="justify-content-center" >
                    <CCol md="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Conpany Name(Optonal)" autoComplete="new-password" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Street Address" autoComplete="new-password" />
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Street Address 2" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                    
                  </CRow>
                    

                  <CRow className="justify-content-center" >
                    <CCol md="4">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                          @
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="City" autoComplete="username" />
                      </CInputGroup>
                    </CCol>

                    <CCol md="4">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="-" autoComplete="email" />
                      </CInputGroup>
                    </CCol>

                    <CCol md="4">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Post Code" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                  </CRow>


                  <CRow>
                    <CCol md="12">
                      <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>@</CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput type="text" placeholder="India" autoComplete="email" />
                        </CInputGroup>
                    </CCol>
                  </CRow>


                  <CRow className="justify-content-center" style={{ marginBottom:10}}>
                    Account Security
                  </CRow>

                  <CRow  className="justify-content-center" >
                    <CCol md="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                          @
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Password" autoComplete="username" />
                      </CInputGroup>
                    </CCol>

                    <CCol md="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email Address" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  

                
                    <CButton color="success" block>Register</CButton>
                  </CForm>

                  <CRow>
                  <CCol md="4">
                      
                    </CCol>
                    <CCol md="4">
                     
                    </CCol>
                    <CCol md="4" style={{marginTop:20}}>
                      <Link to="/">
                          <h5>I have account.</h5>
                      </Link>
                    </CCol>
                  </CRow>
                </CCardBody>
                
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
