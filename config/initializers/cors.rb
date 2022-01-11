Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins %i(localhost:4200 wikiouch.netlify.app)
    resource '*',
      headers: :any,
      methods: %i(get)
  end
end
