import API from './index'

export class APIDNSBlock extends API {
  constructor() {
    super('/plugins/dns/block')
  }

  config = () => this.get('/config')
  blocklists = () => this.get('/blocklists')
  putBlocklist = data => this.put('/blocklists', data)
  deleteBlocklist = (data) => this.delete('/blocklists', data)
  putOverride = (data) => this.put('/override', data)
  deleteOverride = (data) => this.delete('/override', data)
}

export class APIDNSLog extends API {
  constructor() {
    super('/plugins/dns/log')
  }

  config = () => this.get('/config')
  hostPrivacyList = () => this.get('/host_privacy_list')
  putHostPrivacyList = (data) => this.put('/host_privacy_list', data)
  domainIgnores = () => this.get('/domain_ignores')
  addDomainIgnores = (item) => this.put(`/domain_ignore/${item}`, {})
  //putDomainIgnores = (data) => this.put(`/domain_ignores`, data)
}

export const blockAPI = new APIDNSBlock()
export const logAPI = new APIDNSLog()
