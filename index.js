'use strict';
const kg = require('urbit-key-generation')
const ob = require('urbit-ob')
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

var config = {}
const ships = [
	153,
	7667968,
	2490880
];

const readShip = function(passphrase, i, done) {
	if (i == ships.length) {
		done()
		rl.close()
		return
	}
	const ship = ships[i]
	const pat = ob.patp(ship)
	rl.question(pat + '> ', (tic) => {
		config[pat] = {
			ticket: ob.hex2patq(tic),
			ship: ship,
			passphrase: passphrase
		}
		readShip(passphrase, i + 1, done)
	})
}

rl.question('passphrase: ', (pas) => {
	readShip(pas, 0, async () => {
		var wallets = {}
		for (var i = 0, n = ships.length; i < n; i++) {
			const ship = ships[i]
			const pat = ob.patp(ship)
			wallets[pat] = await kg.generateWallet(config[pat])
		}
		console.log("%o", wallets)
	})
})
