/*Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/

function createProject(d, programmingLanguage, gitRepository, status) {
    var p = {
        description: d,
        programmingLanguage: programmingLanguage,
        gitRepository: function () {
            console.log(gitRepository);
        },
        status: function () {
            if (status) {
                return "project is in development"
            }
            else {
                return "project is not in development"}

        },
        checkLanguage: function (programmingLanguage) {
            if (programmingLanguage === "javaScript") {
                return true}
        
            else {
               return false}
        }

    }
    return p;
}



var alex = createProject("bla", "javaScript", "https://github.com/Svemiliva/pp", true)

console.log(alex.status());