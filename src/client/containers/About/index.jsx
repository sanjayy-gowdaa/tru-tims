import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showModal, hideModal } from 'actions/common'

import helpers from 'lib/helpers'

class AboutContainer extends React.Component {
  componentDidMount () {
    helpers.setupScrollers()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    helpers.resizeAll()
  }

  render () {
    return (
      <div className='nopadding page-content'>
        <div className='uk-grid full-height scrollable' style={{ padding: '0 15px' }}>
          <div className='uk-width-1-1' style={{ padding: '25px 40px' }}>
            <h4 style={{ marginBottom: 20, color: '#2c3e50' }}>About Keptel TIMS</h4>
            <div style={{ paddingLeft: 0 }}>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: 20 }}>
                <strong>Keptel TIMS (Ticket & Issue Management System)</strong> is an enterprise-grade, web-based platform developed by Keptel to streamline internal support operations across IT, HR, Facilities, and other business units.
                It provides a centralized system for ticket creation, assignment, tracking, and reporting, designed to improve service efficiency and transparency within large organizations.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: 20 }}>
                Keptel TIMS enhances collaboration across departments, ensures SLA compliance, and provides detailed analytics for performance optimization.
              </p>

              <h5 style={{ marginTop: 30, marginBottom: 15, color: '#2c3e50' }}>Version</h5>
              <p style={{ fontSize: '13px', marginBottom: 20 }}>
                Keptel TIMS version 1.0.0<br />
                Copyright &copy;2025 Keptel
              </p>

              <h5 style={{ marginTop: 30, marginBottom: 15, color: '#2c3e50' }}>Open-Source Attribution</h5>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 10 }}>
                This project includes modified components from the open-source project <strong>Trudesk</strong>.
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 10 }}>
                This product includes software originally developed by:<br />
                <strong>Trudesk, Inc.</strong> (Chris Brame)<br />
                Copyright &copy;2014–2022 Trudesk, Inc.<br />
                Licensed under the Apache License, Version 2.0.
              </p>
              <p style={{ fontSize: '13px', marginBottom: 20 }}>
                The original Trudesk source is available at:{' '}
                <a href='https://github.com/polonel/trudesk' target='_blank' rel={'noreferrer'}>
                  https://github.com/polonel/trudesk
                </a>
              </p>

              <h5 style={{ marginTop: 30, marginBottom: 15, color: '#2c3e50' }}>License</h5>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 10 }}>
                Keptel TIMS is distributed under the Apache License, Version 2.0.
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 20 }}>
                You may obtain a copy of the license at:{' '}
                <a href='http://www.apache.org/licenses/LICENSE-2.0' rel={'noreferrer'} target='_blank'>
                  http://www.apache.org/licenses/LICENSE-2.0
                </a>
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 20 }}>
                Unless required by applicable law or agreed to in writing, software distributed under the License is
                distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
                or implied.
              </p>

              <h5 style={{ marginTop: 30, marginBottom: 15, color: '#2c3e50' }}>Third-Party Libraries Used</h5>
              <p style={{ fontSize: '13px', color: '#55616e', marginBottom: 10 }}>
                Keptel TIMS includes the following third-party plugins:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  fontSize: '11px',
                  color: '#55616e',
                  padding: 0,
                  margin: 0
                }}
              >
                <li>
                  Chosen -{' '}
                  <a href='https://harvesthq.github.io/chosen/' target='_blank' rel={'noreferrer'}>
                    https://harvesthq.github.io/chosen/
                  </a>
                </li>
                <li>
                  D3 -{' '}
                  <a href='https://d3js.org/' target='_blank' rel={'noreferrer'}>
                    https://d3js.org/
                  </a>
                </li>
                <li>
                  Datatables -{' '}
                  <a href='https://www.datatables.net/' target='_blank' rel={'noreferrer'}>
                    https://www.datatables.net/
                  </a>
                </li>
                <li>
                  Easy Pie Chart -{' '}
                  <a href='https://rendro.github.io/easy-pie-chart/' target='_blank' rel={'noreferrer'}>
                    https://rendro.github.io/easy-pie-chart/
                  </a>
                </li>
                <li>
                  jQuery -{' '}
                  <a href='https://jquery.com/' target='_blank' rel={'noreferrer'}>
                    https://jquery.com/
                  </a>
                </li>
                <li>
                  Js-cookie -{' '}
                  <a href='https://github.com/js-cookie/js-cookie' target='_blank' rel={'noreferrer'}>
                    https://github.com/js-cookie/js-cookie
                  </a>
                </li>
                <li>
                  Lodash -{' '}
                  <a href='http://lodash.com/' target='_blank' rel={'noreferrer'}>
                    http://lodash.com/
                  </a>
                </li>
                <li>
                  MetricsGraphics.js -{' '}
                  <a href='http://metricsgraphicsjs.org/' target='_blank' rel={'noreferrer'}>
                    http://metricsgraphicsjs.org/
                  </a>
                </li>
                <li>
                  PACE -{' '}
                  <a href='https://codebyzach.github.io/pace/' target='_blank' rel={'noreferrer'}>
                    https://codebyzach.github.io/pace/
                  </a>
                </li>
                <li>
                  Selectize.js -{' '}
                  <a href='http://selectize.github.io/selectize.js/' target='_blank' rel={'noreferrer'}>
                    http://selectize.github.io/selectize.js/
                  </a>
                </li>
                <li>
                  Snackbar -{' '}
                  <a href='http://www.polonel.com/snackbar' target='_blank' rel={'noreferrer'}>
                    http://www.polonel.com/snackbar
                  </a>
                </li>
                <li>
                  Turndown -{' '}
                  <a href='https://github.com/domchristie/to-markdown' target='_blank' rel={'noreferrer'}>
                    https://github.com/domchristie/to-markdown
                  </a>
                </li>
                <li>
                  UIKit (customized) -{' '}
                  <a href='http://getuikit.com' target='_blank' rel={'noreferrer'}>
                    http://getuikit.com
                  </a>
                </li>
                <li>
                  Webpack -{' '}
                  <a href='https://webpack.github.io/' target='_blank' rel={'noreferrer'}>
                    https://webpack.github.io/
                  </a>
                </li>
              </ul>

              <h5 style={{ marginTop: 30, marginBottom: 15, color: '#2c3e50' }}>Acknowledgment</h5>
              <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: 20 }}>
                We acknowledge and thank Trudesk, Inc. and the open-source community for providing the foundation on which Keptel TIMS was enhanced and built.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AboutContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  viewdata: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  viewdata: state.common.viewdata
})

export default connect(mapStateToProps, { showModal, hideModal })(AboutContainer)
