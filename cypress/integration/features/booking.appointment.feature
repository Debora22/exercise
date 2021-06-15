Feature: Booking an appointment in Makespace

  Scenario: Makespace - Validate elements from the Nav Bar
  Given I'm at Makespace Platform
  Then "Bussiness Storage Link" is visible
  And "Features Link" is visible
  And "Log In Link" is visible
  And "Makespace icon" is visible

 Scenario: Makespace - Validate redirect to internal page
  Given I'm at Makespace Platform
  When I click on "Features Link"
  Then I'm redirected to internal "Features page"

  Scenario: Makespace - Booking an appointment
  Given I'm at Makespace Platform
  When I type "10038" on "Zip Code input"
  And I click on "Get Pricing button"
  And I click on "Walk in Closet - select plan button"
  And I type "4" on "bin input"
  And I click on "Continue with 5x5 button"
  Then "You’ve requested MakeSpace bins modal" is visible
  When I click on "Got it! button"
  And I click on "large items - yes option"
  And I click on "bulky items - yes option"
  And I click on "walk up items - yes option"
  And I click on "fragile items - yes option"
  And I click on "dessambly items - yes option"
  And I click on "Continue button"
  Then I'm redirected to internal "Chekout page"
  When I type "Juan Roldan" on "full name input"
  And I type "1111111111" on "phone number input"
  And I type "test@gmail.com" on "email input"
  And I click on "Are you currently an active member of the United States Armed Forces? - NO" with text "No"
  And I click on "Contact Information - continue button"
  And I type "123 William Street, New York, NY, USA" on "street address input"
  And I wait for 2000 ms
  And I select "123 William Street" from the street list
  And I type "22" on "Apt/Unit/Fl input"
  And the "Makespace Bags input" have the value "4"
  And I click on "Confirm and continue button"
  Then the "appointment address" contains the following "123 William St, 22"
  When I wait for 9000 ms
  And I click on "appointment date input"
  And I click on "29 day"
  And I click on "time selection"
  And I select first time available
  And I click on "Appointment and Date time - Confirm and Continue"
  And I wait for 2000 ms
  And I type "4111111111111111" on the card number input
  And I type "0123" on the date expiration input
  And I type "111" on the cvv input
  And I click on "AGREE TERMS" with text "I have read and agree"
  And I click on "Confirm and book my appointment button"
  And I wait for 3000 ms
  Then "error message" with text "Sorry, there was an unusual error. Try again, or feel free to give us a call!" is not visible
  
## It's not possible to book an appointment, so for that reason I force that the warning message should not be visible