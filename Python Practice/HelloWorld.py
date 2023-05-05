import math

# firstName = "John"
# lastName = "Smith"
# age = 20
# isNewPatient = True 

# ##########################################################################
#strings as arrays inherently in py
characterName = "Diabetic Beluga"
print(characterName[8])
print(characterName[-2])
print(characterName[1:-1])
print(characterName[0:])
print(characterName[:])
print('#' * 30)

# ##########################################################################
#formatted strings in py + methods
archType1 = "Warrior"
specialization1 = "Guardian"
msg = f"Goyo is a {archType1} Archtype with a [{specialization1}] specialization. That means he's the tank dude..."
print(msg)
print(len(msg))
print(msg.upper())
print(msg.lower())
print(msg.title())
print(f"INDEX OF G: {msg.find('G')}")
print(msg.replace("tank", "on the frontline"))
print("Archtype" in msg)
print('#' * 30)

# ##########################################################################
#math functions in py YIPEEEEEEEEEEEEEEEEE ** 5
x = 2.9
print(round(x))
print(abs(-2.9))
print(math.ceil(x))
print(math.floor(x))

print('#' * 30)
# ##########################################################################
#if statements
negotiatedPrice = 1000000.00
creditScoreGood = True 
criminalRecord = False
downPayment = 0.0

if creditScoreGood: 
    downPayment = negotiatedPrice * 0.10
else: 
    downPayment = negotiatedPrice * 0.20

if creditScoreGood and not criminalRecord: 
    print("Eligible for loan")

print(f"Down Payment for Home is: ${downPayment}")

name = "Jacoby"

if len(name) < 3 :
    print("Name length must be at least 3 characters.")
elif len(name) > 50: 
    print("Name must be a maximum of 50 characters.")
else: 
    print("Your name is gucci!")

print('#' * 30)
# ##########################################################################
# welcomeMsg = "************Welcome to Goyo's Simple Addition Calculator. To use please input two numbers to add.**************"
# print(welcomeMsg.upper())
# num1 = float(input("Enter First Number: "))
# num2 = float(input("Enter Second Number: "))

# add = (num1, num2)
# result = sum(add)

# print("************SUM: " + str(result))

# ##########################################################################
# welcomeMsgWeight = "********welcome to Goyo's weight converter. to use type in your weight, followed by its unit of measurement.********"
# supportMsg = "Currently only supporting K(g) and (L)bs units, so type in K/k or L/l respectively."

# print(welcomeMsgWeight.upper())
# print(supportMsg)

# while True: 
#     try: 
#         weightInt = float(input("Please input your numerical weight: "))
#         weightUnit = input("(K)g or (L)bs : ")
#         break 
#     except ValueError: 
#         print("Invalid input please use only numbers or L/l and K/k for text.")

# convertedWeight = 0.00
# FORMULA_CONST = 0.45
# done = "finished"

# if weightUnit.upper() in ('K', 'KG', 'KGS'):
#     convertedWeight = weightInt / FORMULA_CONST
#     print(f"Your converted weight in (L)bs is: {convertedWeight}")
#     print(done.upper())
# elif weightUnit.upper() in ('L', 'LBS', 'LB'): 
#     convertedWeight = weightInt * FORMULA_CONST
#     print(f"Your converted weight in (K)gs is: {convertedWeight}")
#     print(done.upper())
# else: 
#     print(done.upper())

##########################################################################
numbers = [1,2,3,4,5]                                                    # A WHILE LOOP EQUIVALENT TO A for(int i =0; i <= numbers.length(); i++)
i = 0 
while i < len(numbers): 
    print(numbers[i])
    i += 1
print('#' * 30)
##########################################################################
classes = ["Monk", "Fighter", "Wizard", "Cleric", "Ranger", "Artificer"] #A LIST AKA AN ARRAY IN PY 
for c in classes: #EQUIVALENT OF A FOR STRING A: STRINGS in Java
    print(c)
print('#' * 30)

##########################################################################
archtypes = ("Warrior", "Magic Caster", "Rogue/Thief", "Clergy" ) # example of a tuple AKA an ENUM in Java
print(archtypes)
print('#' * 30)

