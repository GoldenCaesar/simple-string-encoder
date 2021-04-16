/*
    All code within this @file belongs to Stephen Miller, Demicube Corp @copyright 2021
    unless otherwise written, sourced, cited, linked, or implied.
    Do not redistribute without prior consent.
*/

const decode = require('./decode.js');
const encode = require('./encode.js');

const Commands = {
  decode: {
    params: [
      'STRING_TO_DECODE: String to be decode',
      'PASSWORD: Password used to decode string',
    ],
    example: 'decode <STRING_TO_DECODE> <PASSWORD>',
    exec: (string, pass) => {
      const result = decode(string, pass);
      return result;
    },
  },
  encode: {
    params: [
      'STRING_TO_ENCODE: String to be encoded',
      'PASSWORD: Password used to encode string',
    ],
    example: 'encode <STRING_TO_ENCODE> <PASSWORD>',
    exec: (string, pass) => {
      const result = encode(string, pass);
      return result;
    },
  },
};

const [command, string, pass] = process.argv.slice(2);

const commandObjToExec = Commands[command];

// If valid command is entered
if (commandObjToExec) {
  if (string && pass) {
    try {
      console.log(commandObjToExec.exec(string, pass));
    } catch (error) {
      console.log('error:', error);
    }
  } else {
    console.log(`${command} requires a valid string to passed in for both your string & password arguments`);
  }
} else {
  // Documentation if no valid command is entered
  console.log('Uh oh that didn\'t quite work...\n');
  console.log('Try entering one of the following commands:\n');
  Object.keys(Commands).forEach((key) => {
    const obj = Commands[key];
    console.log(`${obj.example}`);
    console.log(`parameters: ${JSON.stringify(obj.params, null, 2)}`);
    console.log('\n=========================\n');
  });
}
