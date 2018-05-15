require 'rails_helper'

RSpec.describe "todo_assignments/index", type: :view do
  before(:each) do
    assign(:todo_assignments, [
      TodoAssignment.create!(
        :user_id => 2,
        :todo => nil
      ),
      TodoAssignment.create!(
        :user_id => 2,
        :todo => nil
      )
    ])
  end

  it "renders a list of todo_assignments" do
    render
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
  end
end
