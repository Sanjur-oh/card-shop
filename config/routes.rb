Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"
  resources :shoe_reviews
  resources :reviews
  resources :user_shoes
  resources :shoes
  resources :users
  resources :sessions, only: [:create]

  # post 'password/forgot', to: 'password#forgot'
  # post 'password/reset', to: 'password#reset'
  
  # login/out and auth
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #Update user information
  patch 'user/update', to: "users#update"
 
  post "/reset", to: "passwords#reset"
  
  
  get "/cookie_click", to: 'sessions#click'
 
  # do i need this? is this complicating the home/index route
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end



  # route to test your configuration. but not sure if needed
  # get '/hello', to: 'application#hello_world'

  # needs work to get devise auth running
  # get 'home/index'
  #, to: 'home#index'
  # root 'home#index'