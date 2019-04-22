#!/usr/bin/env bash

# container on terminal, Ctrl+C to terminate
docker run -it -p 3001:3000 --name shaojiang.io -v /home/joy/Projects/append/shaojiang.io:/usr/src/shaojiang.io joycoding/shaojiang.io

# container detached, need `docker rm -f shaojiang.io` to terminate
docker run -d -p 3001:3000 --name shaojiang.io -v /home/joy/Projects/append/shaojiang.io:/usr/src/shaojiang.io joycoding/shaojiang.io

# no volumn. should build beforehand.
docker run -it -p 3001:3000 --name shaojiang.io joycoding/shaojiang.io
