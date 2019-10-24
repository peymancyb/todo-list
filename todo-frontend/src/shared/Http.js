import axios from "axios";

const actionCreator = (actionType, payload = null) => ({
  type: actionType,
  payload
});

export default ({
  headers = {},
  path = "",
  method,
  data = {},
  url = "http://192.168.180.106:8080",
  actionType,
  secondPath
}) => async dispatch => {
  try {
    dispatch(actionCreator(actionType.PENDING));
    const options = {
      headers,
      method: method.toUpperCase()
    };
    if (method.toLowerCase() !== "get") {
      options.data = data;
    }
    const fullUrl = `${url}${path}`;
    console.log('fullUrl -> ', fullUrl);
    const res = await axios(fullUrl, options);
    console.log('res ', res);
    if (method.toLowerCase() === "delete") {
      // const _res = await axios(`${url}${secondPath}`, {
      //   ...options,
      //   method: "get"
      // });
      dispatch(actionCreator(actionType.SUCCESS, res.data));
    } else {
      dispatch(actionCreator(actionType.SUCCESS, res.data));
    }
  } catch (err) {
    dispatch(actionCreator(actionType.ERROR, err.message));
  }
};