#!/bin/bash

FABRIC_CFG_PATH=../config \
CORE_PEER_LOCALMSPID=Org1MSP \
CORE_PEER_MSPCONFIGPATH=../crypto-config/peerOrganizations/org1.example.com/peers/peer0.Org1.example.com/msp \
./eventsclient -server=127.0.0.1:7051 -channelID=mychannel -filtered=false -tls=false
