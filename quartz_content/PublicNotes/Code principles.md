[[Coding Design patterns]]

Summary: give a SOLID DRY KISS

- 1. 
	- HT give names
		- Avoid adding the type in the name e.g. viewerArray when unneded
			- Sometimes there's no better alternative though
				- In cases where the 2 refer to the same thing I find best to add the type because the alternatives seems too verbose or less clear and may confuse devs more
				-  const videoLengthString = element.parentElement.parentElement.parentElement.parentElement.innerText
			        - const videoLengthArray = videoLengthString.split(":");
			        - if (videoLengthArray.length === 2) videoLengthArray.unshift("0")
		1. Expand abbreviations when needed
			calculate(n) -> calculate(num)
		2. Use names to give nuance in the code in a specific way
			- before
				- ![[Pasted image 20230803171802.png]]
			- after
				- ![[Pasted image 20230803171811.png]]
		3. No magic values
			giveMeThat("thing") -> giveMeThat(pizzaIWantToGet)
	- KISS - Keep It Simple, Stupid
		- [[Find the best laziest alternative]]
		- don't overengineer expecially at the start and focus on making stuff work first
	- DRY - Don't Repeat Yourself (with the code)
- 2
	- SOLID
		- Single responsability - don't make the code be a jack
			- a function should do 1 thing and not multiple at the same time
		- [Open/Closed](https://youtu.be/-ptMtJAdj40?list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&t=83) - add but be esitant to modify code
		- Liksov substitution
		- [Interface segregation](https://youtu.be/q1qKv5TBaOA?t=206) - give modules just the necessary to talk w other one
			- if he's communicating with the DB he don't need the whole logic but just a query function maybe
		- [Dependency inversion](https://youtu.be/q1qKv5TBaOA?t=240) - let 2 modules communicate just with abstractions not directly
