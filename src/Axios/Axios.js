import axios from "axios";

const instance = axios.create({
    headers: {
      "content-type": "application/json"
    },
    responseType: "json"
});

export default instance;