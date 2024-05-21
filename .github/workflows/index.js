const core = require('@actions/core');

function run() {
  try {
    core.info('Hello, World!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
