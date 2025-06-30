[[Pc tips - Configure windows]]

- Discovery
	- [custom windows ISO](https://www.youtube.com/watch?v=PdKMiFKGQuc)
	- https://www.youtube.com/watch?v=dO30OnTsJhk
	- https://www.youtube.com/watch?v=nVy4GAtkh7Q

- Physical 
	- position
		- never put pc on the floor [-](https://youtu.be/WpnLehvOM6E?t=75)
	- Ports
		- slowest
			- keyboard
			- mouse
			- usb headsets
- First time
	- [ ] Check if work
		- [ ] resolution
		- [ ] wi-fi
		- [ ] audio - input/output
		- [ ] bluetooth
		- [ ] periphereals - keyboard/mouse etc
		- [ ] hardware accelleration
	- [ ] configure password for your BIOS/UEFI
	- [ ] Bios
		- [ ] Check
			- [ ] RAM & other stuff are showing up
		- [ ] overclock
			- [ ] profilo XMP/EXPO o DOCP per il boost della ram
			- [ ] precision boost enhancment [-](https://youtu.be/WpnLehvOM6E?t=694)
		- [ ] Enable
			- [ ] Resizable bar for GPU [-](https://youtu.be/WpnLehvOM6E?t=718)
			- [ ] TPM
			- [ ] secure boot
			- [ ] virtualization stuff
				- [ ] VTX or SVM (AMD)
		- [ ] Disable
			- [ ] [deactivate c-state](https://youtu.be/PEYDbrjurI0?t=471)
			- [ ] ports & stuff from mobo you don't use [-](https://youtu.be/WpnLehvOM6E?t=845)
	-
	- [ ] networking
		- [ ] services running
		- [ ] sudo netstat -tulnp - disable unneded stuff
		- [ ] find best DNS e poi fai   ipconfig /flushdns
	- [ ] periphereals
		- [ ] monitor
			- [ ] refresh rate
			- [ ] color range etc
			- [ ] (aumenta pooling rate)
			- [ ] [impo aggiuntive](https://www.youtube.com/watch?v=9RslJce9c4g)
		- [ ] openrgb
		- [ ] mouse 
			- [ ] main ways
				- [ ] maybe set it up in a windows VM w proprietary software & pray it stays
				- [ ] for razer mouses
					- [ ] razercfg 
					- [ ] open razer!!  - is great
				- [ ] sudo pacman -S libratbag piper
					- then open piper
					- if you're lucky your mouse is supported & u can tweak stuff, 
					most logitech are
			- [ ] sensitivity
				- [ ]  xinput set-prop deviceid 'libinput Accel Speed' +0.7
					- [ ] I like +1
					- [ ] the higher the more sensitivity. Go negative to lower it down, 0 is neutral
			- [ ] accelleration
				- list stuff
					- xinput list-props deviceid
					- `sudo libinput list-devices`
						- **Accel Profile** field in the output. 
							- If it says `"flat"`, acceleration is disabled. If it says `"adaptive"`, acceleration is enabled
				- xinput --list
				- xinput disable ID
					- disable the id of the thing until the mouse doesn't work anymore then `xinput enable id`
					- last time was
						- SINOWEALTH Game Mouse
				- xinput set-prop deviceid "libinput Accel Profile Enabled" 0 1 0
					- The first number indicates the default acceleration profile, the second number indicates the flat profile (No Acceleration), and the third number indicates a custom profile
	- [ ] audio - [[audio setup lin]]
	- [ ] check storage - [[Storage-File-Data management]]
		- [ ] has encryption enabled, like bitlocker...
		- [ ] [paging file](https://youtu.be/v6A2clXcC9Y?t=9)
			se hai 4 desktop virtuali, almeno 6 finestre aperte in ogni momento e 9000 tab sul browser con solo 8gb di memoria... non mi darei limiti nel paging anche se perderei prestazioni. 20 GB di paging potrebbero non bastare 



- Opzionali 
	- Exteme speed up
		- Se hai un circuito di continuità e vuoi speeddare il disco
			- **Write Caching**
				Write caching is a feature included in the Vista and Windows 7 versions, enabling you to write information in a cache before it can be written on the hard drive. This helps increase the hard drive's performance as the cache is faster, and the information can be written on it much more quickly than on the hard drive itself. There is a drawback to this measure, though. You can lose the data in this temporary cache if the computer shuts down suddenly. These steps can help you enabling write caching.
		- [ ] Disattivazione antivirus (e.g. windows defender)
			Ci sono due scuole di pensiero.
			1. Sono un utente responsabile e so cosa faccio quindi non ho bisogno dell'antivirus
			2. Ho sempre bisogno dell'antivirus anche solo per gli 0 days che neanche un utente esperto può prevedere
			La risposta sta in mezzo. Usa un antivirus leggero o preferibilmente quello predefinito. Disattivarlo aumenta le prestazioni ma a quale costo?
		    - Disattivazione temporanea (dopo un po’ si riattiverà da solo)
		        
		        ![Untitled](Untitled%2052.png)
		    - Permanente (lo puoi sempre cambiare ma sei tu a decidere quando)
	        - Ha funzionato
	            - Metodo 1
	                
	                vai sul percorso di regedit: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
	                
	                ![fai click destro/nuovo/Valore DWORD (32 bit)](Untitled%201%2031.png)
	                
	                fai click destro/nuovo/Valore DWORD (32 bit)
	                
	                ![Dovrai rinominarlo in DisableAntiSpyware e dargli il valore di 1 per attivarlo. Per disattivarlo basta dargli 0](Untitled%202%2023.png)
	                
	                Dovrai rinominarlo in DisableAntiSpyware e dargli il valore di 1 per attivarlo. Per disattivarlo basta dargli 0
	                
	            - Metodo 2
	                
	                [https://youtu.be/31TDHRegTLM?t=61](https://youtu.be/31TDHRegTLM?t=61)
	                
	                vai su task scheduler e disattiva le task di wdefender
	                
	            
	            Risultato dopo i 2 metodi e 3000 riavvii:
	            
	            ![Untitled](Untitled%203%2014.png)
	            
	            ![Untitled](Untitled%204%2013.png)
	        - Extra
	            
	            ![Untitled](Untitled%205%2010.png)
	            
	            ![Untitled](Untitled%206%2010.png)
	            
	        
	        [Third party solution](https://www.sordum.org/9480/defender-control-v2-1/) (Perché fidarsi se lo si può fare da soli?)        
		- [ ] Disattiva animazioni
		- [ ] Riduci risoluzione
		- [ ] Effettua un overclock
		- [ ] Usa una vecchia versione di linux/windows
			sconsigliato per privacy, sicurezza, funzionalità e chissà cos'altro 
			[fonte](https://youtu.be/BiJ0ekYCqGo?t=404) 



