#!/bin/sh

echo -n 'Passphrase: '
stty -echo
read phrase
stty echo
echo

( echo $phrase
  ./ent
) | node index.js
