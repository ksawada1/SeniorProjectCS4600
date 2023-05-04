# SeniorProjectCS4600


# Data Visualization - H1-B petition
###  Using D3.js
###### 

## Emphasis
H1-B is a working visa for non resident aliens.  It is extremely hard for international students to get a job with a visa sponsorship here in the states, however, it is not impossible.  There is a limited number of H1 visas issued by the US government each year.  Even if the company that hires you sponsors your visa, it is often the case that you cannot win a visa through a lottery.   Also, even though you win the lottery by a miracle, there is a chance the application may be rejected because of the company size, business, job type, salary, skills, etc.  It will be interesting to see which companies sponsor and what kind of positions the applications get approved.  This dataset only shows the numbers of applications of non-resident aliens who already have the sponsorship and won the lottery.

The visualization helps to understand the answers to the questions below.

### The Questions
G1. How many applications were certified each year? 
G2. Which state had the most applications approved?  
G3. Which companies got the most applications certified?  
G4. What kind of positions were approved for H1-B petitions?

### Dataset
https://www.kaggle.com/datasets/jishnukoliyadan/lca-programs-h1b-h1b1-e3-visa-petitions

H1-B:  This dataset only includes applications which were selected on the H1-B lottery.  If you are a non-resident alien, you first need to find an employer to sponsor your H1-B visa, then your employer applies for the lottery, and finally you can apply for the H1-B.

### Technology
* JavaScript
* HTML/CSS 
* Python : to clean the dataset
* D3.js : to create graphs
* Node.js : to get the csv files 
* Vue js : to manipulate the webpages (hide/show function etc)
* Tableau Desktop and Prep

### The Results : WebPage
The website includes 5 pages total; Home, Graph1-Status, Graph2-States, Graph3-Companies, and Graph4-Positions.  

In Nav, when you hover the mouse over in the tab, it changes the color into grey.  Active tab shows in pink.

Home : This page explains about H1-B briefly

Graph1 - Status : Using D3.js, I created the bars(rectangles) based on the numbers of data.  Added x and y axis, and legend.  Positioned all using D3.js functions and css.

Graph2 - State : I found the geographical world data in JSON online.  Using D3.js functionality, I used only the US map and added my csv data into the geographical map.  Changed the colors so that it is easier to see the difference.  

Graph3 - Companies : WIth this data, I wanted to create the horizontal bar graphs so that it is easy to see the company names.  Also I showed only the top 15.  At first, I was going to show all of the companies, however, I didn’t need to see hundreds of companies in this graph, so changed to show only the top 10.  However, I wanted to show the transition of how Amazon and Google came up from out of the top 10 to the top 3 in 6 years, so I ended up showing the top 15.  
I created a total of 6 graphs for each year, added the filter in HTML.  Using hide/show functionality of Vue, only the year selected would be shown in the page.  

Graph4 - Positions : To see the relationship in industries and also which positions had the highest numbers of cases certified, I decided to create the bubble graph.  Each bubble shows each position and the size of the bubble shows the numbers of applications approved. 

## Research Summery
Textbook : 
“D3js Quick Start Guide” by Matthew Huntington

## Links
https://github.com/ksawada1/SeniorProjectCS4600
