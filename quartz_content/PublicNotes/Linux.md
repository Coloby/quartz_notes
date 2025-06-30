- Discovery
	- 1
		- Lin kernel map [w](https://makelinux.github.io/kernel/map/) out of date?
			- ![[Pasted image 20250617000039.png]]
	- [[Lin troubleshooting-debug]]
	- arch
		- TPM? it can lock you out
		- xresources
			can save variable colors
	- security
		- https://youtu.be/dSBhMzDkQ24?t=4
		group policy object
	- grep
	- [fzf](https://youtu.be/ghWECXWi9kU?t=590) -
	
	[entr](https://youtu.be/9KAp_zWeI34?t=38) - triggher command on file update 
	[youtube-dl](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVk0U1NvQkM3TW5GVlExMXU3X002bEM5MlJUZ3xBQ3Jtc0tuUmVJRWhPMzB5NWZLNjhjaTR5VlFZeDZWbnVfdlFfVDNqTUF2TWphQ2N5RHk3QWhZZmllZGFmMmdkaWRzS3liaDBuVFVmYmU3QWhucjdFaFVhX09SRURwNVNMRW5sWDNWR053NF91YmdFVjdra2JvOA&q=https%3A%2F%2Fgit.rip%2Flucifer%2Fyoutube-dl&v=rsUTtpb3k-w) to download vids
	- download 
		- youtube stuff - [src](https://youtu.be/_UrDsbs0-OE?t=952)
		- paywall accademic article 
		- images in browser more easily - [src](https://youtu.be/g2RtjO_jXvY?t=353)
	- resources
		- https://guide.bash.academy/
		- https://linuxjourney.com/
	- Use GNU utilities
		- https://youtu.be/m7no4O-JKDA?t=445
	[nix](https://www.youtube.com/watch?v=BwEIXIjLTNs) pkg manager
	- Libre setup
		[parabola OS](https://youtu.be/4Jx-5Zp28VQ?t=24) - arch but with free software
		libre boot
	- make your own
		- IRC
		- e-mail server
	- [linux utilities?](https://youtu.be/V7lG4bont7g?t=440)
	- Kali Linux On Android 
		[Device NO ROOT Easily, Kali Linux On Android](https://www.youtube.com/watch?v=1YNRA0S1pZw&ab_channel=Haxoid)

- [[lin App-Software]]
- [[Lin Distros]]
- [[Lin troubleshooting-debug]]
-
- [[From Windows to Linux]]
- Other
	- [[Linux software compatibility]]
	- [[WSL (Windows Subsystem for Linux)]]
	- [[Distrobox]]
	-
	- 2
		- [[Lin audio shorcuts]]
		- set default file browser
			xdg-mime query default inode/directory
			xdg-mime default thunar.desktop inode/directory
			jxdg-mime query default inode/directory
		- understand which key you're pressing
			- sudo showkey
		- terminal tricks
		- make folders
			![[Pasted image 20240922151845.png]]
		cd -
		tail -f logfile.log
---

- Mentors
	- [Mental Outlaw](https://www.youtube.com/@MentalOutlaw/videos)
	- [Luke smith](https://www.youtube.com/@LukeSmithxyz)
		- specialities
			- linux
			- economy
			- linguistic
			- country side
	- only thinkpad
		- [Sebi](https://www.youtube.com/@SebisRandomTech/search?query=480)
		- [bigair](https://www.youtube.com/watch?v=ZPzFrgV62hg)
- Theory
	- [[Lin Booting process]]
	- Re-install linux fast
		- [[Ansible]]
			- learning curve
			- great control
		- Clonezilla - duplicate partitions to other systems 
			- simplest
			- probable that the system won't work because it's configured with different hardware
			- not easiest to make changes w individual machines
			- bandwidth intensive
		- ArchISO - custom iso
			- Not as flexible for making changes post-deployment
		- custom installation script
			- great control
			- time-consuming
			- example bash script dotfiles - [src](https://youtu.be/W4Dq_4seq8w?t=343)
				![[Pasted image 20240621165754.png]]
		- virtual machine
		- cloud images
	- basic
		- ways to install
			- Main repo
			- AUR
			- compilation usually trhough repos
			- docker
			-
			- nix?
			- specific distro package
				- .deb
			- Virtualized thinghies
				- appimage - kinda like a slower docker
					- runs on different distros
					- doesn't need sudo to install
					- self-contained & has its own dependencies
					- decentralized - no central store like others
						- but there exist appimagehub
					-
					- big in size & memory footprint
				- flatpack - by redhat
					- flathub
				- snaps - worst
					- closed source...?
					- by Canonical, the company behind Ubuntu
					- snap store
			- downloading binaries - discouraged for security
		- [[Lin folders-file structure]]
		- [[Partitioning]]
		- [[Package managers]]
		- [[Lin troubleshooting-debug]]
		- [[lin security]]
		- [[systemctl]]
	- Scripting
		- [[Cron jobs]]
		- [[Bash - lin commands]]
	- Other
		- how to learn best
			- man
			- arch wiki
			- understand how the system work to make a diagnose of the symptoms rather than just looking for the fast fix
		- what's GNU?
		    - general
			    - when people say linux they refer to linux kernel + GNU. The latter is "the actual OS"
		    - Story
			    - UNIX was exclusive, so GNU was born to make it more accessible
			- core utilities like cd, ls, touch, etc
			- gcc - compiler
			- GPL based
		- Package Distrubutors
			- offcial distro
			- AUR
			- flatpack
			- snap

- lin install
	- KVM install
		- install starting stuff
			- pacman -S libvirt qemu-full virt-manager
			- systemctl enable & start libvirtd
				- check status for errors
			- sudo usermod -G libvirtd -a e
		- Compatible? kvm + qemu arch wiki
			- check if CPU supports it
				- LC_ALL=C.UTF-8 lscpu | grep Virtualization
					- virtualization type: full
						- means that's supported!
				- or
				- grep -E --color=auto 'vmx|svm|0xc0f' /proc/cpuinfo
				-If nothing is displayed after running either command, then your processor does **not** support hardware virtualization, and you will **not** be able to use KVM.
			- check if kernel modules are available
				- zgrep CONFIG_KVM= /proc/config.gz
				-The module is available only if it is set to either `y` or `m`.
			- are kernel modules automatically loaded?
				- lsmod | grep kvm
					- ![[Pasted image 20240721071712.png]]
				-If the command returns nothing, the module needs to be loaded manually; see [Kernel modules#Manual module handling](https://wiki.archlinux.org/title/Kernel_modules#Manual_module_handling "Kernel modules").
				- to install kvm module
		- I was lost because I could not install the kernel module kvm 
			- [mental outlaw](https://www.youtube.com/watch?v=wxxP39cNJOs)
			- [dt](https://www.youtube.com/watch?v=p1d_b_91YlU)
	- Da vinci resolve install
		- paru davinci-resolve
		- options
			- opencl-driver
				- opencl-rusticl-mesa 
					- (modern foss amd)
			- java thinghy
				- chose the first one

- Other
	- pkg cache gets big
		- /var/cache/pacman/pkg
		- [pccache](https://youtu.be/V7ABBlXcn0g?t=218)	
	- services
		- Start a service every startup - sudo systemctl enable SERVICENAME
		- Start a service right now - sudo systemctl stakrt SERVICENAME
	- delete
		libxtst-dev
	- [resolve on linux](https://www.youtube.com/watch?v=AT3sC5VfZEs)


