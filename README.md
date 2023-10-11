# Sleep-Debt-Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

# Tasks

#1 The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day.

#2 The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.

#3 Test the function by calling it multiple times and printing the results to the console.

You can remove the tests when you know your function works.

#4 Now that you’ve written a function to get the sleep hours for each night, we need to do three things:

Get the total sleep hours that you actually slept

Get the ideal sleep hours that you prefer

Calculate the sleep debt, if any.

To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

#5 Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.
