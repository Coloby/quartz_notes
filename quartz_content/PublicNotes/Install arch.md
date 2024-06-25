[[lin App-Software]]

- Discovery
	- TPM? it can lock you out
	- xresources
		can save variable colors

- Choose distro & minimal
	- Distros
		- essential theory
			- highest standard of free software is FSF approved
			- it's a pack of pre-made decisions - [src](https://youtu.be/t9e3NvTnCOA?t=260)
			- always check [FSF](https://www.gnu.org/distros/common-distros)
			- Debian, Fedora, Arch are the most different from each other
				- other distros are children, for specific use-cases, or bad
		- software dev models
			- what?
				- rolling release - updates as soon as ready & tested
					- don't have to re-install system, just update
					- doesn't mean stuff are not stable, they still get tested
					- great for hardware compatibility
					- latest software versions
					- details - it has no
						- version numbers (at most there's date or kernel ver)
						- fixed release cycles 
						- end-of-life dates
					- cons
						- bad for new users - stuff breaks more often
						- you need to update stuff at least 1 time a week - [src](https://youtu.be/212yJEH8-iA?t=271)
						- you can't really say version number to get help
				- stable release
				- details
					- core software/libraries kernel on majors releases
					- security, patches, on minor releases
					- it has version numbers
				- cons 
					- no "cutting edge" software
					- if there is problem, need to wait more for fix
					- eventually you'll version will meet end-of life
					- some distros need you to re-install, no upgrade
		- distros to care about
			- debain - sr
			- arch - rr
			- fedora - sr
			- void linux - no systemd, 2 pkg manager
				- has void installer
				- not a fork
					- pkg manager & build system from scratch
				- pkg managers
					- binaries
					- compile from source
					- XBPS (X Binary Package System)
						- efficiency and the ability to handle partial upgrades
						- allows users to roll back certain packages
				- philosophy
					- open source software
						- separates free and non-free software into different repos
					- aims to be minimalistic and efficient
						- runit & fast pkg managers
					- no AUR but community driven
						- all packages in its official repositories are vetted and maintained by the Void team & community
		- Distros
			- rr
				- manjaro
				- arch
				- artix
				- void linux
			- sr
				- Debian - nooby friendly - yearly release cycle
				- fedora - semester release cycle
				- ubuntu
				- popOS
				- mintOS
		- parent distros
			- slackware - old
			- Debian
			- Arch
			- redhat
			- freeBSD
			- openBSD
			- openSuse
			- android
			- gentoo
		- Options
			- OG
				- Gentoo - harder to install than arch. Source based OS
					- "[Linux end game](https://youtu.be/8QcI43IwkVc?t=507)" -MentalOutl
					- great to learn linux
					- need to compile most stuff from source
						- you can compile stuff to delete bloat and custom optimize it
							- need to know use flags, kernel modules to to these stuff
						- portage pkg manager
					- meta distro - can support many architectures
			- Privacy
				- tails
				- qubeOS
				- whonix - virt machines that looses memory like tails
			- lightweight - I would still go to minimal arch though
				- Antix - 300mb ram idle - no systemD, debian, 32bit
				- Lubuntu - 500mb ram idle
					- Ram [src](https://youtu.be/xvg3wnAzru0?t=553)
						![[Pasted image 20240515172907.png]]
				- Peppermint - 652mb ram with xfce idle
				- Tiny core - smallest graphical env distro, not really usable
			- pen testing - why not just building it from debian?
				- kali - debian with pen test bloat
				- parrot - debian with pen test software
			- BSD
				- FreeBSD - also used on desktops
					- difference
						- BSD license instead of GPL
						- Lower adoption & compatibility w hardware
					- Similarities
						- FOSS
						- UNIX
						- Most of the software is from linux
				- OpenBSD - one of the most secure OS for servers mostly
			-
				
			- meh
				- Artix - arch but uses openRC instead of systemd
				- clean linux - fast if using intel
				- slackware - 
				- solus - new desktop env
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
		- grub
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
- Initial configuration
	- archinstall 
		- mirror 
			- where software come from? better if close to phisical location like Italy
		- f
			- ![[Pasted image 20240513041544.png]]
		- img
			- ![[Pasted image 20240514001051.png]]
	- exit (chroot)
	- keyboard layout - [src](https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration)
		- localectl set-keymap uk
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
				](https://www.phind.com/search?cache=olrj1x62lgkn3z3iffkit46t)
			
			
			startx
			or
			xinit -- :1   -nolisten tcp vt$XDG_VTNR
				that's the enchanced way to do xinit
				needed in systemd
				-nolisten tcp   optional but great
- Essential software
	- Window manager - [tier list](https://www.youtube.com/watch?v=xysISs0mcj8)
		- dwm - [src](https://youtu.be/6MaTMuFVGck) (automatic)
			- usage
				- tldr - 
					- if you want to go dumb & simple, modify config.def.h & then do the common `make & sudo make install` or something
						- make - compiling to get binary
						- make install - put binary to usr/local/bin
				- config.def.h - default, where you should modify stuff
					- then run `make` to create another config.h with same code as config.def.h (should make backup of config.h because you'll lose changes)
						- *you're supposed to merge this on config.h*
					- that's where automatic patches are being applied, not on the config.h
					- should remain as is, without modifications
				- config.h - actual settings being used
					- that's where you should make most of your modifications
					- needed to compare changes from the config.def.h, especially when patching
			- autostart apps
				- rule to always check if window class is \_firefox... if it is, it's going to put it on tag 1 in non-floating mode on the first monitor
					- ![[Pasted image 20240614232302.png]]
				- we add this line to .xinitrc create window with specific class & application
					- ![[Pasted image 20240614232425.png]]
			- scratchpad! - [src](https://youtu.be/7NOX9ssm9tQ?t=328)
			- great config [from distrotube](https://www.youtube.com/watch?v=7pfxHoAnCkE)
			- enable patch writing 1 - [src](https://youtu.be/92bkauK3qpE?t=167)
			- `sudo pacman -S libxinerama libxft ORRRRRR-> libx11`
		- dwl - dwm for wayland
		- awesome - dwm fork with everything by default
		- qtile - more configurable dwm
			- [src1](https://youtu.be/-FpPwicjTKU?t=11) [2](https://www.youtube.com/watch?v=3EtaUHZZHXw)
		- i3 - (manual)
		- sway - i3 but for wayland
	- File manager - thunar
		- [useful utility for drag file](https://www.youtube.com/watch?v=Z0YCn-Wrcjo)
		-
		- thunar - xfce one - works well with WMs - 54mb ram
			- well customizable
			- more settings than nautilus but no more than dolphin
			- less fast to boot than pcmanfm but as faste after first window
			- great defaults overall
			- written in C and GTK+
		- Pcmanfm - 35mb ram - fastest to boot
			- written in C and GTK+
			- cons
				- bad default 
					- style
					- options
					- menu positions
		- spacefn - pcmanfm but with split view & more options -gtk3...
		-
		- nemo - cinnamon one
			- plugins
			- cons
				- no split
				- no shortcuts?
		- doplhin - really customizable + works best w plasma
		- nautilus - not many options (gnome based...)
		- krusader - 2 split panel
	- Text editor - vscodium & nvim
	- Browser - mainly brave, firefox=privacy
		- Main [src](https://youtu.be/lGKonh65WiU)
		- Forks are less mantained than original
			- libre wolf
		- Real options
			- chromium - lol
			- brave - less privacy more functionality
			- hardened firefox - best privacy/functionality
		- bad ones
			- unmaintained
				- iceCat - could be n1...
	- Terminal - st
		- time tree /          test
			- Alacritty
				![[Pasted image 20240526191659.png]]
			- ST
				- ![[Pasted image 20240526191754.png]]
		-
		- Alacritty
			- mainly for wayland but also x11
			- multi-platform
			- GPU acelerated
			- written in rust
			- cons
				- no tab support
				- no ligatures
		- kitty
			- tab supp & ligatures
			- gpu accelerated
			- cons - no multi-platform
		- st - great if you really go deep into customization
			- opens faster than alacritty
		- xterm
		- criterias
			- GPU accellerated
	- status bar - dwmblocks
		- dwmblocks - clickable stuff
		- - [your own](https://youtu.be/NuS_JLkQbKc?t=130) script to put stuff there
		- add patch to do clickable stuff - [src](https://youtu.be/UP2QpHmcgyk?t=467)
		- slstatus - suckless, not clickable
		- status bar - clickable block - [src](https://www.youtube.com/watch?v=UP2QpHmcgyk) - [more](https://www.youtube.com/watch?v=MNwpdqD_I8Y)
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
	- selector - dmenu - [src](https://www.youtube.com/watch?v=R9m723tAurA) - [wmee](https://www.youtube.com/results?search_query=dmenu+fix) - [patches](https://youtu.be/bBJ0qxqzlxk?t=399)
		- rofi
		- crazy stuff you might do
			- emoji
			- clipboard
			- apps
			- files/scripts
			- shutdown
			- shutdown xorg?
			- xrandr
	- shell - [ZSH](https://youtu.be/eLEo4OQ-cuQ)
		- [[Bash]] - standard boring but needed
		- ZSH - fancier configurable bash
			- syntax highlight
			- better autocomplete
		- Fish - pre-configured modern ZSH
			- even better autocomplete
				- ![[Pasted image 20240515044756.png]]
			- cons
				- non posix compliant
					- different syntaxt to do scripting
						- stuff like loops, ifs, etc
	- additional downloads
		- git 
		- neofetch 
		- just use *top*, lol
			- htop
			- btop
			- gtop
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
	- tiny feats
		- [notifications](https://www.youtube.com/watch?v=XWlbaERuDP4) - dunst -(useful for volume) or notify OSD
		- screenshots - 
			- spectacle - bloated because of KDE but can edit
				- doesn't have text with background
				- just worst than flameshot
				- bloated - 500mbs
			- [flameshot](https://youtu.be/S4Qx-mKdVaw?t=912) - many feats but bloated & bad edit
				- [can edit img](https://youtu.be/9nTziHcTJsA?t=179) but doesn't have text with background
				- has too much UI
				- 110mbs...
			- [meim](https://youtu.be/S4Qx-mKdVaw?t=1242) - no ui, but has feats & extensible w dmenu
			- sharex through wine is not the best options... bloated
		- Bluetooth - bluez
		- Compositor - picom - blur, transparency, shadow...
			- optimization, etc
			- picom
		- Clipboard manager - clipmenu
			[xclip](https://www.youtube.com/watch?v=T2fDWJKeotM) - simplest, no history - dependency of clipmenu
			[cp](https://www.youtube.com/watch?v=SOtLR6qBb90) - more useful for scripts - default
				copy "goddamit"
				note0 "tha'ts a goddamit"
			[CopyQ](https://youtu.be/DhfwWH5N3IA?t=397) - tags and bloat
			- clipmenu - great simple dmenu history
				- add this to xinitrc
					systemctl --user import-enviroment DISPLAY
				`systemctl --user status clipmenud`
				`clipmenud`
				`systemctl --user enable clipmenud`
		- GTK theme - lxappearence
			- widget
				- paru -S 
					- tokyonight-gtk-theme-git
					- nordic-theme
					- dracula-gtk-theme
			- Cursor
				- macos_cursor (using this)
					- [whitesur-cursor-theme-git](https://aur.archlinux.org/pkgbase/whitesur-cursor-theme-git) (alternative)
				- bibata
		- Hotkeys/shortcuts+misc
			- other
				- remap caps
					- simple way to remap it to escape/hyper - [src](https://youtu.be/oSSkJ4yq4UA?t=90)
				- useful for
					- hyper key - usually a unique combination
						- Ctrl + Alt + Shift + Super
					- meta keys - alt gr
				- espanso - text expander - [github](https://github.com/espanso/espanso)
					- installation
						- AUR pkgs
							- ![[Pasted image 20240616034742.png]]
							- pensonally installed espanso-x11 but it was really slow to compile...
					- to set up stuff go to espanso folder (probably in .config), then match folder and add another yaml or use base.yml - [src](https://youtu.be/zoeQ5yNoXsY?t=315)
			- hotkey to command
				- sxhkd - [src](https://youtu.be/2ClckQzJTlk?t=390) ([2 years ago](https://github.com/baskerville/sxhkd)) - 
					alt + a
						echo "hi!!"
				- -xbindkeys - <sxhkd but mantained & most popular
			- commands to hotkey
				- xdotool - keys through comman - [6months ago](https://github.com/jordansissel/xdotool)?
					- e.g.          xdotool key ctrl + t
					- [delay problem](https://www.google.com/search?q=why+I+have+to+use+sleep+before+xdotool+when+using+sxhkd&oq=why+I+have+to+use+sleep+before+xdotool+when+using+sxhkd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEIMzc2OWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8)
						- I had to use sleep 0.1, if not it would not work sometimes
						- or even ~ before the shortcut
						- other suggest keyup
						- seems like the application is preceding xodotool so that instead of the output (xodotool command) it takes the input (shortcut setted up to triggher xodotool command) 
				- -dotool - same but for wayland & x - [github](https://git.sr.ht/~geb/dotool)
			- hotkey to hotkey
				- xcape - unmantained - [6 years ago](https://github.com/alols/xcape)
				- -xmodmap - "useful" to remap keys - [mantained](https://gitlab.freedesktop.org/xorg/app/xmodmap)
					- cannot set a key to type key combinations (e.g., Ctrl+C), run scripts, or change key behavior based on the currently active application
		- Calendar/Todo stuff - vim with plugins
			- default cal & date commands - [src](https://youtu.be/Gl4DKyicKKg?list=PL-p5XmQHB_JQ5YQYI7zI1uVSepG-0UPL-&t=85)
			- [Calcurse](https://youtu.be/hvc-pHjbhdE) - why not using when + notetaking instead?
			- [when](https://youtu.be/LslUKm1mqkw?t=276) - use cal&date first todoist terminal based
				- ![[Pasted image 20240601013217.png]]
	- RSS reader - [newsboat](https://youtu.be/dUFCRqs822w?t=248)
		- 
	- e-mail client - 
		- neomutt - terminal, configurable
			- [mutt wizard](https://youtu.be/mPiQuWbF57M)
		- Thunderbird






- color picker - xcolor [2 years ago](https://github.com/Soft/xcolor) still simple & good
- fancy
	- cool-retro-term
		- ![[Pasted image 20240623035927.png]]