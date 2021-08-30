'use strict';

const HID = require('node-hid')
HID.setDriverType('libusb')

const app = require('express')()
const PORT = 3000

const getBatteryLevel = new Promise((resolve, reject) =>{
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
        
        
        var headsetHandler = new HID.HID(headset['path'])
    
        headsetHandler.on('data', data => {
            var batteryLevel = data[2]
    
            resolve(batteryLevel)
        })
    
        headsetHandler.write([0x06, 0x18])
        
    } catch (error) {
        console.log('SteelSeries Arctis 7 not connected. PLease try again')

        reject('SteelSeries Arctis 7 not connected. PLease try again')
    }    

})

app.get('/', (req, res) => {
    getBatteryLevel.then(batteryLevel => {
        console.log(batteryLevel)
        res.send(`<body>${batteryLevel}%</body>`)
    })
})

app.listen(PORT, () => {
    console.log('App listening on: http://localhost:' + PORT + '/')
})



