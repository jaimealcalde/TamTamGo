import { rest } from "msw";

export const handlers = [
  rest.post("/api/user", (req, res, ctx) => {
    // Persist user's authentication in the sessionStorage
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/api/user/", (req, res, ctx) => {
    // Check if the user is authenticated in the sessionStorage
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
