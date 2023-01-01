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

export const getConnectionGroup = async (idConnectionGroups) => {
  const params = { idConnectionGroups: idConnectionGroups }
  try {
    const response = await axios.get(`${baseUrl}/connectionGroups`, { params: params });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`getConnectionGroup Axios Error ${error}`);
  }
};

export const getConnections = async (idConnections, idConnectionGroups) => {
  const params = { idConnections: idConnections, idConnectionGroups: idConnectionGroups }
  try {
    const response = await axios.get(`${baseUrl}/connections`, { params: params })
    // console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.log(`getConnections Axios Error ${error}`);
  }
}


