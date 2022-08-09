#!/bin/bash
### additional SPR setup

set -a
. /spr-environment.sh

ip link set $WANIF up
dhclient $WANIF
dpkg-reconfigure openssh-server

# Resize to full disk
ROOTPART=$(df | grep " /$" | awk '{print $1}')
PART=$(echo $ROOTPART | grep -o -E "[^0-9]+")
PARTNUM=$(echo $ROOTPART | grep -o -E "[0-9]+")
growpart $PART $PARTNUM
resize2fs $ROOTPART

touch /home/spr/.spr-setup-done
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get -y --fix-broken install
apt-get -y dist-upgrade
apt-get -y install docker.io docker-compose nftables linux-modules-extra-raspi

# disable iptables for  docker
echo -ne "{\n  \"iptables\": false\n}" > /etc/docker/daemon.json

cd /containers
for x in `ls *.tar`
do
  docker load -i $x
done

#rm -f /containers

mv /lib/udev/rules.d/80-net-setup-link.rules /lib/udev/rules.d/80-net-setup-link.rules.bak
ln -s /dev/null /lib/udev/rules.d/80-net-setup-link.rules

reboot
