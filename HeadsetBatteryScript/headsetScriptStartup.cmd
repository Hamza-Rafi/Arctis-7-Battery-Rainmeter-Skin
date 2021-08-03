@REM PASTE FULL FILE PATH HERE
SET indexFile="Path of index.js goes here"

pm2 start %indexFile% --name "Headset Battery"

pm2 save