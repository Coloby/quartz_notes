
[[Lin Distros]]

- minimal
	- [[Package managers]]
	- [[Firmware-Hardware]]
	- [[Partitioning]]
	-
	- display server
		- x11
		- wayland - new, more secure, slim, still not much used
	- init systems
		- system D - usually "bloated" init system - [LS](https://youtu.be/_ljfOCiP0XM)
			- what? init system
				- first process that starts after booting, runs on bkg to manage services etc
				- launch what you need, in specific order
			- sysV
			- cons
				- one point of failure sunce it's monolythic
				- mainly red-hat project
				- kind of bloated
					- it is modular but most people implement this all togheter
					- at the same time, it's fast
				- pushes other software to be dependant on it
					- creates problems to distros not willing to use systemD
				- hides certain configs behind its own tools
					- especially bad if you want to change text files
			- pros
				- written in C
				- mantained
	- kernel - [src](https://youtu.be/_idZGJ1NgPE)
		- linux stable - 2 months stable
		- linux lts - 2 years stable
		- libre kernel - does not allow proprietary stuff
			- usually these proprietary stuff gives hardware support
				- so you might not be able to use this at all
			- released after a few days of linux stable
		- hardened kernel - non official more secure kernel
			- incompatible with systemd
			- might brake some software
		- android kernel - specific for mobile devices
		-
		- real-time & low latency
			- reduce latency between input and output of task at the cost of... much, especially multitasking
			- applications needs to be tailored to this to be useful
		- zen kernel & xan mod - better performance
		- TKG kernels - 
	- firmware blobs
	- UEFI vs legacy Bios
		- supports big storage
		- supports graphics when you boot
	- Table partitioning
		- GPT
		- MBR - no more than 2TB
	- boot loader/manager
		- [grub](https://youtu.be/b_KHtK2b5cA?t=159)
			- grub-install
			- grub-mkconfig -o /boot/grub/grub.cfg
	- Audio
		- ALSA - driver hard to use
			- cannot play 2 audio at the same time by default
			- complex config 
			- no docs
		- options
			- pulseaudio
				- everything just works
				- bad
			- pipewire - new kid in the block to kill pusleaudio + jack
	- [[file systems]]
- Initial configuration
	- archinstall 
		- mirror 
			- where software come from? better if close to phisical location like Italy
		- f
			- ![[Pasted image 20240513041544.png]]
		- img
			- ![[Pasted image 20240514001051.png]]
	- exit (chroot) - sometimes you also need to reboot
		- especially if startx gives you permission denied. Reboot and log-in with default user like e
	- keyboard layout - [src](https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration)
		- localectl set-keymap uk
		- gb is   great britain
	- resolution
		- pacman -S xorg-xrandr
		- xrandr            - see all devices
		- go to xinit
		- xrandr --output HDMI-1 --mode 1920x1080 --rate 60
	- user & add password
		- useradd -m -g wheel myNewUserName
		- passwd myNewUserName
		- nano /etc/sudoers
		- ![[Pasted image 20240514004912.png]]
	- fonts
		- quick: pacman -S tff-dejavu
	- xorg
		- pacman -S xorg-server xorg-xinit
		- add to `~/.xinitrc`: `exec dwm` or whatever u using
		- xinit
		- kill xorg server: ctrl + alt + backspace
		- Fixing xinit/startx not running without sudo
			![[Pasted image 20240523162824.png]]
			
			sudo usermod -aG tty username
			- Not sure if these stuff is useful
				![[Pasted image 20240523234648.png]]
				
				sudo chmod 660 /dev/tty2
				sudo chmod 660 /dev/tty3
				
				
				no screens found
				
				
				X -configure
				sudo cp /root/xorg.conf.new /etc/X11/xorg.conf
				
				
				`cp /etc/X11/xinit/xinitrc ~/`
				
				[  
				]()
			
			
			startx
			or
			xinit -- :1   -nolisten tcp vt$XDG_VTNR
				that's the enchanced way to do xinit
				needed in systemd
				-nolisten tcp   optional but great
	- default browser
		- xdg-mime query default x-scheme-handler/http
			- output: brave-browser.desktop
		- xdg-mime default firefox.desktop x-scheme-handler/http x-scheme-handler/https
			- to change it
	[[lin app dev tools]]

- Smaller
	- Customize startup settings
		- nano ~/.profile - these run after log-in
		- $PATH - path that lin check to run commands
		- # if have bashrc, run it
		[[ -f ~/.bashrc ]] && . ~/.bashrc
		
		export PATH=$PATH:&HOME/.scripts
		export EDITOR="vim"
		export TERMINAL="st"
		export BROWSER="firefox"
	- additional downloads
		- git 
		- neofetch 
		- resource monitor - just use *top*, lol
			- htop
			- btop
			- gtop
			- mission center [v](https://youtu.be/OLDCgvs76w4?t=351)
		- vim 
		- nano
		- cmatrix
		- man             (core repo)
		-
		- Helpers for AUR - needs base-devel & git
			- `sudo pacman -S --needed base-devel git`
			- paru
				- 
				- rustup for cargo pkg 
			- [yay](https://itsfoss.com/install-yay-arch-linux/) - mantainer ditched it and created paru
		- Paru needed
			- vscodium - `paru -S vscodium-bin`
				- if you get permissions errors is because it's setup by default to use /run/user/0, the problem is that this directory changes based on who log-in first in the TTY
			- brave bin
	- export LC_TIME='en_US.UTF-8'
		 - if not, AM/PM won't show!?






