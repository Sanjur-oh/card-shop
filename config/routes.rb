Rails.application.routes.draw do
  resources :cart_items
  resources :carts
  resources :user_shoes
  resources :shoes
  resources :users
  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'


  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "sign_up", to: "registrations#new"

end