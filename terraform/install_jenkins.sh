#!bin/bash
sudo apt update
sudo apt install openjdk-11-jdk -y
echo "--------------------Installing Jenkins--------------------"
sudo apt -y install wget
sudo wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update -y
sudo apt-get install jenkins -y
sudo apt install git
sudo systemctl start jenkins
echo "--------------------Jenkins Password--------------------"
sudo cat /var/lib/jenkins/secrets/initialAdminPassword