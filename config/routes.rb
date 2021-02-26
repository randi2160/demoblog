Rails.application.routes.draw do

  devise_for :authors
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root to: "home#index"
  scope module: 'authors' do
      resources :posts
  end 
  
    scope module: 'users' do
      resources :posts
  end
end