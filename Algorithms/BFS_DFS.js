// This implementation of a graph was taken from Michael Micmillan's Book
// 'Data Structures and Algorithms in Javascript'. I originally attempted converting
// one written in C in my DS&A study book (The Algorithm Design Manual - Steven Skiena)
// but thought this solution was a little more elegant and simple to understand. 

// Representation of our graph as an adjaceny list where the index represents the 
// vertex and the subarray at each index represents that vertex's coressponding adjacent vertices.

var graph1 = [[4],[2,5],[1,3],[2,4,5],[0,3],[1,3]];
var graph2 = [[1,2],[0,3],[0,4],[1],[2]];

//A simple showGraph function that will give you an idea of what the graph should look like
function showGraph(graph) {
	for (var i = 0; i < graph.length ; i++) {
		var str = i + ' -> ';
		for (var j = 0; j < graph.length; j++) {
			if (graph[i][j] !== undefined) {
				str += graph[i][j] + ' ';
			}
		}
		console.log(str);
	}
}

//BFS - Returns an object with marked and edgeTo arrays
function bfs(graph, start) {
	var queue = [];
	var marked = [];
	var edgeTo = [];
	//initialize marked
	for (var i=0; i < graph.length ; i++) {
		marked[i] = false;
	}
	marked[start] = true;
	edgeTo[start] = -1;
	queue.push(start);
	while (queue.length > 0) {
		var vertex = queue.shift();
		//console.log("Visited Vertex: " + vertex);
		for (var j = 0; j < graph[vertex].length ; j++) {
			if (!marked[graph[vertex][j]]) {
				edgeTo[graph[vertex][j]] = vertex;
				marked[graph[vertex][j]] = true;
				queue.push(graph[vertex][j]);
			}
		}
	}
	return { marked: marked, edgeTo: edgeTo }
}

//DFS
function dfs(graph, start) {
	var marked = [];
	//initialize marked
	for (var i=0; i < graph.length ; i++) {
		marked[i] = false;
	}
	function dfsRec(vertex) {
		marked[vertex] = true;
		console.log('Visited vertex: ' + vertex);
		for (var i = 0; i < graph[vertex].length ; i++) {
			if (!marked[graph[vertex][i]]) {
				dfsRec(graph[vertex][i]);
			}
		}
	}
	return dfsRec(start);
}

showGraph(graph2);
dfs(graph2, 0);

function pathTo(graph, source, vertex) {
	var obj = bfs(graph, source);
	var retStr = '';
	//console.log("Marked: " + obj.marked);
	//console.log("EdgeTo: " + obj.edgeTo);
	if (!obj.marked[vertex]) {
		return undefined;
	}
	var path = [];
	for (var i = vertex; i != source ; i = obj.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	while (path.length > 0) {
		if (path.length > 1) {
			retStr += path.pop() + '-';
		} else {
			retStr += path.pop();
		}
	}
	console.log(retStr);
}


//showGraph(graph2);
//pathTo(graph2, 0, 4);
