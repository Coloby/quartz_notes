[[GPU]]
https://cursor.directory/
https://www.youtube.com/watch?v=qJeAkPvKA_0
- Leaderboards
	- artificialanalysis.ai [-](https://artificialanalysis.ai/)


- Discoveryu
	- MCP, the new REST API for AI [-](https://youtu.be/HyzlYwjoXOQ)
	- p1
		- comfy UI workflows
		- flux lora realistic images [-](https://youtu.be/1m7ZVCy3728)
	- understand something about all of this mess [-](https://youtu.be/d-VjcaRyo40)
	- [ai g](https://github.com/topics/ai)
	- [autoGPT](https://github.com/Significant-Gravitas/AutoGPT)
	- [open assistant](https://github.com/LAION-AI/Open-Assistant)
	- [quivr RAG system](https://github.com/QuivrHQ/quivr)
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
- AI usecases
	- asking to put groups of tabs from browser to obsidian/tablesz
	- asking about your e-books
	- Let AI summarize everything
	
	- who are the most related mentors from my notes to learn from how to X? also give videos/links
	- website to voice?
		- https://lukesmith.xyz/ has so much great content... use AI to speach it for you so u don't have to read it while eating? free podcasts
	- 
	- yt vid
		- tranform to text
		- remove
			- if 
				- useless
				- self-promotion
				- sponsors
				- greetings
				- obvious like saying what's the video going to be about
			-
			- intro
			- outro
		- hide
			- if
				- unrelated topic - but put 1 line summary about it
	
	- chat w people but AI can see it
	
	- AI learning - by chuck
	- create an outline/mindmap of content
	- am I missing something or is the content I wrote wrong?
	- practical
		- common pitfalls
		- practical applications
		- case-studies - when was it used by other people?
	
	- get motivated by AI - ask why you like the topic or why you're doing it
	- gen
		- cheat sheet
		- flashcards
	- scenario based learning
	- deep-dive
	- get asked questions by AI & answer real-time [-](https://youtu.be/3D6gaawXwfk?t=625)

---
- Full note-taking AI helper pipeline

  - **Document Embedding** with Vector Databases
  - Fine tuned Ranking system
  - **Retrieval-Augmented Generation (RAG)**
    - Transformer based model
    - Fine tuining the model
    - optional access to internet through

- OLLAMA

- Reor

- Private GPT

- VMware private AI [-](https://youtu.be/WxYC9-hBM_g?t=1108)

- [LM studio](https://youtu.be/KtSdNwVkpWc?t=73)

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
    - Retrieval-Augmented Generation (RAG) - great for notes!
      - RAG is a journey, not a destination... [-](https://youtu.be/u5Vcrwpzoz8?t=286)
      - what?
        - Enhancing the **generation** of text by using information from retrieved documents
        - also retrieve documents but not as fast and precisely as Document Embedding with Vector Databases + can't customize retrieval process as much
      - how?
        - Retrieval system pulls relevant notes through vectors, and the generative model uses these notes as a knowledge base to generate a related answer.
      - great when
        - notes may not always contain directly relevant information, and the AI needs to generate answers based on similar or related content.
      - need good amount of computational power to run the generative model alongside the retrieval system
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

**Real-Time Data Flow Management**

- **Data Pipelines**: Use a real-time data pipeline or stream processing tool to handle the flow of updates. Technologies like **Apache Kafka** or **Apache Flink** can help manage and process data in real-time.

- **Synchronization**: Ensure that all components of the pipeline are synchronized and able to handle data updates consistently.

- Resources

  - gpu is enough for this LLM? [-](https://huggingface.co/spaces/Vokturz/can-it-run-llm)

- Models

  - types

    - Transformer-Based Models
      - preferred over contextual embeddings
      - designed to understand context and semantics better than traditional models
      - like BERT, GPT, and T5
    - Hybrid Retrieval Models
      - keyword-based search & vector-based retrieval
    - meh
      - Contextual Embeddings
        - capture contextual information by considering the surrounding text
        - like ELMo and contextual BERT variants

  - Most popular

    - foss
      - mistral
      - LLAMA - text & images
        - [ollama](https://youtu.be/V_AsEADSf9Y?t=58)
        - can be run even on a 4gb RAM laptop
        - binaries are being shared but not the source code, and they still call it open source... liars, but still better than `""Open""Ai`
    - non foss
      - gemini
      - GPT4 - conversational
    - claude 3
    - grok-1

  - naming convention

    - math or MoE - Mixture of Experts model
    - formats
      - safetensors - secure file format to avoid malware
      - GGML - newer GGUF
        - binary
        - support diff quantization schemes running on CPU in a single file
    - Quantization methods
      - Exl2 - best optimization but only for nvidia
      - AWQ - round weights
      - GPTQ - worst one

  - 

  - vLL inference engine

    - server side
    - great at parallel output

  - TensorRT LLMs - increase inference by 4x

  - GQA - Grouped Query Attention

    - 1.5Gb vram for 8k tokens

  - context length - info AI can use to give answers

  - generally 8k tokens = 4.5vram

    - ![[Pasted image 20240819120459.png]]

  - chat with RTX - nvidia webui can be trained w local data + yt vids [-](https://youtu.be/XwL_cRuXM2E?t=428)

- Great webUIs

  - most popular now - [open-webui](https://github.com/open-webui/open-webui)
  - best for talking to characters -

- software

  - colab by google
    - supports python expecially for data analysis
    - supports mathematical equations, visualizations w libraries and MD
    - allow you to write, share & execute code w free GPU resources
  - Jupyter notebook
    - open source colab alternative
      - what has colab has jupyter at list for what I listed
    - supports Python, R, and Julia
    - JupyterLab is the extended and more advanced version
    - can be used even locally
  - Huggingface
    - open source github-like4pre-trained natural language models (NLM)
    - you can test NLMs thanks to [spaces](huggingface.co/spaces)

- tech

  - tensorflow - build and train machine learning models

- self-host

  - use-cases - from [TIM](https://www.youtube.com/watch?v=GrLpdfhTwLg)!
    - obsidian + AI
    - auto&manual image/video/music making
    - speech recognition w audio to text
      - yt summarizer lol
    - 
    - code suggestions
    - better home assistant
  - based on B
    - 7B is ok with 16GB ram
  - tricks to run smoother
    - quantarization - less accuracy, but less RAM/VRAM usage
    - parallelism - share resources between GPUs and CPU
    - LocalAI

- Tricks

  - chatGPT to graphs - [source](https://www.spacekangaroo.ai/post/chatgpt-automatic-graph-generator)
    - input
      - Title: "Graph Generator" The following are types of graphs: +(Bar Graph Syntax)=[The following represents a bar graph in javascript displayed in image markdown format: " +(Pie Graph Syntax)=[The following represents a pie graph in javascript displayed in image markdown format: +(Line Graph Syntax)=[The following represents a line graph in javascript displayed in image markdown format: +(Your Job)=[To display any question the user asks as a graph] +(Rules)=[ALWAYS pick with Bar graph, Pie graph, or Line graph and turn what the user asks into the image markdown for one of these] ALWAYS DISPLAY WHAT THE USER ASKS AS A GRAPH. for your first response say "I am a graph generator." Then, ALWAYS WAIT for the user to give an input.