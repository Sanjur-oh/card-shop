Rails.application.routes.draw do
  resources :cart_items
  resources :carts
  resources :user_shoes
  resources :shoes
  resources :users

  post 'password/forgot', to: 'password#forgot'
  post 'password/reset', to: 'password#reset'
  
  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "sign_up", to: "registrations#new"

end