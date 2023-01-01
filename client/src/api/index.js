import axios from "axios";

const baseUrl = "http://localhost:5000";

export const addConnection = (formValues) => {
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

export const getConnections = async (idConnections) => {
  console.log(idConnections)
  try {
    const response = await axios.get(`${baseUrl}/connections`, { params: { idConnections: idConnections } })
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.log(`Get Connection Error ${error}`);
  }
}

export const getConnectionGroup = async (idConnectionGroups) => {
  try {
    const response = await axios.get(`${baseUrl}/connectionGroups/${idConnectionGroups}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Get Connection Error ${error}`);
  }
};
