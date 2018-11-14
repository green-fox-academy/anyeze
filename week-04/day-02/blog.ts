/*Blog
-Reuse your BlogPost class
-Create a Blog class which can
        * store a list of BlogPosts
        * add BlogPosts to the list
        * delete(int) one item at given index
        * update(int, BlogPost) one item at the given index and update it with another BlogPost*/


import { BlogPost } from "./blogpost"

class Blog {

    listOfBlogPost: BlogPost[] = [];

    addBlogPost(newBlogPost: BlogPost) {
        this.listOfBlogPost.push(newBlogPost);
    }
    deleteBlogPost(i: number) {
        this.listOfBlogPost.splice(i, 1);
    }
    updateBlogPost(i: number, newBlogPost: BlogPost) {
        this.listOfBlogPost.splice(i, 1, newBlogPost)
    }


}


function initializeBlogPost(): BlogPost[] {

    return [
        new BlogPost("István", "Hol", "Csiga-biga gyere ki", "2012.12.12"),
        new BlogPost("Pista", "Volt", "Ég a házad ideki", "2001.01.01"),
        new BlogPost("Pityu", "Hol", "kapsz tejet, vajat", "2002.02.22"),
        new BlogPost("Istike", "Nem", "holnapra is marad", "1995.09.05")
    ]
}

let listOfBlogPost = new Blog;

for (let i = 0; i < initializeBlogPost().length; i++) {

    listOfBlogPost.addBlogPost(initializeBlogPost()[i])

}

console.log(listOfBlogPost);
console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");

listOfBlogPost.deleteBlogPost(1);

console.log(listOfBlogPost);
console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");


