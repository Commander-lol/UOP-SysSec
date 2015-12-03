var posts = [
    {
        title: "To the poster below me...",
        body: `Man, what a weirdo. Who talks about marrying software? Obviously it's never going to happen, so, like,
        why even bother?? I guess I just don't get this site, it's pretty much a ghost town lol. <em>But cats doe</em>
        <img src="http://lorempixel.com/g/600/200/cats" />`
    },
    {
        title: "FIRST!",
        body: `This is literally the best site I've ever come across. Literally. As in, dictionary definition of the word.
        Nothing compares to the glory and splendor of the pixels showing on my screen right now; the carefully chosen hues
        of red and navy blue, the subtle slide in of the posts as they appear on screen. If I could breach the digital divide
        and marry a piece of software, this would be the one I chose. But alas, it shan't ever be so. I weep. Such is life.`
    }
]

module.exports = {
    get posts () {
        return posts;
    },
    set posts(e) {
        posts.unshift(e);
    }
}
