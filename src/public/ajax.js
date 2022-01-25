class Ajax {
    constructor(xhr) {
        let ActiveXObject = ActiveXObject || function () {}
        xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr = xhr;
    }
    send(options) {
        let xhr = this.xhr;
        let opt = {
            type: 'GET',
            url: '',
            async: 'true',
            dataType: 'json',
            ...options
        };
        return new Promise((resolve, reject) => {
            xhr.open(opt.type, opt.url, opt.async);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        if (opt.dataType === 'json') {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                            console.log(data);
                        }
                    } else {
                        reject(new Error(xhr.status || '请求失败'));
                    }
                }
            };
            xhr.onerror = () => {
                reject(new Error(xhr.status || '请求失败'));
            };
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(opt.questring);
        })
    }
    get(options) {
        console.log(this)
        return this.send({
            ...options,
            type: 'GET'
        })
    }
    post(options) {
        return this.send({
            ...options,
            type: 'POST'
        })
    }
}
export default {
    Ajax,
    install: function (Vue) {
        Vue.prototype.$http = new Ajax()
    }
}