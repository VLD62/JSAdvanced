function fromJSONToHTMLTable(input){
    //Write your code here
    function escapeChars(str){
        return str.toString().replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let ojbArray = JSON.parse(input);
    let result = "<table>\n";
    result += "   <tr>";
    Object.keys(ojbArray[0]).forEach(element => {
        result += `<th>${element}</th>`;    
    });
    result += "</tr>\n";
    ojbArray.forEach(element => {
        result += "   <tr>"
        Object.values(element).forEach(value => {
            result += `<td>${escapeChars(value)}</td>`; 
        });
        result += "</tr>\n"
    });
    result += "</table>";    
    console.log(result);
}

console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));
