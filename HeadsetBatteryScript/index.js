'use strict';

const HID = require('node-hid')
HID.setDriverType('libusb')

const app = require('express')()
const PORT = 3000

const fs = require('fs')

// PASTE PATH OF FILE HERE
const currentDir = String.raw`D:\Desktop Stuff\testingHID`

var devices = HID.devices()

var steelseriesDevices = [];

try {
    for(var i = 0; i < devices.length; i++){
        var currentDevice = devices[i]
        if(currentDevice != undefined && currentDevice['product'] != undefined){
            if(devices[i]['product'].includes('SteelSeries Arctis 7')){
                steelseriesDevices.push(devices[i])
            }
        }
    }

    var headset = steelseriesDevices[1]
    var lastBatteryLevel = 0
    
    var headsetHandler = new HID.HID(headset['path'])

    headsetHandler.on('data', data => {
        var batteryLevel = data[2]
    
        if(batteryLevel != lastBatteryLevel){
            console.log(batteryLevel + '%')
            

            fs.writeFileSync(`${currentDir}/batteryLevel.json`, JSON.stringify({percentage: batteryLevel}, null, 4))
            lastBatteryLevel = batteryLevel
        }
    
    })
    
    setTimeout(() => {
        setInterval(() => {
            headsetHandler.write([0x06, 0x18])
        }, 200);
    }, 500)
    
} catch (error) {
    console.log('SteelSeries Arctis 7 not connected. PLease try again')
    process.exit(1)
}    


app.get('/', (req, res) => {
    var batteryLevel = JSON.parse(fs.readFileSync(`${currentDir}/batteryLevel.json`))['percentage']
    res.send(`<body>${batteryLevel}%</body>`)
})


app.listen(PORT, () => {
    console.log('App listening on: http://localhost:' + PORT + '/')
})



