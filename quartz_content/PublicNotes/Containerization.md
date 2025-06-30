- Discovery
	- yacht to easily deploy stuff on your [[HomeLab]] - [src](https://youtu.be/c4rKWrH88F0?t=232)
	- watch tower

- What?
	- compared to type 1 hypervisors
		- Can be used in every OS
		- More performant
			- faster to boot (doesn't need to boot entire OS)
			- less memory needed
			- might provide better CPU
		- Isolate by process & OS level
		-
		- Uses hosts OS kernel - more attack surface

- [[Docker]] - CLI
- Docker compose - file to setup multi-container apps
	- docker-compose up - run every container
	- docker-compose down - stops all
	- docker-compose watch - re-run container on changes
- kubernetes - CLI - Orchestration of containers
	- can also manage non-containerized applications through the use of init containers and sidecars
[[portainer]].io
- Docker desktop
- rancher - GUI to manage multiple kubernetes clusters