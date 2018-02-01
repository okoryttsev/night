  @kiev
  Feature:
   kidstuff mall

    Background:
   Given loged to mall

    @kiev-log
    Scenario: View profile

      When I can go to profile
      Then I can view my profile
      And I can loged in


    @kiev-first
    Scenario: Go to first topic

      When I go to first topic
      Then I can view Майдан title
      And I can loged in


    @kiev-second
    Scenario: Go to second topic

      When I go to second topic
      Then I can some notes
      And I can loged in

