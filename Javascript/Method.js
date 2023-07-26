// Methods are simply functions added as properties on objects

const myMath={
    PI:3.14,
    square(num){   // We call Method by using '.'operator
        // myMath.square(4)  OR myMath["cube"](4)
        return num*num;  
    },
    cube:function(num)  // This is also a valid syntax
    {
        return num**3;
    }

}