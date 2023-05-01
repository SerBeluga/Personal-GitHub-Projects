
welcomeMsg = "************Welcome to Goyo's Simple Addition Calculator. To use please input two numbers to add.**************"
print(welcomeMsg.upper())
num1 = float(input("Enter First Number: "))
num2 = float(input("Enter Second Number: "))

add = (num1, num2)
result = sum(add)

print("************SUM: " + str(result))


welcomeMsgWeight = "********welcome to Goyo's weight converter. to use type in your weight, followed by its unit of measurement.********"
supportMsg = "Currently only supporting K(g) and (L)bs units, so type in K/k or L/l respectively."

print(welcomeMsgWeight.upper())
print(supportMsg)

while True: 
    try: 
        weightInt = float(input("Please input your numerical weight: "))
        weightUnit = input("(K)g or (L)bs : ")
        break 
    except ValueError: 
        print("Invalid input please use only numbers or L/l and K/k for text.")

convertedWeight = 0.00
FORMULA_CONST = 0.45
done = "finished"

if weightUnit.upper() in ('K', 'KG', 'KGS'):
    convertedWeight = weightInt / FORMULA_CONST
    print(f"Your converted weight in (L)bs is: {convertedWeight}")
    print(done.upper())
elif weightUnit.upper() in ('L', 'LBS', 'LB'): 
    convertedWeight = weightInt * FORMULA_CONST
    print(f"Your converted weight in (K)gs is: {convertedWeight}")
    print(done.upper())
else: 
    print(done.upper())

numbers = [1,2,3,4,5]                                                    # A WHILE LOOP EQUIVALENT TO A for(int i =0; i <= numbers.length(); i++)
i = 0 
while i < len(numbers): 
    print(numbers[i])
    i += 1

classes = ["Monk", "Fighter", "Wizard", "Cleric", "Ranger", "Artificer"] #A LIST AKA AN ARRAY IN PY 
for c in classes: #EQUIVALENT OF A FOR STRING A: STRINGS in Java
    print(c)

archtypes = ("Warrior", "Magic Caster", "Rogue/Thief", "Clergy" ) # example of a tuple AKA an ENUM in Java

