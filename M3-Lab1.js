//1
var favMovies = ["Turning Red", "Napoleon Dynamite", "Howl's Moving Castle", "Grand Budapest Hotel", "Fantastic Mr. Fox"];
window.console.log("1. This is the second movie in the array: " + favMovies[1]);

//2
var movies = new Array(5);
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
window.console.log("2. This is the first movie in the array: " + movies[0]);

//3
movies = new Array(5);
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies.splice(2, 0, "James Bond: Skyfall");
window.console.log("3. After adding a movie into the third position of the array, this is the length of the array: " + movies.length);

//4
movies = [];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
delete movies[0];
window.console.log("4. After deleting the first movie, these are the contents of the array:\n" + movies[0] + "\n" + movies[1] + "\n" + movies[2] + "\n" + movies[3] + "\n" + movies[4]);

//5
movies = [];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
var out = "";
for (var movie in movies) {
    out = out + movies[movie] + "\n";
}
window.console.log("5. Here are the movies in the array using a for/in loop:\n" + out);

//6
movies = [];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
out = "";
for (var movie of movies) {
    out = out + movie + "\n";
}
window.console.log("6. Here are the movies in the array using a for/of loop:\n" + out);

//7
movies = [];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
movies.sort();
out = "";
for (var movie of movies) {
    out = out + movie + "\n";
}
window.console.log("7. Here are the movies in the array using a for/of loop after being sorted:\n" + out);

//8
movies = [];
var leastFavMovies = ["Toy Story", "Monsters, Inc.", "Elf"];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
out = "";
var out2 = "";
for (var movie in movies) {
    out = out + movies[movie] + "\n";
}
for (var movie in leastFavMovies) {
    out2 = out2 + leastFavMovies[movie] + "\n";
}
window.console.log("8. Here are the movies I like and don't like:\n");
window.console.log("Movies I like:\n\n" + out + "\n");
window.console.log("Movies I regret watching:\n\n" + out2 + "\n");

//9
movies = [];
leastFavMovies = ["Toy Story", "Monsters, Inc.", "Elf"];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
out = "";
for (var movie in movies) {
    out = out + movies[movie] + "\n";
}
window.console.log("9. Here are the arrays concatenated reverse sorted:\n" + out);

//10
movies = [];
leastFavMovies = ["Toy Story", "Monsters, Inc.", "Elf"];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
out = movies.pop();
window.console.log("10. Here is the last movie in the reverse sorted array:\n" + out);

//11
movies = [];
leastFavMovies = ["Toy Story", "Monsters, Inc.", "Elf"];
movies[0] = "Turning Red";
movies[1] = "Napoleon Dynamite";
movies[2] = "Howl's Moving Castle";
movies[3] = "Grand Budapest Hotel";
movies[4] = "Fantastic Mr. Fox";
movies[5] = "James Bond: Skyfall";
movies[6] = "The Wind Rises";
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
out = movies.shift();
window.console.log("11. Here is the first movie in the reverse sorted array:\n" + out);

//12
var removeIndeces = [];
var x;
for (var i = 0; i < leastFavMovies.length; i++) {
    x = movies.indexOf(leastFavMovies[i]);
    if (x != -1) {
        removeIndeces.push(x);
    }
}
movies[removeIndeces[0]] = "The Greatest Showman";
movies[removeIndeces[1]] = "Teenage Mutant Ninja Turtles: Mutant Mayhem";
movies[removeIndeces[2]] = "Star Wars: Empire Strikes Back";
out = "";
for (var movie in movies) {
    out = out + movies[movie] + "\n";
}
window.console.log("12. Here is the array of movies after replacing the ones I don't like: \n" + out);

//13
var moviesDimensional = [["Napoleon Dynamite", 1], ["Howl's Moving Castle", 2], ["Turning Red", 3], ["Grand Budapest Hotel", 4], ["Fantastic Mr. Fox", 5]];
var names = [];
moviesDimensional.forEach(function (obj) {
    "use strict";
    names.push(obj.filter(function (x) {
        "use strict";
        return typeof x === "string";
    }));
});
out = "";
for (var movie in names) {
    out = out + names[movie] + "\n";
}
console.log("13. Here are the names of my top 5 movies using filter():\n" + out);

//14
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
var showEmployee = function (arr) {
    var out = "";
    arr.forEach(function (emp) {
        out = out + emp + "\n";
    });
    return out.toUpperCase();
};
window.console.log("14. Here is the list of employees:\n");
window.console.log("Employees:\n\n" + showEmployee(employees));

//15
var filtered = function (arr) {
    return arr.filter(function (item) {
        if(item == false || item == null || item == 0 || item === "") {
            return false;
        } else {
            return true;
        }
    });
}
window.console.log("15. Here is the array [58, \'\', \'abcd\', true, null, false, 0] filtered: [" + filtered([58, '', 'abcd', true, null, false, 0]) + "]");

//16
var rnd = function (arr) {
    var index = Math.random() * arr.length;
    index = Math.floor(index);
    return arr[index];
}
window.console.log("16. Here is a random value from the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: " + rnd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//17
var findMax = function (arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
window.console.log("17. Here is the largest number is the array [5, 7, 1, 12, 4, 10]: " + findMax([5, 7, 1, 12, 4, 10]));