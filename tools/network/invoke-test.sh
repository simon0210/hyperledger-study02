#!/bin/bash
#peer chaincode invoke -o orderer.example.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem -C mychannel -n balance  -c '{"Args":["move","a","b","10"]}'
docker exec cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n balance  -c '{"Args":["move","a","b","10"]}'  
