const axios = require('axios');

export async function getEntities(str) {
  const url = `https://polispace-server.appspot.com/entities`;

  try {
    const response = await axios.get(url, {
      params: {
        q: str
      }
    });

    return response.data;
  } catch(err) {
    throw new Error(`Error /entities ${err.message}`);
  }
}