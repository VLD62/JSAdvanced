function scoreToHTML(input){
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
    Object.keys(ojbArray).forEach(element => {
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
scoreToHTML([{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}])