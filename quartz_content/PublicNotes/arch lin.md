- y/n
	- -
		- rolling release
		- minimal from the start
		- arch wiki
		- unique
			- pacman + AUR
			- independent fork
			- not really pushed by any corps
			- culture/community
	- n
		- less transferable professional/enterprise skills compared to debian/fedora based distros

- low level comps
	- [[Package managers]]
	- [[Firmware-Hardware]]
	- [[Partitioning nd FS creation]]
	-
	- display server
		- x11
		- wayland - new, more secure, slim, still not much used
	- init systems
		- runit - Minimalist, service supervision, potentially fastest
			- can easily run on non‑Linux kernels eg BSD
			- fairly popular, like 3rd place
			- Extremely fast boot, simple 3‑stage init, per‑service directories
		- BusyBox - minimalist, Tiny footprint, basic runlevels
			- very popular for embedded
		- OpenRC - Dependency‑based, lightweight
			- probably second-best by popularity
			- can easily run on non‑Linux kernels eg BSD
			- Parallel startup, service supervision, no hard ties to Linux‑only features
		- s6
		- *system D* - """bloated""" init system - [LS](https://youtu.be/_ljfOCiP0XM)
			- what? init system
				- first process that starts after booting, runs on bkg to manage services etc
				- launch what you need, in specific order
			- cons
				- one point of failure sunce it's monolythic
				- kind of bloated
					- it is modular but most people implement this all togheter
					- at the same time, it's fast
				- pushes other software to be dependant on it
					- creates problems to distros not willing to use systemD
				- hides certain configs behind its own tools
					- especially bad if you want to change text files
			- -
				- mainly red-hat project
			- pros
				- still 1st place for enterprise level servers...?
				- popular if not most popular, used in
					- RHEL, SUSE, Debian, arch, etc...
				- written in C
				- mantained
		-
		- kinda legacy - slower even than sys D
			- sysV - slower & older
			- Upstart - event driven
				- Starts/stops services based on events
	- kernel type - [src](https://youtu.be/_idZGJ1NgPE)
		- downlaod kernel linux-lts 
			- 6.12.5-arch1-1 → you’re on the mainline linux package.
			- 6.6.54-lts → you’re on the linux-lts package.
			- `uname -r` - check which one u're using currently
			- u pick which u want from GRUB menu
			- how to pin a kernel version - [src](https://youtu.be/xhVS1HKwGWw?t=323)
		- custom - [[gentoo]]
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
	- [[file systems]]
	- [[audio setup lin]]
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
	- [locale](https://wiki.archlinux.org/title/Locale)
		- LC_ALL overwrites everything else
		- check
			- in use
				- localectl status
				- locale
			- available
				- locale --all-locales
				- localectl list-locales
			- save & generate
				- locale-gen
		- reload
			- $ unset LANG
			$ source /etc/profile.d/locale.sh
		- set
			- `sudo localectl set-locale LANG=en_US.UTF-8`
			- main file where locale will be read from FIRST
				- `v ~/.config/locale.conf`
			- secondary looked at files
				- v /etc/locale.gen
				- `~/.bashrc`
				- `~/.profile`
			- main script from where everything starts:
				- v /etc/profile.d/locale.sh
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
	- Bluetooth - [arch tutorial](https://wiki.archlinux.org/title/bluetooth)
		- lsmod | grep btusb          if it doesn't give any output...
			- sudo modprobe btusb
		- sp -S bluez bluez-utils
			- can also install a GUI for this like blueman - [src](https://www.youtube.com/watch?v=b329S-LFV0k)
		- sudo systemctl start bluetooth.service
		- sudo systemctl enable bluetooth.service
		- [continue follow tutorial](https://youtu.be/rOL-T31l0lQ?t=115) or
			- try         blueman-manager
	- [[lin app dev tools]]
	- [[lin App-Software]]
	- Obsidian/Software offline -> [[Obsidian]]
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

- my experience
	- 14/09/2025 - much more stable than I thought it would be
		- It almost broke but it was my fault every time
			- dependency hell
				- a package's specific version was required by electron as a dependency and it prevented me to update
				- so I signed it to be skipped from the update
				- turns out it was essential for the system :)
					- I couldn't open apps because they were expecting a certain version of that package
					- strangely enough the ones that were already open didn't care at all
				- uninstalled electron since it was an orphan package, re-updated the system and it was fixed
			- chose too little space for the root partition 
				- because of that the startup time was slower and it would become unusable out of nowhere 1 time every other day until I'd restart it
				- annoying, maybe it highs up the risk of loosing data (not that I lost anything) but nothing special
				- I know it was my bad because I had always less than 2gb of free space on the root partition...
		- every other time it was very minor 
			- like not being able to install software until I update the system 
		- maybe it's because I never had a desktop environment here?
		- It's been more than 1 year since I have arch and I update it 1 time a week or every two weeks depending on vibes, maybe I should automate it





