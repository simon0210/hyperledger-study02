const util = require('util');
const path = require('path');
const hfc = require('fabric-client');

let file = 'network-config%s.yaml';

const targetNetwork = process.env.TARGET_NETWORK;

if (targetNetwork) { file = util.format(file, `-${targetNetwork}`); } else { file = util.format(file, ''); }

hfc.setConfigSetting('network-connection-profile-path', path.join(__dirname, 'connection-profile', file));
hfc.setConfigSetting('Org1-connection-profile-path', path.join(__dirname, 'connection-profile', `org1-${targetNetwork}.yaml`));

hfc.addConfigFile(path.join(__dirname, 'config.json'));
