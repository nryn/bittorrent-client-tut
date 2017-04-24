// 'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('flagfromserver.torrent');
console.log(torrent.toString('utf8'));
