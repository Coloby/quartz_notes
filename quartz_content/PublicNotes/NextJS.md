-   1
	-   what
		- Uses SSR by default throug app folder for Pre-rendering (server gives html & css loaded from JSX and client will only need to hydrate)
		- API folder
	-   Setup
		- `pnpx create-next-app@latest --typescript --eslint .` or `yarn create next-app .`
		- you may disable telemetry if you want
	-   What it does by default?
		- [next.js compiler](https://nextjs.org/docs/advanced-features/compiler)
		- [js and CSS files are automatically minified](https://nextjs.org/learn/foundations/how-nextjs-works/minifying)
		- [compiles CSS using PostCSS.](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- Features
	- Using it as Backend 
		- [[API folder]]
		- use server & server actions
			- what?
				- execute code from client to server [-](https://youtu.be/yUm-ET8w_28?t=117)
				- kind of like functions that act like exposed endpoints that you can call from the client but execute on the server
				- it's a POST request under the hood
				- great for form submissions & data mutations
			- DANGER
				- especially if you use it **top-level**
					- anything under the file will be visible/accessible to the client but executed server side, we're exposing endpoints: kinda like creati API stuff ANYONE can call
					- can get an eslint rule for that
					- make a rule that whenever changes occur in X file/dir, a mantainer/owner needs to review it [-](https://youtu.be/yUm-ET8w_28?t=1540) & when you importa any of the functions there
				- also if you **export** and don't even use the function!! [-](https://youtu.be/yUm-ET8w_28?t=441) [2](https://youtu.be/yUm-ET8w_28?t=677)
					- also if user can't get to the route where the action is called, it doesn't matter, they can still access it [-](https://youtu.be/yUm-ET8w_28?t=1048)
					- they get exposed as endpoints and you can hit them like you'd do w an API
					- make sure that every action you make verify if user can/should do that
				- anyone can give any aurgument to an action [-](https://youtu.be/wh4kGL1EIGM?t=275)
					- sanitize the hell out of it
			- no need for useEffect & putting them on forms? [-](https://youtu.be/O94ESaJtHtM?t=349)
			- 
	- [Rendering types in app folder](https://www.youtube.com/watch?v=gSSsZReIFRk)
	- [Routing](https://youtu.be/f-6GAntaum4?t=271)
		- generateStaticParams
			- used in PW under [slug] for generating blog articles at build time
		- Maybe only for pages dirs
			- If index.js file is into: MyFolderName, then the route would be 
				- localhost:3000\MyFolderName - and it would load index.js
			- [Nested dynamic routes](https://www.youtube.com/watch?v=nfAxNTmme64)
			- [More nesting and catch all route](https://youtu.be/ZHn726VDoIY?t=418)
			- [Advanced](https://youtu.be/8jhLvnm7fmE)
	- Metadata
		- You can also create it based on the output of a js file
		- Social based
			- [discord](https://www.reddit.com/r/discordapp/comments/82p8i6/a_basic_tutorial_on_how_to_get_the_most_out_of/) (scroll until bottom)
		- Pages folder
			- <Head /> component
				- \_document.js and \_app.js are used to override the default HTML document that Next.js uses. The `<Head>` component can be used in these files to add global meta tags. The first would load them by server-side while the other will do it both by client and render side.
			- You should not use `<title>` tag in the _document.js
	- Fetching - (v14 app folder)
		- getStaticProps (SSG) swapped to [default behaviour](https://youtu.be/8pzIuLFuv6U?t=1087)
			- just add async to a function that fetches stuff and now is the same as using getStaticProps
		- getServerSideProps (SSR) swapped to [{cache: "no-store"}](https://youtu.be/8pzIuLFuv6U?t=1594)
			- ![[Pasted image 20240223164236.png]]
		- (ISR) to [next:{revalidate: 3}](https://youtu.be/8pzIuLFuv6U?t=1642)
			- ![[Pasted image 20240223164326.png]]
	- You need to add sharp package when not deploying on vercel
		- To get [this error](https://nextjs.org/docs/messages/sharp-missing-in-production), just build and start the project
	- .env
		- .env
			- if you use .env on client-side 
				- you need to replace the .env with a version prefixed by `NEXT_PUBLIC_`
				- even if a version of an environment variable without the `NEXT_PUBLIC_` prefix doesn't exist, Next.js will still understand that it's what you're referring to when you use it in server-side code.
	-
	- Archived (still useful)
		- Rendering types in pages folder
		-   [D](https://youtu.be/DgLb5E6omTg?t=237)[ata fetching](https://youtu.be/eWObYvG0-lI?t=619)
			-   [getServerSideProps](https://youtu.be/DgLb5E6omTg?t=237)
				works in request time
			-   Sintassi
				```jsx
				export const getServerSideProps = async() => {
					fetch()
					return {
						props : {
							qualsiasiCosa : ""
						}
					}
				}
								```
			-   [getStaticProps](https://youtu.be/QcUU89xKu70?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&t=561)
			- works on build time
- v15
	- ez transition to upgrade 
		- npx @next/codemod@canary upgrade latest
		- npx @next/codemod@canary next-async-request-api .
			- params prop properties needs to be awaited now
	-
	- from cached by default to uncached
		- more here [-](https://youtu.be/I-yTjdloeuQ?t=247)
		- fetch, Client router cache, GET route handler
		- can opt-into auto caching again
		- Fetch
			- ![[Pasted image 20241211032703.png]]
			- no-store = default
	- Form component [-](https://youtu.be/I-yTjdloeuQ?t=1068)
	-
	- unstableAfter & waitUntil [-](https://youtu.be/I-yTjdloeuQ?t=828)
		- only for vercel?
	- easier self-hosting [-](https://youtu.be/I-yTjdloeuQ?t=1180)
	- more security for server actions [-](https://youtu.be/I-yTjdloeuQ?t=1266)
	-
	- Instrumentation & error tracking enhanced for library devs [-](https://youtu.be/I-yTjdloeuQ?t=994)