const axios = require("axios");
async function makeRequest() {
  const config = {
    method: "get",
    url: `https://api.rawg.io/api/games?search=${userinput}`,
  };
  let res = await axios(config);
  console.log(res.status);
}
makeRequest();
