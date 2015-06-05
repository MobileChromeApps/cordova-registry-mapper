var map = {
    'org.apache.cordova.battery-status':'cordova-plugin-battery-status',
    'org.apache.cordova.camera':'cordova-plugin-camera',
    'org.apache.cordova.console':'cordova-plugin-console',
    'org.apache.cordova.contacts':'cordova-plugin-contacts',
    'org.apache.cordova.device':'cordova-plugin-device',
    'org.apache.cordova.device-motion':'cordova-plugin-device-motion',
    'org.apache.cordova.device-orientation':'cordova-plugin-device-orientation',
    'org.apache.cordova.dialogs':'cordova-plugin-dialogs',
    'org.apache.cordova.file':'cordova-plugin-file',
    'org.apache.cordova.file-transfer':'cordova-plugin-file-transfer',
    'org.apache.cordova.geolocation':'cordova-plugin-geolocation',
    'org.apache.cordova.globalization':'cordova-plugin-globalization',
    'org.apache.cordova.inappbrowser':'cordova-plugin-inappbrowser',
    'org.apache.cordova.media':'cordova-plugin-media',
    'org.apache.cordova.media-capture':'cordova-plugin-media-capture',
    'org.apache.cordova.network-information':'cordova-plugin-network-information',
    'org.apache.cordova.splashscreen':'cordova-plugin-splashscreen',
    'org.apache.cordova.statusbar':'cordova-plugin-statusbar',
    'org.apache.cordova.vibration':'cordova-plugin-vibration',
    'org.apache.cordova.test-framework':'cordova-plugin-test-framework',
    'com.msopentech.websql' : 'cordova-plugin-websql',
    'com.msopentech.indexeddb' : 'cordova-plugin-indexeddb',
    'org.chromium.alarms' : 'cordova-plugin-chrome-apps-alarms',
    'org.chromium.audiocapture' : 'cordova-plugin-chrome-apps-audiocapture',
    'org.chromium.backgroundapp' : 'cordova-plugin-background-app',
    'org.chromium.bluetooth' : 'cordova-plugin-chrome-apps-bluetooth',
    'org.chromium.bluetoothlowenergy' : 'cordova-plugin-chrome-apps-bluetoothlowenergy',
    'org.chromium.bluetoothsocket' : 'cordova-plugin-chrome-apps-bluetoothsocket',
    'org.chromium.bootstrap' : 'cordova-plugin-chrome-apps-bootstrap',
    'org.chromium.common' : 'cordova-plugin-chrome-apps-common',
    'org.chromium.filesystem' : 'cordova-plugin-chrome-apps-filesystem',
    'org.chromium.gcm' : 'cordova-plugin-chrome-apps-gcm',
    'org.chromium.i18n' : 'cordova-plugin-chrome-apps-i18n',
    'org.chromium.identity' : 'cordova-plugin-chrome-apps-identity',
    'org.chromium.idle' : 'cordova-plugin-chrome-apps-idle',
    'org.chromium.navigation' : 'cordova-plugin-chrome-apps-navigation',
    'org.chromium.notifications' : 'cordova-plugin-chrome-apps-notifications',
    'org.chromium.power' : 'cordova-plugin-chrome-apps-power',
    'org.chromium.pushmessaging' : 'cordova-plugin-chrome-apps-pushmessaging',
    'org.chromium.runtime' : 'cordova-plugin-chrome-apps-runtime',
    'org.chromium.socket' : 'cordova-plugin-chrome-apps-socket',
    'org.chromium.sockets.tcp' : 'cordova-plugin-chrome-apps-sockets-tcp',
    'org.chromium.sockets.tcpserver' : 'cordova-plugin-chrome-apps-sockets-tcpserver',
    'org.chromium.sockets.udp' : 'cordova-plugin-chrome-apps-sockets-udp',
    'org.chromium.storage' : 'cordova-plugin-chrome-apps-storage',
    'org.chromium.system.cpu' : 'cordova-plugin-chrome-apps-system-cpu',
    'org.chromium.system.display' : 'cordova-plugin-chrome-apps-system-display',
    'org.chromium.system.network' : 'cordova-plugin-chrome-apps-system-network',
    'org.chromium.system.storage' : 'cordova-plugin-chrome-apps-system-storage',
    'org.chromium.usb' : 'cordova-plugin-chrome-apps-usb',
    'org.chromium.videocapture' : 'cordova-plugin-chrome-apps-videocapture'
}

module.exports.oldToNew = map;

var reverseMap = {};
Object.keys(map).forEach(function(elem){
    reverseMap[map[elem]] = elem;
})

module.exports.newToOld = reverseMap;
