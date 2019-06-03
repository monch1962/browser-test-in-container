FROM ubuntu:latest

# Install machine dependencies
RUN apt update \
  && apt install --no-install-recommends -y unzip curl wget git make build-essential g++ openjdk-8-jdk \
  && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
  && apt update \
  && apt-get install --no-install-recommends -y nodejs \
  && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && apt update \
  && apt install --no-install-recommends -y google-chrome-stable firefox

# Working directory
RUN mkdir -p /workdir/output
RUN mkdir -p /workdir/features
RUN mkdir -p /workdir/webdriver-config
WORKDIR /workdir

# Install dependencies if any change
COPY package.json package-lock.json ./
COPY webdriver-config/wdio.conf.js ./webdriver-config/
RUN npm install

# (optional) Install cypress
# Feel free to comment this out if you're not creating tests using Cypress
# RUN npm install --save cypress

# Copy tests
COPY . ./

# Execute tests
ENTRYPOINT ["npm", "test"]
