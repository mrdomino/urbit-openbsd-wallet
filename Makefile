CFLAGS=-Wall -g -pedantic -std=c11

run: all
	[ -d node_modules ] || npm install
	./run.sh

all: ent

.PHONY: all run
