import React, { useContext, useRef } from "react"
import { withRouter } from "react-router"
import { APIErrorContext } from 'layouts/Admin'
import ReactBSAlert from "react-bootstrap-sweetalert"
import ClientSelect from "components/Helpers/ClientSelect"
import { logAPI } from "api/DNS"
import { deviceAPI } from "api/Device"

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Table,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row, Col
} from "reactstrap"

export class DNSLogHistoryList extends React.Component {
  static contextType = APIErrorContext;
  state = { list: [], listAll: [], 
    clients: [], filterIPs: [], selectedIPs: [], filterText: '',
    showAlert: false, alertText: '' }

  constructor(props) {
    super(props)

    this.state.filterIPs = props.ips || []
    this.state.alertText = ""

    this.handleIPChange = this.handleIPChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.triggerAlert = this.triggerAlert.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
  }

  async componentDidMount() {
    this.getClients()
    this.refreshList(this.state.filterIPs)
  }

  async getClients() {
    try {
      let devices = await deviceAPI.list()
      let clients = Object.values(devices)
        .filter(d => d.RecentIP.length)
        .map(d => {return {label: d.Name, value: d.RecentIP}})
      
        clients.push({label:"testDev1", value: "1.2.3.4"})
        clients.push({label:"rpi4", value: "11.23.32.234"})

        let selectedIPs = []
        for (let c of clients) {
          if (this.state.filterIPs.includes(c.value)) {
            selectedIPs.push(c)
          }
        }
        this.setState({selectedIPs})

      this.setState({clients})
    } catch(error) {
      this.context.reportError(error.message)
    }
  }
 
  async refreshList(ips) {
    if (!ips.length) {
      return
    }

    console.log('[dnslog] fetchin dns log list', ips)

    let list = []
    for (let ip of ips) {
      try {
        let _list = await logAPI.history(ip)
        _list.reverse()
        list = list.concat(_list)
      } catch (error) {
        let msg = "API Failure: " + error.message
        if (error.message == '404') {
          msg = `No DNS query history for ${ip}`
        }

        this.context.reportError(msg)
      }
    }

    this.setState({list})
    this.setState({listAll: list})
  }

  filterList(filterText) {
    let list = this.state.listAll
    
    if (filterText.length) {
      list = list.filter(item => {
        let match = false
        
        try {
          match = match || item.FirstName.includes(filterText)
          match = match || item.FirstAnswer.includes(filterText)
          match = match || item.Q.filter(r => r.Name.includes(filterText)).length
        } catch(err) {
          match = false
        }
        
        return match
      })
    }

    this.setState({list})
  }

  handleIPChange(selectedIPs) {
    this.setState({selectedIPs})

    let ips = selectedIPs.map(item => item.value)

    // update url to include ips
    if (ips.length) {
      this.props.history.push(ips.join(','))
    }

    this.refreshList(ips)
  }

  handleChange(event) {
    let filterText = event.target.value

    this.setState({filterText})

    this.filterList(filterText)
  }

  triggerAlert(index) {
    this.setState({alertText: JSON.stringify(this.state.list[index], null, "  ")})
    this.setState({showAlert: true})
  }

  closeAlert() {
    this.setState({showAlert: false})
  }

  render() {
    
    const prettyType = (type) => {
      let keys = {
        'NOERROR': 'text-success',
        'NODATA': 'text-warning',
        'OTHERERROR': 'text-danger',
        'NXDOMAIN': 'text-danger'
      }

      let className = keys[type] || 'text-danger'
      return (<span className={className}>{type}</span>)
    }
    
    return (
      <>
          <ReactBSAlert
            type="custom"
            show={this.state.showAlert}
            onConfirm={this.closeAlert}
            onCancel={this.closeAlert}
            title="DNS query"
            confirmBtnBsStyle="info"
            cancelBtnBsStyle="danger"
            openAnim={false}
            closeOnClickOutside={true}
            btnSize=""
          >
            <pre style={{"text-align":"left", "font-size": "0.65em"}}>{this.state.alertText}</pre>
            </ReactBSAlert>

        <Card>
          <CardHeader>

            <CardTitle tag="h4">{this.state.filterIPs.join(',')} DNS logs</CardTitle>

            <Row>

            <Col md="4">

              <FormGroup>
                <Label>Client</Label>
               
                <ClientSelect isMulti={true} options={this.state.clients} defaultValue={this.state.selectedIPs} onChange={this.handleIPChange} />


              </FormGroup>

            </Col>
            <Col md="8">
              <FormGroup>
                  <Label>Search</Label>
                  <InputGroup>
                  <Input type="text" name="filterText" placeholder="Filter domain..." value={this.state.filterText} onChange={this.handleChange} />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                  </InputGroup>
                 
            
              </FormGroup>
              </Col>
            </Row>


          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th width="15%">Timestamp</th>
                  <th width="15%">Type</th>
                  <th>Domain</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.map((item, index) => (
                    <tr key={item.Timestamp}>
                      <td style={{"whiteSpace": "nowrap"}}>{new Date(item.Timestamp).toISOString().replace(/T|(\..*)/g, ' ').trim()}</td>
                      <td>{prettyType(item.Type)}</td>
                      <td>{item.FirstName}</td>
                      <td>
                        <a target="#" onClick={e => this.triggerAlert(index)}>{item.FirstAnswer}</a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </>
    )
  }
}

const DNSLogHistoryListWithRouter = withRouter(DNSLogHistoryList)
export default DNSLogHistoryListWithRouter