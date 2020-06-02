function jsonTable(input){
    let htmlTable = '<table>'
    input.forEach(element => {
        htmlTable += '\n	<tr>\n';
        person = JSON.parse(element);
        Object.values(person).forEach(value => {
            htmlTable += `		<td>${value}</td>\n`; 
        });
        htmlTable += '	</tr>';       
    });
    htmlTable += '\n</table>';
    console.log(htmlTable);
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);
