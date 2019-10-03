import cookie from 'react-cookies';

const baseUrl = 'http://localhost:4000/api';

export default class Network {

    getHeaders(customHeaders) {
        let headers = {};
        if(this.getToken()) {
            headers.Authorization = this.getToken();
        }
        for(let prop in customHeaders) {
            headers[prop] = customHeaders[prop]
        }
        return headers;
    }
        getToken() {
            return cookie.load('user');
        }
        send(method, url, data) {
            return fetch(baseUrl + url, {
                method:method,
                body:JSON.stringify(data),
                headers:this.getHeaders({
                    'Content-Type': 'application/json'
                })
            }) 
        }
        sendMultipart(method, url, data) {
            return fetch(baseUrl + url, {
                method:method,
                body:data,
                headers:this.getHeaders()
            })
        }

}