Rails.application.routes.draw do
  resources :todo_assignments
  resources :project_resources
  resources :todos
  resources :projects
  resources :users, only: %w(index show update create) do
    collection do
      get 'logged_in'
      post 'sign_in' => 'users#user_signin'
      post 'sign_up' => 'users#user_signup'
    end
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  root to: "projects#index"
  get 'welcome/index'
end
