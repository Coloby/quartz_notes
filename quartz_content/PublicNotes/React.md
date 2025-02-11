[when to use react](https://youtu.be/bcKacWr27gE?t=827) - only if website needs many btns that do fancy stuff

- Teoria
	- Cosa fa e drawbacks
		- everything client side by default
		    - Una tradizionale ract app è renderizzata client side. Tutto inizia con un html praticamente vuoto (No Pre-rendering) che si riempie grazie al JS (Hydration: components initialize and become interactive). Ciò rende difficile l’indexing dai search engines e l’essere letto dai social media bots
		- has rules to follow
			- hooks
			- bad jsx and he gives you hydratation error...
			- put key attribute when making jsx w loops
			- etc
	- react-dom - turns react components into real HTML
		- [src](https://youtu.be/hz5gbCXJ-vA?t=198)
	- basic
		- React.StrictMode renderizza l’applicazione 2 volte
		- Separate logic from ui (most of the times)
	- essential
		- render
			- carries the updated state and it's responsable to display it (with carries I mean that if there is no re-render there is no latest state for the rest of the code to be used but the one from the older state)
			- with simple code you can get it off thinking that it's probably rendering sync while in more complex code it's always advisable to expect async behavihour because of batching
				- it is generally more advisable to work with the asynchronous logic introduced by batching rather than trying to prevent batching altogether and expecting synchronous code all the time. React's batching mechanism is designed to optimize performance, and it's not recommended to rely on or assume synchronous rendering behavior.
		- batching
			-  when I change state in any part of the code, the render is scheduled to occur after the current execution context finishes executing (usually happens because of changes of much state in a single execution context etc) 
				- examples
					- it waits until, for example, a function and it's nested functions finishes executing
					- if there are any console logs right after the state has changed in, for example, a onClick event handler they won't show the updated state but rather the one from the last render
			- to be sure that we're referencing the last version of specific state we can use the useEffect hook
			- when 2 functions that modify state are called subsequentially there is a big chance that react will use a single render cycle instead than 2 to render the component/s. He does this by waiting a little bit but this does not mean that the compiler will go futher; that's a sync operation
			- batching is not garanteed
				- Certain situations, such as using async functions or event handlers executed outside the React event system, may bypass the batching process and trigger immediate re-renders for each state update.
				- batching behavior can vary depending on the specific React version and environment being used. React's reconciliation algorithm and batching optimizations may evolve over time, so it's important to consult the React documentation and stay informed about any changes or updates related to batching behavior.
				- es
					updateFormsData({
						frequency: {
							...formsData.frequency,
							\[formKey]: formsData.frequency?.[formKey]?.replace(formValue, "").trim()
						}
					})
					updateClicked({ stage3 : {...clicked.stage3, [clickedKey] : false}})
- React 19 - new important stuff
	- react compiler
		- 11/12/2024 still in beta but already used in production by meta
		- more perf! [-](https://youtu.be/6aQgiJHReCI?t=1351)
			- showcase manual vs automatic way [-](https://youtu.be/DhfeXfF_W4w?t=484)
			- avoids to pre-render 
			- memorization usememo & usefallback - no more
				- if you follow the rules of react [-](https://youtu.be/DhfeXfF_W4w?t=334)
		- eslint plugin to help the builder **and react** not to get mad [-](https://youtu.be/DhfeXfF_W4w?t=279)
			- use that
	- Suspense
		- old behaviour [-](https://youtu.be/6aQgiJHReCI?t=148)
			- goes into every one of its child components trying to render them, THEN checks if any of them needs to wait to THEN show the fallback
		- proposed
			- check 1 at the time, check if needs to wait for data and if it is, sends fallback. Then checks for other ones
		- new [-](https://youtu.be/6aQgiJHReCI?t=276)
		- what it means? [-](https://youtu.be/6aQgiJHReCI?t=182)
			- components are not kickstarted at the same time anymore, so if there's a timeout...
				- old - only the biggest timeout would count - in parallel
				- proposed - all timers count and will execute one after the other
					- worst perf compared to old
				- new - like proposed, but also pre-warm other components just right after having found one that needs to wait and giving it the fallback
					- better perf as the old

- [[State management]] - [video](https://www.youtube.com/watch?v=5-1LM2NySR0)

- Keys on .map - [srcIndian](https://youtu.be/xlPxnc5uUPQ)
	- you can use index only if
		- The items in your list do not have a unique id.
		- The list is a static list and will not change.
		- The list will never be reordered or filtered.
- Which order react load files
	- building tool
		- babel, turbopack, webpack etc
	- dependency graph
		- the way imports are situated
		- if a file have an import it will load the imported dependency before the file itself
- other
	- [dynamic vars](https://stackoverflow.com/a/7762532)
	- [HOCs](https://reactjs.org/docs/higher-order-components.html)
	-   [memo()](https://stackoverflow.com/questions/53173617/what-is-memo-in-react)
		-  prima di renderizzare un componente guarda se qualcosa è davvero cambiato, e se non è cambiato niente e quello che hai nelle [ ] non è cambiato, non renderizz












