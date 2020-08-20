require('dotenv').config();

const firebase = {
  type: 'service_account',
  project_id: 'quiz-las-dehesas',
  private_key_id: process.env.REACT_APP_PRIVATE_KEY_ID,
  private_key: process.env.REACT_APP_PRIVATE_KEY,
  client_email:
    'firebase-adminsdk-o7uh4@quiz-las-dehesas.iam.gserviceaccount.com',
  client_id: '102004898735200653445',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-o7uh4%40quiz-las-dehesas.iam.gserviceaccount.com',
};

export default firebase;
