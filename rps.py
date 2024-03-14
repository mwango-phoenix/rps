import random

CHOICES = ['rock', 'paper', 'scissors']

def get_user_choice():
    while True:
        user_choice = input("Enter your turn (rock/paper/scissors): ").lower()
        if user_choice in CHOICES:
            return user_choice
        else:
            print("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.")

def get_computer_choice():
    return random.choice(CHOICES)

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return -1
    elif (user_choice == 'rock' and computer_choice == 'scissors') or \
         (user_choice == 'paper' and computer_choice == 'rock') or \
         (user_choice == 'scissors' and computer_choice == 'paper'):
        return 0
    else:
        return 1

def play_game():
    print("Let's play Rock, Paper, Scissors!")
    wins = {"computer": 0, "user": 0}
    while True: 
        number_of_turns = input("How many rounds?: ")
        if number_of_turns.isdigit() and int(number_of_turns) > 0:
            break
        else:
            print("Please enter a valid integer > 0.")
    for _ in range(int(number_of_turns)):
        user_choice = get_user_choice()
        computer_choice = get_computer_choice()
        print(f"You chose {user_choice}. Computer chose {computer_choice}.")
        result = determine_winner(user_choice, computer_choice)
        if result == 0:
            wins["user"] += 1
        elif result == 1:
            wins["computer"] += 1

    print(f"Final score: User {wins['user']} - {wins['computer']} Computer")

if __name__ == "__main__":
    play_game()
