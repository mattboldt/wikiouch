Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get :random, to: 'articles#random'
  get :articles, to: 'articles#show'
end
