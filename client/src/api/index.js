import axios from "axios";

const baseUrl = "https://localhost:5000";

export const addConnection = (formValues) => {
  console.log(`${formValues} being sent to axios request`);
  console.log(`${formValues.fullName}`);
  axios
    .post(`${baseUrl}/create`, {
      profilePicture: formValues.profilePicture,
      fullName: formValues.fullName,
      position: formValues.position,
      lastContacted: formValues.lastContacted,
      contactMethod: formValues.contactMethod,
      description: formValues.description,
    })
    .then(() => {
      console.log("Add Connection: Axios call success");
    });
};

export const getConnections = () => {
  axios.get(`${baseUrl}/connections`).then(() => {
    console.log("Get Connections: Axios call success");
  });
};
