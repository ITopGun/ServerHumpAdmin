import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import {
  CInput,
  CButton,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInputRadio,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {
 
  CFormGroup,
 
  CLabel,
  CSelect
} from '@coreui/react'

const Typography = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <h1>Choose a Domain...</h1>
          <DocsLink href="https://coreui.io/docs/content/typography/"/>
        </CCardHeader>
        <CCardBody>
          <p>
            
            
            </p>
          
          <CRow>
            <CCol md="12">
              <CFormGroup variant="checkbox">
                <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                <CLabel variant="checkbox" htmlFor="radio1">Use a subdomain from ServerHump</CLabel>
              </CFormGroup>
            </CCol>
          </CRow>
          <p></p>
          <CRow>
            <CCol md="4">
              <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      http://
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput type="text" placeholder="your name" autoComplete="username" />
                </CInputGroup>
            </CCol>
            <CCol md="4">
              <CFormGroup>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">.homp.in</option>
                  <option value="2">.homp.in</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol md="4">
              <CButton color="info">Check</CButton>
            </CCol>
          </CRow>

          <CRow>
            <CCol md="12">
              <CFormGroup variant="checkbox">
                <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                <CLabel variant="checkbox" htmlFor="radio1">Enter a Custome Domain(www.example.com)</CLabel>
              </CFormGroup>
            </CCol>
          </CRow>

          <CRow>
            <CCol md="3"></CCol>
            <CCol md="3">
            </CCol>
            <CCol md="3">
            </CCol>
            <CCol md="3">
            <CButton color="success" onClick={()=>{
              console.log("Successfully submitted")
            }}>Submit</CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
