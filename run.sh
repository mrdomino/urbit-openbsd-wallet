#!/bin/sh

make ent

echo -n 'Passphrase: '
stty -echo
read phrase
stty echo

( echo $phrase
  ./ent
) | node index.js
