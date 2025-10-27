function Calculator(){
    let a;
    let b;
    return {
        read(){
            while(parseInt(a) === NaN || this.a === undefined || this.a === null){
                this.a = prompt('Enter a value to calculate');
            }
            while(parseInt(this.b) === NaN || this.b === undefined || this.b === null){
                this.b = prompt('Enter another value to calculate')
            }
        },
        sum(){
        return (this.a + this.b);
        },
        mul(){
        return (this.a * this.b);
        }
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

