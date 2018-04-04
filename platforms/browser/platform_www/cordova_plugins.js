cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
<<<<<<< HEAD
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
=======
>>>>>>> c4ac518159bf1ef8b7cf5e840a8e51587f55255e
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
<<<<<<< HEAD
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
=======
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
>>>>>>> c4ac518159bf1ef8b7cf5e840a8e51587f55255e
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
<<<<<<< HEAD
    "cordova-plugin-device": "1.1.7",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-ionic-webview": "1.1.16",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.4.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-sqlite-storage": "2.3.0",
    "ionic-plugin-keyboard": "2.2.1"
=======
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-statusbar": "2.4.1",
    "cordova-plugin-device": "2.0.1"
>>>>>>> c4ac518159bf1ef8b7cf5e840a8e51587f55255e
}
// BOTTOM OF METADATA
});