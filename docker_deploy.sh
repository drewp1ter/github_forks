#!/bin/bash

docker save mufdvr/git_forks | bzip2 | ssh -p 4181 -o "StrictHostKeyChecking no" mika@185.175.119.14 'bunzip2 | docker load && ./start_git_forks.sh'