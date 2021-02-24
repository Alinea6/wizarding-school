const domain = () => {
  if (process.env.REACT_APP_ENV === "production") {
    return "https://wizarding-school-backend-svc-alinea6.cloud.okteto.net/";
  } else {
    return "http://localhost:3003/";
  }
};

export default domain;
