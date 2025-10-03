- to sort
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
- L
	- [distrowatch](https://distrowatch.com/)
	- repository stats [-](https://repology.org/repositories/statistics/total)
	- bashacademy [w](https://guide.bash.academy/)
	- linuxjourney [w](https://linuxjourney.com/)

- [[why linux]]

- 1
	- [[arch lin]]
	- [[OS - Options-Distros]]
	- [[Lin troubleshooting-debug]]
	- [[linux levels-iceberg]]
- specific
	- [[From Windows to Linux]]
	- [[WSL (Windows Subsystem for Linux)]]

---
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
		- [[Partitioning nd FS creation]]
		- [[Package managers]]
		- [[Lin troubleshooting-debug]]
		- [[lin security]]
		- [[systemctl]]
	- Scripting
		- [[Cron - systemd timers]]
		- [[Bash - lin commands]]
	- Other
		- HT learn best
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




