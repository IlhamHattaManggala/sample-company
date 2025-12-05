import type { Handler } from "@netlify/functions";
import { createRequestHandler } from "@react-router/node";

// Import the server build
// @ts-ignore - This will be available at build time
let build: any;
try {
  build = await import("../../build/server/index.js");
} catch (error) {
  console.error("Failed to import server build:", error);
}

export const handler: Handler = async (event, context) => {
  try {
    if (!build) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server build not found" }),
      };
    }

    const requestHandler = createRequestHandler({
      build,
      mode: process.env.NODE_ENV || "production",
    });

    // Convert Netlify event to Request
    const url = new URL(event.rawUrl || `https://${event.headers.host}${event.path}`);
    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: new Headers(event.headers as Record<string, string>),
      body: event.body ? event.body : undefined,
    });

    const response = await requestHandler(request, context);

    // Convert Response to Netlify format
    const body = await response.text();
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      statusCode: response.status,
      headers,
      body,
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

