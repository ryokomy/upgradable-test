# upgradable-test

This is a simple implementation of Proxy Contract. Please refer to following articles.  
English: https://blog.zeppelinos.org/proxy-patterns/  
Japanese: https://zoom-blc.com/how-to-develop-upgradable-contracts  

## How to Use
1. open [Ganache](https://truffleframework.com/ganache).
2. type the following commands.
```
git clone git@github.com:ryokomy/upgradable-test.git
cd upgradable-test
yarn
truffle migrate --reset
truffle exec src/exec_info.js
truffle exec src/exec_use_proxy.js
```
### example of result
```
❯ truffle exec src/exec_info.js
Using network 'development'.

MonsterToken address:  0xac37c34ddf45ea7fb5acb67655c56fb75c8250e0
MonsterTokenProxy address:  0x1eb2291b27c50caaea80189aa3a36459f39e1c0b
proxy owner address:  0xb1872d15d4dae7238a0edf027fe762a9b1a04c8e
current version address:  0xac37c34ddf45ea7fb5acb67655c56fb75c8250e0

~/src/github.com/ryokomy/upgradable-test master*
❯ truffle exec src/exec_use_proxy.js
Using network 'development'.

n (before setN):  0
n (after setN):  10
```
