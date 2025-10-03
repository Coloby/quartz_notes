[[BI - BU intelligence]]
[[BA - BU analytics]]
	both
		[[Analytics]]
		[[sec-monitoring-track - logs-metrics-traces]]
[[nData]]

- what? BI, BA, everything related to data - the umbrella term 
	- Includes all type of biz data
	- like [[Accounting]] but for any data

- 0
	- [[Data modeling]]
	- [[data warehouses]]
	- ETL - Extract, Transform, Load: clean & prepare data
	-
	- Data Prep
		- Wrangling - cleaning/reshaping raw data to usable format
			- used in initial phases
			- doesn't change the data itself often
			- e.g.
				- Cleaning (e.g. missing values, duplicates)
				- Structuring (e.g. flattening nested data)
				- Enrichment (e.g. joining datasets)
				- Validation
		- Transformation - change data to solve specific problem/goal
			- used after wrangling
			- e.g.
				- Converting currencies
				- Aggregating daily sales into monthly totals
				- Encoding categorical variables for ML
	- Types of biz data
		- descriptive - What happened?
			- Summarizes historical data to identify patterns & trends.
		- Diagnostic - What was the error?
			- find the root causes of events or behaviors.
		- Predictive - What will happen? 
			- statistical models and machine learning to forecast future outcomes.
		- prescriptive - What should we do? why of things
			- Recommends actions based on data, predictions, and optimization models.
	-
	- Roles
		- Main 3
			- Data engineer [[Data analytics]]
				- anything that happens before data gets to db
				- Extract, validate, ETL data
				- Builds pipeline/infra needed for the other 2 to work
			- Data analyst [[BI - BU intelligence]]
			- Data scientist [[BA - BU analytics]]