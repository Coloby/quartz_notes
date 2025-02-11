[[Dependency management - package.json]]

- yyy
	- wtf 
		mdx-embed
		Sandpack
		1. Bundle image within a mdx file using [remark-mdx-images](https://www.npmjs.com/package/remark-mdx-images)

- Theory
	
- Tools to evaluate [-](https://javascript.plainenglish.io/7-tools-to-choose-the-right-npm-package-7baf47259ae0)
- General evaluation tool
	- tldr
		- does it solve the problem?
		- longevity
		- popularity
	-
	- Basic questions
		- [ ] Open source
		- [ ] license
		- [ ] self hostable
	- Start writing criterias like this. Have goals.
	- Ask AI
	- google & reddit - popular options & reputation
	- check past knowledge - [[lCode]], [[Notes]]
	- [ ] Mentors
		- [ ] Theo
		- [ ] Webcody
		- [ ] 2
			- [ ] webdevsimplified
			- [ ] fireship
	- [ ] Popularity
		- general
			- npm/docker
		- starts
		- active branches
	- [ ] Longevity
		- general 
			- Language - is it so niche that no much contributors?
			- Mantainers popular and w good rep?
		- Pulse - only owner making changes?
		- Lines of code - the less, the more secure
		- issues - might signal a lot of problems or great issue reports

- analytics
	- [posthog](https://posthog.com/) - [fonte](https://youtu.be/hhbHMY0rvv8?t=16214)
	- [plausible](https://plausible.io/) - [fonte](https://youtu.be/hhbHMY0rvv8?t=16091)
	- no
		- google analytics
			- seems like they're doing bad stuff + illegal in eu (included Italy) because of GDPR
- Architecture
	- [[tRPC]]
	- [[WebRTC]]
	- [[Bundling and tools]]
- Performance
	- [partytown](https://partytown.builder.io/getting-started)
		- cos'è? 
			- fa le stesse cose dei service workers ma è meglio di loro solo quando usi builder.io
				- let's say I don't use builder.io. Would partytown be useful compared to standard service worker? as far as I understand the main takeoff is that you can put some scripts in another thread to reduce block time but I can do it with both partytown and default service workers
				- chat GPT answer
					- If you're not using Builder.io or its content editor, the benefits of Partytown over standard service workers may be limited. The primary advantage of Partytown is its integration with Builder.io's server-side rendering (SSR) and dynamic content capabilities.
					If you're looking for general offline capabilities, caching, and background scripting in a web application, standard service workers are a more appropriate choice. Service workers are a core web platform feature and offer more flexibility for implementing various offline and caching strategies.
						
					Service workers can handle tasks such as caching static assets, intercepting network requests, handling push notifications, and performing background syncing. They operate on a separate thread, allowing for asynchronous processing and reducing blocking time.
					
					While Partytown provides the ability to execute scripts in a separate thread to avoid blocking the main thread, achieving similar functionality with service workers is also possible. Service workers can perform background tasks and handle network requests, effectively offloading processing from the main thread and improving performance.
					
					In summary, if you're not using Builder.io or its content editor, and your focus is on general offline capabilities and caching, standard service workers would be a more suitable choice. They offer broader functionality and can be used to optimize the performance and offline experience of your web application.
	- Optimization
		- webGPU - to make anything faster ([low support](https://caniuse.com/?search=webGPU))
		- npm install @next/bundle-analyzer
- DX 
	- [[Tailwindcss]]
	- [json server](https://www.npmjs.com/search?perPage=20&page=0&q=json%20server&ranking=maintenance)
	- [[Prettier]]
- UI
	- tailwind typography plugin
		- transitions problem
			-  plugin defaults transitions to 0
			- so I tried
				```css
			  .prose * {
			
			    transition-duration: 1000ms !important;
			
			  }
			
			  .prose > * {
			
			    transition-duration: 1000ms !important;
			
			  }
					```
				- and noticed meaningful differences in the timing. The paragraphs and header text were so much slower to change color.
			- conclusion
			- transitions goes hard on GPUs escpecially when so many of them are trigghered at the same time and it may create inconsistencies
			- so I just used the .prose > * and I was ok with stuff not being consistent (it's almost cool at the end)
	- [tremor](https://github.com/tremorlabs/tremor) for dashboards
	- VFX
		- particles.js
		- 3D stuff
		- Rendering
			- [[Three.js]]
			- babylon.js (more fore game dev) [npm](https://www.npmjs.com/package/@babylonjs/core)
		- Animation
			- [motion](https://github.com/framer/motion) (framer motion) [npm](https://www.npmjs.com/package/framer-motion) -> 2M - only react
			- [gsap](https://github.com/greensock/GSAP) [npm](https://www.npmjs.com/package/gsap) -> 380k - framework agnostic
			- [anime.js](https://www.npmjs.com/package/animejs) 46k  [npm](https://www.npmjs.com/package/animejs) -> 144k
- features
	- Drag & drop
		- [theo](https://youtu.be/gaNLnuwoFRI?t=913)
	- [[NLP - Natural Language Processing]]
	- Markdown
		- [[MDX]]
		- [[Unified.js]]
		- markmap
			- it asks for 3rd-party-requests over the internet
			- markmap-cli - less flexibility but simpler
				- can also manage 3rd-party-requests
			- render vs view
				- render - SSR
				- view - CSR 
					- the only way to support markmap-toolbar
			- markmap-toolbar
			- "use client"
			
			  
			
			import { useEffect } from 'react';
			
			import { Toolbar } from 'markmap-toolbar';
			
			import { Markmap } from 'markmap-view'; // Import Markmap from markmap-view
			
			  
			
			const C_MarkmapToolbar = () => {
			
			  useEffect(() => {
			
			    const container = document.querySelector(".markmap-container")
			
			    const mm = Markmap.create(container);
			
			    const { el } = Toolbar.create(mm);
			
			    el.style.position = 'absolute';
			
			    el.style.bottom = '0.5rem';
			
			    el.style.right = '0.5rem';
			
			    container.appendChild(el)
			
			  }, []);
			
			  
			
			  return (<>
			
			  </>)
			
			}
			
			  
			
			export default C_MarkmapToolbar
	- MDX rabbit hole
		- syntaxt highlighters
			- [rehype-pretty-code](https://www.npmjs.com/package/rehype-sanitize#use) vs [highlighter.js](https://highlightjs.org/) vs [prism.js](https://github.com/PrismJS/prism) or prism-react-renderer
				- even if the latters are more famous I'm too lazy to understand how to use them in rsc. 
				- when I won't be fine anymore w rehype-pretty-code, I'll change it
		- used
			- [mdx code highlighting](https://www.npmjs.com/package/highlight.js)
			- [reading time](https://www.npmjs.com/package/reading-time)
			- [social icos](https://www.npmjs.com/package/react-social-icons) [docs](https://react-social-icons.com/) alternative: [react-share](https://www.npmjs.com/package/react-share)
		- not used
			- frontmatter parser [gray matter](https://www.npmjs.com/package/gray-matter)
	- Carousel
		[swiper](https://www.npmjs.com/package/swiper) vs [embla carousel](https://www.npmjs.com/package/embla-carousel-react)
		[swiper](https://bundlephobia.com/package/swiper@11.1.0) - [embla](https://bundlephobia.com/package/embla-carousel@8.0.0)
		- [Swiper](https://www.npmjs.com/package/swiper)
	- [echarts](https://github.com/apache/echarts) [examples](https://echarts.apache.org/examples/en/index.html#chart-type-line)
	- [driver.js](https://driverjs.com/) - unmaintained [22k](https://github.com/kamranahmedse/driver.js)
		- unmaintained sadly
			- ![[Pasted image 20240803193804.png]]
	- [revealjs](https://github.com/hakimel/reveal.js)
	
	- [react email](https://react.email/) -   e-mail crafter, not sender
	- for next.js
		- [next-sitemap](https://www.npmjs.com/package/next-sitemap)

- API
	- graph base
		- [img](https://youtu.be/cXlxMP9PU8I?t=106)
			- ![[Pasted image 20230805143743.png]]
- non-website
	- AI
		- By microsoft
			- [DeepSpeed](https://github.com/microsoft/DeepSpeed)
			- [CNTK](https://github.com/microsoft/CNTK)
			- [LightGBM](https://github.com/microsoft/LightGBM)
			- [unilm](https://github.com/microsoft/unilm)
			- [qlib](https://github.com/microsoft/qlib) investimenti :/
	- ML
		- [simulator for autonomous vehicles](https://github.com/microsoft/AirSim)
		- [nni](https://github.com/microsoft/nni)
	- C/C++
		- [Vcpkg by microsoft](https://github.com/microsoft/vcpkg)








