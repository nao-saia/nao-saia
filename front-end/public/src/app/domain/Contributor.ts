export class Contributor {
    name: string;
    description: string;
    github: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    image: string;

    constructor(name: string,
        description: string,
        github: string,
        instagram: string,
        facebook: string,
        linkedin: string,
        twitter: string,
        image: string) {
        this.name = name;
        this.description = description;
        this.github = github;
        this.instagram = instagram;
        this.facebook = facebook;
        this.linkedin = linkedin;
        this.twitter = twitter;
        this.image = image;
    }

}