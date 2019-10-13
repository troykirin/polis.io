// import {
//   NLP_ACCOUNT_TYPE,
//   NLP_PROJECT_ID,
//   NLP_PRIVATE_KEY_ID,
//   NLP_PRIVATE_KEY,
//   NLP_CLIENT_EMAIL,
//   NLP_CLIENT_ID,
//   NLP_AUTH_URI,
//   NLP_TOKEN_URI,
//   NLP_AUTH_PROVIDER_X509_CERT_URL,
//   NLP_CLIENT_X509_CERT_URL,
// } from "react-native-dotenv";

// const NLP_CONFIG = {
//   "type": NLP_ACCOUNT_TYPE,
//   "project_id": NLP_PROJECT_ID,
//   "private_key_id": NLP_PRIVATE_KEY_ID,
//   "private_key": NLP_PRIVATE_KEY,
//   "client_email": NLP_CLIENT_EMAIL,
//   "client_id": NLP_CLIENT_ID,
//   "auth_uri": NLP_AUTH_URI,
//   "token_uri": NLP_TOKEN_URI,
//   "auth_provider_x509_cert_url": NLP_AUTH_PROVIDER_X509_CERT_URL,
//   "client_x509_cert_url": NLP_CLIENT_X509_CERT_URL
// }
async function quickstart() {
  const language = require('@google-cloud/language');

  const client = new language.LanguageServiceClient();

  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  const [result] = await client.analyzeEntities({ document });
  const entities = result.entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
    }
  });
}