function closedCalculator(calc) {
    return {
        add: function (addition) {
            calc = calc + addition
        },

        sub: function (subtraction) {
            calc = calc - subtraction
        },

        div: function (division) {
            calc = calc / division
        },

        mult: function (multiplication) {
          `  ${calc = calc * multiplication} `
        },
        getResult: function (){
            return calc
        }
    }
}

const first = closedCalculator(4);
first.add(33)
 first.sub(12);
first.div(2);
first.mult(4);
console.log(first.getResult())
