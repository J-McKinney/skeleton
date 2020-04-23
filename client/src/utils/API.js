import axios from "axios";

export default {
  // Gets all sentences
  getapiRoutes: function () {
    return axios.get("/api/apiRoute");
  },
  // Gets the sentence with the given id
  getapiRoute: function (id) {
    return axios.get("/api/apiRoute/" + id);
  },
  // Deletes the sentence with the given id
  deleteapiRoute: function (id) {
    return axios.delete("/api/apiRoute/" + id);
  },
  // Saves a sentence to the database
  saveapiRoute: function (Data) {
    return axios.post("/api/apiRoute", Data);
  },
};
