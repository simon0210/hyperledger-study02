const util = require('util');
const path = require('path');
const hfc = require('fabric-client');

let file = 'network-config%s.yaml';

const env = process.env.TARGET_NETWORK;
if (env) { file = util.format(file, `-${env}`); } else { file = util.format(file, ''); }

hfc.setConfigSetting('network-connection-profile-path', path.join(__dirname, 'connection-profile', file));
hfc.setConfigSetting('Org1-connection-profile-path', path.join(__dirname, 'connection-profile', `org1-${env}.yaml`));

hfc.addConfigFile(path.join(__dirname, 'config.json'));
