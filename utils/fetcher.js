import Config from "./config";
import _ from "lodash";

const fetchHelper = async (
  methodName,
  dynamicUrlData,
  bodyData,
  token = ""
) => {
  let methodObject = Config.methods[methodName];
  let headers = {};
  if (methodObject.isAuthenticated) {
    headers["Authorization"] = "Bearer " + token;
  }

  if (methodObject.jsonMethod) headers["Content-Type"] = "application/json";

  let request = {
    method: methodObject.verb,
    headers: headers,
    cache: "default",
    mode: "cors",
  };

  // check for parameters in url template
  let parsedUrl = methodObject.suffixUrl;
  let regex = new RegExp("{(.*?)}");
  _.each(dynamicUrlData, (item) => {
    parsedUrl = parsedUrl.replace(regex, (pattern, val) => {
      return dynamicUrlData[val];
    });
  });

  let url = Config.baseUrl + parsedUrl;

  if (methodObject.verb == "POST" || methodObject.verb == "PUT")
    request.body = JSON.stringify(bodyData);

  try {
    return await fetch(url, request).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        if (response.status == 204) return response;
        else {
          return response.json();
        }
      }
      if (response.status == 500) {
        Promise.reject("server error");
        // handler global error
      }
      if (response.status == 401) {
        Promise.reject("not authenticated");
        // handle not authenticated
      }
      if (response.status == 400) {
        return response;
        // handle not authenticated
      }
    });
  } catch (error) {
    console.warn("lori error", error);
    // add report to AppCenter analytics // TODO
    Promise.reject(error);
  }
};

export default fetchHelper;
