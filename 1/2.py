contents = [line.rstrip('\n') for line in open('input')]

seen = set()
total = 0
index = 0

while True:
    total += int(contents[index])
    if total in seen:
        print(total)
        break
    seen.add(total)
    index += 1
    if index >= len(contents):
        index = 0
