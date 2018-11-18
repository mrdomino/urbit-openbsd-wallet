#include <err.h>
#include <stdio.h>
#include <unistd.h>

#define ENY(S) \
	do { \
		if (-1 == getentropy(buf, (S)/8)) { \
			err(1, "getentropy"); \
		} \
		for (i = 0; i < (S)/8; i++) { \
			printf("%02hhx", buf[i]); \
		} \
		puts(""); \
	} while (0)

int
main(void)
{
	int i;
	char buf[384 / 8];

	ENY(384);
	ENY(64);
	ENY(64);

	return 0;
}
