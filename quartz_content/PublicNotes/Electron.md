- Why?
	- multi platform on windows, mac and linux <3
- Basic commands
    - Installation
        `npx create-electron-app .`    
    - `npx electronmon .`
- Theory
	- [Preload](https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts) → click for more info
		contain code that executes in a renderer process (html) before its web content begins loading

- VS tauri
	- Tauri
		- n
			- prerequisites - electron only need node but tauri...
				- ![[Pasted image 20240102101618.png]]
			- Time to build - in 1 video tauri took 3m while electron 20s
			- May have problems w app not working/looking good in different OS
				- [src](https://youtu.be/l4Dy5m3MnWk?t=144)
			- backend bindings needs to be written in rust
				- so if you need to modify native stuff ur fkd (not talking about classical backend)
		- y
			- faster to open app
			- much less bundle size (because electron needs to be shipped w chronium even w hello world)
- why did not even started
	- tutorials are old ages