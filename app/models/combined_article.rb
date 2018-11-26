class CombinedArticle
  include ActiveModel::Model

  def initialize(ids)
    articles = Article.where(id: ids)
    @a = articles[0]
    @b = articles[1]
    @c = articles[2]
  end

  def title
    @a.title
  end

  def sections
    secs = @a.headers
    steps_per = steps.length / secs.length
    steps_ary = steps
    images_ary = images

    secs.map.with_index do |section, i|
      {
        number: i + 1,
        header: section,
        steps: Array.new(steps_per.to_i) do |i|
          {
            number: i + 1,
            content: steps_ary.pop,
            image: images_ary.pop
          }
        end
      }
    end
  end

  def steps
    @steps ||= @b.steps
  end

  def images
    @images ||= @c.images
  end

end
