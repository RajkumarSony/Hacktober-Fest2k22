# print("Enter Marks Obtained in 5 Subjects: ")
# markOne = int(input())
# markTwo = int(input())
# markThree = int(input())
# markFour = int(input())
# markFive = int(input())

# tot = markOne+markTwo+markThree+markFour+markFive
# avg = tot/5

# if avg>=91 and avg<=100:
#     print("Your Grade is A1")
# elif avg>=81 and avg<91:
#     print("Your Grade is A2")
# elif avg>=71 and avg<81:
#     print("Your Grade is B1")
# elif avg>=61 and avg<71:
#     print("Your Grade is B2")
# elif avg>=51 and avg<61:
#     print("Your Grade is C1")
# elif avg>=41 and avg<51:
#     print("Your Grade is C2")
# elif avg>=33 and avg<41:
#     print("Your Grade is D")
# elif avg>=21 and avg<33:
#     print("Your Grade is E1")
# elif avg>=0 and avg<21:
#     print("Your Grade is E2")
# else:
#     print("Invalid Input!")
    
    
    
    
total_subjects = int(input("Enter the number of subjects: "))

marks = []
for i in range(total_subjects):
    subject_marks = int(input("Enter the marks in Subject {} = ".format(i+1)))
    marks += [subject_marks]

total_marks = sum(marks)
average = total_marks / total_subjects

if average >= 91 and average <= 100:
    print("Your Grade is A1")
elif average >= 81 and average < 91:
    print("Your Grade is A2")
elif average >= 71 and average < 81:
    print("Your Grade is B1")
elif average >= 61 and average < 71:
    print("Your Grade is B2")
elif average >= 51 and average < 61:
    print("Your Grade is C1")
elif average >= 41 and average < 51:
    print("Your Grade is C2")
elif average >= 33 and average < 41:
    print("Your Grade is D")
elif average >= 21 and average < 33:
    print("Your Grade is E1")
else:
    print("Your Grade is E2")
    
# by KD
