# oclif-piping-error

## How to run

```bash
$ npm install
$ ./bin/run hello | head -n 1
# hello world from /Users/juan/code/oclif/with-piping/src/index.ts!
# Error: write EPIPE
#     at _errnoException (util.js:1022:11)
#     at WriteWrap.afterWrite (net.js:867:14)
```
