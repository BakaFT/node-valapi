//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');
const url = require('url');

const toughCookie = tough.CookieJar;

//class
class Account {
    constructor() {
        this.cookie = null;
        this.accessToken = null;
        this.entitlements = null;
    }

    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    */
     async login(username, password) {
        const _cookie = new toughCookie();
        const axiosClient = wrapper(axios.create({ jar: _cookie, withCredentials: true }));

        const auth_cookie = await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
            'client_id': 'play-valorant-web-prod',
            'nonce': '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
        }, {
            jar: _cookie,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        }, {
            jar: _cookie,
        })

        //multifactor
        if (auth_response.data.type == 'multifactor') {
            this.cookie = _cookie;
            return this.toJSON();
        }

        // get asscess token
        const get_url = auth_response.data.response.parameters.uri;
        const url_parts = url.parse(get_url, true);
        const removeSharpTag = url_parts.hash.replace('#', '');
        const accessToken_params = new URLSearchParams(removeSharpTag);
        this.accessToken = accessToken_params.get('access_token');

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        })

        this.entitlements = entitlements_response.data.entitlements_token;

        this.cookie = _cookie;
        return this.toJSON();
    }

    toJSON() {
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
        }
    }

    /**
    * @param {String} username Riot Account Username
    * @param {String} password Riot Account Password
    * @param {Boolean} toJSON return with toJSON data
    */
    static async loginSync(username, password, toJSON = false) {
        const NewAccount = new Account();
        await NewAccount.login(username, password);

        if(toJSON){
            return NewAccount.toJSON();
        }
        return NewAccount;
    }
}

//export
Account.login = Account.loginSync;

module.exports = Account;