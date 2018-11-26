require 'open-uri'
# require 'pry'

namespace :import do
  # task sitemap: :environment do
  #   file = open('lib/assets/wikihow_sitemap.xml')
  #   doc = Hash.from_xml(file.read)
  #   nodes = doc.first[1]["url"]
  #   urls = nodes.map { |n| { url: n["loc"] } }

  #   Article.import(urls)
  # end

  # task fetch_ids: :environment do
  #   all_ids = []
  #   puts "save json"

  #   titles = JSON.load(open('lib/assets/titles.json'))
  #   titles.in_groups_of(50) do |group|
  #     params = group.join('|')
  #     response = JSON.load(open("https://www.wikihow.com/api.php?action=query&format=json&titles=#{params}"))
  #     ids = response['query']['pages']
  #           .select { |k, v| v['pageid'] }
  #           .map { |k, v| k }

  #     all_ids += ids

  #     print "."
  #   end

  #   puts "done"

  #   file = File.open('./lib/assets/ids.json', 'w+')
  #   file.write(all_ids)
  # end

  # task :save_pages do
  #   ids = JSON.load(open('lib/assets/ids.json'))
  #   number = 14680
  #   length = ids.length

  #   puts "looping through ids"
  #   ids[number..length].each do |item|
  #     print "id: #{item} | last index: #{number}..."
  #     response = open("https://www.wikihow.com/api.php?action=articletext&format=json&aid=#{item}")

  #     # if JSON.parse(content)["error"].present?
  #     #   puts "  SKIP  "
  #     #   next
  #     # end

  #     number += 1
  #     IO.write("lib/assets/pages/#{number}.json", response.read)

  #     print '...sleeping...'
  #     sleep 1.second
  #     puts ' done'
  #   end
  # end
end

# https://www.wikihow.com/api.php?action=query&format=json&titles=Act-After-an-Earthquake|Crossplay
# https://www.wikihow.com/api.php?action=articletext&format=json&aid=1083156

