
//http-server -c-1 

const data_G1_status = [
    {
        "YEAR": 2022,
        "CERTIFIED": 562629,
        "CERTIFIED_WITHDRAWN": 34462,
        "DENIED": 2712,
        "WITHDRAWN": 11078
    },
    {
        "YEAR": 2021,
        "CERTIFIED": 751900,
        "CERTIFIED_WITHDRAWN": 32581,
        "DENIED": 3764,
        "WITHDRAWN": 15488
    },
    {
        "YEAR": 2020,
        "CERTIFIED": 533801,
        "CERTIFIED_WITHDRAWN": 16337,
        "DENIED": 3436,
        "WITHDRAWN": 10677
    },
    {
        "YEAR": 2019,
        "WITHDRAWN": 19227,
        "CERTIFIED_WITHDRAWN": 46050,
        "CERTIFIED": 578640,
        "DENIED": 5166
    },
    {
        "YEAR": 2018,
        "CERTIFIED": 567011,
        "DENIED": 7537,
        "WITHDRAWN": 20826,
        "CERTIFIED_WITHDRAWN": 44145
    },
    {
        "YEAR": 2017,
        "CERTIFIED_WITHDRAWN": 48880,
        "WITHDRAWN": 20322,
        "CERTIFIED": 533621,
        "DENIED": 7481
    }
]


// 1st Graph - Application Status by Year　＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋
function drawStatusBarGraph() {
    const w = 960;
    const h = 400;
    const margin = {top: 20, right: 50, bottom: 30, left:50};

    const xScale = d3.scaleBand().domain(data_G1_status.map(d => d.YEAR)).rangeRound([0,w]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, 800000]).range([h, 0]);

    const containerG1  = d3
        .select('#containerG1')
        .append('svg')
        .attr('width', w + margin.right + margin.left)
        .attr('height', h + margin.top + margin.bottom);

    const graphAreaG1 = containerG1 
        .append('g')
        .classed('graphAreaG1', true)
        .data(data_G1_status)
        .attr("transform", `translate(${margin.left + 10}, ${margin.top})`);


    const CertifiedBars = graphAreaG1
        .selectAll('.c-bar')
        .data(data_G1_status)
        .enter()
        .append('rect')
        .classed('c-bar', true)
        .attr('width', xScale.bandwidth()/4)
        .attr('height', data => h - yScale(data.CERTIFIED))
        .attr('x', data => xScale(data.YEAR) + xScale.bandwidth()/ 5 * 0)
        .attr('y', data => yScale(data.CERTIFIED));

    const CWBars = graphAreaG1
        .selectAll('.cw-bar')
        .data(data_G1_status)
        .enter()
        .append('rect')
        .classed('cw-bar', true)
        .attr('width', xScale.bandwidth() / 4)
        .attr('height', data => h - yScale(data.CERTIFIED_WITHDRAWN))
        .attr('x', data => xScale(data.YEAR) + (xScale.bandwidth()/5 + 8)* 1)
        .attr('y', data => yScale(data.CERTIFIED_WITHDRAWN));

    const DBars = graphAreaG1
        .selectAll('.d-bar')
        .data(data_G1_status)
        .enter()
        .append('rect')
        .classed('d-bar', true)
        .attr('width', xScale.bandwidth() / 4)
        .attr('height', data => h - yScale(data.DENIED))
        .attr('x', data => xScale(data.YEAR) + (xScale.bandwidth() /5 +8) * 2)
        .attr('y', data => yScale(data.DENIED));

    const WBars = graphAreaG1
        .selectAll('.w-bar')
        .data(data_G1_status)
        .enter()
        .append('rect')
        .classed('w-bar', true)
        .attr('width', xScale.bandwidth() / 4)
        .attr('height', data => h - yScale(data.WITHDRAWN))
        .attr('x', data => xScale(data.YEAR) + (xScale.bandwidth() /5 +8) * 3)
        .attr('y', data => yScale(data.WITHDRAWN));

    //AXIS------------------------------------------------------------------------------------------------
    const xAxis = d3.axisBottom(xScale);
    containerG1
        .append('g')
        .attr("transform", `translate(${margin.left + 5}, ${margin.top + h + 10})`)
        .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    containerG1 
        .append('g')
        .attr("transform", `translate(50,${margin.top})`)
        .call(yAxis);

    //TITLE-----------------------------------------------------------------------
    // const titleText = "H1-B visa petition status 2017-2022";
    // const titleG1 = d3
    //     .select('#containerG1')
    //     .append('text')
    //     .classed('titleG1', true)
    //     .attr('class', 'title')
    //     .attr('y', 0 -(margin.top)/2)
    //     .text(titleText);
    
    // containerG1 
    //     .append('g')
    //     .attr("transform", `translate(10,${margin.top})`)


    //LEGEND-------------------------------------------------------------------------------------------------
    const labels = ["CERTIFIED", "CERTIFIED_WITHDRAWN", "DENIED", "WITHDRAWN"]
    const colors = ["#ff7eb3","#40DFEF","#b388eb","#a3c4f3"]

    const legendStatus = d3
        .select('#containerG1')
        .append('svg')
        .classed("legendContainer", true)
        .attr('width', 200 + margin.right)
        .attr('height', 250 + margin.top);
        // .attr("transform", `translate(${margin.left + w + margin.right + 5}, ${margin.top })`);

    const legendLabels = legendStatus
        .selectAll(".statusLegendLabels")
        .data(labels)
        .enter()
        .append("text")
        .classed("statusLegendLabels", true)
        .text(function(d, i){return d})
        .attr("transform", function (d, i) { return `translate(${100}, ${35 + i * 20})` });

    const dotsLegend = legendStatus
        .selectAll(".dotsLegend")
        .data(colors)
        .enter()
        .append("circle")
        .classed("dotsLegend", true)
        .attr("cx", 80)
        .attr("cy", function(d,i){return 30 + i*20})
        .attr("r", 7)
        .style("fill", function(d, i){return d});
}


// 2nd Graph - Certified Numbers by States　＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋
// draw US geo map with data filled with colors
function drawStateMapGraph() {

    var width = 960;
    var height = 500;

    var lowColor = '#92fe9d'
    var highColor = '#00c9ff'
    
    // D3 Projection
    var projection = d3.geoAlbersUsa()
      .translate([width / 2, height / 2]) // translate to center of screen
      .scale([1000]); // scale things down so see entire US
    
    // Define path generator
    var path = d3.geoPath() // path generator that will convert GeoJSON to SVG paths
      .projection(projection); // tell path generator to use albersUsa projection
    
    //Create SVG element and append map to the SVG
    var svg = d3.select("#containerMap")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    
    // Load in my states data!
    d3.csv("states2022.csv").then(data => {
        // console.log(data);
        var dataArray = [];
        for (var d = 0; d < data.length; d++) {
            // console.log(data[d].year);
            dataArray.push(parseFloat(data[d].value))
        }
        var minVal = d3.min(dataArray)
        var maxVal = d3.max(dataArray)
        var ramp = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor,highColor])
        
        // Load GeoJSON data and merge with states data
        d3.json("us-states.json").then(json => {
    
            // Loop through each state data value in the .csv file
            for (var i = 0; i < data.length; i++) {
    
                // Grab State Name
                var dataState = data[i].state;
        
                // Grab data value 
                var dataValue = data[i].value;
    
                // Find the corresponding state inside the GeoJSON
                for (var j = 0; j < json.features.length; j++) {
                    var jsonState = json.features[j].properties.name;
        
                    if (dataState == jsonState) {
            
                    // Copy the data value into the JSON
                    json.features[j].properties.value = dataValue;
            
                    // console.log(dataState, dataValue);
            
                    // Stop looking through the JSON
                    break;
                    }
                }
            }
    
            // Bind the data to the SVG and create one path per GeoJSON feature
            svg.selectAll("path")
                .data(json.features)
                .enter()
                .append("path")
                .attr("d", path)
                .style("stroke", "#fff")
                .style("stroke-width", "1")
                .style("fill", function(d) { return ramp(d.properties.value) });
            
            // add a legend
            var w = 140, h = 300;

            var key = d3.select("#containerMap")
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .attr("class", "legend");
    
            var legend = key.append("defs")
                .append("svg:linearGradient")
                .attr("id", "gradient")
                .attr("x1", "100%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "100%")
                .attr("spreadMethod", "pad");

            legend.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", highColor)
                .attr("stop-opacity", 1);
                
            legend.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", lowColor)
                .attr("stop-opacity", 1);
        
            key.append("rect")
                .attr("width", w - 100)
                .attr("height", h)
                .style("fill", "url(#gradient)")
                .attr("transform", "translate(0,10)");

            var y = d3.scaleLinear()
                .range([h, 0])
                .domain([minVal, maxVal]);

            var yAxis = d3.axisRight(y);

            key.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(41,10)")
                .call(yAxis)
        });
    }); 
}

// 3rd Graph - Company ＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋
function drawCompaniesHorizBarGraph(selectedGraphYear){
    if (!selectedGraphYear) {
        return;
    }

    const titleText = 'Top 15 Most Countries Certified H1-B';
    const xAxisLabelText = 'Numbers of Application Certified';
    const containerCo = d3
        .select("#containerCo")
        .html(null)
        .append('svg')
        .attr("width", 960)
        .attr("height", 500);
    const width = +containerCo.attr('width');
    const height = +containerCo.attr('height');
    
    const render = data => {
        const xValue = d => d['value'];
        const yValue = d => d.company;
        const margin = { top: 50, right: 40, bottom: 77, left: 180 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, xValue)])
            .range([0, innerWidth]);
        
        const yScale = d3
            .scaleBand()
            .domain(data.map(yValue))
            .range([0, innerHeight])
            .padding(0.1);
        
        const g = containerCo
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        const xAxisTickFormat = number =>
            d3.format('.3s')(number)
            .replace('G', 'B');
        
        const xAxis = d3
            .axisBottom(xScale)
            .tickFormat(xAxisTickFormat)
            .tickSize(-innerHeight);
        
        g.append('g')
            .call(d3.axisLeft(yScale))
            .selectAll('.domain, .tick line')
            .remove();
        
        const xAxisG = g
            .append('g')
            .call(xAxis)
            .attr('transform', `translate(0,${innerHeight})`);
        
        xAxisG.select('.domain').remove();
        
        xAxisG.append('text')
            .attr('class', 'axis-label')
            .attr('y', 65)
            .attr('x', innerWidth / 2)
            // .attr('fill', '#606060')
            .text(xAxisLabelText);
        
        g.selectAll('rect')
            .data(data)
            .enter().append('rect')
            .attr('y', d => yScale(yValue(d)))
            .attr('width', d => xScale(xValue(d)))
            .attr('height', yScale.bandwidth());
        
        // g.append('text')
        //     .attr('class', 'title')
        //     .attr('y', -10)
        //     .text(titleText);
    };
    
    d3.csv(`dataG3_${selectedGraphYear}.csv`).then(data => {
        data.forEach(d => {
            d.value = +d.value * 1000;
        });
        render(data);
    });
      
}




// 4th Graph - the Most certified Position ＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋

function BubbleChart(data, {
    name = ([x]) => x, // alias for label
    label = name, // given d in data, returns text to display on the bubble
    value = ([, y]) => y, // given d in data, returns a quantitative size
    group, // given d in data, returns a categorical value for color
    // title, // given d in data, returns text to show on hover
    width = 960, // outer width, in pixels
    height = width, // outer height, in pixels
    padding = 3, // padding between circles
    margin = 1, // default margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    groups, // array of group names (the domain of the color scale)
    // colors = d3.schemeTableau10, // an array of colors (for groups)
    colors = ["#70d6ff", "#ff70a6", "#e9ff70", "#ff9770", "#ffd670", "#9381ff","#9DF1DF", "#b2ff9e", "#B2A4FF", "#D9ACF5", "#00FFCA"],
    fill = "#ccc", // a static fill color, if no group channel is specified
    fillOpacity = 0.7, // the fill opacity of the bubbles
    stroke, // a static stroke around the bubbles
    strokeWidth, // the stroke width around the bubbles, if any
    strokeOpacity, // the stroke opacity around the bubbles, if any
  } = {}) {
    // Compute the values.
    const D = d3.map(data, d => d);
    const V = d3.map(data, value);
    const G = group == null ? null : d3.map(data, group);
    const I = d3.range(V.length).filter(i => V[i] > 0);
  
    // Unique the groups.
    if (G && groups === undefined) groups = I.map(i => G[i]);
    groups = G && new d3.InternSet(groups);
  
    // Construct scales.
    const color = G && d3.scaleOrdinal(["#70d6ff", "#ff70a6", "#e9ff70", "#ff9770", "#ffd670"]);
  
    // Compute labels and titles.
    const L = label == null ? null : d3.map(data, label);
    // const T = title === undefined ? L : title == null ? null : d3.map(data, title);
  
    // Compute layout: create a 1-deep hierarchy, and pack it.
    const root = d3.pack()
        .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
        .padding(padding)
      (d3.hierarchy({children: I})
        .sum(i => V[i]));
  
    const svg = d3
        .select('#containerPositions')
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-marginLeft, -marginTop, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .attr("fill", "currentColor")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", "middle");
  
    const leaf = svg
        .selectAll("a")
        .data(root.leaves())
        .join("a")
        // .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
        // .attr("target", link == null ? null : linkTarget)
        .attr("transform", d => `translate(${d.x},${d.y})`);
  
    leaf.append("circle")
        .attr("stroke", stroke)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-opacity", strokeOpacity)
        .attr("fill", G ? d => color(G[d.data]) : fill == null ? "none" : fill)
        .attr("fill-opacity", fillOpacity)
        .attr("r", d => d.r);
  
    // if (T) leaf.append("title")
    //     .text(d => T[d.data]);
  
    if (L) {
      // A unique identifier for clip paths (to avoid conflicts).
      const uid = `O-${Math.random().toString(16).slice(2)}`;
  
      leaf.append("clipPath")
            .attr("id", d => `${uid}-clip-${d.data}`)
        .append("circle")
            .attr("r", d => d.r);
  
      leaf.append("text")
            .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
        .selectAll("tspan")
        .data(d => `${L[d.data]}`.split(/\n/g))
        .join("tspan")
            .attr("x", 0)
            .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
            .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
            .text(d => d);
    }
  
    return Object.assign(svg.node(), {scales: {color}});
  }


function Swatches(color, {
    columns = null,
    format,
    unknown: formatUnknown,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0
  } = {}) {
    const id = `-swatches-${Math.random().toString(16).slice(2)}`;
    const unknown = formatUnknown == null ? undefined : color.unknown();
    const unknowns = unknown == null || unknown === d3.scaleImplicit ? [] : [unknown];
    const domain = color.domain().concat(unknowns);
    if (format === undefined) format = x => x === unknown ? formatUnknown : x;
  
    function entity(character) {
      return `&#${character.charCodeAt(0).toString()};`;
    }
  
    if (columns !== null) return htl.html`<div style="display: flex; align-items: center; margin-left: ${+marginLeft}px; min-height: 33px; font: 10px sans-serif;">
    <style>
  
  .${id}-item {
    break-inside: avoid;
    display: flex;
    align-items: center;
    padding-bottom: 1px;
  }
  
  .${id}-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - ${+swatchWidth}px - 0.5em);
  }
  
  .${id}-swatch {
    width: ${+swatchWidth}px;
    height: ${+swatchHeight}px;
    margin: 0 0.5em 0 0;
  }
  
    </style>
    <div style=${{width: "100%", columns}}>${domain.map(value => {
      const label = `${format(value)}`;
      return htl.html`<div class=${id}-item>
        <div class=${id}-swatch style=${{background: color(value)}}></div>
        <div class=${id}-label title=${label}>${label}</div>
      </div>`;
    })}
    </div>
  </div>`;
  
    return htl.html`<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+marginLeft}px; font: 10px sans-serif;">
    <style>
  
  .${id} {
    display: inline-flex;
    align-items: center;
    margin-right: 1em;
  }
  
  .${id}::before {
    content: "";
    width: ${+swatchWidth}px;
    height: ${+swatchHeight}px;
    margin-right: 0.5em;
    background: var(--color);
  }
  
    </style>
    <div>${domain.map(value => htl.html`<span class="${id}" style="--color: ${color(value)}">${format(value)}</span>`)}</div>`;
  }

d3.csv('positions_2022.csv').then(data => {
    // console.log(data);
    // data.forEach(d => {
    //     d.value != null;
    // });
    bChart = BubbleChart(data, {
        label: d => d.position,
        value: d => d.value,
        group: d => d.category,
        width: 1152
    })

//     color = ["#70d6ff", "#ff70a6", "#e9ff70", "#ff9770", "#ffd670", "#9381ff","#b2ff9e" ];
//     bLegend = Swatches(color, {
//     columns = null,
//     format,
//     unknown: formatUnknown,
//     swatchSize = 15,
//     swatchWidth = swatchSize,
//     swatchHeight = swatchSize,
//     marginLeft = 0
//   } = {}) ;

const labelsG4 = ["Software", "Hardware", "Business", "Finance"]
const colorsG4 = ["#ff7eb3","#40DFEF","#b388eb","#a3c4f3"]

const legendG4 = d3
    .select('#containerPositions')
    .append('svg')
    .classed("legendContainerG4", true)
    .attr('width', 200 + margin.right)
    .attr('height', 250 + margin.top);
    // .attr("transform", `translate(${margin.left + w + margin.right + 5}, ${margin.top })`);

const positionsLegendLabels = legendG4
    .selectAll(".positionsLegendLabels")
    .data(labelsG4)
    .enter()
    .append("text")
    .classed("positionsLegendLabels", true)
    .text(function(d, i){return d})
    .attr("transform", function (d, i) { return `translate(${100}, ${35 + i * 20})` });

const dotsLegendG4 = legendG4
    .selectAll(".dotsLegendG4")
    .data(colorsG4)
    .enter()
    .append("circle")
    .classed("dotsLegendG4", true)
    .attr("cx", 80)
    .attr("cy", function(d,i){return 30 + i*20})
    .attr("r", 7)
    .style("fill", function(d, i){return d});
});


function drawPositionHBubbleGraph(){
    d3.csv('positions_2022.csv').then(data => {
        console.log(data);

        bChart = BubbleChart(data, {
            label: d => d.position,
            value: d => d.value,
            group: d => d.category,
            width: 1152
        })
    });
}
// Main ＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋＋

Vue.createApp({
    data: function(){
        return{
            showGraph: "g1",
            
            selectedGraphYear: ""
        };
    },

    methods: {
        changeGraph: function (graph) {
            this.showGraph = graph;
        },
        redrawCompaniesGraph: function () {
            drawCompaniesHorizBarGraph(this.selectedGraphYear);
        }

    },

    mounted: function(){
        drawStatusBarGraph();
        drawStateMapGraph();
        drawCompaniesHorizBarGraph();
        // drawPositionHBubbleGraph();
    }
        
}).mount("#app");