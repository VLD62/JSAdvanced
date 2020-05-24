function lastKNumbersSequence(n, k){
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let temp_sum = 0
        if (k > seq.length){
            for (let j =  0; j < seq.length; j++) {
                temp_sum += seq[j]
            }
        } else {
            for (let j = 1; j <= k; j++){
                temp_sum += seq[i-j]
            }
        }
        seq[i] = temp_sum
    }
    console.log(seq.join(" "))
}
lastKNumbersSequence(8, 2)