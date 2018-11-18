## Running

Run `make`.

Requires nodejs, tested on v8.12.0.

## Description

This is a hastily written HD wallet generator for OpenBSD. It includes a small program to print some entropy with `getentropy`, and a blob of JavaScript to turn that entropy into some Urbit keys. Everything is, of course, hard-coded to one particular set of ships; you should substitute your own if, heaven forbid, you decide to use this.
