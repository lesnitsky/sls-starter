import { APIGatewayProxyHandler } from "aws-lambda";
import { ContentType, cors } from "../util/headers";

export const version: APIGatewayProxyHandler = async (e, _) => {
  return {
    headers: {
      ...cors(e.headers["origin"]!),
      ...ContentType.JSON,
    },
    statusCode: 200,
    body: JSON.stringify({
      version: require("../package.json").version,
    }),
  };
};
