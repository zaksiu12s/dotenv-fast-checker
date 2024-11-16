import "dotenv/config";
import fs from "fs";

const EnvChecker = {};

EnvChecker.check = function check(name, type) {
  if (process.env[name]) {
    if (type) {
      validateType(process.env[name], type, name);
    }

    return process.env[name];
  } else {
    throw new Error(`Env variable ${name} is not defined.`);
  }
};

function validateType(value, type, name) {
  console.log(value);
  console.log(type);

  switch (type) {
    case String:
      return;

    case Number:
      if (Number(value) != value) {
        throw new Error(`Variable ${name}: ${value} is not a number.`);
      }
      return;

    case Boolean:
      if (
        value != "true" &&
        value != "false" &&
        value != "False" &&
        value != "True" &&
        value != "1" &&
        value != "0"
      ) {
        throw new Error(
          `Variable ${name}: ${value} is not boolean. Expected 'true', 'false', 'True', 'False', '1' or '0'.`
        );
      }
      return;

    default:
      throw new Error(`Checking for ${type} type is not supported`);
  }
}

EnvChecker.fileCheck = function fileCheck() {
  const envFilePath = "./.env";

  if (fs.existsSync(envFilePath)) {
    return true;
  } else {
    throw new Error(".env file does not exist.");
  }
};

export default EnvChecker;
