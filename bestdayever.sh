#!/bin/bash

name=$1
compliment=$2

user=$(whoami)
direct=$(pwd)
date=$(date)

echo "Good Morning Master $name! I am Quixote your virtual script assistant!" 

sleep 1

echo "You're looking fine today Master $name if I do say" 

sleep 1

echo "You have a most magnificent $compliment $name, one to rival the Dwarf Lords surely!"

sleep 2

echo "You are currently logged in as $user and you are in the directory $direct. Also the date is $date."
