import axios from "axios";

const getFeedback = () => {
  return axios({
    method: "GET",
    url: "/",
  });
};

const addFeedback = (feedbackObject) => {
  return axios.post("/", feedbackObject);
};

export { getFeedback, addFeedback };
