require 'rails_helper'

RSpec.describe "todos/new", type: :view do
  before(:each) do
    assign(:todo, Todo.new(
      :summary => "MyString",
      :description => "MyText",
      :status => 1,
      :user_id => 1,
      :project => nil
    ))
  end

  it "renders new todo form" do
    render

    assert_select "form[action=?][method=?]", todos_path, "post" do

      assert_select "input[name=?]", "todo[summary]"

      assert_select "textarea[name=?]", "todo[description]"

      assert_select "input[name=?]", "todo[status]"

      assert_select "input[name=?]", "todo[user_id]"

      assert_select "input[name=?]", "todo[project_id]"
    end
  end
end
