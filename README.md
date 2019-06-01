# CONTAINER-BASED BROWSER TESTING

This repo shows how to build a container suitable for running headless browser tests within a Docker container.

## Steps to build the Docker container:

`$ npm init`

When responding to the questions that come up, ensure you answer these questions as follows:
- entry point `index.js`
- test command `./node_modules/webdriverio/bin/wdio`

As of 1/6/19, webdriverio 5.x doesn't support cucumber so we want to install the most recent 4.x release. Luckily it seems that 4.x is still being actively maintained
`$ npm install webdriverio@^4.0.0`

Now we're at the point where you may want to diverge from my setup to configure your test environment...

Next we want to configure webdriverio. There's a bunch of options you might want to change here, but here's how I've set it up to run Selenium within the container itself. Changing these options will let you do things like executing in a separate Selenium Grid, or on remote device farms such as BrowserStack
`$ npm test --config`
  ? Where do you want to execute your tests?                              On my local machine
  ? Which framework do you want to use?                                   cucumber
  ? Shall I install the framework adapter for you?                        Yes
  ? Where are your feature files located?                                 ./features/**/*.feature
  ? Where are your step definitions located?                              ./features/**/*.js
  ? Which reporter do you want to use?                                    spec, junit
  ? Shall I install the reporter library for you?                         Yes
  ? Do you want to add a service to your test setup?                      selenium-standalone
  ? Shall I install the services for you?                                 Yes
  ? Level of logging verbosity                                            silent
  ? In which directory should screenshots gets saved if a command fails?  ./output
  ? What is the base url?                                                 http://localhost


