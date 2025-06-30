- my beeps
	- beep -f 5000 -l 100 -r 10 -n -f 4000 -l 50 -r 10
	- beep -f 5000 -l 200 -r 10 -n -f 4000 -l 40 -r 10 -n -f 2000 -l 1000 -r 3
	-  beep -f 5000 -l 200 -r 10 -D 300 -n   -f 4000 -l 40 -r 10 -n   -f 2000 -l 1000 -d 200 -r 3
- su -c "beep -f 1000 -l 5 -r 10"
	-f frequency
	-l duration
	-r repeat
- To run without su -c ""
	sudo modprobe pcspkr
	create/modify
		/etc/udev/rules.d/70-pcspkr-beep.rules
		add `ACTION=="add", SUBSYSTEM=="input", ATTRS{name}=="PC Speaker", ENV{DEVNAME}!="", GROUP="audio", MODE="0660"`
	- reload stuff
		- `sudo udevadm control --reload`
		sudo rmmod pcspkr
		sudo modprobe pcspkr
	- make sure user has group audio