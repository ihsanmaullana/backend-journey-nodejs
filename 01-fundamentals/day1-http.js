function handleRequest(method, path) {

  if (method === "GET" && path === "/products") {
    return {
      statusCode: 200,
      message: "Success get products"
    }
  }

  if (method === "GET" && path === "/categories") {
    return {
      statusCode: 200,
      message: "Success get categories"
    }
  }

  if (method === "POST" && path === "/login") {
    return {
      statusCode: 200,
      message: "Login success"
    }
  }

  if (method === "POST" && path === "/register") {
    return {
      statusCode: 200,
      message: "Register success"
    }
  }

  if (method !== "GET" && method !== "POST") {
    return {
      statusCode: 405,
      message: "Method not allowed"
    }
  }

  return {
    statusCode: 404,
    message: "Route not found"
  }
}

// simulation
console.log(handleRequest("GET", "/products"))
console.log(handleRequest("POST", "/login"))
console.log(handleRequest("GET", "/wrong"))
console.log(handleRequest("GET", "/categories"))
console.log(handleRequest("POST", "/register"))
console.log(handleRequest("PUT", "/register"))
