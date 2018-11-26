class ArticlesController < ApplicationController
  def random
    render json: Article.random_urls
  end

  def show
    article = Article.fetch(params[:url])
    render body: article
  end
end
