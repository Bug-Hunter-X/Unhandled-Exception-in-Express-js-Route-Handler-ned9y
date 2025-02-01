# Unhandled Exception in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.  The `bug.js` file shows the problematic code, where a route handler fails to handle cases where a user ID is not found.  This can lead to unhandled exceptions and application crashes. 

The `bugSolution.js` file provides a corrected version with robust error handling, ensuring the application responds gracefully even when an invalid ID is supplied.

This example highlights the importance of comprehensive error handling in Express.js to create more resilient and reliable applications.