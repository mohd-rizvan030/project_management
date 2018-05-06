require 'rails_helper'

RSpec.describe "todos/index", type: :view do
  before(:each) do
    assign(:todos, [
      Todo.create!(
        :summary => "Summary",
        :description => "MyText",
        :status => 2,
        :user_id => 3,
        :project => nil
      ),
      Todo.create!(
        :summary => "Summary",
        :description => "MyText",
        :status => 2,
        :user_id => 3,
        :project => nil
      )
    ])
  end

  it "renders a list of todos" do
    render
    assert_select "tr>td", :text => "Summary".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
