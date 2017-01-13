 // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


    // Array.prototype.filter()  // filter() loops through, performs a function and returns an array based on what evaluates true
//===================================================================================================================================================
    //-----------------------------------------------------------------------------------
    // 1. Filter the list of inventors for those who were born in the 1500's
    //-----------------------------------------------------------------------------------

    // const fifteen = inventors.filter(function(inventor) {
    //     if(inventor.year >= 1500 && inventor.year < 1600) {
    //         return true;   // Keep/Store this inventor in fifteen
    //     }
    // });
    //console.table(fifteen);    // Print the info in a table to the console


    //----------------------------------------------------------------------------------
    //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    //----------------------------------------------------------------------------------

    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.table(fifteen);

//===================================================================================================================================================

    // Array.prototype.map()  // map() loops through, performs a function and returns a new array of the same size
//===================================================================================================================================================
    //-----------------------------------------------------------------------------------
    // 2. Give us an array of the inventors' first and last names
    //-----------------------------------------------------------------------------------

    // const fullNames = inventors.map(function(inventor) {
    //     return inventor.first + " " + inventor.last;
    // });
    // console.log(fullNames);

    //----------------------------------------------------------------------------------
    //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    //----------------------------------------------------------------------------------

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); 
    console.log(fullNames);

//===================================================================================================================================================

    // Array.prototype.sort() // sort() goes through the array 2 at a time and places the elements in order of the returned 1 or -1
//===================================================================================================================================================
    //-----------------------------------------------------------------------------------
    // 3. Sort the inventors by birthdate, oldest to youngest
    //-----------------------------------------------------------------------------------

    // const ordered = inventors.sort(function(firstPerson, secondPerson) {
    //     if(firstPerson.year > secondPerson.year) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
    // console.table(ordered);

    //----------------------------------------------------------------------------------
    //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    //----------------------------------------------------------------------------------
    const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);   // Ternary operation 
    console.table(ordered);

//===================================================================================================================================================

    // Array.prototype.reduce() // reduce() uses an accumulator(counter) and reduces the array to this single value by using a function on each value of the array
//===================================================================================================================================================
    // 4. How many years did all the inventors live?

    // const totalYears = inventors.reduce(function(total, inventor) {
    //     return total + (inventor.passed - inventor.year);
    // }, 0); // 0 = inital value of the total counter
    // console.log(totalYears);

    //----------------------------------------------------------------------------------
    //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    //----------------------------------------------------------------------------------
    const totalYears = inventors.reduce((total, inventor) => {
         return total + (inventor.passed - inventor.year);
    }, 0);
    console.log(totalYears);

//===================================================================================================================================================
   
    // Array.prototype.sort()
//===================================================================================================================================================    
    //-----------------------------------------------------------------------------------
    // 5. Sort the inventors by years lived
    //-----------------------------------------------------------------------------------

    // const oldest = inventors.sort(function(a, b) {
    //     const lastGuy = a.passed - a.year;
    //     const nextGuy = b.passed - b.year;

    //     if(lastGuy > nextGuy){
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // });
    // console.table(oldest);

    //----------------------------------------------------------------------------------
    //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    //----------------------------------------------------------------------------------
    const oldest = inventors.sort(function(a, b) {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;

        return lastGuy > nextGuy ? -1 : 1; 
    });
    console.table(oldest);

//===================================================================================================================================================
    
    // Array.prototype.map()  Array.prototype.filter()
//===================================================================================================================================================
    //----------------------------------------------------------------------------------
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // Use the below code in the browser window on the page above
    //----------------------------------------------------------------------------------

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));  // Make an array from the category NodeList so you have access to map()
    // const de = links.map(function(link){ 
    //     return link.textContent;
    // });

    // const onlyDe = de.filter(function(streetName) {
    //     return streetName.includes('de');
    // });
    
    // //----------------------------------------------------------------------------------
    // //^^^^^^^^^^^^^^^^ Clean/Optimise the above code ^^^^^^^^^^^^^
    // //----------------------------------------------------------------------------------

    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));  // Make an array from the category NodeList so you have access to map()
    // const de = links
    //             .map(link => link.textContent) 
    //             .filter(streetName => streetName.includes('de'));    

//===================================================================================================================================================

    // Array.prototype.sort()
//===================================================================================================================================================
    //----------------------------------------------------------------------------------
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    //----------------------------------------------------------------------------------

    const alpha = people.sort(function(a, b) {
        const [aLast, aFirst] = a.split(', ');
        const [bLast, bFirst] = b.split(', ');
        return aLast > bLast ? 1 : -1
        });
        console.log(alpha);

//===================================================================================================================================================

    // Array.prototype.reduce()
//===================================================================================================================================================
    //----------------------------------------------------------------------------------
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    //----------------------------------------------------------------------------------

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item) { 
        if(!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    console.log(transportation);
//===================================================================================================================================================