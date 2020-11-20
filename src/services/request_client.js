import phin from 'phin'
import { UriBuilder } from 'uribuilder'
const host_url = "https://api.github.com"


class RequestClient {
    constructor(options= {}) {
        const { host = host_url } = options
        this.uriBuilder = this.setupUriBuilder({ host })
    }

    client() {
        return phin
    }

    async getList() {
        let url = this.uriBuilder.setPath('/users/handley/org').toString()
        let response = await this.client(url)
        return response
    }

    setupUriBuilder( { host }) {
        const uriBuilder = new UriBuilder();
        uriBuilder.host = host;
    }
}

export default RequestClient
