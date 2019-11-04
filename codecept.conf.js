exports.config = {
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://example.com/',
      browser: 'browserstack:chrome@78.0:OS X Mojave',
      show: true,
    }
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
  tests: './tests/**/*.test.js',
  name: 'polaris-siteapp',
  multiple: {
    basic: {
      // List available browserstack browsers
      // node ./node_modules/testcafe/bin/testcafe.js -b browserstack
      browsers: [
        'browserstack:chrome@78.0:OS X Mojave',
        'browserstack:edge@18.0:Windows 10',
        'browserstack:ie@11.0:Windows 10',
      ],
    },
  },
};