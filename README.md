# Natural Language Processing 

NLP is a subset of AI that provides computers ability to process or interact with natural human speech.


## Goal

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Setup project

- `cd` into your new folder and run to install node modules `npm install`.

## How to run 

- `npm start ` to run server.
- `npm run build-prod ` with `npm run start` To run the production server .
- `npm run build-dev ` To run the developer server .

## Setting up the API and get key

- create an account with  [MeaningCloud](https://www.meaningcloud.com) , you will be given a license key to start using the API.
- add your Key to **.env** file like this.
`API_KEY=**************************`
- putting a prefix `process.env.` in front of the variable name in the server/index.js file to refer the environment variables.



## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

## References
- Webpack [Docs](https://webpack.js.org/concepts/).
- Sentiment Analysis [Docs](https://www.meaningcloud.com/developer/sentiment-analysis/doc).