import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getUser = async (idUsers) => {
  const params = {
    idUsers: idUsers,
  };
  try {
    const response = await axios.get(`${baseUrl}/users`, {
      params: params,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`getConnections Axios Error ${error}`);
  }
};

export const postUser = async (body) => {
  const newUser = {
    idUsers: body.idUsers,
    displayName: body.displayName,
    email: body.email,
    authProvider: body.authProvider,
  };
  try {
    const response = await axios.post(`${baseUrl}/users`, newUser);
    console.log(response);
    return response;
  } catch (error) {
    console.log(`postConnection Axios Error ${error}`);
  }
};
