class CombinedArticle {

  constructor(articles) {
    this.a = articles[0];
    this.b = articles[1];
    this.c = articles[2];
  }

  get title() {
    return this.a.articleTitle;
  }

  get steps() {
    let steps = [].concat(...this.b.methods);
    let images = [].concat(...this.c.methodsImages);

    return steps.map((step, i) => {
      return {
        number: i + 1,
        content: step,
        image: images.pop()
      }
    });
  }
}

export default CombinedArticle;
