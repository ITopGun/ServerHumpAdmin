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

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="10">
            <CCardGroup>
              <CCard className="text-blue py-5 d-md-down-none" style={{ width: '54%', backgroundColor:'transparent', borderLeft:0, borderTop:0, borderBottom:0 }}>
                <CCardBody className="text-center">
                  <div>
                    <h1>Server Hump</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                   
                  </div>
                </CCardBody>
              </CCard>

              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 style={{ float:'left', marginRight:10, color:'lightblue' }}>Login</h1> <h5 style={{marginLeft:20}}>THis page is restricted</h5>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Enter email" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12"  className="text-center">
                        <Link to="/dashboard">
                          <CButton color="info" className="px-4" style={{width:'100%'}}>Login</CButton>
                        </Link>
                      </CCol>
                    </CRow>

                    <CRow>
   
                      <CCol xs="12" className="text-center">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>

                    <CRow>
                      <CCol xs="12"  className="text-center">
                        <Link to="/register">
                          <CButton color="success" className="mt-3" active tabIndex={-1}>Create New Account </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
