contents = [line.rstrip('\n') for line in open('input')]

total = 0

for value in contents:
    total += int(value)

print(total)
