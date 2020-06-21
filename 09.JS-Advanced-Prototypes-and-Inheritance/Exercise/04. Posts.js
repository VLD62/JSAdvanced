function result(){
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title,content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length > 0) {
                result += "\nComments:"
                for (let comment of this.comments){
                    result += "\n * " + comment;
                }
            }
            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title,content, views) {
            super(title, content);
            this.views = views;
        }
        view(){
            this.views +=1
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}