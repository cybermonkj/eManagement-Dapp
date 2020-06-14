//imports the IPFS API
import IPFS from 'ipfs-mini';

/**
 * creates & exports new instance for 
 * IPFS using infura as host, for use.
 * 'http://127.0.0.1:5001'
 */
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

export default ipfs;
