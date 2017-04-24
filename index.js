'use strict';
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');

const torrent = torrentParser.open('flagfromserver.torrent');

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});
