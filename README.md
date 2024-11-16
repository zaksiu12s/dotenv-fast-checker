# dotenv-fast-checker

[![npm version](https://badge.fury.io/js/dotenv-fast-checker.svg)](https://www.npmjs.com/package/dotenv-fast-checker)  
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple Node.js utility to validate environment variables' existence and type while using the `dotenv` package. This module ensures that your environment variables are both defined and of the expected type, making it easy to work with `process.env` safely.

## Features

- ✅ **Check if an environment variable is defined.**
- 🔍 **Validate the type** of the environment variable (supports `String`, `Number`, `Boolean`).
- 💨 **Fast and lightweight**: Simply integrates with `dotenv`.
- 🛠️ **Easy to use**: Small API for quick validation setup.

## Installation

Install the package via npm:

```bash
npm install dotenv-fast-checker
```

# Usage

1.  **Ensure that you have a `.env` file** with your environment variables.
2.  **Import the package** in your code:

    ```javascript
    import "dotenv/config"; // To load environment variables from .env
    import EnvChecker from "dotenv-fast-checker";
    ```

3.  **Use the `check` method** to validate and retrieve environment variables:

    ```javascript
    // Example of checking an environment variable
    const myString = EnvChecker.check("MY_STRING_VAR", String);
    const myNumber = EnvChecker.check("MY_NUMBER_VAR", Number);
    const myBoolean = EnvChecker.check("MY_BOOLEAN_VAR", Boolean);
    ```

    - If the environment variable is not defined, an error will be thrown.
    - If the variable is defined but its type doesn't match the expected type, an error will be thrown.

### Example with dotenv

```javascript
import "dotenv/config";
import EnvChecker from "dotenv-fast-checker";

// Check environment variables with type validation
const port = EnvChecker.check("PORT", Number); // Expects a number
const isProduction = EnvChecker.check("IS_PRODUCTION", Boolean); // Expects a boolean
const apiUrl = EnvChecker.check("API_URL", String); // Expects a string
```

# Type Checking

The `check` function validates the environment variable's type as follows:

- `String`: Ensures the variable is a valid string.
- `Number`: Ensures the variable is a valid number.
- `Boolean`: Ensures the variable is one of the following valid boolean values:
  - `'true'`, `'false'`, `'True'`, `'False'`, `'1'`, `'0'`

If an environment variable is not of the expected type, the package throws an error with a message indicating the invalid value and expected type.

# API

### `EnvChecker.check(name: string, type?: StringConstructor | NumberConstructor | BooleanConstructor): string | number | boolean | undefined`

- **name**: The name of the environment variable.
- **type**: The expected type (`String`, `Number`, `Boolean`). This argument is optional. If not provided, the function will return the environment variable value as a string.

Returns the environment variable value, parsed to the expected type (if valid), or throws an error if invalid.

## GitHub Repository

You can find the source code and contribute to the project on GitHub: [https://github.com/zaksiu12s/dotenv-fast-checker](https://github.com/zaksiu12s/dotenv-fast-checker)

# License

MIT License. See the [LICENSE](LICENSE) file for details.
