class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.text :url, index: true, limit: 2100

      t.timestamps
    end
  end
end
