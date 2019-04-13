#!/bin/bash

docker exec -e "CORE_PEER_ADDRESS=peer0.org1.example.com:7051" org1-cli peer chaincode invoke -o orderer0.example.com:7050 \
--tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer0.example.com/msp/tlscacerts/tlsca.example.com-cert.pem \
-C mychannel -n balance -c '{"Args":["move","a","b","1"]}'
