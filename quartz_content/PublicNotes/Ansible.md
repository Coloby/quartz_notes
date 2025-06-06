[[myPlaybooks]]

- Discovery
	- [great config](https://youtu.be/NuuZ4CmiFQQ?list=PLT98CRl2KxKEGi9C9S9HSFiE1uxbuag57)
	- no need to check if file exist bcs is automatic?
	- ansible-runner
	- roles & inventory
- Basics
	- [what](https://youtu.be/6rpTjEpvUtc?t=707)?
	- why?
		- BASH is imperative but Ansible is procedural
		- can see logs of what tasks are going ok, being skipped, etc
		- no need for agent or client to be installed in other device
			- can also support it but usually it's used through SSH
	- related software
		- Ansible AWX - foss
			- what?
				- web-based user interface, REST API, and task engine built on top of Ansible
				- define inventories, manage credentials, execute playbooks, view job results, and more, all through a web browser
			- why?
				- simple - for command line haters/noobies
		- Ansible Tower/Ansible automated platform - 
			- proprietary Ansible AWX
			- it's from redhat
	- Dictionary
		- ansible-playbook playbookName
		- Inventory
			- list of SSH available computers that will get all of these changes
		- into
			- hosts: all
				- all servers in inventory are targeted
		- Playbook - YAML script - Group multiple tasks together
		- Tasks
			- name: Install nginx
			  yum:
			    name: nginx
			    state: present
	    -
		- roles
		    - why?
			    - more readable
				    - you don't need to have an initial tab, neither to define hosts & other boring stuff. Just put - name
		    - how?
			    - roles
				    - role_name
					    - tasks
						    - main.yml
		- Templates - jinja2 based
		- ansible galaxy - roles repository
		- handlers
		- Ansible vault
		- assert module - to unit tests variables
			- - name: assert | Test ssh_port
			  ansible.builtin.assert:
			    that:
			      - openssh_port is defined
			      - openssh_port is number
			      - openssh_port > 0
			      - openssh_port < 65536
			    quiet: true
- Todo
	- [ ] openSSH pair
	- [ ] espanso
	- 

- Gotchas
	- files created/moved will be owned by user running the playbook
		- unless differently specified by the task
- Faster ways to startup ansible
	- bash script to configure SSH through github
	- Ansible pull - doesn't need SSH, pulls a git repo to do its magic
		- sudo ansible-pull -U urlRepoNotSHHbutHTTPS
			- this searches for a local.yml - pass the yml file if it's with a different name

	- USB copy-paste
- To make script work
	- install paru
	- paru -S ansible-collection-kewlfft-aur














