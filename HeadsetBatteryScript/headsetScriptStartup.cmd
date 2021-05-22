@REM PASTE FULL FILE PATH HERE
SET indexFile="D:\Desktop Stuff\testingHID\index.js"

pm2 start %indexFile% --name "Headset Battery"

pm2 save