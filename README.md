# Arctis-7-Battery-Rainmeter-Skin

A project for a friend who has a SteelSeries Arctis 7 and wanted to make a rainmeter skin to display its battery.

I have included both the script that gets the battery level of the headset and serves that information on a webserver as well as the
rainmeter skin which parses the battery level from the website and displays it with a cool battery icon (made by yours truly :3)

Requirements: 
- [Express](https://expressjs.com/)
- [node-hid](https://www.npmjs.com/package/node-hid)
- [pm2](https://pm2.keymetrics.io/)

## How to install the Rainmeter skin
- To download and install the rainmeter skin download the `rmskin` file from [here](https://github.com/HamuzaDesu/Arctis-7-Battery-Rainmeter-Skin/releases/tag/v2.0.0*)
- Double click the file and it will automatically install into Rainmeter
## How to install the server
- Download or clone this repository in a directory of your choosing
- Move the `HeadsetBatteryScript` folder into someplace safe (like your 'Documents' folder or something)
- Navigate to the `HeadsetBatteryScript` folder using CMD (the command prompt)
- run `npm install`
- open `headsetScriptStartup.cmd` and put the full path of the `index.js` file in there
- Double click `headsetScriptStartup.cmd` to run it.
- Download this [gist](https://gist.github.com/HamuzaDesu/248b2dd52e2d3945f7306fb0dc80c611)
- Move the `restartPm2Apps.cmd` file into your startup folder (Type `shell:startup` into windows run dialogue (WIN + R))
- You may need to run `pm2 save` into a terminal.
- done c:. Now the server will automatically start up on PC boot so you don't have to worry about running the script all the time.
