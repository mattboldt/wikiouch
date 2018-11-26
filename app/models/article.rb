require 'curb'

class Article
  API_URL = "https://www.wikihow.com/api.php?".freeze
  # These categories return incomplete pages
  BAD_CATS = ['Category:Stub', 'Category:Articles in Quality Review']

  def self.fetch(url)
    curl = Curl::Easy.http_get(url) do |c|
      c.follow_location = true
      c.max_redirects = 3
    end

    curl.body_str
  end

  def self.random_urls
    response = Article.random_pages
    active_pages = response.reject do |page|
      cats = page["categories"].present?
    end

    active_pages.map do |page|
      # render mobile view
      page["fullurl"].sub('www', 'm')
    end.take(3)
  end

  def self.random_pages(limit = 10)
    params = {
      action: 'query',
      generator: 'random',
      grnnamespace: 0,
      grnlimit: limit,
      prop: 'info|categories',
      inprop: 'url',
      redirects: true,
      # Only lists categories if they're bad
      clcategories: BAD_CATS.join('|'),
      format: 'json'
    }
    response = Curl.get(API_URL + params.to_query).body_str
    json = JSON.parse(response)
    json["query"]["pages"].values
  end

  # Category:Stub
  # Category:Articles in Quality Review

  # def title
  #   document.css('div#intro h1 a').text
  # end

  # def headers
  #   document_sections.flat_map do |section|
  #     section.css('span.mw-headline').text
  #   end.reject(&:blank?)
  # end

  # def steps
  #   document_sections.flat_map do |section|
  #     section.css('div.section_text ol li').flat_map do |step|
  #       step.css('div.step').to_s
  #     end
  #   end.reject(&:blank?)
  # end

  # def images
  #   document_sections.flat_map do |section|
  #     section.css('div.section_text ol li').flat_map do |step|
  #       img = step.css('div.mwimg img')
  #       img.attr('data-src').try(:text) if img.present?
  #     end
  #   end.reject(&:blank?)
  # end

  # private

  # def document
  #   @document ||= Nokogiri::HTML(open(url))
  # end

  # def document_sections
  #   @document_sections ||= document.css('div#bodycontents div.steps')
  # end
end
