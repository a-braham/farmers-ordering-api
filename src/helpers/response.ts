import { SERVER_ERROR } from "../constants/status";

/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {ServerResponse} Response
 */
const response = (data: any) => {
  if (data.res.headersSent === true) {
    return undefined;
  }

  const status = data.status || SERVER_ERROR;
  return data.res.status(status).json({
    status,
    ...data,
    res: undefined,
  });
};

export default response;