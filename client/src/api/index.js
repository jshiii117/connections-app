import axios from "axios";

const baseUrl = "http://localhost:5000";

export const postConnection = async (formValues) => {
  const newConnection = {
    profilePicture: formValues.profilePicture,
    fullName: formValues.fullName,
    position: formValues.position,
    lastContacted: formValues.lastContacted,
    contactMethod: formValues.contactMethod,
    description: formValues.description,
    idconnectionGroups: formValues.idconnectionGroups,
  };
  try {
    const response = await axios.post(`${baseUrl}/create`, newConnection);
    console.log(response);
    return newConnection.idconnectionGroups;
  } catch (error) {
    console.log(`postConnection Axios Error ${error}`);
  }
};

export const patchConnection = async (formValues) => {
  const updatedConnection = {
    profilePicture: formValues.profilePicture,
    fullName: formValues.fullName,
    position: formValues.position,
    lastContacted: formValues.lastContacted,
    contactMethod: formValues.contactMethod,
    description: formValues.description,
    idconnectionGroups: formValues.idconnectionGroups,
  };
  try {
    const response = await axios.patch(
      `${baseUrl}/connections/${formValues.idconnections}`,
      updatedConnection
    );
    console.log(response);
    return updatedConnection.idconnections;
  } catch (error) {
    console.log(`patchConnection Axios Error ${error}`);
  }
};

export const deleteConnection = async (idConnections) => {
  const params = { idConnections: idConnections };
  try {
    const response = await axios.delete(`${baseUrl}/delete`, {
      params: params,
    });
    console.log(response);
    return response.status;
  } catch (error) {
    console.log(`deleteConnection Axios Error ${error}`);
  }
};

export const getConnectionGroup = async (idConnectionGroups) => {
  const params = { idConnectionGroups: idConnectionGroups };
  try {
    const response = await axios.get(`${baseUrl}/connectionGroups`, {
      params: params,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`getConnectionGroup Axios Error ${error}`);
  }
};

export const getConnections = async (idConnections, idConnectionGroups) => {
  const params = {
    idConnections: idConnections,
    idConnectionGroups: idConnectionGroups,
  };
  try {
    const response = await axios.get(`${baseUrl}/connections`, {
      params: params,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`getConnections Axios Error ${error}`);
  }
};
