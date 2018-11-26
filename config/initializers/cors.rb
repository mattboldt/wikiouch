Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins %i(localhost:4200 wikiouch.com)
    resource '*',
      headers: :any,
      methods: %i(get)
  end
end
