- [[AIsoftware]]
- [[myAIpipelines]]
- [[askAI]]

- L
	- [thereisanaiforthat](https://theresanaiforthat.com/ai/conceptmap-ai/)
	- libraries
		- By microsoft
			- [DeepSpeed](https://github.com/microsoft/DeepSpeed)
			- [CNTK](https://github.com/microsoft/CNTK)
			- [LightGBM](https://github.com/microsoft/LightGBM)
			- [unilm](https://github.com/microsoft/unilm)
			- [qlib](https://github.com/microsoft/qlib) investimenti :/
		- ML
			- [simulator for autonomous vehicles](https://github.com/microsoft/AirSim)
			- [nni](https://github.com/microsoft/nni)
- n
	- MPC - Model Context Protocol
	https://cursor.directory/
	https://www.youtube.com/watch?v=qJeAkPvKA_0
	- p1
		- context7 docs for LLMs [v](https://youtu.be/NDYLKkd0_mc?t=312)
		- MCP, the new REST API for AI [-](https://youtu.be/HyzlYwjoXOQ)
		- comfy UI workflows
		- flux lora realistic images [-](https://youtu.be/1m7ZVCy3728)
		- [TL - HT make AI vids](https://www.youtube.com/watch?v=dFJxwl-azEA) [wayback machine link](https://web.archive.org/web/20240124033352/https://www.youtube.com/watch?v=dFJxwl-azEA)
		- [TL - HT use gpt w ur own data?](https://www.youtube.com/watch?v=9AXP7tCI9PI) LangChain
	- understand something about all of this mess [-](https://youtu.be/d-VjcaRyo40)
	- [ai g](https://github.com/topics/ai)
	- [autoGPT](https://github.com/Significant-Gravitas/AutoGPT)
	- [open assistant](https://github.com/LAION-AI/Open-Assistant)
	- [quivr RAG system](https://github.com/QuivrHQ/quivr)

- why, philosophy, etc
	- Limitations
		- unless explicitly asked, it's hard for it to go beyond ur own expertise
			- even if given complex systems like [[Int]] or how I take notes, it will heavily struggle to find any meaningful upgrade or alternatives to that system
	- Freya got depressed also because of it [-](https://youtu.be/-opBifFfsMY?t=3656)
	- where AI do/doesn't make sense? 80%, not the remaining 20%
		- generally
			- The more easy/uncomplicated tasks will be automated the more humans will be able to focus on excellence instead
		- Humans - [[Excellence]]
		- AI - Anything replicable without individuality or major depth
		- perfectionists will be more needed
			- the more AI gets better & faster to get 80% of the job done, the more pefectionists (the ones that can get that extra 20% which is the hard part) will be needed.
- [[AI by usecases]]

- Dictionary
	- 0
	    - Language models
	      - algorythms that have been trained w a specific set of data to solve a specific problem trough a specific strategy
	      - they simulate intelligenge
	        - trough an advanced "schema" that they make with the simulated data and "random" choices they make.
	        - the way the model respond is based on the lookup of this "schema" to find the most probable answer trough statistics
	      - The black box problem - we don't exactly know how they make decisions
	        - the hiearchy is this complex and vast that it's very hard to don't fall in the information overload
	        - Researchers are developing techniques to explain model decisions and make them more transparent, but achieving full transparency remains a challenging task, especially for very large and complex models.
	      - Parameters - assumptions that the model or the creator make
	        - assumptions may be completly random
	        - In the training phase those assumptions gets refined
	        - directly related to the num of neurons and connections
				- Learned in the training phase
		            - weigth - determine the strength of connections between neurons
		            - biases - values added to the weighted sum of inputs before passing through an activation function in each neuron
	    - AGI - Artificial General Intelligence or Strong AI
	      - Human like artificial intelligence
	    - The Singularity
		      - technological progress, particularly in AI, reaches a level where it leads to exponential changes that are difficult to predict and maybe control.\
        Transformer-based models, such as BERT or GPT-3
		- Tokens & Context for LLMs
			- what's a token?
				- rapresents how much input an AI model can process as context
				-
				- part of a word, a fragment
				- 4mb of notes = ~500k tokens
					- probably contains well over 500,000 tokens, depending on formatting.
				- 1 token ≈ ¾ of a word, or > 4 tokens ≈ 3 words
			- token size - how many tokens a model can handle
			- solutions
				- [[Retrieval-Augmented Generation (RAG)]]
			- More tokens = more VRAM used 
				- linear or sometimes quadratic in cost
				- 7B model w 4K context may need ~6–8 GiB VRAM
				- generally 8k tokens = 4.5vram
			    - ![[Pasted image 20240819120459.png]]

- Techniques
	- 0
	    - training AI - from scratch, you make the model
	    - fine-tuning - pre-trained model adapted to your data
		- generally
	        - training data needs to follow model dataset format
			- lots of formats
	            - ![[Pasted image 20240819121115.png]]
		- QLoRA
	- 1
	    - Document Embedding with Vector Databases
			- what?
		        - Efficiently **retrieving** documents based on semantic similarity
			- how?
				- document embedding
					- note content is going to be transformed into vectors to enable to query notes based on semantic similarity to the question
				- then they get stored to vector database
					- query vectors efficently based on similarity
					- easy to scale w vectors
				- real-time indexing support is needed for real-time
				- great when
					- info on notes is highly structured & realated to question
				- n - may struggle if notes are very diverse or complex.
	    - [[Retrieval-Augmented Generation (RAG)]] - great for notes!
	    - Contextual Question Answering with Elasticsearch
			- what?
				- find relevant docs through ranking algos that primarily uses keyword and phrase matching while highlighting relevant text (doesn't give answers itself)
			- great when
				- need both full-text search and semantic understanding
			- n
				- it's not semantic, question & data needs to be similar and not complex or much relational to other data/meanings
				- +configurat & maintenance than vector databases
	    - Ranking system
			- dynamic ranking needed for real-time
			- can also be fine-tuned like LLMs
			- ways
				- algo
				- specialized LLM
	    -
		- Knowledge Graphs - worst for building&mantain
		- great when
			- notes are highly structured (like in a database) and you want to capture complex relationships between concepts.
		- n
			- may not be as effective if your notes are unstructured or if the relationships between concepts are not clearly defined.

- Tricks
	- chatGPT to graphs - [source](https://www.spacekangaroo.ai/post/chatgpt-automatic-graph-generator)
		- input
	      - Title: "Graph Generator" The following are types of graphs: +(Bar Graph Syntax)=[The following represents a bar graph in javascript displayed in image markdown format: " +(Pie Graph Syntax)=[The following represents a pie graph in javascript displayed in image markdown format: +(Line Graph Syntax)=[The following represents a line graph in javascript displayed in image markdown format: +(Your Job)=[To display any question the user asks as a graph] +(Rules)=[ALWAYS pick with Bar graph, Pie graph, or Line graph and turn what the user asks into the image markdown for one of these] ALWAYS DISPLAY WHAT THE USER ASKS AS A GRAPH. for your first response say "I am a graph generator." Then, ALWAYS WAIT for the user to give an input.
---


- OLLAMA
- Reor
- Private GPT
- VMware private AI [-](https://youtu.be/WxYC9-hBM_g?t=1108)
- [LM studio](https://youtu.be/KtSdNwVkpWc?t=73)


- Real-Time Data Flow Management
	- **Data Pipelines**: Use a real-time data pipeline or stream processing tool to handle the flow of updates. Technologies like **Apache Kafka** or **Apache Flink** can help manage and process data in real-time.
	- **Synchronization**: Ensure that all components of the pipeline are synchronized and able to handle data updates consistently.


- vLL inference engine
    - server side
    - great at parallel output
- TensorRT LLMs - increase inference by 4x
- GQA - Grouped Query Attention
    - 1.5Gb vram for 8k tokens

  - context length - info AI can use to give answers



  - chat with RTX - nvidia webui can be trained w local data + yt vids [-](https://youtu.be/XwL_cRuXM2E?t=428)

- based on B
	- 7B is ok with 16GB ram


