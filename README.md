### Description
This application simulates api to check if a user is re-using password that is a permutation of the previous password used by the same user.  Ex. **wor1dhell0** and **01dehllorw** are premutations of  **hell0wor1d**

### Setup guide
##### Requirements
 - [Node.js](https://nodejs.org/) 12.16.2+
 - [Strong will to test the app](https://www.vocabulary.com/dictionary/strong-willed) 120%+

##### Installation

Create .env file in root folder or copy default variables from .env.example
```sh
cp .env.example .env
```
Install dependencies
```sh
npm install
```
Run migrations (sqlite db file will be created)
```sh
npm run migrate
```
Run in development or production modes
```sh
npm run development
```

### API documentation
#### Authentication
App uses basic auth. You can skip athentication by leaving BASIC_AUTH_USERNAME
BASIC_AUTH_PASSWORD  blank in .env

#### Endpoints:
##### Passwords
- GET /api/passwords/last-updates  (Shows last 10 password mutations grouped by users)

```sh
curl -H "Content-Type: application/json" -H "Authorization: Basic $BASIC_AUTH_TOKEN" -X GET "${APP_URL}:${APP_PORT}/api/passwords/last-updates"
```
- POST /api/passwords/check

```sh
curl -H "Content-Type: application/json" -H "Authorization: Basic $BASIC_AUTH_TOKEN" -X POST -d '{"username":"<username>", "password":"<password>"}' "${APP_URL}:${APP_PORT}/api/passwords/check"
```
Returns true if new user password is premutation of previous one
```sh
status: 200
{ "success": true }
```
Returns error description(s) in case of wrong input(s)
```sh
status: 400
 {
	 "errors": [
		{
		  "value": "",
		  "msg": "missing password",
		  "param": "password",
		  "location": "body"
		}
	  ]
  }
```


### Web interface for testing
If you find yourself bored of all those shell commans you are more than welcome to try api functionality via web interface. Simply hit APP_URL:APP_PORT Ex. 127.0.0.1:3000 in your browser.

<a href="https://ibb.co/L15JnmH"><img src="https://i.ibb.co/dDgLGFx/web.png" alt="web" border="0"></a>





