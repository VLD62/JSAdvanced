function result(input){
    let results = [];
    for (let element of input){
        let newRectangle = {
            width: element[0], 
            height: element[1], 
            area() {
                return this.width * this.height;
              },
            compareTo(other) {
                return other.area() - this.area() || other.width - this.width;
            }}
        results.push(newRectangle);
    }
    return results.sort((a, b) => a.compareTo(b));
}


function orderRectangles(input) {
    function createRect(width, height){
        let rect =  {
            width: width,
            height: height,
            area: function () {
               return rect.width * rect.height;
            },
            compareTo: function(other) {
                return other.area() - rect.area() || other.width - rect.width;
            }
        };

        return rect;
    }

    let rects = [];
    for(let [width, height] of input){
        rects.push(createRect(width, height));
    }

    let sortedRects = rects.sort((a, b) => a.compareTo(b));
    return sortedRects;
}
// let sizes = [[1,20],[20,1],[5,3],[5,3]];
// let ordered = orderRectangles(sizes)
// //console.log(orderRectangles(sizes))
// console.log(ordered[0].area())
// console.log(ordered[0].compareTo(ordered[1]))

let sizes = [[1,20],[20,1],[5,3],[5,3]];

let sortedRectangles = result(sizes);

console.log(sortedRectangles)


console.log(sortedRectangles[0].compareTo(sortedRectangles[1]))
console.log(sortedRectangles[1].compareTo(sortedRectangles[0]))

console.log(sortedRectangles[1].compareTo(sortedRectangles[2]))
console.log(sortedRectangles[2].compareTo(sortedRectangles[1]))

console.log(sortedRectangles[2].compareTo(sortedRectangles[3]))
console.log(sortedRectangles[2].compareTo(sortedRectangles[2]))


let sizes = [[1,20],[20,1],[5,3],[5,3]];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(4,'Returned array had incorrect Length!');

expect(sortedRectangles[0].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles[1].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles[2].compareTo).to.be.an.instanceOf(Function);

expect(sortedRectangles[0].compareTo(sortedRectangles[1])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles[1].compareTo(sortedRectangles[0])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles[1].compareTo(sortedRectangles[2])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles[2].compareTo(sortedRectangles[1])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles[2].compareTo(sortedRectangles[3])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles[2].compareTo(sortedRectangles[2])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');