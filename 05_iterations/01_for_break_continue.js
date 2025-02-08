// for loop

// for (let index=0; index<=10; index++)
// {
//     const element = index;
//     console.log(element);
// }

// nested for loop
// for (let i=1; i<=10; i++)
// {
//     console.log(`Table of ${i}`);
//     for (let j=1; j<=10; j++)
//     {
//         console.log(i +" * "+j +" = "+i*j);
//     }
//     console.log("\n")
// }

let arr = ["Shiv","Rohit","Umesh","Sarthak","Meera Didi"]

// for (let index=0; index<arr.length; index++)
// {
//     console.log(arr[index]);    
// }

// break
// for (let index=0; index<=20; index++)
// {
//     if(index == 5)
//     {
//         console.log("5 detected")
//         break;
//     }
//     console.log(`Value of i = ${index}`)
// }

// continue => skip that condtion

for (let index=0; index<=20; index++)
    {
        if(index == 5)
        {
            console.log("5 detected, so it will be skiiped")
            continue;
        }
        console.log(`Value of i = ${index}`)
    }
    