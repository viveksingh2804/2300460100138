const axios = require("axios");

async function Log(stack, level, packageName, message, accessToken) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Logging Error:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;