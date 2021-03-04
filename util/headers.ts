const whitelist = new Set(require("../cors-whitelist.json"));

export const cors = (origin: string) => {
  if (whitelist.has(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Credentials": true,
    };
  }

  return {
    "Access-Control-Allow-Origin": "",
    "Access-Control-Allow-Credentials": false,
  };
};

export const ContentType = {
  JSON: { "content-type": "application/json" },
};
