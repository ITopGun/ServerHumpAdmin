import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Table = lazy(() => import('../base/tables/Tables.js'))

const Dashboard = () => {
  return (
    <>
      
      <div><h1 style={{color:'#2A87C5'}}>Welcome Back, Hamza</h1></div>
      <hr></hr>
      <WidgetsBrand withCharts/>
      {/* <Table></Table> */}








      {/* <WidgetsDropdown /> */}
       {/* <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>  */}

     

     <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                </CInputGroupPrepend>
                <CInput type="text" placeholder="Enter a question here to search our knowledgebase for answers..." autoComplete="email" />
              </CInputGroup>
            </CCardHeader>
            <CCardBody>
              {/* <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Clients</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Recurring Clients</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Tuesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Wednesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Friday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Saturday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      New clients
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Recurring clients
                    </small>
                  </div>
                </CCol> 

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Pageviews</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Organic</small>
                        <br />
                        <strong className="h4">49,123</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="43" />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user-female" />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="37" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-globe-alt" />
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="56" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-facebook" className="progress-group-icon" />
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-twitter" className="progress-group-icon" />
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cib-linkedin" className="progress-group-icon" />
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8" />
                    </div>
                  </div>
                  <div className="divider text-center">
                    <CButton color="link" size="sm" className="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div>

                </CCol>
              </CRow> */}

            <CRow>
              <CCol md="6">
              <br />

                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                      {/* <th>User</th> */}
                      <th className="text-left">
                      <div style={{fontSize:20, fontWeight:400, color:'black'}}><CIcon name="cil-people" />Your Active</div>
                        <div className="small text-muted">
                          Products/Service
                        </div>
                      </th>
                      {/* <th>Usage</th> */}
                      {/* <th className="text-center">Payment Method</th> */}
                      <th>
                        <div style={{padding:2, background:'orange', borderRadius:5, width:70, color:'white', fontWeight:200, cursor:'pointer'}}>+View All</div>
                      </th>
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
                        <div>Free Hosting - Unlimited Free Hosting</div>
                        <div className="text-muted">
                          kinghamza.homp.in
                        </div>
                      </td>
                      {/* <td className="text-center">
                        <CIcon height={25} name="cif-us" title="us" id="us" />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                        <CIcon height={25} name="cib-cc-mastercard" />
                      </td> */}
                      <td>
                        {/* <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong> */}
                      </td>
                    </tr>
                   
                    
                  </tbody>
                </table>
              </CCol>

              <CCol md="6">
              <br />

                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      {/* <th className="text-center"><CIcon name="cil-people" /></th> */}
                      {/* <th>User</th> */}
                      <th className="text-left">
                      <div style={{fontSize:20, fontWeight:400, color:'black'}}><CIcon name="cil-people" />Recent Support Tickets</div>
                       
                      </th>
                      {/* <th>Usage</th> */}
                      {/* <th className="text-center">Payment Method</th> */}
                      <th>
                        <div style={{padding:5, background:'#00ACED', borderRadius:5, width:130, color:'white', fontWeight:200, cursor:'pointer'}}>+Open New Tickets</div>
                      </th>
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
                        <div style={{display:'flex'}}>#768130 - Second Ticket <div style={{padding:4, background:'#FF6600', color:'white', marginLeft:10}}>Customer-Replay</div></div>
                        <div className="text-muted">
                          Last Updated: Monday, December 14th, 2020 (12:13)
                        </div>
                      </td>
                      {/* <td className="text-center">
                        <CIcon height={25} name="cif-us" title="us" id="us" />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                        <CIcon height={25} name="cib-cc-mastercard" />
                      </td> */}
                      <td>
                        {/* <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong> */}
                      </td>
                    </tr>

                    <tr>
                      {/* <td className="text-center">
                        <div className="c-avatar">
                          <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                          <span className="c-avatar-status bg-success"></span>
                        </div>
                      </td> */}
                      <td>
                        <div style={{display:'flex'}}>#293730 - First Demo Ticket <div style={{padding:4, background:'#779500', color:'white', marginLeft:10}}>Open</div></div>
                        <div className="text-muted">
                          Last Updated: Monday, December 14th, 2020 (12:08)
                        </div>
                      </td>
                      {/* <td className="text-center">
                        <CIcon height={25} name="cif-us" title="us" id="us" />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                        <CIcon height={25} name="cib-cc-mastercard" />
                      </td> */}
                      <td>
                        {/* <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong> */}
                      </td>
                    </tr>
                   
                    
                  </tbody>
                </table>
              </CCol>
            </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> 
    </>
  )
}

export default Dashboard
