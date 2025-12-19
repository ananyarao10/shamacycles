import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  console.log("Form submission received:", event.body);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission received" }),
  };
};

export { handler };