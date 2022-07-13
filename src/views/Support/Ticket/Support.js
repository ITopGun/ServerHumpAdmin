import React, { useEffect, useState, createRef ,lazy} from 'react'

import classNames from 'classnames'
import Files from 'react-files';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CProgress,
  CTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPagination,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText
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
  const handleClick = (e) => {

    var codeString = "";

    codeString += "<tr>";
    codeString += "<td className='text-center' style={{ paddingLeft:50 }}><div style={{ display:'flex'}}><div><div className='c-avatar'><CIcon name='cil-user' style={{ width:100, height:50}}></CIcon><span className='c-avatar-status bg-success'></span></div><div className='text-muted' style={{ color:'blue'}}>All replyes</div></div><div><div style={{ fontStyle:'italic', color:'black', fontSize:20}}>Hamza Hussain</div><div className='text-muted' style={{ color:'blue', textAlign:'left'}}>Client</div></div></div></td>";
    codeString += "<td></td><td></td>";
    codeString += "<td className='text-center' style={{fontSize:15}}>Monday, December 14th, 2020 (12:13)</td></tr>";
    
    document.getElementById("list").innerHTML += codeString;

  };

  return (
    <>
    <div><h1 style={{color:'#2A87C5', float:'left', marginRight:20}}>My Support Tickets</h1> <h4 style={{paddingTop:14}}>Your Ticket History</h4></div>
      <hr></hr>
      <CModal 
        show={success} 
        onClose={() => setSuccess(!success)}
        color="success"
        width="600"
        // cellPadding="1000"
      >
        <CModalHeader closeButton>
          <CModalTitle>+Create New Ticket</CModalTitle>
        </CModalHeader>
        <CModalBody>
         
         <CRow>
           <CCol md="6">Data like Sales</CCol>
         </CRow>
         <br></br>
         <CRow>
           <CCol md="12">
              <CFormGroup>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">Open</option>
                  <option value="2">Closed</option>
                </CSelect>
              </CFormGroup>
           </CCol>
         </CRow>
         
         <CRow>
           <CCol md="6">Input the Sales Name</CCol>
         </CRow>
         <br></br>

         <CRow>
           <CCol md="12">
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                </CInputGroupPrepend>
                <CInput type="text" placeholder="Subject" autoComplete="username" />
              </CInputGroup>
           </CCol>
         </CRow>

         <CRow>
           <CCol md="12">
           <CTextarea 
              name="textarea-input" 
              id="textarea-input" 
              rows="9"
              placeholder="Content..." 
            />
           </CCol>
          
         </CRow>
        <br></br>
  
         <CRow>
           <CCol md="12">
             <CRow>
               <CCol md="12">
               <h6>Attachments</h6>
               </CCol>
             </CRow>
                <CRow>
                  <CCol md="8">
                    <div style={{border:'1px solid', height:30}}>
                      <Files
                          className='files-dropzone'
                          accepts={['image/png', '.pdf', 'audio/*']}
                          multiple
                          maxFiles={3}
                          maxFileSize={10000000}
                          minFileSize={0}
                          clickable
                        >
                          No file selected  
                        </Files>
                    </div>
                  </CCol>
                  <CCol md="4">
                    <CButton color="secondary" onClick={() => setSuccess(!success)}>Browse</CButton>
                  </CCol>
                </CRow>
           </CCol>
           
         </CRow>
         
        </CModalBody>
        <CModalFooter>
        <CRow>
           <CCol md="12" style={{textAlign:'right'}}>
          <CButton color="secondary" onClick={() => setSuccess(!success)}>Save changes</CButton>
           </CCol>
         </CRow>
        </CModalFooter>
      </CModal>


      {/* //////////////////56555555555555555555555555555555///// */}
      <CRow>
        <CCol md="12" style={{textAlign:'right' }}>
          <CButton color="success" onClick={() => setSuccess(!success)}>Create Ticket</CButton>
        </CCol>
      </CRow>
      <br></br>
      <CRow>
        <CCol md="12">
          {/* <Table></Table> */}
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                <th style={{textAlign:'center'}}>Department</th>
                {/* <th className="text-left">
                <div style={{fontSize:20, fontWeight:400, color:'black'}}><CIcon name="cil-people" />Your Active</div>
                  <div className="small text-muted">
                    Products/Service
                  </div>
                </th> */}
                <th style={{textAlign:'center'}}>Subject</th>
                <th style={{textAlign:'center'}}>Status</th>
                <th style={{textAlign:'center'}}>Last Updated</th>
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
                
                <td className="text-center" style={{fontSize:20}}>
                  General Enqueries
                </td>

                <td>
                  <div style={{ fontStyle:'italic', color:'lightblue', fontSize:20}}>#768130</div>
                  <div className="text-muted" style={{ color:'blue'}}>
                    Seconde Ticket
                  </div>
                </td>
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

                <Link to="/theme/viewticket">
                  <div style={{color:'orange', fontWeight:'bold', padding:5, border:'2px solid grey', cursor:'pointer', borderRadius:10, textAlign:'center' }}> Customer-Reply</div>
                </Link>
                  
                </td>
                <td className="text-center" style={{fontSize:15}}>
                  {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                  Monday, December 14th, 2020 (12:13)
                </td>
                {/* <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td> */}
              </tr>
              

              <tr>
                {/* <td className="text-center">
                  <div className="c-avatar">
                    <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td> */}
                
                <td className="text-center" style={{fontSize:20}}>
                  General Enqueries
                </td>

                <td>
                  <div style={{ fontStyle:'italic', color:'lightblue', fontSize:20}}>#293730</div>
                  <div className="text-muted" style={{ color:'blue'}}>
                    First Demo Ticket
                  </div>
                </td>
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

                <Link to="/theme/viewticket">
                  <div style={{color:'green', fontWeight:'bold', padding:5, border:'2px solid grey', cursor:'pointer', borderRadius:10, textAlign:'center' }}> Open</div>
                </Link>
                  
                </td>
                <td className="text-center" style={{fontSize:15}}>
                  {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
                  Monday, December 14th, 2020 (12:08)
                </td>
                {/* <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td> */}
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
