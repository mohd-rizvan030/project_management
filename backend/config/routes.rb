Rails.application.routes.draw do
  # namespace :api, defaults: {format: 'json'} do
  #   namespace :v1 do
  resources :todo_assignments
  resources :project_resources
  resources :todos
  resources :projects
  resources :users, only: %w(index show update create) do
    collection do
      get 'logged_in'
      post 'sign_in' => 'users#user_signin'
      post 'sign_up' => 'users#user_signup'
      get 'logout' => 'users#logout'
    end
  end
  get 'get_project_resources' => 'projects#get_project_resources'
  get 'get_available_resources' => 'projects#available_resources'
  get 'remove_project_resource' => 'projects#remove_resource'
  devise_for :users
      # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #   end
  # end

  root to: "projects#index"
  get 'welcome/index'
end
