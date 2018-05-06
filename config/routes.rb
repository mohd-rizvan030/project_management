Rails.application.routes.draw do
  resources :todos
  resources :projects
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "projects#index"
  get 'welcome/index'
end
