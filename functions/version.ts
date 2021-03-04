import { APIGatewayProxyHandler } from "aws-lambda";

export const version: APIGatewayProxyHandler = async (e, _) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ version: require("../package.json").version }),
  };
};
