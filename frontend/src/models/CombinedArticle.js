class CombinedArticle {

  constructor(articles) {
    this.a = articles[0];
    this.b = articles[1];
    this.c = articles[2];

    if (!this.a || !this.b || !this.c) {
      this.failed = true;
    }
  }

  get title() {
    return this.a.title;
  }

  get sections() {
    return this.a.sections;
  }

  get steps() {
    return this.b.steps;
  }

  get images() {
    return this.c.images;
  }

  get content() {
    if (this.failed) { return []; }

    let secs = this.sections;
    let steps = this.steps;
    let images = this.images;

    const secsCount = Math.max(secs.length, 1);
    const stepsPer = Math.max(Math.round(steps.length / secsCount), 1);
    const ary = Array.from({length: stepsPer}, (v, i) => i);

    return secs.map((section, si) => {
      return {
        number: si + 1,
        header: section,
        steps: ary.map((i) => {
          return {
            number: i + 1,
            content: steps.pop(),
            image: images.pop()
          }
        })
      }
    });
  }
}

export default CombinedArticle;
