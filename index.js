'use strict';

const download = require('./src/download');
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./src/tracker');
const torrentParser = require('./src/torrent-parser');

const torrent = torrentParser.open(process.argv[2]);

download(torrent);
