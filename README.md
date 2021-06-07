How the Privatization of Space Travel Has Influenced Demand

Space travel began in 1961. Through the years, different types of missions and spacecraft were launched; some successful but many failed in its mission. The US government’s priorities and funding changed and space exploration was temporarily halted.

In 2002, SpaceX wasformed by entrepreneur Elon Musk in the hopes of revolutionizing the aerospace industry and making affordable spaceflight a reality (https://www.britannica.com/topic/SpaceX). Since its first launch in 2006, SpaceX has increasingly launched more aircraft on behalf of various countries with various mission goals. Again, some were successful, but many failed. Our interactive dashboard looks at SpaceX’s rocket launches as a case study for commercial space travel and exploration. The visualizations provide several insights into how SpaceX has evolved since its first launch in 2006 to the present. The charts show:
1. The yearly volume of both successful and unsuccessful SpaceX rocket launches
2. A comparison of rocket payload types (satellite launches versus Dragon shuttle launches)
3. Graphs the countries that are driving SpaceX’s business

We designed an interactive dashboard with 3 charts updated by the same set of data. To view this dashboard, the user should first start the flask server (app.py). 

The Process:
The JSON file provided by SpaceX contains 111 launches and data about each launch. Our team cleaned the data in Pandas after writing an original git request to pull the original SpaceX JSON. The data we used was nested inside arrays, sometimes two or three siblings deep. Once the dataset was narrowed to our nine desired data points, it was converted to a .csv file. Using pgAdmin 4, we created a SQL database. The flask server pulls the data via a sqlalchemy engine request. The flask server creates a new API JSON file (http://127.0.0.1:5000/api/v1.0/launch_data) and pushes the data to the dashboard.
About the Visualizations:
Three visualizations are available for viewing, all of which pull from the same data source. 
1. Line graph: The line graph shows the successful verses failed SpaceX launches dating back to 2006. The x axis is the year, the y axis is the numberof launches, and the two lines represent successful and failed launches.
2. Doughnut graph: The doughnut graph compares the number of launches by payload type. There are two types of payloads: those relating to satellitelaunches and those relating to Dragon shuttle missions. We selected this typeof graph because it clearly depicts the higher volume of satellite launches. SpaceX hopes to launch 42,000 satellites over the next few decades.
3. Bar graph: The bar graph identifies plots the nationalities of the governmental and private corporations that have partnered with SpaceX to illustrate which countries are driving SpaceX’s business. The x axis identifies the country while the y axis shows the number of launches.

A user can interact with all three of the visualizations by selecting a start and end year in the dropdown menus to filter the range of data that is illustrated in the charts.

Languages used: HTML, CSS, JavaScript, SQL database using pgAdmin 4

We utilized an additional JavaScript library:
1. ChartJS – line graph, doughnut chart, bar chart
