import fm from './fortmatic';
import Web3 from "web3";

const web3 = new Web3(fm.getProvider());
web3.currentProvider.isFortmatic;

export default web3;