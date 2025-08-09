const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);
    
    // API routes
    if (url.pathname === "/api/hello") {
      if (req.method === "GET") {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      }
      if (req.method === "PUT") {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      }
    }
    
    if (url.pathname.startsWith("/api/hello/")) {
      const name = url.pathname.split("/api/hello/")[1];
      return Response.json({
        message: `Hello, ${name}!`,
      });
    }
    
    // Handle static files
    const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
    const file = Bun.file(`./src${filePath}`);
    
    if (await file.exists()) {
      return new Response(file);
    }
    
    // Default to index.html for SPA routing
    const indexFile = Bun.file("./src/index.html");
    return new Response(indexFile);
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
