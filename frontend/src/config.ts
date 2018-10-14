let baseApiUrl;
if (process.env.NODE_ENV === "development") {
  baseApiUrl = "http://127.0.0.1:8000";
} else {
  baseApiUrl = "http://api.bettertodolist-env.tfhegp9zni.us-east-1.elasticbeanstalk.com";
}

export {
  baseApiUrl
};
