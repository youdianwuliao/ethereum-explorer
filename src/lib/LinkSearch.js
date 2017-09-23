
// Search functions for the block chain

export default class LinkSearch{

    constructor(web3){

        this._web3 = web3;

    }

    getBlock(hashOrNumber){

        return new Promise(
            (resolve, reject)=>{

                this._web3.eth.getBlock(hashOrNumber,
                    (error, block)=>{

                        if(error) return reject(error);

                        resolve(block);

                    }
                )

            }
        );

    }

    getTransaction(hash){

        return new Promise(
            (resolve, reject)=>{

                this._web3.eth.getTransaction(hash,
                    (error, transaction)=>{

                        if(error) return reject(error);

                        resolve(transaction);

                    }
                )

            }
        )

    }

    getBalance(accountHash){

        return new Promise(
            (resolve, reject)=>{

                if(!this._web3.isAddress(accountHash)){
                    return reject(new Error('Invalid account hash'));
                }

                this._web3.eth.getBalance(accountHash,
                    (error, balance)=>{

                        if(error) return reject(error);

                        // Balance is returned as big number.
                        const newBalance = this._web3.fromWei(balance, "ether");
                        resolve(newBalance.toString(10));

                    }
                )

            }
        );


    }


}