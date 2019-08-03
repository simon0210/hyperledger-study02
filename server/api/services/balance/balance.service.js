import l from '../../../common/logger';

const transaction = require('../../../blockchain/transaction/transaction');

class BalanceService {
  getBalance(req, res) {
    const args = [];

    args.push(req.params.id);
    return Promise.resolve(transaction.queryChainCode(null, 'mychannel', 'balance',
      args, 'query', 'admin', 'org1'));
  }

  move(req, res) {
    l.info(`${this.constructor.name}.byId(${req})`);
    const args = [];

    args.push(req.body.from);
    args.push(req.body.to);
    args.push(req.body.amount.toString());

    return Promise.resolve(transaction.invokeChainCode(null, 'mychannel', 'balance',
      'move', args, 'admin', 'org1'));
  }

  addUser(req, res) {
    l.info(`${this.constructor.name}.byId(${req})`);
    const args = [];
    const peers = [];

    args.push(req.body.name);
    args.push(req.body.balance.toString());

    peers.push('peer0.org1.example.com');
    peers.push('peer1.org1.example.com');
    peers.push('peer0.org2.example.com');
    peers.push('peer1.org2.example.com');

    l.debug(`invoke peers:${peers}`);
    return Promise.resolve(transaction.invokeChainCode(peers, 'mychannel', 'mycc',
      'invoke', args, 'admin', 'org1'));
  }

  saveUser(req, res) {
    l.info(`${this.constructor.name}.byId(${req})`);
    l.debug(req.query.Id);
    l.debug(req.query.Name);
    l.debug(req.query.Age);
    l.debug(req.query.Sex);

    const args = [];
    const peers = [];

    args.push(req.query.Id);
    args.push(req.query.Name);
    args.push(req.query.Age);
    args.push(req.query.Sex);

    peers.push('peer0.org1.example.com');
    peers.push('peer1.org1.example.com');
    peers.push('peer0.org2.example.com');
    peers.push('peer1.org2.example.com');

    l.debug(`invoke peers:${peers}`);
    return Promise.resolve(transaction.invokeChainCode(null, req.query.Channel, 'balance',
      'saveUser', args, 'admin', 'org1'));
  }
}

export default new BalanceService();
