import React, { useContext } from 'react'
import { getDNSBlocklists, updateDNSBlocklist, deleteDNSBlocklist } from "components/Helpers/Api.js"
import Switch from "react-bootstrap-switch";
import { APIErrorContext } from 'layouts/Admin.js'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

export default class DNSBlocklist extends React.Component {
  static contextType = APIErrorContext;
  state = { list: [] };

  constructor(props) {
    super(props)

    this.state.list = props.blocklists

    this.handleItemSwitch = this.handleItemSwitch.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }

  /*async componentDidMount() {
    this.setState({list})
  }*/

  async handleItemSwitch(item, value) {
    item.Enabled = value
    const list = this.state.list.map(_item => {
      if (_item.URI == item.URI) {
        _item.Enabled = item.Enabled
      }

      return _item
    })

    this.setState({list})
    await updateDNSBlocklist(item)
    this.props.notifyChange('blocklists')
  }

  async deleteListItem(item) {
    await deleteDNSBlocklist(item)
    this.props.notifyChange('blocklists')
  }

  render() {
    const title = this.props.title || 'DNS blocklists'
    const toggleStatusModal = () => alert('TODO: show modal with blocked domains')

    return (
      <Card>
        <CardHeader>
          <Button className="pull-right btn-round" color="primary" outline onClick={this.props.toggleModal}>
            <i className="fa fa-plus" /> add
          </Button>

          <CardTitle tag="h4">{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>URI</th>
                <th className="text-center">Enabled</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.map(item => (
                  <tr key={item.URI}>
                    <td>{item.URI}</td>
                    <td className="text-center">
                      <Switch
                        onChange={(el, value) => this.handleItemSwitch(item, value)}
                        name={item.URI}
                        value={item.Enabled}
                        onColor="info"
                        offColor="info"
                      />
                    </td>
                    <td className="text-center">
                      {/*<Button className="btn-round" size="sm" color="primary" outline onClick={toggleStatusModal}><i className="fa fa-list" /> status</Button>*/}
                      <Button
                        className="btn-icon"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={(e) => this.deleteListItem(item)}>
                        <i className="fa fa-times" />
                      </Button>
                  </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
}
