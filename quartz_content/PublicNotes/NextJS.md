-   1
	-   what
		- Uses SSR by default throug app folder for Pre-rendering (server gives html & css loaded from JSX and client will only need to hydrate)
		- API folder - [Maybe you don't need express or any backend :D](https://www.youtube.com/watch?v=2cB5Fh46Vi4)
	-   Setup
		- `pnpx create-next-app@latest --typescript --eslint .` or `yarn create next-app .`
		- you may disable telemetry if you want
	-   What it does by default?
		- [next.js compiler](https://nextjs.org/docs/advanced-features/compiler)
		- [js and CSS files are automatically minified](https://nextjs.org/learn/foundations/how-nextjs-works/minifying)
		- [compiles CSS using PostCSS.](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- Features
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