#!/bin/bash
cd /home/ec2-user/
docker-compose pull
docker-compose down
docker-compose up -d