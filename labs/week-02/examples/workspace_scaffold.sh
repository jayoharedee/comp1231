#!/bin/bash

echo "What is your student ID?"
read student_id

echo "What course is this?"
read course

cd $HOME

mkdir $student_id
cd $student_id

mkdir $course
cd $course

mkdir .ssh

echo "What is your email?"
read email

# ensure you are in your home directory by using the `cd` short cut before executing the following
ssh-keygen -t rsa -b 4096 -C $email -f $HOME/$student_id/$course/.ssh/id_rsa

cat $HOME/$student_id/$course/.ssh/id_rsa.pub
