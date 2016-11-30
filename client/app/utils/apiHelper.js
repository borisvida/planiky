var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&secret_id" + sec;

function getCounts() {
  return axios.get('http://localhost:8081/api/counts');
}

var helpers = {
	getCounts: getCounts
};

export default helpers;
