@REM PASTE FULL FILE PATH HERE
SET indexFile="F:\My Projects\Arctis-7-Battery-Rainmeter-Skin\HeadsetBatteryScript\index.js"

pm2 start %indexFile% --name "Headset Battery"

pm2 save