# Weather App

This is a simple node based app to get current weather from the DarkSky API. It makes use of the **yargs** and **request** modules. Simply enter a valid address or zip-code to grab the local temperature.

To run this program:
------
1. Clone/download the source files
2. Run `npm install` to download dependencies
3. Go to https://darksky.net/dev/ and sign up for a developer key
4. Replace "YOUR API KEY HERE" in `weather.js`
5. Run `node app.js -a 19123`
6. The example will show the local Philly weather but you can enter any valid
address and the app will work


TO-DOS
***
1. Create GUI for cleaner user interaction
2. Create express-based server to host on Heroku
3. Consider using promise-based requests
